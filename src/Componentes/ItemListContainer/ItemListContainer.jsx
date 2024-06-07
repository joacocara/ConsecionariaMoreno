import './ItemListContainer.css'

const ItemListContainer = ( {mensaje}) => {

    return (
        <div className="list_container">
            <h2>Autos 0km y Usados</h2>
            <hr />

            <p>{mensaje}</p>
        </div>
    )
}

export default ItemListContainer