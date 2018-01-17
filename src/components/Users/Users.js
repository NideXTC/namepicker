import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { add_user, edit_user, remove_user, delete_all_users } from '../../actions/users';
import '../../styles/button.css';
import '../../styles/input.css';


class Users extends Component {

  constructor() {
    super();
    this.addUser = this.addUser.bind(this);
  }

  addUser(e) {
    if (e.target.value.trim() !== '' && ((e.key && e.key === 'Enter') || !e.key)) {
      this.props.add_user(e.target.value);
      e.target.value = '';
    }
  }

  editUser(id, e) {
    if ((e.key && e.key === 'Enter') || !e.key) {
      if (e.target.value.trim() === '') {
        this.props.remove_user(id);
      } else {
        this.props.edit_user(id, e.target.value);
      }
    }

  }

  render() {
    return (
      <div>
        <div className="button-container">
          <button className="salmon" onClick={() => window.confirm('Are you sure ?') ? this.props.delete_all_users() : ''} >
            Delete all
          </button>
        </div>
        {this.props.users.list.map((user, index) =>
          <span key={index}>
            <input className="gate" id="class" type="text" onBlur={this.editUser.bind(this, index)} onKeyUp={this.editUser.bind(this, index)} placeholder="Toto ?" defaultValue={user} /><label htmlFor="class">Nom</label>
          </span>
        )}
        <span>
          <input className="gate" id="class" type="text" placeholder="Toto ?" onBlur={this.addUser} onKeyUp={this.addUser} /><label htmlFor="class">Nom</label>
        </span>
      </div>
    );
  }
}


export default connect(
  state => state,
  dispatch => bindActionCreators({ add_user, remove_user, edit_user, delete_all_users }, dispatch)
)(Users);