import React from 'react';
import { Link } from "react-browser-router";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
import 'swiper/swiper-bundle.css';
import headerLogo from "../images/3DLogo.png"

const Header = () => {
    return (
        <div className="headerContainer">

            <Link className='homeButton' to='/'>            
                <img className="headerLogo" src={headerLogo} />
            </Link>

            <div className="header">

                <Swiper className="headerSwiper"
                    slidesPerView={5}
                    centeredSlides={true}
                    pagination={{ clickable: true }}
                    pagination
                    grabCursor={true}
                    loop={true}
                >

                    <SwiperSlide>
                        <Link className='routingButtons' to='/Countdown'><p>Countdown</p></Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link className='routingButtons' to='/ImgUploader'><p>Image Uploader</p></Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link className='routingButtons' to='/ApiList'><p>API Lists</p></Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link className='routingButtons' to='/SliderList'><p>Slider lists</p></Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link className='routingButtons' to='/Codex'><p>Lore Codex</p></Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link className='routingButtons' to='/ToDoList1'><p>Update To Do List</p></Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link className='routingButtons' to='/ToDoList2'><p>Add to To Do List</p></Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link className='routingButtons' to='/ToDoList3'><p>Simple To Do List</p></Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link className='routingButtons' to='/Animations1'><p>Animated folder</p></Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link className='routingButtons' to='/Animations2'><p>Animated buttons</p></Link>
                    </SwiperSlide>

                </Swiper>      
            </div>
        </div>
    )
};

export default Header;