import s from "./DescriptionTabs.module.css";
import sl from "classnames";
import { useParams } from "react-router-dom";
import { useState } from "react";
import tempImg from "../../Temp/DefaultImage.jpg"
import { fileURLToPath } from "url";
export const DescriptionTabs = () => {
    const { id } = useParams();
    let images: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    return (
        <div className={s.container}>
            <div className={s.desktop}>
                <div className={s.tabs_container}>
                    <input className={sl(s.radio, s.tab_photo)} id="tab_photo" name="group" type="radio" checked />
                    <input className={sl(s.radio, s.tab_video)} id="tab_video" name="group" type="radio" />
                    <div className={s.tabs}>
                        <label className={sl(s.tab, s.tab_photo_label)} id="tab_photo_label" htmlFor="tab_photo">Photo</label>
                        <label className={sl(s.tab, s.tab_video_label)} id="tab_video_label" htmlFor="tab_video">Video</label>
                    </div>
                    <div className={s.panels}>
                        <div className={sl(s.photo_panel, s.panel)} id="photo_panel">

                        </div>
                        <div className={sl(s.video_panel, s.panel)} id="video_panel">video</div>
                    </div>
                </div>
            </div>
            <div className={s.mobile}></div>
        </div>
    );
};
