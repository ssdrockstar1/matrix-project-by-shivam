import React from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export class SignUp extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            firstname : "",
            email: "",
            password: "",
            mobile: "",
            selectedInDate: null,
            selectedOutDate: null,
            firstnameError: false,
            emailError: false,
            passwordError: false,
            mobileError: false,
            selectedInDateError: false,
            selectedOutDateError: false
        }
        this.validateForm = this.validateForm.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    validateForm(){
        const firstname = this.state.firstname;
        const email = this.state.email;
        const password = this.state.password;
        const mobile = this.state.mobile;
        const selectedInDate = this.state.selectedInDate;
        const selectedOutDate = this.state.selectedOutDate;

        if(firstname){
            this.setState({firstnameError: false})
        }else{
            this.setState({firstnameError: true})
        }

        if(email){
            this.setState({emailError: false})
        }else{
            this.setState({emailError: true})
        }

        if(password){
            this.setState({passwordError: false})
        }else{
            this.setState({passwordError: true})
        }

        if(mobile){
            this.setState({mobileError: false})
        }else{
            this.setState({mobileError: true})
        }

        if(selectedInDate){
            this.setState({selectedInDateError: false})
        }else{
            this.setState({selectedInDateError: true})
        }

        if(selectedOutDate){
            this.setState({selectedOutDateError: false})
        }else{
            this.setState({selectedOutDateError: true})
        }


        if(!this.state.firstnameError && !this.state.emailError && !this.state.passwordError && !this.state.mobileError){
        var signUpData = {
            firstname: firstname,
            email : email,
            password : password,
            mobile: mobile,
            selectedInDate: selectedInDate,
            selectedOutDate: selectedOutDate
        }
        console.log(signUpData);

        axios.post('http://localhost:3001/signup', signUpData)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        }else{
            alert('Please fill all the feilds');
        }
    }

    onChangeInput(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name] : value});
    }

    render(){
        return(
            <div className="container register-form">
            <div className="form">
                <div className="note">
                    <p>This is a simpleRegister Form</p>
                </div>

                <div className="form-content">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" name="firstname" placeholder="Your Name *" value={this.state.firstname} onChange ={(e) => this.onChangeInput(e)}/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="email" placeholder="Email" value={this.state.email} onChange ={(e) => this.onChangeInput(e)}/>
                            </div>
                            <div className="form-group">
                            <DatePicker selected={this.state.selectedInDate} onChange={date => this.setState({selectedInDate:date})} dateFormat='dd/MM/yyyy' isClearable/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="password" className="form-control" name ="password" placeholder="Your Password *" value={this.state.password} onChange ={(e) => this.onChangeInput(e)}/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="mobile" placeholder="Phone Number *" value={this.state.mobile} onChange ={(e) => this.onChangeInput(e)}/>
                            </div>
                            <div className="form-group">
                            <DatePicker selected={this.state.selectedOutDate}  onChange={date => this.setState({selectedOutDate:date})} dateFormat='dd/MM/yyyy' isClearable/>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btnSubmit" onClick = {this.validateForm}>Submit</button>
                </div>
            </div>
        </div>
        )
    }
}



