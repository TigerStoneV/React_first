// extends를 통해 rcc -component,  rsc -function component
import React, { Component } from 'react';

class PhoneForm extends Component {

    state = {
        name: "",
        phone: ""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault(); // 새로고침 방지.
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone : '',
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                name= 'name'
                placeholder='이름' 
                onChange = {this.handleChange} 
                value = {this.state.value}
                />
                <input
                name = 'phone'
                placeholder='전화번호' 
                onChange={this.handleChange}
                value = {this.state.phone}                
                />
                <div>
                    <button type ="submit">click</button>                 
                </div>
                

            </form>
        );
    }
}

export default PhoneForm;