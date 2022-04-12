import Myposts from "./MyPosts/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <Myposts/>
        </div>
    )

}

export default Profile;