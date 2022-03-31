import React from 'react'
// import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { buyPokemonAction, returnPokemonAction } from '../redux/actions/gameShopAction'

export const BuyPokemon = () => {
    const dispatch = useDispatch()
    return (
        <div>

            <div>
                <button
                    className="btn btn-dark btn-sm mb-2"
                    onClick={() => {
                        dispatch(
                            buyPokemonAction(1)
                        )
                    }}>
                    Comprar
                </button>
            </div>
            <div>
                <button
                    className="btn btn-dark btn-sm"
                    onClick={() => {
                        dispatch(
                            returnPokemonAction(1)
                        )
                    }}>
                    Regresar
                </button>
            </div>
        </div>
    )
}
// const mapDispatchToProps = {
//     buyPokemonAction,
//     returnPokemonAction
// }
// export default connect(null, mapDispatchToProps)(BuyPokemon)