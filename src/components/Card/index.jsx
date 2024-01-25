import { BsStar, BsStarFill } from "react-icons/bs";
import img from "../../assets/mob.jpeg"
import { IoIosHeartEmpty } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Card = ({ brand, price, category, id, desc, images, rating, title, thumbnail }) => {

  const navigate = useNavigate()
  console.log(images);
  return (
    <div key={id} className='w-[300px] h-[420px] border-gray-300 border-[3px] rounded-[4px]' onClick={()=>navigate(`/product/${id}`)}>
      <img src={thumbnail} className="h-[50%] w-full rounded-tr-[3px] rounded-tl-[3px]  object-cover object-top" alt="" />
      <div className=" px-4 py-4 h-[50%] rounded-[4px]">
        <div className="flex justify-between">

          <p className="text-[21px] font-[650]">RS {price}</p>
          <IoIosHeartEmpty className={'cursor-pointer'} size={25} />
        </div>
        <p className="text-[21px] font-[450] pt-3">{brand} {title}</p>
        <p className="text-[19px] font-[450] ">Garden East karachi</p>
        <p className="text-[18px] font-[450] py-2 flex gap-3 items-center ">{rating}<BsStarFill className={"text-amber-400"} /></p>
        {/* <p className="text-[16px] font-[450] ">3 days ago</p> */}
      </div>
    </div>

  )
}

export default Card