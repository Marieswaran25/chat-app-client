import { getAuth, signInWithPopup, GoogleAuthProvider, UserCredential, getAdditionalUserInfo, signOut } from 'firebase/auth';
import { initializeAuth } from '@auth/firebase';
import { LocalStorage } from '@Customtypes/localstorage';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@Customtypes/routes';

export const useAuth = () => {
    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth(initializeAuth);
    const router = useRouter();

    const handleAuthSignIn = async () => {
        try {
            const signIn: UserCredential = await signInWithPopup(auth, GoogleProvider);
            const accessToken = GoogleAuthProvider.credentialFromResult(signIn)?.accessToken;
            const user = signIn.user;
            const userInfo = getAdditionalUserInfo(signIn);
            console.log({ accessToken, user, userInfo });
            if (!localStorage.getItem(LocalStorage.ACCESS_TOKEN)) {
                localStorage.setItem(LocalStorage.ACCESS_TOKEN, accessToken ? accessToken : '');
            }
            if (accessToken) {
                router.push(ROUTES.DASHBOARD);
            }
            return { accessToken, user, userInfo };
        } catch (error) {
            return error;
        }
    };
    const handleAuthSignOut = async () => {
        try {
            localStorage.removeItem(LocalStorage.ACCESS_TOKEN);
            await signOut(auth);
            router.push(ROUTES.HOME);
        } catch (error) {
            return error;
        }
    };
    return { auth, handleAuthSignIn, handleAuthSignOut };
};
