import React from 'react'
import { useSelector } from 'react-redux'

const ResultadoPokemon = () => {
    const stateSearch = useSelector((state) => state.search)
    console.log(stateSearch.loading);
    return (
        <div>
            <h3 className="text-white">Resultado: </h3>
            {
                stateSearch.loading
                &&
                <div className="text-warning">Buscando...</div>
            }
            {
                stateSearch.data.length >= 1
                &&
                <div className="text-success">
                    <img src={stateSearch.data[0].sprites.front_default} alt="" />
                    <span>{stateSearch.data[0].name}</span>
                </div>
            }
            {
                stateSearch.error !== ''
                &&
                <span className='text-danger'>{stateSearch.error}</span>
            }
        </div>
    )
}

export default ResultadoPokemon