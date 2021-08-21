import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Card, Row } from "react-bootstrap";

const BrandBar = observer(() => {
    const { device } = useContext(Context)

    return (
        <Row className="d-flex flex-direction-row justify-content-center text-center">
            {device.brands.map(brand =>
                <Card
                    style={{ cursor: 'pointer', display: "flex" }}
                    key={brand.id}
                    className="p-2"
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;