import React, { useState } from 'react'
import { AddProduct } from '../../config/firebase'
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

const SellItems = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [des, setdes] = useState("")
    const [stock, setstock] = useState("")
    const [brand, setbrand] = useState("")
    const [image , setImage] = useState()
    const [image1 , setImage1] = useState()
    const [image2 , setImage2] = useState()


    const Addproduct = async(e)=>{
        e.preventDefault()
        // console.log(image);
        const images = [image,image1,image2]
        await AddProduct({name, price, des, stock, brand, images})
        setName("")
        setPrice("")
        setdes("")
        setstock("")
        setbrand("")
    }
  return  (
    <form className=''>
    <div className="container p-6 mt-3">

      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Product Information</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">Use a valid and truthy info</p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
              Product name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                autoComplete="given-name"
                placeholder='Name of Product'
                style={{border:"1px solid green"}}
                className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-2"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
              Product Price
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="last-name"
                id="last-name"
                value={price}
                onChange={(e)=>{setPrice(e.target.value)}}
                autoComplete="family-name"
                placeholder='Price of Product'
                style={{border:"1px solid green"}}
                className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-2"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
              Description
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="street-address"
                id="street-address"
                value={des}
                onChange={(e)=>{setdes(e.target.value)}}
                autoComplete="street-address"
                placeholder='Details/Features of Product'
                style={{border:"1px solid green"}}
                className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-2"
              />
            </div>
          </div>

          <div className="sm:col-span-2 sm:col-start-1">
            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
              Stock
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="city"
                id="city"
                value={stock}
                onChange={(e)=>{setstock(e.target.value)}}
                autoComplete="address-level2"
                placeholder='Stock of Product'
                style={{border:"1px solid green"}}
                className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-2"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
              Brand
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="region"
                id="region"
                value={brand}
                onChange={(e)=>{setbrand(e.target.value)}}
                autoComplete="address-level1"
                placeholder='Brand of Product'
                style={{border:"1px solid green"}}
                className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-2"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
              Product Image 1
            </label>
            <div className="mt-2">
              <input
                type="file"
                onChange={(e)=>{setImage(e.target.files[0])}}
                placeholder='Image of Product'
                style={{border:"1px solid green"}}
                className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-2"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
              Product Image 2
            </label>
            <div className="mt-2">
              <input
                type="file"
                onChange={(e)=>{setImage1(e.target.files[0])}}
                placeholder='Image of Product'
                style={{border:"1px solid green"}}
                className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-2"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
              Product Image 3
            </label>
            <div className="mt-2">
              <input
                type="file"
                onChange={(e)=>{setImage2(e.target.files[0])}}
                placeholder='Image of Product'
                style={{border:"1px solid green"}}
                className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-2"
              />
            </div>
          </div>
        </div>
      </div>

    </div>

    <div className="mt-2 flex items-center justify-center gap-x-6 mb-5">
      <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
        Cancel
      </button>
      <button
        // type="submit"
        onClick={Addproduct}
        className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        Add Product
      </button>
    </div>
  </form>
  )
}

export default SellItems
