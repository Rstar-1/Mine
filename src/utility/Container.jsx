import React from "react";

const Container = ({ children, status = true, version, style }) => {
  const getContainerClass = (version) => {
    switch (version) {
      case "v1":
        return "container2";
      case "v2":
        return "container3";
      case "v3":
        return "w-full";
      default:
        return "container";
    }
  };
  return (
    <>
      {status ? (
        <div className={style}>
          <div className={getContainerClass(version)}>{children}</div>
        </div>
      ) : (
        <div className={style}>{children}</div>
      )}
    </>
  );
};

export default Container;
