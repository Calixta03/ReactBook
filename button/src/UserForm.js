import React, {Component} from 'react';
import { Media, Form, FormGroup, ControlLabel,FormControl, HelpBlock,Button} from 'react-bootstrap';


class UserForm extends Component {
  errorUsername;
  errorPassword;
    constructor(props) {
      super(props);
      this.errorUsername ='';
      this.errorPassword ='';
      this.state = {

          username:'',
          password:'',
          usernameTouched: false,
          passwordTouched: false
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleBlur =this.handleBlur.bind(this);
      this.handleSubmit =this.handleSubmit.bind(this);
    }
  
    getUserNameValidationState() {
      const length = this.state.username.length;

      if(this.state.usernameTouched){
      if (length === 0) {
        this.errorUsername = 'Username is required';
         return 'error';
      }
      else if (length <3){
        this.errorUsername = 'Username should be minimum 3 characters';
        return 'error';
      }
      else if (this.state.username.indexOf(' ') >= 0 ){
        this.errorUsername = 'Username cannot contain spaces';
        return 'error';
      }
      else {
        this.errorUsername = '';
        return 'success'
          }
        }
    }
    getPasswordValidationState() {
        const length = this.state.password.length;

        if(this.state.passwordTouched){
        if (length <3) return 'error';
      else  return 'success';
      }
    }

      handleBlur(e){
        const target =e.target; //which target triggered the onBlur event
        const name = target.name;
        this.setState({
          [name + 'Touched'] : true //we dont need a handleBlurUserName or handleBlurpassword
        });

      }
      
  
    handleChange(e) {
      const target = e.target;
      const value =target.value;
      const name =target.name;

      this.setState({
        [name] :value
      });
    }
    handleSubmit (event) {
      alert('User Name: ' + this.state.username
    + '\nPassword: ' + this.state.password);
     }

     canBeSubmitted() {
        return(
          this.state.usernameTouched && this.state.passwordTouched
          && this.errorUsername.length === 0 && this.errorPassword.length
          === 0
        );
     }
    render() {
      const isEnabled = this.canBeSubmitted(); //stores what is submitted fron canBeSubmited
      return (
        <form onSubmit = {this.handleSubmit}>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getUserNameValidationState()}
          >
            <ControlLabel>Username</ControlLabel>
            <FormControl
              name="username"
              type="text"
              value={this.state.username}
              placeholder="Enter Username"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
            />
            <FormControl.Feedback />
            { this.errorUsername.length >0 && this.state.usernameTouched &&
            <HelpBlock>{this.errorUsername}</HelpBlock>
            }
          </FormGroup>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getPasswordValidationState()}
          >
            <ControlLabel>Password</ControlLabel>
            <FormControl
              name="password"  
              type="password"
              value={this.state.value}
              placeholder="Enter password"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
            />
            <FormControl.Feedback />
            <HelpBlock></HelpBlock>
          </FormGroup>
          <Button type= "submit"> Submit </Button>
        </form>
      );
    }
  }
  
  export default UserForm;