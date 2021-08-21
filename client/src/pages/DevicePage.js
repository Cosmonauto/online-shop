import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import { Context } from "..";
import {
    deleteItem,
    fetchOneDevice,
} from "../http/deviceAPI";
import { SHOP_ROUTE, EDIT_ROUTE } from "../utils/consts";
// import classes from "./DevicePage.module.css"


const DevicePage = () => {
    const [device, setDevice] = useState({ info: [] });
    const { id } = useParams();
    const history = useHistory();
    const { user } = useContext(Context);
    let email = localStorage.getItem("email")

    console.log(device)
    useEffect(() => {
        fetchOneDevice(id).then((data) => setDevice(data));
    }, []);

    const deleteDevice = (id) => {
        deleteItem(id).then(() => {
            history.push("/");
        });
    };
    const styles = StyleSheet.create({
        imageClass: {
            "@media (max-width: 767px)": {
                height: "300px",
                width: "300px",
            }
        }
    });

    return (
        <Container style={{ marginBottom: 30 }} className="mt-3">
            <Row style={{ height: 700, border: "4px solid #005A8D" }} className="d-flex flex-column align-items-center justify-content-center">
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-center text-center"
                        style={{
                            backgroundColor: "#FFF5FD",
                            width: 300,
                            height: 50,
                            fontSize: 32,
                            border: "none",
                        }}
                    >
                        <h3>{device.name}</h3>
                    </Card>
                </Col>
                <Col className="d-flex justify-content-center" md={4}>
                    <Image
                        className={css(styles.imageClass)}
                        style={{
                            objectFit: "contain",
                            width: "500px",
                            height: "400px"
                        }}

                        src={device.img}
                    />
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{
                            backgroundColor: "#FFF5FD",
                            width: 300,
                            height: 50,
                            fontSize: 32,
                            border: "none",
                        }}
                    >
                        <h3>Цена: {device.price} $</h3>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column mt-5 mb-4">
                <h1 style={{ marginTop: 20, marginBottom: 30 }}>Характеристики:</h1>
                {device.info.map((info) => (
                    <Row
                        key={info.id}
                        style={{
                            padding: 10,
                            marginBottom: 3,
                            fontSize: 20,
                        }}
                    >
                        {info.title}: {info.description}
                    </Row>
                ))}
            </Row>


            {email === "jesus" ?
                <>
                    <Button onClick={() => deleteDevice(id)}>УДАЛИТЬ</Button>
                    <Button onClick={() => history.push(EDIT_ROUTE)}>EDIT</Button>
                </>
                : null}

        </Container>
    );
};

export default DevicePage;