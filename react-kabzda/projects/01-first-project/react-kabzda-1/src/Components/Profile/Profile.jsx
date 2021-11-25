import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
// import s from './Profile.module.css'

const Profile = (props) => {
    return <div>
            <ProfileInfo />
            <MyPostsContainer />
    </div>
}

export default Profile;