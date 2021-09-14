import React from 'react';
import {Typography} from '@material-ui/core'
import  PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'
import GetAppIcon from '@material-ui/icons/GetApp';

import CustomTimeLine,{CustomTimeLineItem} from '../Timeline/Timeline';
import CustomButton from '../Button/Button';

import './Profile.css';
import profile_photo from '../../assets/images/profile_photo.jpeg';
import resumeData from '../../utils/resumeData';

const Profile = () =>{
    return (

        <div className='profile container-shadow'>
            <div className='profile_name'>
                    <Typography className='name'>{resumeData.name}</Typography>
                    <Typography className='title'> {resumeData.designation} </Typography>
            </div>
            
            <figure className='profile_image'>
                {/* <img src="https://drive.google.com/uc?export=view&id=1Ec39eCeLx1wfNpflgcuqH6QHpnFgrfi5" style={{ width: '100px', 'max-width': '100%', height: 'auto' }} alt='' /> */}
                <img src = { profile_photo } alt='' />
            </figure>

            <div className='profile_information'>
                    <CustomTimeLine  icon={<PersonOutlineOutlinedIcon />}>
                        <CustomTimeLineItem title="Name" text={resumeData.name}/>
                        <CustomTimeLineItem title="Title" text={resumeData.designation}/>
                        <CustomTimeLineItem title="Phone" text={resumeData.phone}/>
                        <CustomTimeLineItem title="Email" text={resumeData.email} />
                    </CustomTimeLine>
                    <div className='profile_btn_container'>
                            <CustomButton text='Download CV' icon={<GetAppIcon />}/>
                    </div>
            </div>
        </div>
    );
}

export default  Profile;