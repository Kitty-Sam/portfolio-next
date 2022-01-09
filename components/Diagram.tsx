import React from 'react';
import {Doughnut} from "react-chartjs-2";
import styles from './../styles/Diagramma.module.css'
import {Chart, ArcElement} from 'chart.js'

Chart.register(ArcElement);

const Diagram = (props) => {
    return (
        <div className={styles.diagram}>
            < Doughnut  data={
                {
                    labels:
                        [props.titleSkill]
                    ,
                    datasets: [
                        {
                            data: props.data,
                            backgroundColor: ["#ffc107", "black"],
                            hoverBackgroundColor: ["#ffc107", "black"],
                        },
                    ],
                }}
            />
        </div>
    );
};

export default Diagram;