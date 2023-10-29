import './signup.scss';

import Typography from '@library/Typography';
import React from 'react';
import colors from '@theme/colors.module.scss';
import Logo from '@assets/vercel.svg';
import { LoginWithGoogle } from '../Google';

export const SignupCard = () => {
    return (
        <div className="signup-card">
            <Logo className="logo" />
            <Typography type={'h2'} weight={'semibold'} text={'Task Manager'} color={colors.Black16} id="signup-title" />
            <LoginWithGoogle />
        </div>
    );
};
