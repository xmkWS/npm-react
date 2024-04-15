import Card from '../Card/Card'
import './Catalog.css'
import {Catalog} from '../../database'
import {useState} from 'react'


export default function catalog({addToBasket,basket}){

    const[query,setQuery] = useState("")
    const[sorting,setSorting] = useState("")

    function search(e){
        setQuery(e.target.value)
    }

    const filterdProducts = Catalog.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))

    function sort(event){
        const sortValue = event.target.value
        setSorting(sortValue);
    }

    const sortProducts = (sorting, Catalog) => {
        switch(sorting){
            case 'price_asc':
                return[...Catalog].sort((a,b) => a.price - b.price);
            case 'price_desc':
                return[...Catalog].sort((a,b) => b.price - a.price);
            case 'price_ascO':
                return[...Catalog].sort((a,b) => a.ost - b.ost);
            case 'price_descO':
                return[...Catalog].sort((a,b) => b.ost - a.ost);
            default:
                return Catalog
        }
    }

    const sortAndFilterProducts = sortProducts(sorting,filterdProducts)

    

    return(
        <>
            <div className="container">
                <div className="catalog">
                    <div className="settings">
                        <input onChange={search} type="search" name="search" placeholder='Search'/>
                        <select onChange={sort}>
                            <option value="price_asc">По возрастанию цены</option>
                            <option value="price_desc">По убыванию цены</option>
                            <option value="price_ascO">По возрастанию остатка</option>
                            <option className='selected' value="price_descO">По убыванию остатка</option>
                        </select>
                    </div>
                    <div className="catalog_list">
                    {
                        sortAndFilterProducts.length ?
                        sortAndFilterProducts.map((card,index) =>{
                            return(
                                <Card 
                                key={index} 
                                {...card}
                                addCard={
                                    () => addToBasket([...basket,card.id])
                                }
                                />
                            )
                        })
                        :
                        <h2>По запросу "{query}" ничего не найдено</h2>
                    }
                    </div>
                </div>
            </div>
        </>
    )

}