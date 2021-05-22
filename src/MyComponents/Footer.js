import React from 'react'

//this is how you can write your css in separate folder 
import './footer.css'

export const Footer = () => {
let footerStyle={
    top: "40vh",
    position: "relative",
    width: "100%",
    border: "2px solid red"
}

    return (
        <footer className="bg-dark text-light py-3" style={footerStyle}>
            <p className="text-center">
                Copyright &copy; MyTodosList.com
            </p>
        
        </footer>
    )
}
