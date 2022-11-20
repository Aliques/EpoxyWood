import { AboutUs } from "../Components/Home/AboutUs";
import { HomeFirstSection } from "../Components/Home/HomeFirstSection";
import { Making } from "../Components/Home/Making";
import { NewProducts } from "../Components/Home/NewProducts";
import { ProductTypesSection } from "../Components/Home/ProductTypesSection";
import s from "./Home.module.css";

export const Home = () => {
  return (
    <div style={{ paddingBottom: 50 }}>
      <HomeFirstSection />
      <ProductTypesSection />
      <NewProducts />
      <AboutUs />
      <Making />
    </div>
  );
};
