import { PrimaryButton } from "../components/Button";
import Link from "next/link";

const menuItem = [
  {
    name: "Home",
    ref: "/",
  },
  {
    name: "About",
    ref: "/about",
  },
  {
    name: "Pricing",
    ref: "/pricing",
  },
  {
    name: "Service",
    ref: "/service",
  },
];

const style = {
  container: "w-full h-16  flex flex-wrap items-center justify-between ",
  logo: " text-2xl font-bold",
  mobileMenu: " w-8 h-8 bg-gray-300 sm:hidden block",
  menubar: "  flex items-center justify-between hidden sm:block hidden ",
  buttonContainer: "sm:block hidden",
  menubarList: "  flex items-center",
  bar: "after:block hover:after:bg-[#A67C00] after:w-auto after:h-1 after:rounded-full after:transition-all after:duration-300 after:origin-left after:transform after:scale-x-0 hover:after:scale-x-100",
  menubarItem:
    "  text-md text-[#3B5998] font-medium px-8 cursor-pointer hover:text-gray-600",
};

function Header() {
  return (
    <nav className={style.container}>
      <div className={style.logo}>Logo</div>
      <MobileMenu />
      <Menubar />
      <div className={style.buttonContainer}>
        <PrimaryButton size="medium">Join Us</PrimaryButton>
      </div>
    </nav>
  );
}

export default Header;

const MobileMenu = () => {
  return <div className={style.mobileMenu}></div>;
};

const Menubar = () => {
  return (
    <div className={style.menubar}>
      <ul className={style.menubarList}>
        {/* <li className={style.menubarItem}>Home</li> */}
        {menuItem.map((item) => (
          <Link href={item.ref}>
            <li className={`${style.menubarItem} ${style.bar}`}>{item.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
