import React,{Component} from 'react'
import './Header.css'

const FunctionalHeader = ()=>{
    return(
    <div>
        <h1 className='logo'>Header functional Component</h1>
    </div>
    )
}

class ClassHeader extends Component{
    constructor()
    {
        super()
        this.state = {
            title: 'Class Component',
        }
    }
    
    render()
    {
        const myStyle={
            logo:{
                fontSize:'30px',
                color:'green'
            }
        }
        return(
            <div>
                <FunctionalHeader/>
                <div style={myStyle.logo}>{this.state.title}</div>
            </div>
        )
    }
}

export  default ClassHeader 
