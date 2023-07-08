import React, { useState } from "react";
import "./Control.scss";

function Control(props) {
  const colors = ["#ffefe7", "#ffefce", "#ffba93", "#ffb9ad", "#01e8c8"];
  const [listOpen, setListOpen] = useState(false);

  return (
    <div className="control">
      <h2 className="control__title">Notes</h2>
      <div className="control__wrapper">
        <div className={`control__wrapper-toggle ${listOpen ? "active" : ""}`} onClick={() => setListOpen(!listOpen)}></div>
        <ul className={`control__wrapper-toggle--list ${listOpen ? "active" : ""}`}>
          {colors.map((item, index) => (
            <li
              key={index}
              className="control__wrapper-toggle--list-item"
              style={{ backgroundColor: item }}
              onClick={() => props.addNote(item)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Control;