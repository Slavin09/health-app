import React from 'react'
import { styled } from 'styled-components'
import Login from './Login'

function Header() {
  return (
    <div>
        <Container>
        <Nav className="is-sstuck">
            <NavMenu>
              <a>
              <UserImg src="/public/MEDHUB_logo.png" alt='User Image'/>
              </a>
            <a href=''>
                <span>Home</span>

            </a>
            <a href=''>
                <span>About</span>

            </a>
            <a href=''>
                <span>Directory</span>
            </a>
            <a>
              <SignUp>
                <Login/>
              </SignUp> 
            </a>
            </NavMenu>       
        </Nav>
        </Container>
    </div>
  )
}

export default Header

const Container=styled.div`
overflow-x: hidden;
`
const Nav=styled.nav`
position: absolute;
height:14rem;
width: 100%;
margin-top: 0.8rem;
display: flex;
align-items: center;
padding: 0 20px;
z-index: 2;
`
const NavMenu=styled.div`
display: flex;
width: 100%;
justify-content: center;
a{
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 5%;
    text-decoration: none;
    span {
        font-size: 1.15rem;
        letter-spacing: 1.30px;
        color: rgb(97, 165, 194);
        transition: 150ms;
        font-family: 'Do Hyeon', sans-serif;
        position: relative;

    &:hover{
        color: rgba(256, 256, 256);
    }

        &:after {
            content: "";
            height: 2px;
            background: white;
            position: absolute;
            left: 0px;
            right: 0px;
            bottom: -1px;
            opacity: 0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.45, 0.75, 0.70) 0s;
            transform: scaleX(0)
        }
    }

    &:hover {
        span:after{
            transform: scaleX(1);
            opacity: 1;
             
        }
    }
}
`
const SignUp=styled.div`

display: flex;
align-items: center;
`
const UserImg=styled.img`
height: 300px;
border-radius: 50px;
margin: -80px;
`
