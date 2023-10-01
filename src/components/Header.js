import { LOGO_URL } from "../constant";

const Title = () => {
  return (
    <a href="/">
      <img className="logo" src={LOGO_URL} alt="Logo" />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>contact</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
