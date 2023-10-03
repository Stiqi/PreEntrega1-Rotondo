import Logo from "../../Assets/icon-logo-branded.png";
import CartWidget from "../CartWidget/CartWidget";
import InstagramLogo from "../InstagramLogo/InstagramLogo";
import WspLogo from "../WspLogo/WspLogo";
import styles from "./nav-bar.module.css";
import { Dropdown } from "antd";

const items = [
  {
    key: "1",
    label: (
      <a
        href="#"
        className={styles["dropdown-item"]}
        style={{ fontWeight: 800 }}
      >
        Ver Todos
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a href="#" className={styles["dropdown-item"]}>
        Figuras
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a href="#" className={styles["dropdown-item"]}>
        Litofánias
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a href="#" className={styles["dropdown-item"]}>
        Sellos
      </a>
    ),
  },
  {
    key: "5",
    label: (
      <a href="#" className={styles["dropdown-item"]}>
        Cortantes
      </a>
    ),
  },
  {
    key: "6",
    label: (
      <a href="#" className={styles["dropdown-item"]}>
        Llaveros
      </a>
    ),
  },
  {
    key: "7",
    label: (
      <a href="#" className={styles["dropdown-item"]}>
        Personalizados
      </a>
    ),
  },
];

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles["page-nav"]}>
        <a href="#">
          <img
            src={Logo}
            alt="Logo de Stiqi 3D"
            className="nav-logo"
            draggable="false"
          />
        </a>
        <Dropdown
          menu={{
            items,
            selectable: true,
          }}
          placement="bottom"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="nav-item"
          >
            <path d="M 4 4 L 4 7.65625 L 1 11.65625 L 1 12 C 1 13.644531 2.355469 15 4 15 L 4 28 L 20 28 L 20 19 L 22 19 L 22 28 L 28 28 L 28 15 C 29.644531 15 31 13.644531 31 12 L 31 11.65625 L 28 7.65625 L 28 4 Z M 6 6 L 26 6 L 26 7 L 6 7 Z M 5.5 9 L 26.5 9 L 28.90625 12.21875 C 28.796875 12.652344 28.46875 13 28 13 C 27.445313 13 27 12.554688 27 12 L 25 12 C 25 12.554688 24.554688 13 24 13 C 23.445313 13 23 12.554688 23 12 L 21 12 C 21 12.554688 20.554688 13 20 13 C 19.445313 13 19 12.554688 19 12 L 17 12 C 17 12.554688 16.554688 13 16 13 C 15.445313 13 15 12.554688 15 12 L 13 12 C 13 12.554688 12.554688 13 12 13 C 11.445313 13 11 12.554688 11 12 L 9 12 C 9 12.554688 8.554688 13 8 13 C 7.445313 13 7 12.554688 7 12 L 5 12 C 5 12.554688 4.554688 13 4 13 C 3.53125 13 3.203125 12.652344 3.09375 12.21875 Z M 6 14.21875 C 6.53125 14.699219 7.234375 15 8 15 C 8.765625 15 9.46875 14.699219 10 14.21875 C 10.53125 14.699219 11.234375 15 12 15 C 12.765625 15 13.46875 14.699219 14 14.21875 C 14.53125 14.699219 15.234375 15 16 15 C 16.765625 15 17.46875 14.699219 18 14.21875 C 18.53125 14.699219 19.234375 15 20 15 C 20.765625 15 21.46875 14.699219 22 14.21875 C 22.53125 14.699219 23.234375 15 24 15 C 24.765625 15 25.46875 14.699219 26 14.21875 L 26 26 L 24 26 L 24 17 L 18 17 L 18 26 L 6 26 Z M 8 17 L 8 24 L 16 24 L 16 17 Z M 10 19 L 14 19 L 14 22 L 10 22 Z" />
          </svg>
        </Dropdown>

        <CartWidget />
      </div>
      <div>
        <InstagramLogo />
        <WspLogo />
      </div>
    </div>
  );
};

export default NavBar;
