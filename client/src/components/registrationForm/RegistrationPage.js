import React, { useState } from 'react';
import { Alert } from '@mui/material';
import Footer from '../footer';
import RegistrationForm from './RegistrationForm';

function RegistrationPage() {

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
                <Alert severity={msgStatus === "Registration Successful!" ? "success" : "error"}>
                    {msgStatus}
                </Alert>
            </div>}

            <div className='min-h-max xl:h-[calc(100%+40px)] flex items-center justify-center lg:space-x-10'>
                <img src="https://media.mktg.workday.com/is/image/workday/illustration-people-login?fmt=png-alpha&wid=1000" alt="" className='h-[200px] 2xl:h-[500px] hidden xl:inline' />
                <RegistrationForm func={handleMessage} />
            </div>

            <Footer />
        </div>
    )
}

export default RegistrationPage