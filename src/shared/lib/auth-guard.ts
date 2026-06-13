import {redirect} from "react-router";

export const requireAuth = () => {

    if(!isTokenExist()) return redirect('/login');
    return null;
}

export const requireGuest = () => {
    if(isTokenExist()) return redirect('/dashboard');
    return null;
}

export const smartRootRedirect = () => {
    if(isTokenExist()) return redirect('/dashboard');
    return redirect('/login');

}


const isTokenExist = () => {
    const token = localStorage.getItem('access_token');
    return !!token;
}