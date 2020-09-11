import React from 'react';
import { Parallax, Background } from 'react-parallax';
import FormButton from "../components/FormButton";

const MyComponent = () => (
    <div>
        {/* -----dynamic blur-----*/}
        <Parallax
            // blur={{ min: -15, max: 15 }}
            bgImage={require('../pages/images/second.jpg')}
            bgImageAlt="formimg"
            strength={-200}
        >
        <FormButton />
            <div style={{ height: '800px' }} />
        </Parallax>
         {/* -----renderProp: "renderLayer"-----*/}
    </div>
);
export default MyComponent;
