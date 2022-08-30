import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import Data from './data.js'
function Myapp(){
    return(
        <>
            {/* <h1>Happy Krishna Janmastami</h1> */}
            {/* <Data></Data> */} 
            <Data></Data>
        </>
    )
}
ReactDom.render(<Myapp></Myapp>,document.getElementById('root'))