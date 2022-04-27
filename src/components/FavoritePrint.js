import '../stylesheets/FavoritePrint.scss';
import image from '../images/pokemonBall.png';

const FavoritePrint = ({ referent, username, pokemon }) => {
    return (
        <div ref={referent} className="containerFavPrint" >
            <header className="favHeader">
                <div className="favHeader__image"></div>
                <p className="favHeader__text">
                    Which <span className="favHeader__text--pokemon">Pokémon</span> would you like to be?  
                </p>
            </header>
            <div className="favPrint">
                <div className="favPrint__star">
                    <img className="favPrint__star--image" src={pokemon?.pic || image} alt="my favorite pokemon" />
                </div>
                <div className="favPrint__text">
                    <p className="favPrint__text--username">{username || 'Full Name'}</p>
                    <p className="favPrint__text--is">is</p>
                    <p className="favPrint__text--favPoke">{pokemon.name || 'Favorite Pokemon'}</p>
                </div>
            </div>
        </div>
    )
};

export default FavoritePrint;