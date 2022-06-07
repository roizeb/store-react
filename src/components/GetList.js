import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import style from "./GetList.module.css"


export default function GetList() {
    const params = useParams(),
        item = params.item
    const [list, setList] = useState([])

    useEffect(() => { GetLi() }, [])

    async function GetLi() {
        const result = await axios.get(`https://fakestoreapi.com/products/category/${item}`)
        setList(result.data)
    }

    return <main>
        <h2>{item.toUpperCase()}</h2>
        <div className={style.list}>
            {list.map(item =><div className={style.items}key={item.id} ><Link to={`/GetItem/${item.id}`} > 
                    <img src={item.image} width={200} height={100} /><br />
                   </Link><p className={style.price}> {item.price}$</p> <br /><button className={style.btn} >add to cart</button> <br/><Link to={`/GetItem/${item.id}`}>{item.title} </Link></div>)}
        </div>
    </main>
}
