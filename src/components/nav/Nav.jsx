import nav from "./nav.module.scss";

const Nav = ({ onClick, btnText }) => {
  return (
    <>
      <nav className={nav.nav}>
        <img
          src="logo.png"
          alt="TaskMenager Logo
      "
        />
        <button className="switch_btn" onClick={onClick}>
          {btnText}
        </button>
      </nav>
    </>
  );
};

export default Nav;
