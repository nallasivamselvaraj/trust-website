import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const PageGrid = ({ children, className = "" }: Props) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ${className}`}>
      {children}
    </div>
  );
};

export default PageGrid;
