import React from "react";

const Chart = ({
  type = "progress",
  label,
  value,
  max = 100,
  color = "primary",
  size = 100,
  thickness = 15,
  arraydata,
  col,
  chartheight = 250,
}) => {
  const percentage = Math.min((value / max) * 100, 100);
  const colorMap = {
    warning: "var(--warning)",
    secondary: "var(--secondary)",
    success: "var(--success)",
    forth: "var(--forth)",
    danger: "var(--danger)",
    info: "var(--info)",
    primary: "var(--primarytext)",
  };
  const chartColor = colorMap[color] || colorMap.primary;

  if (type === "bar") {
    // ---- Bar Chart ----
    return (
      <div className="w-full flex">
        <div className="w-5 py-8 flex justify-start">
          <div
            className="flex justify-between"
            style={{ flexDirection: "column", height: chartheight }}
          >
            {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
              .reverse()
              .map((num) => (
                <p key={num} className="mini-text text-right">
                  {num}
                </p>
              ))}
          </div>
        </div>
        <div className="w-95">
          <div
            className="gap-6 py-8 px-10 section_bg bordb bordl"
            style={{
              height: chartheight,
              display: "grid",
              gridTemplateColumns: `repeat(${col}, 1fr)`,
            }}
          >
            {arraydata.map((item, index) => {
              const percentage = (item.value / max) * 100;
              return (
                <div key={index} style={{ height: chartheight }}>
                  <div
                    className="rounded-5 overflow-hidden w-full flex items-end"
                    style={{
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: `${percentage}%`,
                        background: `${chartColor}`,
                        borderRadius: 4,
                        transition: "height 0.5s ease, background 0.5s ease",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="grid-cols-12 gap-6 px-10 mt-4">
            {arraydata?.map((e) => {
              return <p className="mini-text text-center w-full">{e?.month}</p>;
            })}
          </div>
        </div>
      </div>
    );
  } else if (type === "doughnut") {
    // ---- Doughnut Chart ----
    return (
      <div>
        <div
          className="relative flex justify-center items-center"
          style={{
            width: size,
            height: size,
          }}
        >
          <div
            className="relative rounded-full flex items-center justify-center"
            style={{
              width: size,
              height: size,
              background: `conic-gradient(${chartColor} ${
                percentage * 3.6
              }deg, var(--tertiary, #eee) 0deg)`,
              transition: "background 0.4s ease",
            }}
          >
            {/* Inner hollow circle */}
            <div
              className="absolute rounded-full"
              style={{
                width: size - thickness * 2,
                height: size - thickness * 2,
                background: "var(--white)",
              }}
            />
            {/* Percentage text */}
            <p className="absolute small-text font-semibold">
              {Math.round(percentage)}%
            </p>
          </div>
        </div>
        {label && <p className="small-text text-center mt-6">{label}</p>}
      </div>
    );
  } else if (type === "progress") {
    // ---- Progress Bar ----
    return (
      <div style={{ width: "100%" }}>
        {label && (
          <div className="flex items-center justify-between">
            <p className="mini-text">{label}</p>
            <p className="mini-text">{Math.round(percentage)}%</p>
          </div>
        )}
        <div
          className="rounded-5 overflow-hidden w-full bg-tertiary mt-2"
          style={{ height: 10 }}
        >
          <div
            style={{
              width: `${percentage}%`,
              height: "100%",
              background: chartColor,
              transition: "width 0.4s ease",
            }}
          />
        </div>
      </div>
    );
  }
};

export default Chart;
