import React from 'react';
import duyuru from "../duyuru.jpg"

const style = {
    height: "calc(100vh - 73.88px)",
    border: "unset"
}
function Basvuru() {
    return (
        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <img src={duyuru} alt="duyuru" style={style} />
        </div>
    )
}

export default Basvuru;