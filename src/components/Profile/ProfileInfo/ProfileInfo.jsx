import prof from "./ProfileInfo.module.css"
import Preloader from "../../common/preloader/preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div className={prof.mainImg}>*/}
            {/*    <img alt="img1" src="https://www.marorka.com/wp-content/uploads/2016/08/Header-img.jpg"/>*/}
            {/*</div>*/}
            <div className={prof.profileAvatar}>
                <img alt="img2" src={props.profile.photos.large}/>
            </div>
        </div>
    )

}

export default ProfileInfo;