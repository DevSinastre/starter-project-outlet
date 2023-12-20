import { React, useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from 'styled-components';

import imagem from '../assets/basic-card-background.png';
import { ThemeContext } from "../contexts/themeContext";
import GetPokemon from '../adapters/GetPokemon'

// async function GetPokemon(id) {
//     const createListPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     const response = await createListPokemon.json()
//     return response
// }

const PokemonDetails = (props) => {

    const {theme} = useContext(ThemeContext);

    return (
        <Card style={{color: theme.color, backgroundColor: theme.backgroundColor, transition: theme.transition}}>
            <Name>{props.pokemonDetails.name}</Name>
            <Img src={props.pokemonDetails.sprites.front_default} alt={'Imagem Pokemon: ' + props.pokemonDetails.name} />
            <Types>
            {
                props.pokemonDetails.types.map((tipo, index) => {
                    return (
                        <p key={index}>{tipo.type.name}</p>
                    )
                })
            }
            </Types>
            <Details>

                <Moves>
                    <P>Moves</P>
                    {
                        props.pokemonDetails.moves.map((ataque, index) => {
                            return (
                                <p key={index}>{ataque.move.name}</p>
                                // <p key={index}>Ataque {index + 1}: {ataque.move.name}</p>
                            )
                        })
                    }
                </Moves>

                <Ability>
                    <P>Abilities</P>
                    {
                        props.pokemonDetails.abilities.map((habilidade, index) => {
                            return (
                                // <p key={index}>Abilidade {index + 1}: {habilidade.ability.name}</p>
                                <p key={index}>{habilidade.ability.name}</p>
                            )
                        })
                    }
                </Ability>

                <Number>
                    Nº: {props.pokemonDetails.id}
                </Number>
            </Details>

            {/* <Button onClick={handlePokemons}>Voltar</Button> */}
        </Card>
    )
}

const Pokemon = () => {
    const [pokemon, setPokemon] = useState({
        pokemonDetail: []
    })

    const {theme} = useContext(ThemeContext);

    const { id } = useParams();
    const navigate = useNavigate();

    const handlePokemons = () => {
        return navigate('/starter-project-outlet');
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await GetPokemon(id);

            const getPokemonDetails = {
                name: data.name,
                id: id,
                types: data.types,
                abilities: data.abilities,
                sprites: data.sprites,
                moves: data.moves.slice(0, 4)
            }

            setPokemon({
                pokemonDetail: getPokemonDetails
            })

        }
        fetchData()
    }, [])

    return (
        <Section style={{backgroundColor: theme.background, transition: theme.transition}}>
            {pokemon.pokemonDetail.length === undefined ? <PokemonDetails pokemonDetails={pokemon.pokemonDetail} /> : 'Buscando informações do pokemon'}
            <Button onClick={handlePokemons}>Voltar</Button>
        </Section>
    )
}

const Section = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 390px;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 275px;
    border-radius: 15px;
    padding: 30px;
    background: url(${imagem});
    background-size: cover;
`

const Name = styled.p`
    position: relative;
    top: -57px;
    left: -19px;
    font-weight: bold;
    margin-bottom: 117px;
`

const Img = styled.img`
    position: absolute;
    top: 42px;
    height: 150px;
`

const Types = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const P = styled.p`
    font-size: 20px;
    position: relative;
    top: 5px;
`

const Details = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
`

const Moves = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    width: 50%;
`

const Ability = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    width: 50%;
`

const Number = styled.p`
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    bottom: 30px;
`

const Button = styled.button`
    width: 100px;
    padding: 5px;
    font-size: 14px;
    color: black;
    border-radius: 10px;
    margin-top: 8px;
`

export default Pokemon;