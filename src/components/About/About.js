import "./About.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { BsInstagram } from "react-icons/bs";
import { AiFillGithub, AiOutlinePhone } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

function About() {
    return (
        <>
            <Header />
            <h3>Page about</h3>
            <Footer />
        </>
    );
}

export default About;
