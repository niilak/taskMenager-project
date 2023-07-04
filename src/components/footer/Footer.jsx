import footer from "./footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={footer.footer_container}>
          <img src="logo.png" alt="Logo" />
          <span>Copyright njanja</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
