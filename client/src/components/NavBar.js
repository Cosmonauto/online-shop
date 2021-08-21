import React, { useContext } from 'react';
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, ABOUT_ROUTE } from "../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useHistory } from 'react-router-dom'
import logo from '../../src/assets/dp-logo-full.png'
import { StyleSheet, css } from "aphrodite";


const NavBar = observer(() => {
    const { user } = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem("token")
        history.push(LOGIN_ROUTE)
    }
    let email = localStorage.getItem("email")
    console.log(email)

    const styles = StyleSheet.create({
        navbarResponsive: {
            "@media (max-width: 767px)": {
                width: "80px",
                height: "25px"

            }
        }
    });

    return (
        <>
            <Navbar
                style={{ backgroundColor: "#005A8D", height: "80px" }}
                variant="white">
                <Container>
                    <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}><img className={css(styles.navbarResponsive)} src={logo} style={{ width: "175px", height: "42px" }} /></NavLink>
                    {user.isAuth ?
                        <Nav className="ml-auto" style={{ color: 'white' }}>
                            {email === "jesus" ? <Button
                                style={{ marginRight: "20px", backgroundColor: "#145374", color: "white" }}
                                variant={"outline-white"}
                                onClick={() => history.push(ADMIN_ROUTE)}
                            >
                                Админ
                            </Button> : null}
                            <Button
                                style={{ backgroundColor: "#145374", color: "white", marginRight: "20px" }}
                                variant={"outline-white"}
                                onClick={() => history.push(ABOUT_ROUTE)}
                                className="ml-2"
                            >
                                О нас
                            </Button>
                            <Button
                                style={{ backgroundColor: "#145374", color: "white" }}
                                variant={"outline-white"}
                                onClick={() => logOut()}
                                className="ml-2"
                            >
                                Выйти
                            </Button>
                        </Nav>
                        :
                        <Nav className="ml-auto" style={{ color: 'white' }}>
                            <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                        </Nav>
                    }
                </Container>
            </Navbar>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 260"><path fill="#005A8D" fill-opacity="1" d="M0,64L26.7,74.7C53.3,85,107,107,160,101.3C213.3,96,267,64,320,58.7C373.3,53,427,75,480,80C533.3,85,587,75,640,101.3C693.3,128,747,192,800,197.3C853.3,203,907,149,960,128C1013.3,107,1067,117,1120,149.3C1173.3,181,1227,235,1280,245.3C1333.3,256,1387,224,1413,208L1440,192L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
        </>
    );
});

export default NavBar;