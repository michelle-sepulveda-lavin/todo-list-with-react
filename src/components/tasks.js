import React from 'react';

const Tasks = ({taskList, deleteTask}) =>{
    return(
        <>
            <div className="row">
                <div className="col-12">
                    <ul className="col-8 m-auto">
                        {taskList.length === 0? <li id="noTask" >No tasks, add a task!</li> : taskList.map((item, index)=>{
                            return <li key={index} id={index} onClick={()=>{deleteTask(index)}}>{item.label}</li>
                        }) }
                    </ul>
                </div>
            </div>
        </>
    )
};

export default Tasks;