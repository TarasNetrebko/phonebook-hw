import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavDiv = styled.div`
display: flex;
    align-items: center;
`
export const LoginDiv = styled.div`
    display: flex;
    align-items: center;
`
export const HeaderDiv = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
export const Title = styled.h1`
    margin-right: auto;
    margin-left: auto;
`
export const NavigationLink = styled(NavLink)`
    font-size: 20px;
    font-weight: 700;
    &:hover,
    &:focus, 
    &:active {
        color: #36b5e7;
    }
`