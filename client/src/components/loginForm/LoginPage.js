import React, { useState } from 'react';
import { Alert } from '@mui/material';
import Footer from '../footer';
import LoginForm from './LoginForm';

function LoginPage() {

    const [msgStatus, setMsgStatus] = useState('');

    const handleMessage = (data) => {

        setMsgStatus(data);

        setTimeout(() => {
            setMsgStatus('');
        }, 6000);
    }

    return (
        <div className='w-screen h-[calc(100%-105px)] bg-yellow-200 overflow-y-scroll relative'>

            {msgStatus && <div className='fixed w-full'>
                <Alert severity={msgStatus === "Login Successful!" ? "success" : "error"}>
                    {msgStatus}
                </Alert>
            </div>}

            <div className='h-[calc(100%)] lg:h-[calc(100%-5px)] flex items-center justify-center lg:space-x-10'>
                <img src="https://media.mktg.workday.com/is/image/workday/illustration-people-login?fmt=png-alpha&wid=1000" alt="" className='h-[200px] 2xl:h-[500px] hidden xl:inline' />
                <LoginForm func={handleMessage} />
            </div>

            <Footer />
        </div>
    )
}

export default LoginPage