import React, { useCallback, useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
import PropTypes from "prop-types";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
import Styles from "./Styles";
import "swiper/swiper-bundle.min.css";
const NoticeList = ({ notices }) => {
  // console.log("notices", notices);
  return (
    <Styles>
      <div className="tit-area">
        <h1>공지사항</h1>
        <Link href="/notice">
          <a>전체보기</a>
        </Link>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {notices.map((v) => (
          <SwiperSlide key={v.id}>
            <Link href="#">
              <a>
                <div className="txts">
                  <span className="notice-tit">{v.title}</span>
                  <span>{v.creator}</span>
                  <span>{v.createAt}</span>
                </div>
                <img src={v.Images[0].src} className="thumb-img" />
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Styles>
  );
};

NoticeList.propTypes = {
  // notices: PropTypes.string.isRequired,
};

NoticeList.defaultProps = {};

export default NoticeList;
