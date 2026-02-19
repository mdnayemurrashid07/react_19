import React from 'react'
import ProductCard from './components/ProductCard'

const App = () => {
  return (
    <div className='App'>
      <ProductCard src="src/assets/shoe.png" text="NIKE-SHOE"/>
      <ProductCard src="src/assets/shoe1.png" text="AIR-SHOE"/>
    </div>
  )
}

export default App
