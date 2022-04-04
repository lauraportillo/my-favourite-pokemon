import logo from '../images/pokemonBall.png';
import '../stylesheets/Spinner.scss';

const Spinner = () => {
	return (
		<div className='spinner'>
			<img src={logo} alt="pokeball spinner" className="spinner__image" />
		</div>
	);
};
export default Spinner;

