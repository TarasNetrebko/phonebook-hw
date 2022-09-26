// import { HeaderDiv, NavDiv } from "./Header.styled"
import { useSelector } from "react-redux"
import { getIsLogedIn} from "redux/auth/auth-selectors"
import { UserMenu } from "components/UserMenu/UserMenu"
import { RegisterLoginMenu } from "components/RegisterLoginMenu/RegisterLoginMenu"
import { NavigationLink, HeaderDiv, NavDiv } from "./Header.styled"

export const Header = () => {
    const isLogedIn = useSelector(getIsLogedIn);
    return (
        <HeaderDiv>
            <NavDiv>
            <NavigationLink to="/contacts">Contacts</NavigationLink>
            </NavDiv>
            <h1>Phonebook</h1>
            {isLogedIn ? <UserMenu/> : <RegisterLoginMenu/>}
        </HeaderDiv>
    )
}