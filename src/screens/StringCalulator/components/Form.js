import React from 'react'

const Form = () => {
  return (
    <div>
      <h2>String Calculator</h2>
      <form>
        <div>
          <label htmlFor="inputString">Enter numbers:</label>
          <input type="text" id="inputString" />
        </div>
        <button type="submit">Calculate</button>
      </form>
    </div>
  )
}

export default Form
