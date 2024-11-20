import React from 'react';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WavesIcon from '@mui/icons-material/Waves';
import JavascriptIcon from '@mui/icons-material/Javascript';
import AndroidIcon from '@mui/icons-material/Android';
import CodeOffIcon from '@mui/icons-material/CodeOff';
const HomeIcon =()=>{
    return(
       <div className='inline'>
        <AlternateEmailIcon className='text-primary  '></AlternateEmailIcon>
       </div>
    )
}
export default HomeIcon;
const YouTube =()=>{
    return(
        <div className='inline'>
        <YouTubeIcon className='text-primary'></YouTubeIcon>
        </div>
    )
}
export {YouTube} ;
const Facebook=()=>{
    return(
        <div className='inline'>
            <FacebookIcon className='text-primary'></FacebookIcon>
        </div>
    )
}
export {Facebook};
const Twitter=()=>{
    return(
        <div className='inline'>
            <TwitterIcon className='text-primary'></TwitterIcon>
        </div>
    )
}
export {Twitter};