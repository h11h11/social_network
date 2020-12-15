import React from 'react';
import s from './ProfileContent.module.css';
import MyPosts from "./MyPosts/MyPosts";

const ProfileContent = () => {
    return (
        <div>
            <div><img
                src='data:image/jpeg;base64,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'/>
            </div>
            <div>
                ava + desc
            </div>
           <MyPosts/>

        </div>
    )
}
export default ProfileContent;