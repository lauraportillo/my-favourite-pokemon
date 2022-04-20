import image from '../images/notFound.png';

const PokemonNotFound = () => {
    return (
        <article className="pokeCard" >
            <div className="pokeCard__imgContainer">
                <img className="pokeCard__imgContainer--item" src={image} alt='not found' />
            </div>

            <div className="pokeDescription">
                <h2 className="pokeTitle"> not found </h2>

            </div>
        </article>
    )
}

export default PokemonNotFound;