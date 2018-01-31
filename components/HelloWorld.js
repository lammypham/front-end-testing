import React from 'react'
import PositiveCounter from './PositiveCounter/PositiveCounter';

const HelloWorld = () => {

  return (
    <div className='hello-world'>
      <h1>Hello World</h1>
      <p>Welcome to my world</p>
      <span>I am testing</span>

      <PositiveCounter />
    </div>
  )
}
export default HelloWorld