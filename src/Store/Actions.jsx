import { ADD_TODO, DELETE_TODO,EDIT_TODO } from "./Type";

export const addTask=(task)=>({   
        type:ADD_TODO,
        payload:task,  
})
export const deleteTask=(taskId)=>{
    return{
        type:DELETE_TODO,
        payload:taskId,
    }
}
export const editTask=(index,task)=>{
    return {
        type:EDIT_TODO,
        payload:{index, task}
    }
    
}