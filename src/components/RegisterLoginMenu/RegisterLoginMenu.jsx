import { LoginDiv } from "components/Header/Header.styled"
import { NavigationLink } from "components/Header/Header.styled"


export const RegisterLoginMenu = () => {
    return (
        <LoginDiv>
            <NavigationLink to="/register">Registration |</NavigationLink>
            <NavigationLink to="/login">| Login</NavigationLink>
        </LoginDiv>
    )
}