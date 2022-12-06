import React from "react";

const Item = ({ objeto }) => {
    return (
        <>
            <div><span>{objeto.marca}</span> - <span>{objeto.modelo}</span></div>
            <div>
                {objeto.tipo}
            </div>
            <img src={objeto.img} alt="" width={"200px"}></img>
            <hr></hr>
        </>
    )
}

export default Item;