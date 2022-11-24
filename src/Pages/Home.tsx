import { AboutUs } from "../Components/Home/AboutUs";
import { HomeFirstSection } from "../Components/Home/HomeFirstSection";
import { Making } from "../Components/Home/Making";
import { ProductsPreviewTile } from "../Components/Home/ProductsPreviewTile";
import { ProductTypesSection } from "../Components/Home/ProductTypesSection";
import s from "./Home.module.css";
import sl from "classnames";
export const Home = () => {
  return (
    <div>
      <HomeFirstSection />
      <ProductTypesSection />
      <div className={s.section_container}>
        <div className={s.section_title}>New products</div>
        <ProductsPreviewTile />
      </div>
      <AboutUs />
      <Making />
      <div className={s.section_container}>
        <div className={s.section_title}>Client's table design</div>
        <ProductsPreviewTile />
      </div>
    </div>
  );
};
