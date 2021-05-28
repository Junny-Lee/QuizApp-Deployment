
import React, {useState} from 'react';
import {FaArrowCircleDown, FaArrowCircleUp} from 'react-icons/fa';
import { Button } from './Styles2';

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
    const scrolled = document.documentElement.scrollBottom;
    if (scrolled > 5){
    setVisible(true)
    } 
    else if (scrolled <= 5){
    setVisible(false)
    }
};

const scrollToBottom = () =>{ window.scrollTo(0, 500);
    // window.scrollTo({
    // // top: 0, 
    // behavior: 'smooth',
    // });
};

window.addEventListener('scroll', toggleVisible);

return (
    <Button>
    <FaArrowCircleDown onClick={scrollToBottom} 
    style={{display: visible ? 'inline' : 'none'}} />
    </Button>
);
}

export default ScrollButton;