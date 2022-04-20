import image from '../images/notFound.png';
import '../stylesheets/PokemonNotFound.scss';

const PokemonNotFound = () => {
    return (
        <article className="notFoundCard" >
            <div className="notFoundCard__imgContainer">
                <img className="notFoundCard__imgContainer--item" src={image} alt='not found' />
            </div>

            <div className="notFoundDescription">
                <h2 className="notFoundTitle"> not found </h2>
                <small className="notFoundSubTitle"> try another one! </small>

            </div>
        </article>
    )
}

export default PokemonNotFound;