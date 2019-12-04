const isAuth = () => {
    const auth = sessionStorage.getItem('auth');
    if(auth) return true;
    return false;
}

export default isAuth;