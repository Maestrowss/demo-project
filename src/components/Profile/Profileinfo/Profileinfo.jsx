import React from 'react';
import s from './Profileinfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus}) => {
    console.log("props.profile:", profile);
    return (
        <div>
            <div className={s.profile}>
                <img src='https://hvylya.net/crops/eabf92/834x0/1/0/2022/07/13/F6e1lJW1ERVh862qqly5EUbt1zTD4hTgueE3nJoE.jpeg'/>
            </div>
            <div className={s.descriptionBlock}>
                {profile !== null && (

                    <>
                        <img src={profile.photos.large} />
                        <div className={s.description}>
                            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                            <div>Имя: {profile.fullName}</div>
                            <div>Статус: {profile.lookingForAJobDescription}</div>
                            <div>О себе: {profile.aboutMe}</div>
                            <div>Статус: {profile.lookingForAJobDescription}</div>
                        </div>
                    </>
                )}
                {!profile && <Preloader />}
            </div>
        </div>
    )
}


export default ProfileInfo;