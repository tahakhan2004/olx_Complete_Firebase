import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Categories from '../../components/CategoriesSection'
import Card from '../../components/Card'
import Navbar from '../../components/navbar'
import Footer from '../../components/Footer'
import { getProduct } from '../../config/firebase'

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getproducts()
    }, [])
    const getproducts = async()=>{
        const ads = await getProduct()
        setProducts(ads)
    }
    return (
        <div className=''>
            <Banner />
            <Categories />
            <div className='max-w-[1400px] mt-20'>
                <div className='flex flex-wrap justify-center gap-6'>

                    {
                        products.map((product) => (
                            <Card brand={product.brand} desc={product.description} id={product.id} price={product.price} rating={product.stock} thumbnail={product.imagess[0]} title={product.name} />

                        ))
                    }
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Home