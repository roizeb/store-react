import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./GetItem.module.css"


export default function GetItem() {
    const params = useParams(),
        id = params.id
    const [product, setProduct] = useState([])

    useEffect(() => { GetProduct() }, [])

    async function GetProduct() {
        const result = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProduct(result.data)
    }

    return <div className={style.block}>
        <img src={product.image} width={200} height={130} />
        <p className={style.header}>{product.title}</p >
        <button className={style.btn}>add to cart</button>
        <br /> {product.price}$<br />
        <p>{product.description}</p>
    </div>

}
