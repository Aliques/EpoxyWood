import { HomeFirstSection } from "../Components/HomeFirstSection";
import { ProductTypesSection } from "../Components/ProductTypesSection";
import s from "./Home.module.css";

export const Home = () => {
  return (
    <div>
      <HomeFirstSection />
      <ProductTypesSection />
    </div>
  );
};
