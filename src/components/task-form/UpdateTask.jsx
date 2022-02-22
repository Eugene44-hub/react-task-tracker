import React, { useState } from "react";
import Button from "../button/Button";

const UpdateTask = ({ width, boxShadow, addTask, getUpdatedTask }) => {
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateDate, setUpdateDate] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    let updatedTask = { updateTitle, updateDate, updateDescription };

    getUpdatedTask(updatedTask);
    setUpdateTitle("")
    setUpdateDate("")
    setUpdateDescription("")
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 style={{ textAlign: "center", textTransform: "uppercase" }}>
        updateTask
      </h2>
      <div style={{ marginTop: "20px" }}>
        <div>
          <label htmlFor="task" style={{ lineHeight: "3" }}>
            Task:
          </label>
          <input
            type="text"
            value={updateTitle}
            onChange={(e) => setUpdateTitle(e.target.value)}
            style={{
              outline: "none",
              width: width,
              padding: "20px",
              border: "none",
              borderRadius: "15px",
              boxShadow: boxShadow,
            }}
          />
        </div>

        <div>
          <label htmlFor="date" style={{ lineHeight: "3" }}>
            Date:
          </label>
          <input
            type="date"
            value={updateDate}
            onChange={(e) => setUpdateDate(e.target.value)}
            style={{
              outline: "none",
              width: width,
              padding: "20px",
              border: "none",
              borderRadius: "15px",
              boxShadow: boxShadow,
            }}
          />
        </div>

        <div style={{ marginTop: "50px" }}>
          <label htmlFor="description" style={{ lineHeight: "2" }}>
            Description:
          </label>
          <textarea
            name="description"
            id="description"
            value={updateDescription}
            onChange={(e) => setUpdateDescription(e.target.value)}
          ></textarea>
        </div>

        <Button
          color="black"
          width="100%"
          fontColor="white"
          text="save"
          type="submit"
        />
      </div>
    </form>
  );
};

export default UpdateTask;
