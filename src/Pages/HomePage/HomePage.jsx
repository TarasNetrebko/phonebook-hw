// import { BaseContainer, ContentContainer } from "./HomePage.styled"
import { Outlet } from "react-router-dom"
import { Header } from "components/Header/Header"
import { Container } from "react-bootstrap"
export const HomePage = () => {
    return (
        <Container>
        <div>
          <Header />
          <main>
            <Outlet/>
          </main>          
        </div>
      </Container>
    )
}