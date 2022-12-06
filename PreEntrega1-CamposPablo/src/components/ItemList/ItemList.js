import React from "react";
import Item from "../Item/Item";

const ItemList = ({ listaObjetos }) => {
    return (
        <div>
            {listaObjetos.map(obj => (
                <Item objeto={obj} key={obj.id} />
            ))}
        </div>
    );
}

export default ItemList;