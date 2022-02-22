import React, { useState } from "react";
import Button from "../button/Button";
const TaskForm = ({ width, boxShadow,addTask}) => {
  const [title, setTitle] = useState("");
  const [reminder, setReminder] = useState(false);
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");


  
  const onSubmit = (e) => {
    e.preventDefault();
    const task={ title, reminder, date, description }

    title && date && description?addTask(task):alert("fill all fields")
  //  title?console.log(true):console.log(false);
   
    // console.log({ title, reminder, Date, description });

    setTitle("");
    setReminder(false);
    setDate("");
    setDescription("");
  };


  return (
    <form onSubmit={onSubmit}>
      <div style={{ marginTop: "20px" }}>
        <div>
          <label htmlFor="task" style={{ lineHeight: "3" }}>
            Add Task:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={date}
            onChange={(e) => setDate(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div style={{ padding: "20px 0" }}>
          <label htmlFor="reminder">Set Reminder</label>
          <input
            type="checkbox"
            checked={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
            style={{ width: "50%", height: "20px", float: "right" }}
          />
        </div>

        <Button color="black" width="100%" fontColor="white" text="save" type="submit" />
      </div>
    </form>
  );
};

export default TaskForm;

/* <button
          style={{
            backgroundColor: "black",
            width: "100%",
            color: "white",
            //   boxShadow: boxShadow,
            borderRadius: "10px",
          }}
        >
          Save
        </button> */
