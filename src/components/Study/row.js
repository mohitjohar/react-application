import React, { useState, useEffect } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


const StudyRow = ({ title, html, css, scss, js }) => {
    const [Html, setHTML] = useState(html);
    const [Css, setCSS] = useState(css);
    const [Sass, setSass] = useState(scss);
    const [javas, setJs] = useState(js);
    const [htmlorcss, setHtmlorCss] = useState('html');
    const [bigorsmall, setBigorsmall] = useState(false);

    const togglebig = () => {
        setBigorsmall(!bigorsmall);
    }

    const undomethod = () => {
        setCSS(css);
        setHTML(html);
        setSass(scss);
    }

    return <>
        <style>
            {Css}
        </style>
        <div className="container mb-3">
            <h3 className="text-center mb-3">{title}</h3>
            <div className="row">
                <div className={bigorsmall ? "col-md-12 mb-3" : "col-md-6"}>
                    <div className="card">
                        <div className="card-header d-flex justify-content-between">
                            <span> View</span>

                            <a href="#" onClick={() => togglebig()}><i class="fas fa-sync-alt"></i></a>
                        </div>
                        <div className="card-body">
                            <div className="html-space">
                                {ReactHtmlParser(Html)}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={bigorsmall ? "col-md-12" : "col-md-6"}>
                    <div className="card">
                        <ul className="nav nav-tabs bg-light">
                            {html ? <li className="nav-item">
                                <a className={htmlorcss === 'html' ? "nav-link active" : "nav-link"} href="#" onClick={() => setHtmlorCss('html')}>Html</a>
                            </li> : <></>}
                            {css ? <li className="nav-item">
                                <a className={htmlorcss === 'css' ? "nav-link active" : "nav-link"} href="#" onClick={() => setHtmlorCss('css')}>Css</a>
                            </li> : <></>}

                            {scss ? <li className="nav-item">
                                <a className={htmlorcss === 'sass' ? "nav-link active" : "nav-link"} href="#" onClick={() => setHtmlorCss('sass')}>Scss</a>
                            </li> : <></>}

                            {js ? <li className="nav-item">
                                <a className={htmlorcss === 'js' ? "nav-link active" : "nav-link"} href="#" onClick={() => setHtmlorCss('js')}>Js</a>
                            </li> : <></>}

                            <li className="ml-auto">
                                <a href="#" onClick={() => undomethod()} className="nav-link"><i class="fas fa-undo-alt"></i></a>
                            </li>
                        </ul>
                        <div className="card-body">
                            {htmlorcss === "html" && html ? <textarea className="form-control htmlinput" placeholder="Html Here" value={Html} onChange={(e) => { setHTML(e.target.value) }}></textarea> : <></>}
                            {htmlorcss === "css" && css ? <textarea className="form-control htmlinput" placeholder="Css Here" value={Css} onChange={(e) => { setCSS(e.target.value) }}></textarea> : <></>}
                            {htmlorcss === "sass" && scss ? <textarea className="form-control htmlinput" placeholder="Scss Here" value={Sass} onChange={(e) => { setSass(e.target.value) }}></textarea> : <></>}
                            {htmlorcss === "js" && js ? <textarea className="form-control htmlinput" placeholder="Js Here" value={javas} onChange={(e) => { setJs(e.target.value) }}></textarea> : <></>}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </>;

}

export default StudyRow;