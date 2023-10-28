import React from 'react';
import './spinner.scss';
import colors from '@theme/colors.module.scss';

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    loadingColor?: string;
    isLoading?: boolean;
}

export const Spinner: React.FC<SpinnerProps> = ({ loadingColor = colors.AliceBlue, isLoading = true }) => {
    return (
        <>
            {isLoading && (
                <div className="Loading">
                    <div className="loader" style={{ border: `10px solid ${loadingColor}` }}>
                        <div className="corner-left" style={{ backgroundColor: loadingColor }}></div>
                        <div className="corner-right" style={{ backgroundColor: loadingColor }}></div>
                    </div>
                </div>
            )}
        </>
    );
};
