// import React from 'react';
import { useState, useEffect , id } from 'react'

const Home = () => {


    const [pokemon, setPokemon] = useState([])
    // const [id, setId] = useState(1)


    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/1")
            .then(res => res.json())
            .then(res => setPokemon(res)
            )
    }, [])
    console.log(pokemon)
    return (
        <>
            <h1>My Pokemon</h1>
            {/* <img alt={pokemon.name} src={"pokemon/other/official-artwork/${id}.png"} /> */}
            <h2>Name : {pokemon.name}</h2>
            <h2>Height :{pokemon.height}</h2>
            <h2>Weight : {pokemon.weight}</h2>
          
        
        </>
    );
};

export default Home;