import React, { useState } from "react";

const Feilds = ({
  type = "input",
  label,
  value,
  onChange,
  options = [],
  multiple = false,
  placeholder = "Enter",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return type === "input" ? (
    <div className="w-full">
      {label && <p className="small-text mb-4 text-gray">{label}</p>}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-input rounded-5 border-0 text-gray w-full"
      />
    </div>
  ) : (
    <div
      className="relative w-full bg-white rounded-5"
      tabIndex={0}
      onBlur={() => setTimeout(() => setIsOpen(false), 100)}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between px-10 cursor-pointer h-input rounded-5"
      >
        <p className="small-text text-gray">
          {multiple
            ? value.length
              ? value.join(", ")
              : "Select Options"
            : value || "Select Option"}
        </p>
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          stroke="gray"
          strokeWidth="2"
          fill="none"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      {isOpen && (
        <div
          className="absolute z-10 mt-4 w-full bg-white rounded-5 b-shadow overflow-auto"
          style={{ maxHeight: 145 }}
        >
          {options.map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-3 p-8 cursor-pointer small-text text-gray bordb"
            >
              <input
                type="checkbox"
                checked={multiple ? value.includes(opt) : value === opt}
                onChange={() =>
                  multiple
                    ? onChange(
                        value.includes(opt)
                          ? value.filter((v) => v !== opt)
                          : [...value, opt]
                      )
                    : (onChange(opt), setIsOpen(false))
                }
              />
              {opt}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Feilds;
