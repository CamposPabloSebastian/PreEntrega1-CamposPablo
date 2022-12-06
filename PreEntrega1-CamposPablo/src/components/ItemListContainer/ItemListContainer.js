import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import listProduct from "../../BD";

const ItemListContainer = ({ saludo }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        // fetch('./data/BBDD.json')
        //     .then(res => res.json())
        //     .then(objetos => setData(objetos));
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(listProduct);
            }, 2000)

        })
        promesa.then(res => setData(res));

    }, []);

    return <div>
        {saludo}
        {/* a MODO DE PRUEBA COLOCO EL ITEM COUNT, LUEGO QUITARLO */}
        <ItemCount stockInicial={5} />
        <ItemList listaObjetos={data} />
    </div>;
}

export default ItemListContainer;