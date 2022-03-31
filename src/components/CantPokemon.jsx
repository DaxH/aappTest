import React from 'react'
import { useSelector } from 'react-redux'
// import { connect } from 'react-redux'

export const CantPokemon = () => {
  const gameShop = useSelector((state) => state.gameShop)
  return (
    <React.Fragment>
      Unidades: {gameShop.pokemon}
    </React.Fragment>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     gameShop: state.gameShop
//   }
// }

// export default connect(mapStateToProps)(CantPokemon)