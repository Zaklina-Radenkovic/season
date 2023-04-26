import React from 'react'

const Spinner = (props) => {
  return (
    <div className='ui active dimmer'>
      <div className='ui big text loader'>{props.message || 'Loading...'}</div>
    </div>
  )
}
//Or we can create defalut props object
// Spinner.defaultProps = {
//     message: 'Loading...'
// }
export default Spinner
