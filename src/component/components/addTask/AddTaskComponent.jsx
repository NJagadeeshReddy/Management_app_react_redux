
import React, { Component } from "react";
import TaskFormContainer from "../TaskForm/TaskFormContainer";
import { connect } from "react-redux";
import { addTask, deleteTask, editTask } from "../../../Store/Actions";

class AddTaskComponent extends Component {
  handleDelete = (index) => {
    this.props.deleteTask(index);
  };
  render() {
    const { tasks } = this.props;
    const { createTask, editTaskIndex, toggleCreateTask, handleEdit } = this.props
    return (

      <div>
        <div className="header">
          <h2> <i>Task Management App</i> </h2>
          <button className="addtask-btn" onClick={toggleCreateTask}>
            Create Task
          </button>
        </div>
        {createTask && (
          <TaskFormContainer
            editTaskIndex={editTaskIndex}
            isNewTask={editTaskIndex === null}
            task={editTaskIndex !== null ? tasks[editTaskIndex] : null}
            toggleCreateTask={toggleCreateTask}

          />
        )}
        <div>
        {tasks.map((task, index) => (
            <div className="item" key={index}>
                  <div className="item-head">
                    Title: {task.title}
                  <p>Content: {task.content}</p>
                  </div>
                 <div className="btn"> 
                 <button className="btn-edit" onClick={() => handleEdit(index)}>Edt</button>
                  <button className="btn-delete" onClick={() => this.handleDelete(index)}>Del</button>
                 </div>
                  
            </div>
          ))}
        </div>

   
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  tasks: state.tasks,
});
const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => dispatch(addTask(task)),
  editTask: (index, task) => dispatch(editTask(index, task)),
  deleteTask: (index) => dispatch(deleteTask(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskComponent);
