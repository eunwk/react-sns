import React, { useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Avatar from 'react-avatar';
// import { logoutRequestAction } from '../reducers/user';

const UserProfile = () => {
    //   const dispatch = useDispatch();
    //   const { me, logOutLoading } = useSelector((state) => state.user);

    //   const onLogOut = useCallback(() => {
    //     dispatch(logoutRequestAction());
    //   }, []);

    return (
        <div>
            <Avatar name="Wim Mostmans" size="150" />
            <div key="twit"><Link href="#"><a>게시글<br />3</a></Link></div>,
            <div key="followings"><Link href="/profile"><a>팔로잉<br />3</a></Link></div>,
            <div key="followings"><Link href="/profile"><a>팔로워<br />0</a></Link></div>,
        </div>
    );
};

export default UserProfile;
