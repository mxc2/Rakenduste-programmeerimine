import React, {  useState, useRef } from 'react';
import { Button, Input, Form } from 'antd';


function Register(){
    const registerUser = "http://localhost:8081/api/auth/signup";
    const [registered, setRegistered] = useState(false);

    //Form validation 
    const validateMessages = {
        required: '${label} is required!',
      };

    //Send data
    const handleSubmit = async (values) => {

        const user = {
            firstName: values.fname,
            lastName: values.lname,
            email: values.email,
            password: values.password
        }

        fetch(registerUser, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        }).then(
            setRegistered(true)
        );
    }
    
    return(
        <Form
            style={{minWidth: '40%', margin: 'auto', marginTop: "20px"}}
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
            validateMessages={validateMessages}>
            
            <Form.Item 
                label="First Name"
                name="fname"
                rules={[
                    {
                      required: true,
                      min: 3, message: 'First name must be minimum 3 characters.' ,
                    },
                ]}
                >
                <Input />
            </Form.Item>

            <Form.Item 
                label="Last Name"
                name="lname"
                rules={[
                    {
                      required: true,
                      min: 3, message: 'First name must be minimum 3 characters.' ,
                    },
                ]}
                >
                <Input />
            </Form.Item>

            <Form.Item 
                label="Email"
                name="email"
                rules={[
                    {
                      required: true,
                      type: "email",
                      message: "The input is not valid E-mail!"
                    },
                ]}
                >
                <Input />
            </Form.Item>

            <Form.Item 
                label="Password"
                name="password"
                rules={[
                    {
                      required: true,
                      min: 6, message: 'Password must be minimum 6 characters.' ,
                    },
                ]}
                >
                <Input />
            </Form.Item>

            <Form.Item 
                label="Confirm Password"
                name="confirm password"
                rules={[
                    {
                      required: true,
                      min: 6, message: 'Password must be minimum 6 characters.' ,
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
          
                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                      },
                    }),
                ]}
                >
                <Input />
            </Form.Item>
            
            { registered && (<p>Account created!</p>)}

            <Button style={{marginLeft: '45%', minWidth: '15%'}} type="primary" htmlType="submit">
                Register
            </Button>

        </Form>
    );
}

export default Register;