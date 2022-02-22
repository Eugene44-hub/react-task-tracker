import "./Main.css";
import { useState } from "react";
import Cards from "./components/cards/Cards";
function Main() {
  const [updateID,setUpdateID]=useState(null)
  const [tasks, setTasks] = useState([
    {
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt amet id esse, quasi placeat fuga soluta, fugit tenetur minus impedit provident rerum explicabo voluptatum dolores iste modi quod molestiae consectetur.",
      title: "Work",
      id: 1,
      date: "12/03/2022",
      reminder: true,
      req: false,
    },
    {
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt amet id esse, quasi placeat fuga soluta, fugit tenetur minus impedit provident rerum explicabo voluptatum dolores iste modi quod molestiae consectetur.",
      title: "school",
      id: 2,
      date: "13/03/2022",
      reminder: true,
      req: false,
    },
    {
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt amet id esse, quasi placeat fuga soluta, fugit tenetur minus impedit provident rerum explicabo voluptatum dolores iste modi quod molestiae consectetur.",
      title: "chores",
      id: 3,
      date: "14/03/2022",
      reminder: true,
      req: false,
    },
    {
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt amet id esse, quasi placeat fuga soluta, fugit tenetur minus impedit provident rerum explicabo voluptatum dolores iste modi quod molestiae consectetur.",
      title: "study",
      id: 4,
      date: "15/03/2022",
      reminder: true,
      req: false,
    },
    {
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt amet id esse, quasi placeat fuga soluta, fugit tenetur minus impedit provident rerum explicabo voluptatum dolores iste modi quod molestiae consectetur.",
      title: "Nap",
      id: 5,
      date: "16/03/2022",
      reminder: true,
      req: false,
    },
    {
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt amet id esse, quasi placeat fuga soluta, fugit tenetur minus impedit provident rerum explicabo voluptatum dolores iste modi quod molestiae consectetur.",
      title: "cook",
      id: 6,
      date: "17/03/2022",
      reminder: true,
      req: false,
    },
  ]);

  const addTask = (task) => {
    let id = Math.floor(Math.random() * 1000) + 1;

    const newTask = { ...task, id };

    setTasks([...tasks, newTask]);
  };

  const setToggle = (id) => {
    // console.log(id)
    const reminderUpdate = tasks.map((task) =>
      task.id == id ? { ...task, reminder: !task.reminder } : task
    );
    setTasks(reminderUpdate);
  };

  const displayReq = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id == id ? { ...task, req: !task.req } : { ...task, req: false }
      )
    );
  };
 
  const displayNone=()=>{
     setTasks(
        tasks.map((task) =>({ ...task, req: false } ))
      );
  }
 
  const deleteTask=(id)=>{
setTasks(tasks.filter(task=>task.id!==id))
  }

  const updateTask=(id)=>{
setUpdateID(id)
setTasks(tasks.map(task=>task.id===id?{...task,req:false}:{...task}))

  }


  const getUpdateTask=(updatedTask)=>{
    // console.log(updatedTask)
    let newTask=updatedTask
  setTasks(  tasks.map(task=>task.id===updateID?{...task,title:newTask.updateTitle,description:newTask.updateDescription,date:newTask.updateDate,req:false}:{...task}))
return updatedTask
  }
  // console.log(updateID);


  return (
    <div>
   
      <Cards
        tasks={tasks}
        addTask={addTask}
        onDoubleClick={setToggle}
        displayReq={displayReq}
        displayNone={displayNone}
        deleteTask={deleteTask}
        updateTask={updateTask}
        getUpdatedTask={getUpdateTask}
      />
    </div>
  );
}

export default Main;

// console.log(Array(9).fill(null))
