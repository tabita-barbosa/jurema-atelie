import React from 'react';
import video from '../../assets/video-2.mp4';
// import Poligono from '../../assets/poligono.svg';
import './styles.css';

const Video = () => {
    return (
        <>
        <div className= "div-video d-flex justify-content-center">
            <video src={video} width="250" height="320" controls="controls" autoplay loop />
        </div>
        </>
    )
}

export default Video;