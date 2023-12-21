import { useState } from "react";

const Form = (props) => {

    const [pokemons, setPokemons] = useState({
        image: 'https://deckofcardsapi.com/static/img/8D.png',
        value: '8',
        suit: 'diamonds'
    })

    const name = 'abobora';

    function setarPokemons() {
        setPokemons({
            ...pokemons,
            [name]: 'algodão'
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        setarPokemons();
        props.addPokemons(pokemons);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="submit" value={'Load more pokemons'} />
            </form>
        </>
    )


}

export default Form;