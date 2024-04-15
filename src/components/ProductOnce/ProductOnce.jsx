import './ProductOnce.css'
import {Catalog} from '../../database'
import {useParams} from 'react-router-dom'
import productImg from '/card/product.webp'

export default function ProductOnce(){

    const {id} = useParams();
    const product = Catalog.find(product => product.id === parseInt(id))

    return(
        <div className="container">
            <h1>{product.name}</h1>
            <h1>Ostatok: {product.ost}</h1>
            <h1>{product.price} RUB</h1>
            <img src={productImg} alt="" className="catalog_item"/>
        </div>
    )
}