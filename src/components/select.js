import React from "react";

const Select = (
  { options, valueKey, titleKey, allTitle, value, onSelect, matchingRoutes }
) => {
  function isDisabled(option) {
    return !matchingRoutes.find(r => {
      return (r.airline === option[valueKey]
             || r.src === option[valueKey]
             || r.dest === option[valueKey])
    });
  }

  return (
    <select onChange={onSelect} value={value}>
      <option value="-1">{allTitle}</option>
      {options.map(option => {
        return (
          <option key={option[valueKey]} value={option[valueKey]}
                  disabled={isDisabled(option)}>
            {option[titleKey]}
          </option>
        );
      })}
    </select>
  );
}

export default Select;
