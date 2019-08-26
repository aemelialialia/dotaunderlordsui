import React from 'react';
import './App.css';
import { Form, Icon, Input, Button } from 'antd';

class Feedback extends React.Component {

    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };


    render() {
        return (
            <Form layout='inline' onSubmit={this.handleSubmit}>
                <Input pefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="username">
                </Input>

                <Input prefix={<Icon type="" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="contact">
                </Input>
            </Form>
        )

    }
}

export default Feedback;
