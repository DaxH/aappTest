import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPokemon } from '../../redux/actions/searchAction'

const BuscadorPokemon = () => {
  const dispatch = useDispatch()
  const [pokemon, setPokemon] = useState('mewtwo')
  return (
    <div className="form-group">
      <label htmlFor="buscarPokemon" className="text-white">
        Buscar Pokemon
      </label>
      <input
        type="text"
        className="form-control"
        id="buscarPokemon"
        value={pokemon}
        onChange={(event) => {
          setPokemon(event.target.value)
        }} />
      <button
        className="btn btn-primary mt-3"
        onClick={() => {
          dispatch(fetchPokemon(pokemon))
        }}>Buscar</button>
    </div>
  )
}
export default BuscadorPokemon