import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import noAvatar from '../../../assets/images/user.png';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <div>
          <svg width="414" height="216" viewBox="0 0 414 216" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M475.305 -81H-68.7808C-118.344 -81 -137.704 -16.6417 -96.3655 10.7023L185.405 197.085C202.638 208.484 225.107 208.109 241.95 196.141L504.266 9.75896C543.969 -18.4517 524.011 -81 475.305 -81Z" stroke="url(#paint0_linear_2_135)" stroke-width="5"/>
            <path d="M474.305 -90H-69.7808C-119.344 -90 -138.704 -25.6417 -97.3655 1.7023L184.405 188.085C201.638 199.484 224.107 199.109 240.95 187.141L503.266 0.758965C542.969 -27.4517 523.011 -90 474.305 -90Z" fill="url(#paint1_linear_2_135)"/>
            <defs>
            <linearGradient id="paint0_linear_2_135" x1="-297.635" y1="-81" x2="690.071" y2="44.8701" gradientUnits="userSpaceOnUse">
            <stop stop-color="#7C6AF3"/>
            <stop offset="1" stop-color="#44A5F5"/>
            </linearGradient>
            <linearGradient id="paint1_linear_2_135" x1="-5.00001" y1="0.500051" x2="397.796" y2="103.212" gradientUnits="userSpaceOnUse">
            <stop stop-color="#7C6AF3"/>
            <stop offset="1" stop-color="#44A5F5"/>
            </linearGradient>
            </defs>
          </svg>
        </div>
        <div className={s.descriptionBlock}>
          <img className={s.avatar} src={profile.photos.large === null ? noAvatar : profile.photos.large} alt='large avatar' />
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;