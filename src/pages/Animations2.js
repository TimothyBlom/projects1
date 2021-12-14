import React, { useState } from 'react';
import wallpaper from "../images/wallpaper1.jpg"

const Animations = () => {
    const [imgIsZoomed1, setImgIsZoomed1] = useState(false);


    const zoomedImg1 = () => {
        setImgIsZoomed1(!imgIsZoomed1);
    };

    return (
        <div class='animations'>

            <p className="pageHeaderText">
                Cool button animations
            </p>

            <div className="pageParaText">



            </div>
        </div>
    )
};

export default Animations;