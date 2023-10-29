import React from 'react';
import colors from '@theme/colors.module.scss';
import { SideBar } from '@components/Dashboard/Sidebar';

export default function Dashboard() {
    return (
        <div>
            <SideBar style={{ backgroundColor: colors.C5 }} />
        </div>
    );
}
