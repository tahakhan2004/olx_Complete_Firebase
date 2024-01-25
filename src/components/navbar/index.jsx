// Navbar.js
import React, { useEffect, useState } from 'react';
import olxBlue from '../../assets/olx-blue.png';
import olxblck from '../../assets/olx-black.png';
import sellBtn from '../../assets/sellBtn.png';
import { IoCarSportOutline } from 'react-icons/io5';
import { BsBuildings } from 'react-icons/bs';
import { TiPlus } from 'react-icons/ti';
import { IoChevronDown } from 'react-icons/io5';
import { IoIosSearch } from 'react-icons/io';
import './index.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth, getUserDetails } from '../../config/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';


const Navbar = () => {
  const miniNAvbar = ['Mobile Phones', 'Cars', 'Motorcycles', 'Houses', 'Video-Audios', 'Tablets', 'Land Plots'];
  const navigate = useNavigate();
  const [userdet, setuserdet] = useState();
  const [showTooltip, setShowTooltip] = useState(false);
  const [userr, setUser] = useState()

  useEffect(() => {
    getDetails();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    }); 
  }, [userr]);

  const getDetails = async () => {
    const signProd = await getUserDetails(userr?.uid);
    setuserdet(signProd);
  };

 async function logout() {
  try{
    await signOut(auth)
    alert("logout")
  }catch(e){
    console.log(e.Message);
  }
  }

  return (
    <div className='border-b shadow-sm'>
      <div className='bg-[#F7F8F8] px-7'>
        <div className='max-w-[1400px] mx-auto'>
          {/* Upper navbar start */}
          <div className='flex gap-10 py-[10px]'>
            <div>
              <Link to={"/"}>
                <img src={olxBlue} width={"32"} height={20} alt="" />
              </Link>
            </div>
            <div className='flex items-center gap-3 hover:text-[#3A77FF] cursor-pointer'>
              <div className='gradient rounded-full'>
                <IoCarSportOutline size={20} />
              </div>
              <p className='text-[12px] font-[500]'>
                MOTORS
              </p>
            </div>
            <div className='flex items-center gap-3 hover:text-[#3A77FF] cursor-pointer'>
              <div className='gradient rounded-full'>
                <BsBuildings size={20} />
              </div>
              <p className='text-[12px] font-[500]'>
                PROPERTY
              </p>
            </div>
          </div>
          {/* Upper navbar end */}

          {/* Lower navbar start*/}
          <div className='py-[10px] grid grid-cols-12 justify-center gap-7 items-center'>
            <div className='col-span-1'>
              <Link to={"/"}>
                <img src={olxblck} width={"61"} height={20} alt="" />
              </Link>
            </div>
            <div className='col-span-2 flex items-center bg-white py-[10px] rounded-[4px]  border-solid border-black border-[2px]'>
              <div className=' ml-[0.8rem] '>
                <IoIosSearch size={20} />
              </div>
              <div className='w-[80%] pl-3'>
                <select className='w-full text-[18px]' >
                  <option value="">PAKISTAN</option>
                  <option value="">Location</option>
                  <option value="">Location</option>
                </select>
              </div>
            </div>
            <div className='relative flex col-span-7 bg-white  rounded-[4px]  border-solid border-black border-[2px]'>
              <input type="text" className='px-[12px] placeholder:text-gray-600 w-full border-none py-3' placeholder='Find Cars, Mobile Phones and more...' />
              <button className='absolute flex items-center px-2 cur right-0 top-0 bottom-0 bg-[#002F34]'>
                <IoIosSearch size={30} color={"white"} />
              </button>
            </div>
            {userr ? 
               
                <div class="dropdown">
   <img src={userdet?.profilePic} width={70} className='rounded-full' alt='Profile' />

  <div class="dropdown-content">
  <img src={userdet?.profilePic} width={50} className='rounded-full ms-auto me-auto' alt='Profile' />
    <p>Username: {userdet?.name}</p>
    <p>Email: {userr.email}</p>
    <p>Address: {userdet?.address}</p>
    <Link to={"/profile"} className="text-blue-600 mt-5">View & Click to Edit the Profile</Link>
    <button className="Btn mt-3 ms-auto me-auto"  onClick={logout}>
  <div class="sign">
    <svg viewBox="0 0 512 512">
      <path
        d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
      ></path>
    </svg>
  </div>

  <div className="text">Logout</div>
</button>

  </div>
</div> :
              <Link to={"/login"} className='col-span-1 font-bold  pb-2 text-center login'>LOGIN</Link>}
  <Link to={"/sellscreen"}>
            <div className='col-span-1 '>
              <div className='relative '>
                <img src={sellBtn} className='mx-auto' />
                <div className='absolute right-0 left-0 top-0 bottom-0 flex justify-center items-center gap-1 text-black hover:cursor-pointer'>
                  <TiPlus size={20} />
                  <p className='font-bold'>SELL</p>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
      <div className='max-w-[1400px] mx-auto flex items-center px-7'>
        <h3 className='font-semibold flex items-center gap-1 text- '>All Categories<span className='font-light'><IoChevronDown size={30} /></span></h3>
        <div className='flex gap-3 ml-4 py-3 '>
          {miniNAvbar.map((item, i) => (
            <p key={i} className='text-[15px] hover:text-[#00a49f] cursor-pointer'>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
