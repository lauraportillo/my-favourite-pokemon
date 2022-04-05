import '../stylesheets/Header.scss';

const Header = () => {
  return (
    <header className="containerHeader">
      <div className="containerHeader__image"></div>
      <p className="containerHeader__text">
        If the world were ruled by <span className="containerHeader__text--pokemon">pokemons</span>, which one would you
        choose?
      </p>
    </header>
  );
};

export default Header;
