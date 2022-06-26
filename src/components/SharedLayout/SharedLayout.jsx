import { Outlet } from "react-router-dom";
import { Link, Container } from "./SharedLayout.styled";

const SharedLayout = () => {
    return (
        <Container>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/movies'}>Movies</Link>
            </nav>
            <Outlet />           
        </Container>

       
    )
}

export default SharedLayout;