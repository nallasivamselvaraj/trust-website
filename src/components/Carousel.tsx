import React, { useCallback, useEffect, useRef, useState } from "react";

type Props<T> = {
  items: T[];
  id: string;
  title?: string;
  renderCard: (item: T) => JSX.Element;
  single?: boolean; // when true, show one card per view (full width)
  controlsOutside?: boolean; // when true, place prev/next controls outside the carousel edges
};

function Carousel<T>({ items, id, title, renderCard, single = false, controlsOutside = false }: Props<T>) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const cardWidthRef = useRef<number>(0);
  const gapRef = useRef<number>(24);

  const measure = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const first = el.querySelector<HTMLElement>("article");
    if (!first) return;
    const style = window.getComputedStyle(el as Element);
    const gap = parseFloat(style.gap || (style as any).columnGap || "24") || 24;
    gapRef.current = gap;
    cardWidthRef.current = first.getBoundingClientRect().width + gapRef.current;
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const scrollTo = useCallback(
    (i: number) => {
      if (!ref.current) return;
      const left = Math.round(i * cardWidthRef.current);
      ref.current.scrollTo({ left, behavior: "smooth" });
      setIndex(i);
    },
    [setIndex]
  );

  const next = useCallback(() => {
    const max = items.length - 1;
    const nextIdx = index >= max ? 0 : index + 1;
    scrollTo(nextIdx);
  }, [index, items.length, scrollTo]);

  const prev = useCallback(() => {
    const max = items.length - 1;
    const prevIdx = index <= 0 ? max : index - 1;
    scrollTo(prevIdx);
  }, [index, items.length, scrollTo]);

  useEffect(() => {
    if (paused) return;
    const idt = window.setInterval(() => next(), 3500);
    return () => window.clearInterval(idt);
  }, [next, paused]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      if (!el) return;
      if (!cardWidthRef.current) measure();
      const i = Math.round((el.scrollLeft || 0) / (cardWidthRef.current || 1));
      raf = requestAnimationFrame(() => setIndex(i));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [measure]);

  const articleClass = single
    ? "snap-start flex-shrink-0 w-full"
    : "snap-start flex-shrink-0 w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2";

  const visibilityClasses = "transition-opacity opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100";

  const leftPos = controlsOutside
    ? "absolute left-0 -translate-x-12 top-1/2 -translate-y-1/2"
    : "absolute left-2 top-1/2 -translate-y-1/2";
  const rightPos = controlsOutside
    ? "absolute right-0 translate-x-12 top-1/2 -translate-y-1/2"
    : "absolute right-2 top-1/2 -translate-y-1/2";

  return (
    <div className="mb-8">
      {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}

      <div className="relative group overflow-visible">
        <button
          aria-label="Previous"
          onClick={prev}
          className={`${leftPos} z-10 p-3 rounded-full bg-muted/60 hover:bg-muted ${visibilityClasses}`}
        >
          ‹
        </button>

        <div
          ref={ref}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar px-2"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          tabIndex={0}
          aria-roledescription="carousel"
          aria-label={"carousel-" + id}
        >
          {items.map((it, idx) => (
            <article key={(it as any).id ?? idx} className={articleClass}>
              {renderCard(it)}
            </article>
          ))}
        </div>

        <button
          aria-label="Next"
          onClick={next}
          className={`${rightPos} z-10 p-3 rounded-full bg-muted/60 hover:bg-muted ${visibilityClasses}`}
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default Carousel;
