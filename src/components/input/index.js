import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const { label, typeInput, nameInput, placeholderInput, onChangeInputRow, onClickInput } = this.props
        return ( 
            <div className="form">
                <label style={{ paddingTop:15 }}>{label}</label>
                <input 
                    type={typeInput}
                    name={nameInput}
                    placeholder={placeholderInput}
                    onClick={onClickInput}
                    onChange={onChangeInputRow}
                    className ="form-content"
                />
                <div className="form-border"></div>
            </div>
         );
    }
}
 
export default Input;