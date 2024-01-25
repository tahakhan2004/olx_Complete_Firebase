import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import shayan from "../../assets/linkedinDP.png"
import { HiOutlineLocationMarker } from "react-icons/hi";
import Navbar from '../../components/navbar';
import Footer from '../../components/Footer';
import { getProductDetails} from "../../config/firebase"
import { onAuthStateChanged } from 'firebase/auth';

const ProductDetail = () => {
    const [product, setProduct] = useState()
   
    console.log(product);
    const { id } = useParams()

    useEffect(() => {
       getDetails()
           
    }, [])
    // console.log(userr);

    const getDetails = async()=>{
      const signProd = await getProductDetails(id)
      setProduct(signProd)
    }

    if (!product) {
        return <h1>Loading</h1>
    }

    return (
        <>
        <div className='mt-10'>
            <div className='max-w-[1400px] mx-auto flex p-2'>
                <div className='w-[70%] p-3'>
                    {/* <img src={product.images[0]} className='h-full object-cover' alt="" /> */}
                    <div id="carouselExampleIndicators" className="carousel slide bg-black">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active ">
      <img src={product.imagess[0]} className="d-block w-[550px] h-[550px] ms-auto me-auto" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={product.imagess[1]} className="d-block w-[550px] h-[550px] ms-auto me-auto" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={product.imagess[2]} className="d-block w-[550px] h-[550px] ms-auto me-auto" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

                </div>
                <div className='w-[30%] mt-3'>
<div className='border border-gray-400'>
                <div className='flex p-3 gap-3'>
                    
                <img src={shayan} width={70} className='rounded-full' />
                        {/* <div className='flex flex-col justify-between '>
                           {userr ? <> <p style={{color: "#002F34", fontWeight:600}}>{userr.email}</p> 
                            <p>Member since Mar 2023</p>
                            <p style={{color: "#002F34", fontWeight:600}}> {"See Profile >"} </p>
                            </> : <Link to={"/login"}>Login</Link>} */}
                            <div className='flex flex-col justify-between '>
                           <p style={{color: "#002F34", fontWeight:600}}>Taha Khan</p> 
                            <p>Member since Mar 2023</p>
                            <p style={{color: "#002F34", fontWeight:600}}> {"See Profile >"} </p>
                           
                        </div>
                     
                        
                    </div>
                    <div className='justify-center flex flex-col items-center mb-3'>
                        <button style={{background: "#002F34", padding:"8px 10px", color:"white", width: "90%",borderRadius:"0.4rem", textAlign:"center", alignItems:"center", border:"none"}}>Show Phone Number</button>
                        <button style={{marginTop:"13px",background: "#ffffff", padding:"8px 10px", color:"#002F34", width: "90%",borderRadius:"0.4rem", textAlign:"center", alignItems:"center", border:"2px solid #002F34", fontWeight:700}}>Chat</button>
                        </div>
                </div>

                <div className='border border-gray-400 mt-3 p-3'>
                    <h3 style={{color:"#002F34",fontWeight:700 , fontSize:"24px"}}>Location</h3>
                    <div className='flex mt-1'>
                    <span className="font-bold text-xl"><HiOutlineLocationMarker color={"#002F34"}/></span>
                    <h3 style={{color:"#002F34" , fontSize:"18px"}} className='ms-1'>Garden East, Karachi</h3>
                    </div>
                </div>
                </div>
            </div>
        <div className='p-4'>
            <div className='w-[70%] border border-gray-400 p-3'>
                    <h3 style={{color:"#002F34",fontWeight:700 , fontSize:"40px"}}>Rs {product.price}</h3>
                    <p style={{color:"#002F34",fontWeight:500 , fontSize:"19px", marginTop:"10px"}}>{product.description}</p>
                    <div className='flex mt-2'>
                    <span className="font-bold text-xl"><HiOutlineLocationMarker color={"#002F34"}/></span>
                    <h3 style={{color:"#002F34" , fontSize:"18px"}} className='ms-1'>Garden East, Karachi</h3>
                    </div>
                </div>
                <div className='w-[70%] border border-gray-400 p-3 mt-3'>
                <h3 style={{color:"#002F34",fontWeight:700 , fontSize:"24px"}}>Details</h3>
    
            
                    <div className='flex justify-between pt-3   '>
                    <p style={{color:"#002F34" , fontSize:"18px"}} className=''>Brand</p>
                    <p style={{color:"#002F34",fontWeight:600 , fontSize:"18px"}}>{product.brand}</p>

                    <p style={{color:"#002F34" , fontSize:"18px"}} className=''>Price</p>
                    <p style={{color:"#002F34",fontWeight:600 , fontSize:"18px"}}>{product.price}</p>
                    <p style={{color:"#002F34" , fontSize:"18px"}} className=''>Stock</p>
                    <p style={{color:"#002F34",fontWeight:600 , fontSize:"18px"}}>{product.stock}</p>
                    </div>
                </div>   

                <div className='w-[70%] border border-gray-400 p-3 mt-3'>
                <h3 style={{color:"#002F34",fontWeight:700 , fontSize:"24px"}}>Description</h3>
                <p style={{color:"#002F34" , fontSize:"18px"}} className='mt-3'>{product.description}</p>
                </div>   
        </div>
        </div>

        <Footer/>
        </>
    )
}

export default ProductDetail