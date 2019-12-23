import React from 'react';

const style = {
    width: "100%",
    height: "calc(100vh - 73.88px)",
    border: "unset"
}
function Basvuru() {
    return (
        <iframe title="basvuru" style={style}
            src="https://docs.google.com/forms/d/e/1FAIpQLScM8HXQWItlWYS6oOcXjy9J3Zwm7kSul8QIZog7yJWhuWnx5g/viewform"
        ></iframe>
    )
}

export default Basvuru;