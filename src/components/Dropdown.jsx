import React, { useState } from "react";
import "./dropdown.scss";

function Dropdown() {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(false);
  const options = ["Nam", "Nữ"];

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        <span className="dropdown-default">{selected || options[0]}</span>

        {!isActive ? (
          <i class="fa-solid fa-caret-down dropdown-icon"></i>
        ) : (
          <i class="fa-solid fa-caret-down dropdown-icon__rotate"></i>
        )}
      </div>
      {isActive && (
        <ul className="dropdown-content">
          {options.map((option) => (
            <li
              className="dropdown-item"
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
            >
              <div className="dropdown-item__manipulation">
                <span>{option}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
