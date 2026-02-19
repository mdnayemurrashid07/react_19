import React from 'react'
import ProductCard from './components/ProductCard'

const App = () => {
  return (
    <div className='App'>
      <ProductCard src="src/assets/shoe.png" text="SHOE-1"/>
      <ProductCard src="src/assets/shoe1.png" text="SHOE-2"/>
    </div>
  )
}

export default App
