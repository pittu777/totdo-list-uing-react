import React from "react";
import { useState } from "react";
import "./index.css";

export function NameList({ names }) {
  const [nameInput, setNameInput] = useState("");
  const [nameList, setNameList] = useState(names);
  const [count, setCount] = useState(0);
  const [inputError, setInputError] = useState(false);
  const [filterText, setFilterText] = useState("");

  console.log(nameInput);
  console.log(nameList);
  console.log(count);

  function handleInputChange(event) {
    const inputValue = event.target.value;
    if (inputValue.length <= 30) {
      setNameInput(inputValue);
      setInputError(false);
    } else {
      setInputError(true);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (nameInput.trim() !== "" && nameInput.trim() !== ".") {
      setNameList([...nameList, nameInput]);
      setNameInput("");
      setCount(count + 1);
      setInputError(false);
    }
  }

  function handleDelete(index) {
    const filteredNames = nameList.filter((name) =>
      name.toLowerCase().includes(filterText.toLowerCase())
    );
    if (filteredNames.length > 0) {
      const updatedNames = [...nameList];
      const originalIndex = nameList.indexOf(filteredNames[index]);
      updatedNames.splice(originalIndex, 1);
      setNameList(updatedNames);
      setCount(count - 1);
    }
  }

  function DeleteAll() {
    setNameList([]);
    setCount(0);
  }

  function handleFilterChange(event) {
    setFilterText(event.target.value);
  }

  const filteredNames = nameList.filter((name) =>
    name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="container">
      <h4 className="total-names">Total Names: {count}</h4>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nameInput}
          onChange={handleInputChange}
          placeholder="Write Here (Max 30 Char)"
          className="name-input"
        />

        <input
          type="text"
          value={filterText}
          onChange={handleFilterChange}
          placeholder="Search names (Filter Names)"
          className="name-input"
        />

        {inputError && <p className="error">more than 30 char not allowed!</p>}
        <button type="submit" className="add-button">
          Add
        </button>
      </form>

      <button onClick={DeleteAll} className="delete-all-button">
        Delete All
      </button>

      {filteredNames.length === 0 ? (
        <p className="no-names-message">
          {nameList.length === 0 ? "NO DATA" : "NO MATCHING NAMES FOUND"}
        </p>
      ) : (
        <ul className="name-list">
          {filteredNames.map((name, index) => {
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
      )}
    </div>
  );
}
