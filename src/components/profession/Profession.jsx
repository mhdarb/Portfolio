import React from 'react'
import "./profession.scss"

export default function Profession() {
    return (
        <div className="profession" id="profession">
            <div className="left">
                <div className="bg">
                    <a class="link" target="_blank" href="https://www.avizva.com/index.html" rel="noreferrer"><h1>AVIZVA</h1></a>
                    <div className="location">
                    <i class="fas fa-map-marker-alt"></i>
                        <p>Gurugram Building No.14, 16th Floor, Tower - D, DLF Cyber City, DLF Phase 3, Sector 25 A, Gurugram 122002 Haryana.</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <h1>Profession</h1>
                <div className="container">
                <div className="title">
                    <h2>Associate Software Trainee</h2>
                    <span>Aug 30, 2021 - present</span>
                </div>
                <div className="AboutCompany">
                    <p>AVIZVA offers digital solutions, portal solutions, integration & e-commerce platform, and automating business platforms.</p>
                    <h2>CTC : 7 lpa</h2>
                </div>
                <div className="work" id="profession">
                    <h3> Full Stack Development</h3>
                    <ul className="techlist">
                        <li >HTML</li>
                        <li>CSS</li>
                        <li>Javscript</li>
                        <li>Java</li>
                        <li>Spring</li>
                        <li>React</li>
                        <li>Database</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}
