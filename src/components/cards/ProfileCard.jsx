import React, { useState } from "react";
import "./profileCard.css";
import Button from "../button/Button";
import TaskForm from "../task-form/TaskForm";
import UpdateTask from "../task-form/UpdateTask";
const ProfileCard = ({addTask,updateForm,onUpdateForm,showForm,settingShowForm,closeUpdateForm,getUpdatedTask}) => {
// const [showForm,setShowForm]=useState("close")
  return (
    <div className="container">
      <div className="card-header">
        <h5> Report for: </h5>
        <h2> EUGENE ISHADO </h2>

     
      
{
  updateForm?(

   
    showForm=="close"?(
      <>
      <Button
          text={showForm}
          color="hsl(246, 80%, 60%)"
          fontColor="white"
          width="50%"
          boxShadow="4px 10px 20px purple"
          onClick={closeUpdateForm}
        />
      <UpdateTask
          width="90%"
          boxShadow="8px 8px 25px purple"
         getUpdatedTask={getUpdatedTask}
          addTask={addTask}
          boxShadow="4px 10px 20px purple"

  />
  </>
    ):(
      <>
   
   <Button
         text={showForm}
         color="hsl(246, 80%, 60%)"
         fontColor="white"
         width="50%"
         boxShadow="4px 10px 20px purple"
         onClick={settingShowForm}
       />

   <TaskForm
         width="90%"
         boxShadow="8px 8px 25px purple"
        
         addTask={addTask}
       />
       </>
    )
    
  
   
  ):(
  showForm=="close"?( 
    <>
   
    <Button
          text={showForm}
          color="hsl(246, 80%, 60%)"
          fontColor="white"
          width="50%"
          boxShadow="4px 10px 20px purple"
          onClick={settingShowForm }
        />

    <TaskForm
          width="90%"
          boxShadow="8px 8px 25px purple"
         
          addTask={addTask}
        />
        </>):
        ( 
          <Button
          text={showForm}
          color="hsl(246, 80%, 60%)"
          fontColor="white"
          width="50%"
          boxShadow="4px 10px 20px purple"
          onClick={settingShowForm}
        />
        ))
}
      
      </div>

      <div className="card-footer">
      <p style={{textAlign:"center"}}>Designed and Developed with ❤️ by Eugenics</p>
      </div>
    </div>
  );
};

export default ProfileCard;
