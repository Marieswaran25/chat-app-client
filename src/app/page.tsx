import React, { CSSProperties } from 'react';
import { SignupCard } from '@components/Auth/SignUp';
import colors from '@theme/colors.module.scss';
import { View } from '@components/View';

export default function Homepage() {
    const center: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    };
    return (
        <div style={{ background: colors.C9 }}>
            <View style={center}>
                <SignupCard />
            </View>
        </div>
    );
}
