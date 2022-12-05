import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({ saludo }) => {
    return <div>
        {saludo}
        {/* a MODO DE PRUEBA COLOCO EL ITEM COUNT, LUEGO QUITARLO */}
        <ItemCount stockInicial={5} />
    </div>;
}

export default ItemListContainer;