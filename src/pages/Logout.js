import React from 'react'
const Logout = (p) =>{
    localStorage.clear();
    p.history.push("/");
        window.location.reload(false);
    return Logout;
}

export default Logout;