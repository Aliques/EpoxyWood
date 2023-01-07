import s from "./TabsDesktop.module.css";
import sl from "classnames";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import tempImg from "../../Temp/DefaultImage.jpg";
// import tempVideo from "../../Temp/SampleVideo"
export const TabsDesktop = () => {
  const { id } = useParams();
  const tab_photo = useRef<HTMLInputElement>(null);
  const tab_video = useRef<HTMLInputElement>(null);
  let images: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  useEffect(() => {
    tab_photo.current!.checked = true;
  }, []);

  function showPhoto(): void {
    tab_photo.current!.checked = true;
  }

  function showVideo(): void {
    tab_video.current!.checked = true;
  }

  return (
    <div className={s.container}>
      <input
        className={sl(s.radio, s.tab_photo)}
        id='tab_photo'
        name='group'
        type='radio'
        onChange={showPhoto}
        ref={tab_photo}
      />
      <input
        className={sl(s.radio, s.tab_video)}
        id='tab_video'
        name='group'
        type='radio'
        onChange={showVideo}
        ref={tab_video}
      />
      <div className={s.tabs}>
        <label
          className={sl(s.tab, s.tab_photo_label)}
          id='tab_photo_label'
          htmlFor='tab_photo'
        >
          Photo
        </label>
        <label
          className={sl(s.tab, s.tab_video_label)}
          id='tab_video_label'
          htmlFor='tab_video'
        >
          Video
        </label>
      </div>
      <div className={s.panels}>
        <div className={sl(s.photo_panel, s.panel)} id='photo_panel'>
          <div className={s.images_wrapper}>
            {images.map((o) => (
              <div key={o}>
                <img src={tempImg} />
              </div>
            ))}
          </div>
          <div className={s.presenter_wrapper}>
            <img src={tempImg} />
          </div>
        </div>
        <div className={sl(s.video_panel, s.panel)} id='video_panel'>
          <div className={s.images_wrapper}>
            {images.map((o) => (
              <div key={o}>
                <img src={tempImg} />
              </div>
            ))}
          </div>
          <div className={s.presenter_wrapper}>
            <video src={require("../../Temp/SampleVideo.mp4")} />
          </div>
        </div>
      </div>
    </div>
  );
};
