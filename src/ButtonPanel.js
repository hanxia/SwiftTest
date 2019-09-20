
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './ButtonPanel.css'

export default class ButtonPanel extends React.Component {
    static propTypes = {
        clickHandler: PropTypes.func,
    };

    clickHandler = buttonName => {
        this.props.clickHandler(buttonName);
    }

    render() {
        return (
            <div className='component-button-panel'>
                <div>
                    <Button name='AC' clickHandler={this.clickHandler}></Button>
                    <Button name='+/-' clickHandler={this.clickHandler}></Button>
                    <Button name='%' clickHandler={this.clickHandler}></Button>
                    <Button name='÷' clickHandler={this.clickHandler}></Button>
                </div>
                <div>
                    <Button name="7" clickHandler={this.clickHandler} />
                    <Button name="8" clickHandler={this.clickHandler} />
                    <Button name="9" clickHandler={this.clickHandler} />
                    <Button name="x" clickHandler={this.clickHandler} orange />
                </div>
                <div>
                    <Button name="4" clickHandler={this.clickHandler} />
                    <Button name="5" clickHandler={this.clickHandler} />
                    <Button name="6" clickHandler={this.clickHandler} />
                    <Button name="-" clickHandler={this.clickHandler} orange />
                </div>
                <div>
                    <Button name="1" clickHandler={this.clickHandler} />
                    <Button name="2" clickHandler={this.clickHandler} />
                    <Button name="3" clickHandler={this.clickHandler} />
                    <Button name="+" clickHandler={this.clickHandler} orange />
                </div>
                <div>
                    <Button name="0" clickHandler={this.clickHandler} wide />
                    <Button name="." clickHandler={this.clickHandler} />
                    <Button name="=" clickHandler={this.clickHandler} orange />
                </div>

            </div>

        );
    }
}