import React from 'react';
// import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useHistory } from "react-router-dom"
import { DEVICE_ROUTE } from "../utils/consts";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    root: {
        maxWidth: 245,
    },
    media: {
        height: 140,
    },
});

const DeviceItem = ({ device }) => {
    // const history = useHistory()
    const history = {}
    const classes = useStyles();

    return (
        // <Col md={3} className={"mt-3"} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
        //     <Card style={{ width: 150, cursor: 'pointer' }} border={"light"}>
        //         <Image width={150} height={150} src={`${process.env.REACT_APP_API_URL}${device.img}`} />
        //         <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
        //             <div>Samsung...</div>
        //             <div className="d-flex align-items-center">
        //                 <div>{device.rating}</div>
        //                 <Image width={18} height={18} src={star} />
        //             </div>
        //         </div>
        //         <div>{device.name}</div>
        //     </Card>
        // </Col>
        <Card className={classes.root} style={{ margin: "30px 30px 30px 0" }}>
            <CardActionArea onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
                <CardMedia
                    style={{ marginTop: "10px" }}
                    className={classes.media}
                    image={`${device.img}`}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                        {device.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary" onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
                    Подробнее
                </Button>
            </CardActions>
        </Card>
    );
};

export default DeviceItem;