import React from "react";

const Table = ({
  bg = "primary",
  color = "white",
  border = "forth",
  textalign = "left",
  header,
  arraydata,
}) => {
  const colorMap = {
    warning: "var(--warning)",
    secondary: "var(--secondary)",
    success: "var(--success)",
    forth: "var(--forth)",
    danger: "var(--danger)",
    white: "var(--white)",
    gray: "var(--gray)",
    info: "var(--info)",
    primary: "var(--primarytext)",
  };
  const bgColor = colorMap[bg] || colorMap.primary;
  const textColor = colorMap[color] || colorMap.primary;
  const borderColor = colorMap[border] || colorMap.primary;
  return (
    <div className="mt-8 table-w">
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
                    minWidth: "170px",
                  }}
                  key={index}
                  className="py-8 px-12 border-0"
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
              {header.map((head, colIndex) => {
                const key = head.name.toLowerCase();
                return (
                  <td
                    key={colIndex}
                    style={{
                      borderRight: `1px solid ${borderColor}`,
                      borderLeft: `1px solid ${borderColor}`,
                      borderBottom: `1px solid ${borderColor}`,
                      minWidth: "170px",
                    }}
                    className={`py-8 px-12 text-${textalign}`}
                  >
                    <p className="mini-text text-gray">{row[key] || "--"}</p>
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
