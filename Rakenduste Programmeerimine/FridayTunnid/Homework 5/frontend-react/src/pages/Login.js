import React, {  useContext } from 'react';
import { Button, Input, Form} from 'antd';
import { loginUser } from '../store/actions';
import { Context } from "../store";


function Register(){
    const LogUserIn = "http://localhost:8081/api/auth/login";
    const [state, dispatch] = useContext(Context)

    //Form validation 
    const validateMessages = {
        required: '${label} is required!',
      };

    //Send data
    const handleSubmit = async (values) => {

        const userData = {
            email: values.email,
            password: values.password
        }
        
        const res = await fetch(LogUserIn, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify(userData),
        });

        const returnData = await res.json();

        if(returnData.token) {
            dispatch(loginUser(returnData));
        }
    }
    
    return(
        <Form
            style={{minWidth: '40%', margin: 'auto', marginTop: "20px"}}
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
            validateMessages={validateMessages}>

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
                      min: 6, message: 'Password is atleast 6 characters.' ,
                    },
                ]}
                >
                <Input />
            </Form.Item>

            <Button style={{marginLeft: '45%', minWidth: '15%'}} type="primary" htmlType="submit">
                Login
            </Button>

            { state.auth.token && <p>Logged in succesfully</p>}
        </Form>
    );
}

export default Register;