import React, { Component } from 'react';
import Input from '../input'
import './style.css'

class RowInput extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { label, type, name, onChangeInput, placeholder } = this.props
        return ( 
            <div>
                <Input label={label} typeInput={type} nameInput={name} placeholderInput={placeholder} onChangeInputRow={onChangeInput} />
            </div>
         );
    }
}
 
export default RowInput;