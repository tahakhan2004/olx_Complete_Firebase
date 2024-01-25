import React from 'react'
import animal from "../../assets/animal.png"
import bikes from "../../assets/bikes.png"
import books from "../../assets/books.png"
import business from "../../assets/business.png"
import electronics from "../../assets/electronics.png"
import fashion from "../../assets/fashion.png"
import furniture from "../../assets/furniture.png"
import jobs from "../../assets/jobs.png"
import kids from "../../assets/kids.png"
import mobiles from "../../assets/mobiles.png"
import services from "../../assets/services.png"
import propertyRent from "../../assets/propertyRent.png"
import propertySale from "../../assets/propertySale.png"
import vehicles from "../../assets/vehicles.png"


const Categories = () => {
        const cate = [
            { name: "Mobiles", img: mobiles },
            { name: "Vehicels", img: vehicles },
            { name: "Property For sale", img: propertySale },
            { name: "Property For Rent", img: propertyRent },
            { name: "Electronics & Home Appliances", img: electronics },
            { name: "Bikes", img: bikes },
            { name: "Business, Industrial & Agriculture", img: business },
            { name: "Services", img: services },
            { name: "Jobs", img: jobs },
            { name: "Animals", img: animal },
            { name: "Furniture & Home Decor", img: furniture },
            { name: "Fashion & Beauty", img: fashion },
            { name: "Books, Sports & Hobbies", img: books },
            { name: "Kids", img: kids },

        ]
        return (
            <div className='max-w-[1400px] mx-auto mt-8 px-7'>
                <h2 className="font-bold text-[25px] mb-8 text-[#002F34]">All Categories</h2>
                <div className="flex flex-wrap gap-14 items-center" >
                {
                    cate.map((item, i)=>(
                        <div className=" w-[100px] flex flex-col items-center justify-center">
                            <img key={i} src={item.img} width={105} height={100} className="" alt="" />
                            {/* <p className="w-1/2 text-center">{item.name}</p> */}
                        </div>

                            ))
                        }
                        </div>
            </div>
        )
    }

    export default Categories