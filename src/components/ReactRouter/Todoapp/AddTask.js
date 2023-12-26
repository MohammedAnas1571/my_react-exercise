import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const addItem = () => {
    if (value.trim() !== "") {
      addTask(value);
      setValue("");
      setError("");
    } else {
      setError("Please enter Something.");
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={value}
        className="input"
        onChange={(e) => {
          setValue(e.target.value);
          setError("");
        }}
        placeholder="Please Add"
      />
      <button className="add-btn" onClick={addItem}>
        ADD
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default AddTask;
