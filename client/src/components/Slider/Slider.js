import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export default function Slider() {

    return (
        <AwesomeSlider style={{ height: "480px", width: "1200px", marginTop: "10px", marginBottom: "50px" }}>
            <div data-src="https://i.pinimg.com/originals/24/3a/18/243a18523afa33b89486fccb4233be99.jpg" />
            <div data-src="https://specials.rbc.ru/wp-content/uploads/2021/06/Snimok-ekrana-2021-06-04-v-10.33.24.png" />
            <div data-src="https://realt.by/uploads/pics/01_8298a2.jpg" />
        </AwesomeSlider>
    )
}
