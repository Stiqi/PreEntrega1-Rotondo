import Logo from "../../assets/icon-logo-branded.png";
import CartWidget from "../CartWidget/CartWidget";
import InstagramLogo from "../InstagramLogo/InstagramLogo";
import StoreButton from "../StoreButton/StoreButton";
import WspLogo from "../WspLogo/WspLogo";
import styles from "./nav-bar.module.css";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <a href="#">
        <img
          src={Logo}
          alt="Logo de Stiqi 3D"
          className="nav-logo"
          draggable="false"
        />
      </a>
      <div>
        <StoreButton />
        <CartWidget />
        <InstagramLogo />
        <WspLogo />
      </div>
    </div>
  );
};

export default NavBar;
