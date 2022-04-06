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
    render() {
        return (
            <form>
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
                {this.state.name} <br/>
                {this.state.phone}
                </div>
                

            </form>
        );
    }
}

export default PhoneForm;