import React from 'react';
import s from './ProfileContent.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const ProfileContent = (props) => {

    return (
        <div>
            <ProfileInfo/>

            <MyPosts posts={props.state.posts}/>

        </div>
    )
}
export default ProfileContent;