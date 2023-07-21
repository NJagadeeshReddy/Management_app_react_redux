import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask, editTask,deleteTask } from "../../../Store/Actions";
import TaskFormComponent from "./TaskFormComponent";

const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => dispatch(addTask(task)),
  editTask: (index, task) => dispatch(editTask(index, task)),
  deleteTask: (index) => dispatch(deleteTask(index)),
});
class TaskFormContainer extends Component {
  state = {
    title: "",
    content: "",
    error: "",
  };

  componentDidMount() {
    const { task } = this.props;
    if (task) {
      this.setState({
        title: task.title,
        content: task.content,
      });
    }
  }
  
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = () => {
    const { title, content} = this.state;
    const { isNewTask,toggleCreateTask,editTaskIndex, addTask, editTask } = this.props;
    if (title.trim() === "" || content.trim() === "") {
      this.setState({
        error: "Please enter the required fields",
      });
      return;
    }

    const newTask = {
      title,
      content,
    };

    if (isNewTask) {
      addTask(newTask);
    } else {
      console.log(editTaskIndex)
      editTask(editTaskIndex,newTask);
    }

    this.setState({
      title: "",
      content: "",
      error: "",
    });

    toggleCreateTask();
  };

  render() {
    const { title, content, error } = this.state;
    const { isNewTask, toggleCreateTask } = this.props;
    return (
      <TaskFormComponent
        {...this.props}
        title={title}
        content={content}
        error={error}
        toggleCreateTask={toggleCreateTask}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        isNewTask={isNewTask}
      />
    );
  }
}

export default connect(null, mapDispatchToProps)(TaskFormContainer);
