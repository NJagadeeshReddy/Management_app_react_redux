
import React, { Component } from "react";
import AddTaskComponent from "./AddTaskComponent";
import "../../../styles/addTask.scss"

class AddTaskContainer extends Component {
  state = {
    createTask: false,
    editTaskIndex: null,
  };

  toggleCreateTask = () => {
    this.setState((prevState) => ({
      createTask: !prevState.createTask,
      editTaskIndex: null,
    }));
  };

  handleEdit = (index) => {
    this.setState({
      createTask: true,
      editTaskIndex: index,
    });
  };


  render() {
    const { tasks } = this.props
    const { createTask, editTaskIndex } = this.state;

    return (
      <AddTaskComponent
        tasks={tasks}
        createTask={createTask}
        editTaskIndex={editTaskIndex}
        toggleCreateTask={this.toggleCreateTask}
        handleEdit={this.handleEdit}

      />
    );
  }
}

export default (AddTaskContainer);
