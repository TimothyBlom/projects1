import React, { useState } from 'react';
import wallpaper from "../images/wallpaper1.jpg"
import logo from "../images/logo1.png"
import wallpaperUI from "../images/wallpaperUI.png"
import wallpaperVerticalUI from "../images/wallpaperVerticalUI.png"
import wallpaperHorizontalUI from "../images/wallpaperHorizontalUI.png"
import wallpaperHorizontalHalfUI from "../images/wallpaperHorizontalHalfUI.png"
import wallpaperBackground from "../images/wallpaperBackground.png"

const Animations = () => {
    const [imgIsZoomed1, setImgIsZoomed1] = useState(false);
    const [imgIsZoomed2, setImgIsZoomed2] = useState(false);
    const [imgIsZoomed3, setImgIsZoomed3] = useState(false);
    const [imgIsZoomed4, setImgIsZoomed4] = useState(false);
    const [imgIsZoomed5, setImgIsZoomed5] = useState(false);
    const [imgIsZoomed6, setImgIsZoomed6] = useState(false);

    const zoomedImg1 = () => {
        setImgIsZoomed1(!imgIsZoomed1);
    };

    const zoomedImg2 = () => {
        setImgIsZoomed2(!imgIsZoomed2);
    };

    const zoomedImg3 = () => {
        setImgIsZoomed3(!imgIsZoomed3);
    };

    const zoomedImg4 = () => {
        setImgIsZoomed4(!imgIsZoomed4);
    };

    const zoomedImg5 = () => {
        setImgIsZoomed5(!imgIsZoomed5);
    };

    const zoomedImg6 = () => {
        setImgIsZoomed6(!imgIsZoomed6);
    };

    return (
        <div class='animations'>

            <p className="pageHeaderText">
                Cool animation for opening an project file, developed step by step
            </p>

            <div className="pageParaText">

                <div className="btnSpacing">
                    <p>Image zoom in on hover</p>
                </div>
                <div className="btnWallpaperContainer" >
                    <img className="btnWallpaper" src={wallpaper} />
                </div>

                <div className="btnSpacing">
                    <p>Image zoom in on click</p>
                </div>
                <div className="btnWallpaperContainer" onClick={zoomedImg1}>
                    <img className="imgZoomedOut" src={wallpaper} id={imgIsZoomed1 ? "imgZoomedIn" : "" } />
                </div>

                <div className="btnSpacing">
                    <p>Image zoom in on click with logo and not working shadow, opacity doesn't seem to work on the shadow</p>
                </div>
                <div className="btnWallpaperContainer" onClick={zoomedImg2}>
                    <img className="logoZoomedIn" src={logo} id={imgIsZoomed2 ? "logoZoomedOut" : "" } />
                    <img className="imgZoomedOut" src={wallpaper} id={imgIsZoomed2 ? "imgZoomedIn" : "" } />
                </div>

                <div className="btnSpacing">
                    <p>Image zoom with moving borders</p>
                </div>
                <div>
                    <img className="wallpaperTopUI" src={wallpaperHorizontalUI} id={imgIsZoomed3 ? "wallpaperTopOut" : "" } />
                    <img className="wallpaperBottomUI" src={wallpaperHorizontalUI} id={imgIsZoomed3 ? "wallpaperBottomOut" : "" } />
                    <img className="wallpaperRightUI" src={wallpaperVerticalUI} id={imgIsZoomed3 ? "wallpaperRightOut" : "" } />
                    <img className="wallpaperLeftUI" src={wallpaperVerticalUI} id={imgIsZoomed3 ? "wallpaperLeftOut" : "" } />
                    <img className="wallpaperContainerUI" src={wallpaperUI} />
                    <div className="btnWallpaperContainer" onClick={zoomedImg3}>
                        <img className="logoZoomedIn" src={logo} id={imgIsZoomed3 ? "logoZoomedOut" : "" } />
                        <img className="imgZoomedOut" src={wallpaper} id={imgIsZoomed3 ? "imgZoomedIn" : "" } />
                    </div>
                </div>

                <div className="btnSpacing">
                    <p>Image zoom with delayed moving borders</p>
                </div>
                <div>
                    <img className="wallpaperTopUI2" src={wallpaperHorizontalUI} id={imgIsZoomed4 ? "wallpaperTopOut" : "" } />
                    <img className="wallpaperBottomUI2" src={wallpaperHorizontalUI} id={imgIsZoomed4 ? "wallpaperBottomOut" : "" } />
                    <img className="wallpaperRightUI" src={wallpaperVerticalUI} id={imgIsZoomed4 ? "wallpaperRightOut" : "" } />
                    <img className="wallpaperLeftUI" src={wallpaperVerticalUI} id={imgIsZoomed4 ? "wallpaperLeftOut" : "" } />
                    <img className="wallpaperContainerUI" src={wallpaperUI} />
                    <div className="btnWallpaperContainer" onClick={zoomedImg4}>
                        <img className="logoZoomedIn" src={logo} id={imgIsZoomed4 ? "logoZoomedOut" : "" } />
                        <img className="imgZoomedOut" src={wallpaper} id={imgIsZoomed4 ? "imgZoomedIn" : "" } />
                    </div>
                </div>

                <div className="btnSpacing">
                    <p>Image zoom with split vertical borders</p>
                </div>
                <div>
                    <img className="wallpaperTopLeftUI" src={wallpaperHorizontalHalfUI} id={imgIsZoomed5 ? "wallpaperTopLeftOut" : "" } />
                    <img className="wallpaperTopRightUI" src={wallpaperHorizontalHalfUI} id={imgIsZoomed5 ? "wallpaperTopRightOut" : "" } />
                    <img className="wallpaperBottomLeftUI" src={wallpaperHorizontalHalfUI} id={imgIsZoomed5 ? "wallpaperBottomLeftOut" : "" } />
                    <img className="wallpaperBottomRightUI" src={wallpaperHorizontalHalfUI} id={imgIsZoomed5 ? "wallpaperBottomRightOut" : "" } />
                    <img className="wallpaperRightUI" src={wallpaperVerticalUI} id={imgIsZoomed5 ? "wallpaperRightOut" : "" } />
                    <img className="wallpaperLeftUI" src={wallpaperVerticalUI} id={imgIsZoomed5 ? "wallpaperLeftOut" : "" } />
                    <img className="wallpaperContainerUI" src={wallpaperUI} />
                    <div className="btnWallpaperContainer" onClick={zoomedImg5}>
                        <img className="logoZoomedIn" src={logo} id={imgIsZoomed5 ? "logoZoomedOut" : "" } />
                        <img className="imgZoomedOut" src={wallpaper} id={imgIsZoomed5 ? "imgZoomedIn" : "" } />
                    </div>
                </div>

                <div className="btnSpacing">
                    <p>Image zoom with borders and backgrounds</p>
                </div>
                <div>

                    <img className="wallpaperTopLeftUI" src={wallpaperHorizontalHalfUI} id={imgIsZoomed6 ? "wallpaperTopLeftOut" : "" } />
                    <img className="wallpaperTopRightUI" src={wallpaperHorizontalHalfUI} id={imgIsZoomed6 ? "wallpaperTopRightOut" : "" } />
                    <img className="wallpaperBottomLeftUI" src={wallpaperHorizontalHalfUI} id={imgIsZoomed6 ? "wallpaperBottomLeftOut" : "" } />
                    <img className="wallpaperBottomRightUI" src={wallpaperHorizontalHalfUI} id={imgIsZoomed6 ? "wallpaperBottomRightOut" : "" } />

                    <img className='wallpaperBackgroundTop' src={wallpaperBackground} id={imgIsZoomed6 ? "wallpaperBackgroundTopOut" : "" } />
                    <img className='wallpaperBackgroundLeft' src={wallpaperBackground} id={imgIsZoomed6 ? "wallpaperBackgroundLeftOut" : "" } />
                    <img className='wallpaperBackgroundRight' src={wallpaperBackground} id={imgIsZoomed6 ? "wallpaperBackgroundRightOut" : "" } />
                    <img className='wallpaperBackgroundBottom' src={wallpaperBackground} id={imgIsZoomed6 ? "wallpaperBackgroundBottomOut" : "" } />

                    <img className="wallpaperRightUI" src={wallpaperVerticalUI} id={imgIsZoomed6 ? "wallpaperRightOut" : "" } />
                    <img className="wallpaperLeftUI" src={wallpaperVerticalUI} id={imgIsZoomed6 ? "wallpaperLeftOut" : "" } />

                    <img className="wallpaperContainerUI" src={wallpaperUI} />
                    <div className="btnWallpaperContainer" onClick={zoomedImg6}>
                        <img className="logoZoomedIn" src={logo} id={imgIsZoomed6 ? "logoZoomedOut" : "" } />
                        <img className="imgZoomedOut" src={wallpaper} id={imgIsZoomed6 ? "imgZoomedIn" : "" } />
                    </div>

                </div>

            </div>
        </div>
    )
};

export default Animations;