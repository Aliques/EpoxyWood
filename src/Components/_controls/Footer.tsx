import s from "./Footer.module.css";
import cl from "classnames";
import insta from "../../Icons/48/instagram.svg";
import telegram from "../../Icons/48/telegram-app.svg";
import whatsapp from "../../Icons/48/whatsapp.svg";
import pinterest from "../../Icons/48/pinterest.svg";
import youtube from "../../Icons/48/youtube.svg";
import vk from "../../Icons/48/vk-circled.svg";
export const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.links}>
        <div className={s.site_links}>
          <div>
            <div className={s.links_title}>Categories</div>
            <div className={s.list}>
              <div>
                <a href="#">Home</a>
                <a href="#">Catalog</a>
                <a href="#">Delivery</a>
              </div>
              <div>
                <a href="#">Returns &amp; Exchanges</a>
                <a href="#">FAQ</a>
                <a href="#">Contacts</a>
              </div>
            </div>
          </div>
          <div>
            <div className={s.links_title}>Catalog</div>
            <div className={s.list}>
              <div>
                <a href="#">Tables</a>
                <a href="#">Doors</a>
                <a href="#">Stairs</a>
              </div>
              <div>
                <a href="#">Lightning</a>
                <a href="#">Decor</a>
                <a href="#">Clock</a>
              </div>
            </div>
          </div>
          <div className={s.sotial_links}>
            <a href="#">
              <img src={insta} alt="#" />
            </a>
            <a href="#">
              <img src={youtube} alt="#" />
            </a>
            <a href="#">
              <img src={telegram} alt="#" />
            </a>
            <a href="#">
              <img src={pinterest} alt="#" />
            </a>
            <a href="#">
              <img src={whatsapp} alt="#" />
            </a>
            <a href="#">
              <img src={vk} alt="#" />
            </a>
          </div>
        </div>
      </div>
      {/* <div className={s.other}></div> */}
    </div>
  );
};
