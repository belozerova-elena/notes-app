import React from "react";
import deleteIcon from "../../images/delete.svg";
import "./Note.scss";

function Note(props) {
  const formatDate = (value) => {
    if (!value) return "";

    const date = new Date(value);
    let day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return `${day}/${month+1}/${year}`;
  };

  const updateText = (text, id) => {
    props.updateText(text, id)
  };

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea
        className="note__text"
        defaultValue={props.note.text}
        onChange={(event) => updateText(event.target.value, props.note.id)}
      />
      <div className="note__footer">
        <p>{formatDate(props.note.time)}</p>
        <img
          className="note__footer-img"
          src={deleteIcon}
          alt="DELETE"
          onClick={() => props.deleteNote(props.note.id)}
        />
      </div>
    </div>
  );
}

export default Note;