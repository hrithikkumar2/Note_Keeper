import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setnote] = useState([]);
  function addNote(newnote) {
    setnote((prevNotes) => {
      return [...prevNotes, newnote];
    });
    console.log(newnote);
  }
  function deleteNote(id) {
    setnote((prevNote) => {
      return prevNote.filter((noteItem, index) => {
        return index != id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
