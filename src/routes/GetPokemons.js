import { useEffect, useState } from "react"
import styled, { css } from 'styled-components'
import { Link } from "react-router-dom"

import { useContext } from "react"
import { ThemeContext } from "../contexts/themeContext"

async function CreateListPokemon(count) {
    const createListPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${count}.`)
    const createListPokemon2 = await fetch(`https://pokeapi.co/api/v2/pokemon`)
    const response2 = await createListPokemon2.json();
    console.log(await response2);
    const response = await createListPokemon.json();
    return response.results
}

const Pokemons = (props) => {
    const { theme } = useContext(ThemeContext);

    return (
        <PokeList>
            <Ul>
                {
                    props.pokemons.map((pokemon, index) => {
                        return (

                            <Li key={index}>
                                <Link to={'/starter-project-outlet/pokemons/' + pokemon.id}>
                                    <Div 
                                    // style={{ color: theme.color, backgroundColor: theme.backgroundColor, transition: theme.transition }}
                                    >
                                        <p>{pokemon.name}</p>
                                        <Img src={pokemon.sprites.front_default} alt={'Imagem do Pokemon: ' + pokemon.name}></Img>
                                    </Div>
                                </Link>
                            </Li>
                        )
                    })
                }
            </Ul>
        </PokeList>
    )
}

const GetPokemon = () => {

    const { theme } = useContext(ThemeContext)

    const [pokemonList, setPokemonList] = useState({
        pokemon: []
    })

    const [count, setCount] = useState(10);

    useEffect(() => {
        const fetchData = async () => {
            const data = await CreateListPokemon(count)

            const getAllPokemons = await Promise.all(
                data.map(async pokemon => {
                    const { id, types, abilities, sprites, moves } = await getMoreInfos(pokemon.url)

                    return {
                        name: pokemon.name,
                        id,
                        types,
                        abilities,
                        sprites,
                        moves
                    }

                })
            )

            setPokemonList({
                pokemon: getAllPokemons
            })
        }
        fetchData()
    }, [count])

    async function getMoreInfos(url) {
        const response = await fetch(url);
        const { id, types, abilities, sprites, moves } = await response.json()
        return { id, types, abilities, sprites, moves };
    }

    return (
        <Section
        //  style={{ color: theme.color, backgroundColor: theme.background, transition: theme.transition  }}
         >
            <Pokemons pokemons={pokemonList.pokemon} />
            <Button onClick={() => {
                if(count <= 1282){
                    setCount(count + 10)
                }
                else{
                    setCount(1292)
                }
            }}>Load more</Button>
        </Section>
    )
}

const PokeList = styled.div`
    height: 100%;
`

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Ul = styled.ul`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    margin-top: 50px;
    justify-content: space-evenly;
`

const Div = styled.div`
    width: 150px;
    height: 250px;
    margin: 15px;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: space-evenly;
`

const Li = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
    color: Black;
    width: 200px;
    height: 50px;
    margin: 30px;
`

const Img = styled.img`
    width: 100%;
`

export default GetPokemon