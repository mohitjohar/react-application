import React, { useState, useEffect } from 'react';
import StudyRow from '../../components/Study/row';
import Header from '../../components/Header';


const Study = () => {

    return <>
        <Header />
        <div className="py-3">
            <StudyRow title="rotating logo" html="<img src='/img/logo.png' class='rotatinglogo' />" css=".rotatinglogo{max-width:100px}" />
            <StudyRow title="rotating logo" js="<img src='/img/logo.png' class='rotatinglogo' />" css=".rotatinglogo{max-width:100px}" />
        </div>
    </>;

}

export default Study;