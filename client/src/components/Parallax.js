import React from 'react';
import { Parallax, Background } from 'react-parallax';
import FormButton from "../components/FormButton";

const MyComponent = () => (
    <div>
        <Parallax
            bgImage={require('../pages/images/second.jpg')}
            bgImageAlt="formimg"
            strength={-200}
        >
            <FormButton/>
            <div style={{ height: '800px' }}/>
        </Parallax>
    </div>
);

export default MyComponent;
