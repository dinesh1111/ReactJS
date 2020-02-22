import React from 'react'
import ReactDom from 'react-dom'
import ClassHeader from './Header'
 

const Home = () =>{
    return (
        <div>
            <ClassHeader/>
        <h1>First React App</h1>
        </div>
    )
}

ReactDom.render(<Home/>,document.getElementById("root"));