import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { shuffle_users } from '../../actions/users';
import './Shuffle.css';
import '../../styles/button.css';

class Shuffle extends Component {
 
  render() {
    const { shuffle_users, tasks, users } = this.props;
    return (
      <div>
        <div className="button-container">
          <button className="alge" onClick={() => shuffle_users()}>
            <i className="fa fa-random" aria-hidden="true"></i>
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Tâche</th>
              <th>Nom</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) =>
              <tr key={index}>
                <td>{index + 1}/ {task} </td>
                <td>{users[index]}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}


export default connect(
  state => {
    return {
      users: state.users.list,
      tasks: state.tasks.list
    };
  },
  dispatch => bindActionCreators({ shuffle_users }, dispatch)
)(Shuffle);