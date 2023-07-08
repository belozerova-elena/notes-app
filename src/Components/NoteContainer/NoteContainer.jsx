import React from "react";
import Note from "../Note/Note";
import "./NoteContainer.scss";

function NoteContainer(props) {

  const reverArray = (arr) => {
    const array = [];
    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }
    return array;
  };

  const notes = reverArray(props.notes);

  return (
    <div className="note-container">
      <div className="note-container__notes">
        {notes?.length > 0 ? (
          notes.map((item) => (
            <Note
              key={item.id}
              note={item}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
            />
          ))
        ) : (
          <h3>It's empty here</h3>
        )}
      </div>
    </div>
  );
}

export default NoteContainer;