import '../stylesheets/FavoritePrint.scss';
import image from '../images/pokemonBall.png';

const FavoritePrint = ({ referent, username, pokemon }) => {
    return (
        <div ref={referent} className="containerFavPrint" >
            <div className="favPrint">
                <div className="favPrint__star">
                    <img className="favPrint__star--image" src={pokemon?.pic || image} alt="my favorite pokemon" />
                </div>
                <div className="favPrint__text">
                    <span className="favPrint__text--username">{username || 'Full Name'}</span>
                    <span className="favPrint__text--favPoke">{pokemon.name || 'Favorite Pokemon'}</span>
                </div>
            </div>
        </div>
    )
};

export default FavoritePrint;