import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { add_task, edit_task, remove_task, delete_all_tasks } from '../../actions/tasks';
import '../../styles/button.css';
import '../../styles/input.css';


class Tasks extends Component {

  constructor() {
    super();
    this.addTask = this.addTask.bind(this);
  }

  addTask(e) {
    if (e.target.value.trim() !== '' && ((e.key && e.key === 'Enter') || !e.key)) {
      this.props.add_task(e.target.value);
      e.target.value = '';
    }
  }

  editTask(id, e) {
    if ((e.key && e.key === 'Enter') || !e.key) {
      if (e.target.value.trim() === '') {
        this.props.remove_task(id);
      } else {
        this.props.edit_task(id, e.target.value);
      }
    }

  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div className="button-container">
          <button className="salmon" onClick={() => window.confirm('Are you sure ?') ? this.props.delete_all_tasks() : ''} >
            Delete all
          </button>
        </div>
        {this.props.tasks.list.map((task, index) =>
          <span key={index}>
            <input className="gate" id="class" type="text" onBlur={this.editTask.bind(this, index)} onKeyUp={this.editTask.bind(this, index)} placeholder="Toto ?" defaultValue={task} /><label htmlFor="class">Nom</label>
          </span>
        )}
        <span>
          <input className="gate" id="class" type="text" placeholder="Toto ?" onBlur={this.addTask} onKeyUp={this.addTask} /><label htmlFor="class">Nom</label>
        </span>
      </div>
    );
  }
}


export default connect(
  state => state,
  dispatch => bindActionCreators({ add_task, edit_task, remove_task, delete_all_tasks }, dispatch)
)(Tasks);