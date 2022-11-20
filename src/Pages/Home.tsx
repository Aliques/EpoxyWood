import { AboutUs } from "../Components/Home/AboutUs";
import { HomeFirstSection } from "../Components/Home/HomeFirstSection";
import { NewProducts } from "../Components/Home/NewProducts";
import { ProductTypesSection } from "../Components/Home/ProductTypesSection";
import s from "./Home.module.css";

export const Home = () => {
  return (
    <div>
      <HomeFirstSection />
      <ProductTypesSection />
      <NewProducts />
      <AboutUs></AboutUs>
    </div>
  );
};
