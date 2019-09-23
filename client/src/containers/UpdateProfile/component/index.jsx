import React, { Component } from 'react';
import FormValidator from '../../../utils/FormValidator';
import { rules } from '../validationRules';
import { update } from '../action';
import { connect } from 'react-redux';
import './style.scss';

class UpdateProfile extends Component {
  constructor(props) {
    super(props);

    this.validator = new FormValidator(rules);

    const { user: { email, firstName, lastName } } = this.props;

    this.state = {
      email: email,
      newEmail: email,
      newName: `${firstName} ${lastName}`,
      validation: this.validator.createValidObj(),
      submitted: false,
      error: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { update } = this.props;

    this.setState((prevState) => ({
      ...prevState,
      validation: this.validator.validate(prevState),
      submitted: true,
    }));

    const { user: { email, _id } } = this.props;
    const { newEmail, newName } = this.state;
    const validation = this.validator.validate(this.state);

    const user = {
      _id,
      email,
      newEmail,
      newName,
    };

    if (validation.isValid) {
      update(user);
    }
  }

  render() {
    const { newName, newEmail, validation, submitted } = this.state;
    const validations = submitted ? this.validator.validate(this.state) : validation;

    return (
      <div className='updateProfile'>
        <div className='avatar' />
        <div className='full-name'>
          <div className='update-input-wrapper'>
            <div className={validations.newName.isInvalid ? 'has-error' : 'valid'}>
              <label htmlFor='name-input'>Name</label>
              <input
                type='text'
                id='name-input'
                placeholder='Ivan Baloh'
                value={newName}
                onChange={this.handleChange}
                name='newName'
              />
              <span className='help-block'>{validations.newName.message}</span>
            </div>
            <div className={validations.newEmail.isInvalid ? 'has-error' : 'valid'}>
              <label htmlFor='email-input'>Email</label>
              <input
                type='email'
                id='email-input'
                placeholder='johndoe@gmail.com'
                value={newEmail}
                onChange={this.handleChange}
                name='newEmail'
              />
              <span className='help-block'>{validations.newEmail.message}</span>
            </div>
          </div>
          <button
            type='button'
            className='update-profile-btn'
            onClick={this.handleSubmit}
          >Update Profile</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ login: { user } }) => ({
  user,
});

const actionCreators = {
  update,
};

const connectedUpdateProfile = connect(mapStateToProps, actionCreators)(UpdateProfile);

export { connectedUpdateProfile as UpdateProfile };
