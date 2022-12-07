import s from "./DescriptionMediaDesktop.module.css";
import sl from "classnames";
import { useParams } from "react-router-dom";
import { useState } from "react";
import tempImg from "../../Temp/DefaultImage.jpg"
import { fileURLToPath } from "url";
export const DescriptionMediaDesktop = () => {
    const { id } = useParams();
    let images: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    return (
        <div className={s.container}>

        </div>
    );
};
