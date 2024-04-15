import {Link} from 'react-router-dom'
import {Catalog} from '../../database'
import './Basket.css'

export default function BasketPage({basket}) {
    
    const cardProducts = basket.map(id => Catalog.find(item => item.id == id))
    const summa = cardProducts.reduce((summ,item) => summ + item.price,0)

    return(
        <>
        
        <div className="container">
            <div className="basket-page">
                <h1>Basket</h1>
                {
                    cardProducts.map( product =>
                        <div key={product.id} className="card">
                            <h3>{product.name}</h3>
                            <i>{product.price} RUB</i> <br /><br />

                            <Link to={`${product.id}`}>Info</Link>
                            <hr/>
                        </div>
                        )
                }

                <h3>Obshaya Summa: {summa} RUB</h3>
            </div>
        </div>
        
        </>
    )

}