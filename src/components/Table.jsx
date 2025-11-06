import React from "react";

const Table = ({
  bg = "primary",
  color = "white",
  border = "forth",
  textalign = "left",
  header,
  arraydata = [],
}) => {
  const colorMap = {
    warning: "var(--warning)",
    secondary: "var(--secondary)",
    success: "var(--success)",
    tertiary: "var(--tertiary)",
    forth: "var(--forth)",
    danger: "var(--danger)",
    white: "var(--white)",
    gray: "var(--gray)",
    info: "var(--info)",
    dark: "var(--dark)",
    primary: "var(--primarytext)",
    transparent: "transparent",
  };
  const bgColor = colorMap[bg] || colorMap.primary;
  const textColor = colorMap[color] || colorMap.primary;
  const borderColor = colorMap[border] || colorMap.primary;
  return (
    <div className="table-w">
      <table className="table">
        <thead>
          <tr>
            {header?.map((head, index) => {
              return (
                <th
                  style={{
                    background: `${bgColor}`,
                    borderTop: `1px solid ${bgColor} !important`,
                    borderRight: `1px solid ${bgColor} !important`,
                    borderLeft: `1px solid ${bgColor} !important`,
                    color: `${textColor}`,
                    minWidth: "130px",
                  }}
                  key={index}
                  className="py-10 px-12 border-0"
                >
                  <p className={`small-text text-${textalign}`}>{head?.name}</p>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {arraydata.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {header.map((h, j) => {
                const v = row[h?.feilds?.toLowerCase()];
                const val = Array.isArray(v)
                  ? v.join(", ")
                  : typeof v === "boolean"
                  ? v
                    ? "Active"
                    : "Inactive"
                  : v || "--";
                return (
                  <td
                    key={j}
                    style={{
                      borderRight: `1px solid #ececec`,
                      borderLeft: `1px solid #ececec`,
                      borderBottom: `1px solid #ececec`,
                      minWidth: "130px",
                    }}
                    className={`py-10 px-12 text-${textalign}`}
                  >
                    <p className="mini-text text-gray">{val}</p>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
