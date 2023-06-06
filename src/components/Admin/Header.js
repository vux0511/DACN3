import { MdLogout } from "react-icons/md";
import { FcShop } from "react-icons/fc";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            className="img-brand"
                            src="https://icon-library.com/images/shop-icon-png/shop-icon-png-6.jpg"
                            alt=""
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <a href="">
                                <MdLogout />
                                <span> Log out</span>
                            </a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
