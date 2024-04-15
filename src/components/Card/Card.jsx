import productImg from '/card/product.webp'
import {Link} from 'react-router-dom'
import './Card.css'
import Modal from '../Modal/Modal';
import { useState } from 'react';

export default function Card({name,price,id,ost,addCard}){

    const [modalActive, setModalActive] = useState(false);

    return(
        <div className="container">
            <div className="catalog_item">
            <img src={productImg} alt="" />
            <div className="car_title">
                {name}
            </div>
            <div className="car_title">
                Ostatok: {ost}
            </div>
            <div className="card_price">
                {price}
            </div>
            <div className="buttons">
                <Link className='link' to={`${id}`}>Info</Link>

                <button className="open-btn" onClick={() => setModalActive(true)}>
                    Order
                </button>

                <Modal active={modalActive} setActive={setModalActive}>
                    <div class="form">
                    <h1>Basket</h1>
                    <div className="catalog_item">
                    <img src={productImg} alt="" />
                    <div className="car_title">
                        {name}
                    </div>
                    <div className="car_title">
                        Ostatok: {ost}
                    </div>
                    <div className="card_price">
                        {price}
                    </div>
                    <Link to='/basket'>
                        <button onClick={addCard}>Go to Cart</button>
                    </Link>
                    </div>
                </div>
                </Modal>
            </div>
            </div>
        </div>
    )
}



