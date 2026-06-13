import {redirect} from "react-router";

export const requireAuth = () => {
    const token = localStorage.getItem('access_token');
    if(!token) return redirect('/login');
    return null;
}

export const requireGuest = () => {
    const token = localStorage.getItem('access_token');
    if(token) return redirect('/dashboard');
    return null;
}

export const smartRootRedirect = () => {
    const token = localStorage.getItem('access_token');
    if(token) return redirect(token ? '/dashboard': '/login');

}
