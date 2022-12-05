import s from "./TabsDesktop.module.css";
import sl from "classnames";
import { useParams } from "react-router-dom";
import { useState } from "react";
import tempImg from "../../Temp/DefaultImage.jpg"
export const TabsDesktop = () => {
    const { id } = useParams();
    let images: number[] = [1, 2, 3, 4, 5]
    return (
        <div className={s.container}>
            <input className={sl(s.radio, s.tab_photo)} id="tab_photo" name="group" type="radio" checked />
            <input className={sl(s.radio, s.tab_video)} id="tab_video" name="group" type="radio" />
            <div className={s.tabs}>
                <label className={sl(s.tab, s.tab_photo_label)} id="tab_photo_label" htmlFor="tab_photo">Photo</label>
                <label className={sl(s.tab, s.tab_video_label)} id="tab_video_label" htmlFor="tab_video">Video</label>
            </div>
            <div className={s.panels}>
                <div className={sl(s.photo_panel, s.panel)} id="photo_panel">
                    <div className={s.images_wrapper}>
                        {images.map(o => <div><img src={tempImg} /></div>)}
                    </div>
                    <div className={s.presenter_wrapper}></div>
                </div>
                <div className={sl(s.video_panel, s.panel)} id="video_panel">asd</div>
            </div>
        </div>
    );
};
