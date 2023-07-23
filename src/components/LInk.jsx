import React from 'react'

const LInk = (props) => {

const onCLickEvent = () => {
    Friends.filter( users => users.userName === 'Okacha Emmanuel')
}

  return (
    <div onClick={onCLickEvent}>

 {props.data}

    </div>
  )
}

export default LInk