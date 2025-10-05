import React from "react";

const Container = ({ children }) => {
  return (
    <div className="h-page overflow-auto w-full bg-tertiary">
      <div className="px-14 py-10">{children}</div>
    </div>
  );
};

export default Container;
