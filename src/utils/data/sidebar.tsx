import { ROUTES } from '@Customtypes/routes';
import Activity from '@assets/images/logo/activity.svg';
import Profile from '@assets/images/logo/profile.svg';

enum SideBar {
    YOUR_ACTIVITY = 'YOUR_ACTIVITY',
    PROFILE = 'PROFILE',
}
type SideBarDataType = {
    title: string;
    link: ROUTES;
    logo: JSX.Element;
};
export const sideBarData: Record<SideBar, SideBarDataType> = {
    [SideBar.YOUR_ACTIVITY]: {
        title: 'Activity',
        link: ROUTES.YOUR_ACTIVITY,
        logo: <Activity />,
    },
    [SideBar.PROFILE]: {
        title: 'Profile',
        link: ROUTES.PROFILE,
        logo: <Profile />,
    },
};
