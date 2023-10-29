'use client';
import './loginWithGoogle.scss';

import Typography from '@library/Typography';
import React from 'react';
import Google from '@assets/images/logo/google.svg';
import colors from '@theme/colors.module.scss';
import { useAuth } from '@hooks/use-auth';

export const LoginWithGoogle = () => {
    const { handleAuthSignIn } = useAuth();
    return (
        <div className="google-card" onClick={handleAuthSignIn}>
            <Google />
            <Typography type={'h4'} weight={'semibold'} text={'Login with Google'} color={colors.InkBlue} />
        </div>
    );
};
