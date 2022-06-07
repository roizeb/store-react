import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./GetCategory.module.css"

export default function GetCategory() {
    const [category, setCategory] = useState([])

    useEffect(() => { Get() }, [])

    async function Get() {
        const result = await axios.get("https://fakestoreapi.com/products/categories")
        setCategory(result.data)
    }

    return <div className={style.category}  >
        {category.map(item => <Link to={`/GetList/${item}`} key={item}> <div className={style.block}>
            {item.toUpperCase()}</div></Link>)}
    </div>
}
