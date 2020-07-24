import React from 'react';
import video from '../../assets/video-2.mp4';
// import Poligono from '../../assets/poligono.svg';
import './styles.css';

const Video = () => {
    return (
        <>
        <h5 className="texto-video">criatividade•amor•cura•abundância</h5>
        <div className= "div-video d-flex">
            <video src={video} width="250" height="320" controls="controls" autoplay loop />
        </div>
        </>
    )
}

export default Video;