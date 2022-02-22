import React from "react";
import "./card.css";
const Card = ({ color, backgroundImgColor, task ,onDoubleClick,displayReq,displayNone,deleteTask,updateForm,updateTask}) => {

const displayRequest=()=>{

  return task.req?"block":"none"
 
}

let test=displayRequest();

let updateTaskFunc=(id)=>{
  updateTask(id)
  updateForm()
}



  return (
    <div className="card">
    <div>
    <div
        className="card-header"
        id="card-header"
        style={{ backgroundColor: backgroundImgColor}}
      >
        
      </div>
      <div
        className={task.reminder?"card-remind":"card-content"}
       onDoubleClick={()=>onDoubleClick(task.id)}
        style={{
          // backgroundColor: color,
          borderRadius: "30px",
          padding: "15px",
          height:"250px",
          overflow:"hidden"
        }}
      >
        <div className="title" style={{display:"flex", justifyContent:"space-between", width:"100%"}}>
          <p>{task.title}</p> 
          <div>
          <div style={{ fontSize: "30px",transition:"all 1s",float:"right",cursor:"pointer"}}><span id="edit" onClick={()=>displayReq(task.id)}> ...</span>

          <div id="request" style={{position:"fixed",fontSize:"15px",backgroundColor:"grey",right:"0px",width:"20%",textAlign:"center",width:"30%"}}>
          <ul style={{listStyle:"none",padding:"0px",margin:"0px", cursor:"pointer",display:test}} >
            
            <li id="delete" onClick={()=>deleteTask(task.id)}  style={{padding:"10px",margin:"0px", borderBottom:"1px solid lightgrey"}}>
            delete
            </li>

            <li id="update"  style={{padding:"10px",margin:"0px"}} onClick={()=>updateTaskFunc(task.id)}>
           update
            </li>

          </ul>
        
          </div>
         
          </div>
          </div>
         
        </div>
        <div className="card-text" onClick={displayNone}>
          <p id="description">
          {task.description}
          </p>
        </div>
      </div>
    </div>
   
    </div>
  );
};

export default Card;
