import React from 'react'
// import ReactDOM from 'react-dom/client'
import PropTypes from 'prop-types'

export default function Car(props){
    return <h1>I have a {props.model}</h1>
}

Car.defaultProps ={
    model:"Mercedes"
}

Car.propTypes = {
    model :PropTypes.string
}

// function Garage(){
//     return (
//         <>
//         <h1>Who is in the garage</h1>
//         <Car model = "Mahindra"></Car>
//         </>
//     )
// }

// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);

// root.render(<Garage />)