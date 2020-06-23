import React, { useState, useEffect } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


const Study = () => {
    const [Html, setHTML] = useState("");
    const [CSS, setCSS] = useState("");
    const [htmlorcss, setHtmlorCss] = useState(true);


    return <>
        <style>
            {CSS}
        </style>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    {ReactHtmlParser(Html)}
                </div>

                <div className="col-md-6">
                    <ul className="nav nav-pills mb-3">
                        <li className="nav-item">
                            <a className={htmlorcss ? "nav-link active" : "nav-link"} href="#" onClick={() => setHtmlorCss(true)}>Html</a>
                        </li>
                        <li className="nav-item">
                            <a className={htmlorcss ? "nav-link" : "nav-link active"} href="#" onClick={() => setHtmlorCss(false)}>CSS</a>
                        </li>
                    </ul>
                    {
                        htmlorcss ? <textarea className="form-control mb-3" placeholder="Html Here" value={Html} onChange={(e) => { setHTML(e.target.value) }}></textarea> : <textarea className="form-control" value={CSS} placeholder="Css Here" onChange={(e) => { setCSS(e.target.value) }}></textarea>
                    }

                </div>
            </div>
        </div>
    </>;

}

export default Study;