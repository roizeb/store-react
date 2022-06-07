import style from "./Header.module.css"

export default  function Title () {
    return <div className={style.block}><h1 className={style.Header}>The Fake Store</h1>
    </div>
}