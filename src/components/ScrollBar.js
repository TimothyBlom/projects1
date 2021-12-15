import React from 'react';

const ScrollBar = () => {

    window.onscroll = () => {
        scrollBarHeight();
    };

    const scrollBarHeight = () => {
        const scroll = document.body.scrollTop || document.documentElement.scrollTop;
        const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scroll / totalHeight) * 100;
        document.getElementById("scrollBar").style.height = scrolled + "%";
    };

    return (
        <div>
            <div id='scrollBar' />
            <div id='scrollPath' />
        </div>
    )
};

export default ScrollBar;