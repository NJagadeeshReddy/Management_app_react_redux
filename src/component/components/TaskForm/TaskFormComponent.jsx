import React, { PureComponent } from "react";

class TaskFormComponent extends PureComponent {
  render() {
    const { title, content, error, toggleCreateTask, handleChange, handleSubmit, isNewTask } = this.props;
    return (
      <div className="wrapper">
        <div className="container">
          <h1 className="Title"><i><u>{isNewTask ? "New Task" : "Edit Task"}</u></i></h1>
          {error && <p style={{ color: "red" }} className="error-message">{error}</p>}
          <p>Title</p>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </div>
        <div className="container">
          <p>Content</p>
          <input
            type="text"
            id="content"
            name="content"
            value={content}
            onChange={handleChange}
          />
        </div>
        <div className="btn">
          <button className="btn-save" onClick={handleSubmit}>
            {isNewTask ? "Save" : "Update"}
          </button>
          <button className="btn-close" onClick={toggleCreateTask}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default TaskFormComponent;
