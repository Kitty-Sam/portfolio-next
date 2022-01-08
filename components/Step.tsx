import React from 'react';
import style from '../styles/Step.module.css'


const Step = (props) => {

    return (
        <div className={style.step}>

            <div className={style.text}>
                <div className={style.year}>{props.year} </div>
                <div className={style.title}>{props.title} </div>
                <div className={style.usefulInfo}>{props.usefulInfo} </div>

            </div>

        </div>
    );
};

export default Step;