import React from "react";
import { useState } from "react";
import "./index.css";

export function NameList({ names }) {
  const [nameInput, setNameInput] = useState("");
  const [nameList, setNameList] = useState(names);
  const [count, setCount] = useState(0);

  console.log(nameInput);
  console.log(nameList);
  console.log(count);

  function handleInputChange(event) {
    const inputValue = event.target.value;
    if (inputValue.length <= 30) {
      setNameInput(inputValue);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (nameInput.trim() !== "" && nameInput.trim() !== ".") {
      setNameList([...nameList, nameInput]);
      setNameInput("");
      setCount(count + 1);
    }
  }
  function handleDelete(index) {
    setNameList(nameList.filter((_, i) => i !== index));
    setCount(count - 1);
  }
  function DeleteAll() {
    setNameList([]);
    setCount(0);
  }

  return (
    <div className="container">
      <h2 className="total-names">Total Names: {count}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nameInput}
          onChange={handleInputChange}
          placeholder="Write Here (Max 30 Char)"
          className="name-input"
        />
        <button type="submit" className="add-button">
          Add
        </button>
        <button onClick={DeleteAll} className="delete-all-button">
          Delete All
        </button>

        {nameList.length > 0 ? (
          <ul className="name-list">
            {nameList.map((name, index) => {
              console.log(name);
              return (
                <div key={index} className="name-item">
                  <li>{name}</li>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </ul>
        ) : (
          <p className="no-names-message">NO DATA</p>
        )}
      </form>
    </div>
  );
}
