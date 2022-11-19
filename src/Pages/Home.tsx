import { HomeFirstSection } from "../Components/HomeFirstSection";
import { NewProducts } from "../Components/NewProducts";
import { ProductTypesSection } from "../Components/ProductTypesSection";
import s from "./Home.module.css";

export const Home = () => {
  return (
    <div>
      <HomeFirstSection />
      <ProductTypesSection />
      <NewProducts />
    </div>
  );
};
