import React from 'react';
import colors from '@theme/colors.module.scss';
import { Spinner } from '@library/Spinner';
import Typography from '@library/Typography';

export default function page() {
    return (
        <div>
            <Spinner loadingColor={colors.C5} />
            <Typography type={'caption'} weight={'light'} text={'enrhew'} color={colors.Black16} />
        </div>
    );
}
