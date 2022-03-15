import React from 'react';
import styled from 'styled-components';

const Navbar = ()=>{
    return(
        <>
            <NavbarContainer>
                <NavbarLarge>
                    <h3><a href="#">SpringSpree'22</a></h3>
                    <ul class="nav-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </NavbarLarge>
                <NavbarSmallNav>
                    <h3><a href="#">SpringSpree'22</a></h3>
                    <button id="toggle-navbar" onclick="navbarToggleFun()">
                        <div class="hamburger" id="hamburger">
                            <span class="line"></span>
                            <span class="line"></span>
                            <span class="line"></span>
                        </div>
                    </button>
                </NavbarSmallNav>
                {/* <ul class="small-nav-links small-nav" id="mobile-nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul> */}
            </NavbarContainer>
        </>
    )
}

export default Navbar;

const NavbarContainer = styled.div`
    position: fixed;
    z-index: 120;
    width: 100%;
    color: white;
    font-family: 'Poppins';
    top:0;

    > .small-nav-links{
        @media (max-width: 860px) {
            align-items: center;
            flex-direction: column;
            gap: 1rem;
            list-style: none;
            background-color: #3f3f3fd7 !important;
            transform: translateY(calc( (-140%) - 100px ));
            padding: 0;
            transition: all 300ms ease-in-out;
            z-index: 119;
            height: 0px;
            overflow: hidden;
        }
    }
    
`;

const NavbarLarge = styled.div`
    background-color: rgba(0, 0, 0, 0.308);
    display: flex;
    padding: 10px 75px;
    justify-content: space-between;

    > h3{
        font-family: 'signatra';
        font-weight: 400;
        font-size: 3rem;
    }

    > ul{
        display: flex;
        gap: 2rem;
        list-style: none;
        align-items: center;    
    }

    > ul li a{
        -webkit-transition: all 100ms ease-in 10ms;
        -o-transition: all 100ms ease-in 10ms;
        transition: all 100ms ease-in 10ms;

        &:hover{
            border-bottom: 2px solid #ecf0f1;
        }
    }

    @media (max-width: 860px){
        display: none;
    }
`;

const NavbarSmallNav = styled.div`
    background-color: rgba(0, 0, 0, 0.308);
    display: none;

    > #toggle-navbar{
        background: none;
        border: none;
        transform: scale(0.75);

        > .hamburger .line{
            width: 50px;
            height: 5px;
            background-color: #ecf0f1;
            display: block;
            margin: 8px auto;
            border-radius: 8px;
            -webkit-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
        }
    }

    @media (max-width: 860px) {
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 10px 1rem;
        transition: all 300ms ease-in-out;
        z-index: 120;
    }
`;

