import React, { useState } from "react";
import Card from "./Card";
import ProfileCard from "./ProfileCard";
import "./cards.css";
const Cards = ({addTask,tasks,onDoubleClick,displayReq,displayNone,deleteTask,updateTask,getUpdatedTask}) => {
  let colors=[ "hsl(15, 100%, 70%)",
  "hsl(195, 74%, 62%)",
   "hsl(348, 100%, 68%)",
    "hsl(145, 58%, 55%)",
    "hsl(264, 64%, 52%)",
    "hsl(43, 84%, 65%)"
   ]

const [updateForm,setUpdateForm]=useState(false)
const [showForm,setShowForm]=useState("close")
  const onUpdateForm=()=>{
    setUpdateForm(true)
    setShowForm("close")

  }
    
  
  const settingShowForm=()=>{
    setShowForm(showForm=="Add Task"?"close":"Add Task")
  }
 const closeUpdateForm=()=>{
setUpdateForm(false)
 }

  return (
    <div className="cards">
      <ProfileCard addTask={addTask} updateForm={updateForm} onUpdateForm={onUpdateForm} showForm={showForm} settingShowForm={settingShowForm} closeUpdateForm={closeUpdateForm} getUpdatedTask={getUpdatedTask}/>
      <div className="cards-container" >

      {tasks.length==0?<h1 style={{color:"white",textALign:"center"}}>No Tasks</h1>:(
        tasks.map(task=>(  <Card
          color="hsl(235, 46%, 20%)"
          image=""
          backgroundImgColor={colors[Math.floor(Math.random()*colors.length)+1]}
          task={task}
          onDoubleClick={onDoubleClick}
          key={task.id}
        displayReq={displayReq}
        displayNone={displayNone}
        deleteTask={deleteTask}
        updateForm={onUpdateForm}
        updateTask={updateTask}
        // showForm={settingShowForm}
        // closeUpdate={()=>setUpdateForm(false)}
        />))
      )}
    
      
      
      </div>
    </div>
  );
};

export default Cards;
