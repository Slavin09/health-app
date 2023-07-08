import React from 'react'
import styled from 'styled-components'

function Immerse() {
  return (
    <Container>
        {/* <ImmerseImg className='Blue' src="public/Delivery.webp" at="Immersive Image"/> */}
        <BlueFilter/>
        <Moto>
            <h1>
                Change healthcare<br/>today.
            </h1>
        </Moto>
    </Container>
  )
}

export default Immerse

const Container=styled.div`
    height: 48.3rem;
    background: url("public/Delivery.webp") center / cover no-repeat;
`

// const ImmerseImg=styled.img`
//     height: auto;
//     width: 120rem;
//     /* : radial-gradient(rgba(0, 122, 204, 0.3), rgb(0, 122, 204)); */
//     margin: 0 0 0 0;
//     z-index: -1;
// `
const BlueFilter=styled.div`
    background-image: radial-gradient(rgba(1, 42, 74, 0.3), rgb(8, 50, 85, 0.9));
    height: 48.3rem;
    z-index: 2;
`
const Moto=styled.div`
    margin-top: -35rem;
    z-index: 4;
    display: flex;
    justify-content: center;
    text-align: center;
    h1{
        color: white;
        font-size: 7rem;
    }
    
`