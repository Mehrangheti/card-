import React from "react";
import nds from "../assets/nds.png"; 

export default function Info() {
    return (
        <header>
            <img src={nds} className="image" alt="Profile" /> 
            <h2>Mehran Gity Yaqoobi</h2>
            <p className="career">Frontend Developer</p>
            <p className="span"><a href="#">Gity.wesite</a></p>
            <div className="btns">
                <div >
                    <button className="email"><i class="fa-solid fa-envelope"></i>Email</button>
                </div>
                <div >
                    <button className="linkden"><i class="fa-brands fa-linkedin"></i>Linkden</button>
                </div>
            </div>
        </header>
    );
}
