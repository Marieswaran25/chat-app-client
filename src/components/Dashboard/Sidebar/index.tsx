'use client';
import './sidebar.scss';

import Typography from '@library/Typography';
import Logout from '@assets/images/logo/logout.svg';
import React, { CSSProperties, Fragment, useState } from 'react';
import colors from '@theme/colors.module.scss';
import { sideBarData } from 'src/utils/data/sidebar';
import CloseRight from '@assets/images/logo/rightCircle.svg';
import Logo from '@assets/images/logo/logo.svg';
import { useAuth } from '@hooks/use-auth';
import { Button } from '@library/Button';
import { useRouter } from 'next/navigation';

type SideBarProps = {
    style?: CSSProperties;
};

export const SideBar: React.FC<SideBarProps> = ({ style }) => {
    const [sidebarWidth, setSidebarWidth] = useState('70px');
    const router = useRouter();
    const [sidebar, setSidebar] = useState(false);
    const { auth, handleAuthSignOut } = useAuth();

    function closeSideBar() {
        setSidebar(!sidebar);
        if (sidebarWidth === '70px') {
            setSidebarWidth('400px');
        } else {
            setSidebarWidth('70px');
        }
    }
    return (
        <aside className="side-bar" style={{ ...style, maxWidth: sidebarWidth }} id="sidebar">
            <div className={`close-icon`} onClick={closeSideBar}>
                <CloseRight className={`close ${sidebar ? '' : 'closed'}`} />
            </div>
            <div className="logo-wrapper">
                <Logo />
            </div>
            <div className={`side-bar-items`}>
                {Object.values(sideBarData).map((record, index) => {
                    return (
                        <div onClick={() => router.push(record.link)} key={index}>
                            {sidebar ? (
                                <Button
                                    label={<Typography type={'h4'} weight={'semibold'} text={record.title} color={colors.White} />}
                                    backgroundColor={colors.PaleBlue}
                                    additionalsize="large"
                                    id="items"
                                    backgroundColorOnHover={colors.C9}
                                />
                            ) : (
                                <Fragment key={index}>{record.logo}</Fragment>
                            )}
                        </div>
                    );
                })}
            </div>
            <div className={`user-info-wrapper ${!sidebar ? 'nomargin' : ''}`}>
                {auth && auth.currentUser && sidebar && <Typography type={'p2'} weight={'light'} text={auth.currentUser.email || ''} color={colors.White} />}
                <div onClick={handleAuthSignOut}>
                    {sidebar ? (
                        <Button
                            label={<Typography type={'h4'} weight={'semibold'} text={'Logout'} color={colors.White} />}
                            backgroundColor={colors.PaleBlue}
                            additionalsize="large"
                            id="logout"
                            backgroundColorOnHover={colors.C9}
                        />
                    ) : (
                        <Logout />
                    )}
                </div>
            </div>
        </aside>
    );
};
