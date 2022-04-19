import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=> {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
       props.message && <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{props.message.type}</strong> : {props.message.msg}
           
        </div>
    )
}
