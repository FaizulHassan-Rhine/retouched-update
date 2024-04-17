import React, { useContext, useEffect, useState } from 'react';
import { userContextManager } from '../../App';
import LogoWithChar from '../LogoWithChar/LogoWithChar';

const UserImage = () => {

    const [getUserInfo, setUserInfo, getToken, setToken] = useContext(userContextManager);
    const [getImageValid, setImageValid] = useState(false);

    function isImage(url) {
        return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
    }
    useEffect(() => {
        console.log(getUserInfo);

        setImageValid(isImage(getUserInfo.results.profile_path));

    }, [getUserInfo.results.profile_path])

    return getImageValid ? <img
        className="h-8 w-8 rounded-full"
        src={getUserInfo.results.profile_path}
        alt=""
    /> : <LogoWithChar/>;
};

export default UserImage;