import '../stylesheets/Footer.scss';

const Footer = () => {
  return (
    <footer>
      <ul className="footer">
        <li className="footer__item">
          <a
            className="footer__item--icon"
            href="https://www.linkedin.com/in/laura-portillo-rodr%C3%ADguez-21965a86/"
            target="_blank"
            rel="noopener noreferrer"
            title="linkedin"
          >
            <i className="fa fa-linkedin" alt="linkedin icon"></i>
          </a>
        </li>
        <li className="footer__item">
          <a
            className="footer__item--icon"
            href="https://github.com/lauraportillo"
            target="_blank"
            rel="noopener noreferrer"
            title="github"
          >
            <i className="fa fa-github-alt" alt="github icon"></i>
          </a>
        </li>
        <li className="footer__item">
          <a
            className="footer__item--icon"
            href="https://twitter.com/LauraPo02860847"
            target="_blank"
            rel="noopener noreferrer"
            title="twitter"
          >
            <i className="fa fa-twitter" alt="twitter icon"></i>
          </a>
        </li>
        <li className="footer__item">
          <a
            className="footer__item--icon"
            href="mailto:lauraportillo.ark@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="email"
          >
            <i className="fa fa-envelope" alt="envelope icon"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
