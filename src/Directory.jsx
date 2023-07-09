import React from 'react'
import styled from 'styled-components'

function Directory() {
  return (
    <Container>
        <a href="/form">
            <Record>
                <h1> Upload Document</h1>
            </Record>
        </a>
        <Learn>
            <h1> Learn More</h1>
        </Learn>
    </Container>
  )
}

export default Directory

const Container=styled.div`
height: 89vh;
background-color: rgb(0, 0, 0);
display: flex;
justify-content: center;
`
const Record=styled.div`
    
    border-color: rgb(137, 194, 217);
    border-width: 0.2rem;
    border-style: solid;
    border-radius: 15rem;
    height: 20rem;
    width: 94%;
    margin-top: 4rem;
    position: absolute;
    cursor: pointer;
    h1{
        color: rgb(137, 194, 217);
        font-size: 10rem;
        text-align: center;
        margin: 2% auto 2% auto;
        position: relative;
    }
`
const Learn=styled.div`
    background-color: rgb(137, 194, 217);
    border-radius: 15rem;
    height: 20rem;
    width: 94%;
    margin-top: 28rem;
    border-width: 0.2rem;
    border-color: rgb(137, 194, 217);
    border-style: solid;

    a{
        text-decoration: none;
    }
    h1{
        color: black;
        font-size: 10rem;
        text-align: center;
        margin: 2% auto 2% auto;
        position: relative;
        
    }
`
