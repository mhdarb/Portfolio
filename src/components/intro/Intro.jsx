import { init } from 'ityped';
import { useEffect, useRef, useState } from "react";
import profile_2 from "../../assets/2.jpeg";
import profile_3 from "../../assets/3.jpg";
import down from "../../assets/down.png";
import profile_1 from "../../assets/profile1.png";
import "./intro.scss";
const images = [profile_1, profile_2,profile_3];
export default function Intro() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentIndex === images.length - 1) {
                setCurrentIndex(0);
            } 
            else {
                setCurrentIndex(currentIndex + 1);
            }
        }, 3000)
        
        return () => clearInterval(intervalId);
    }, [currentIndex])
    // const [currentImage, setCurrentImage] = useState(null);

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    //     }, 1500)
        
    //     return () => clearInterval(intervalId);
    // }, [])

    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
             backDelay: 1500,
             backSpeed: 60,
             showCursor:true,
             strings: ['Muslim', 'Software Developer', 'Web Designer' ],
        });
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src={images[currentIndex]} alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Assalamualiakum, I'm</h2>
                    <h1>Mohd Areeb</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src={down} alt=""/>
                </a>
            </div>
        </div>
    )
}
