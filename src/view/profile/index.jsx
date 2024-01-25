
import React, { useEffect, useState } from 'react';
import { UpdateProfile, getUserDetails } from '../../config/firebase';
import './profile.css';

const Profile = ({ userr }) => {
  const [userdet, setuserdet] = useState();
  const [namee, setName] = useState('');
  const [address, setAddress] = useState('')
  const [updateDP, setupdateDP] = useState()
  useEffect(() => {
    getDetails();
  }, [userr]);

  useEffect(() => {
    // Update namee whenever userdet changes
    setName(userdet?.name || '');
    setAddress(userdet?.address || '');

  }, [userdet]);

  const getDetails = async () => {
    const signProd = await getUserDetails(userr?.uid);
    setuserdet(signProd);
  };

  const update = async(e)=>{
    e.preventDefault()
    await UpdateProfile({namee, address, updateDP, userr})
  }
  // console.log(namee);
  return (
    <form>
      <div className="container p-10">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  value={namee}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  style={{border:"1px solid green"}}
                  className="block w-full rounded-md w-[50%] py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-2"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  style={{border:"1px solid green"}}
                  className="block w-full rounded-md w-[50%] py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-2"
                  />
              </div>
  
            </div>

            <div className="col-span-full">
              <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
              <img src={userdet?.profilePic} width={120} className='rounded-full' alt='Profile' />
          
                <label class="custum-file-upload" for="file">
<div className="icon">
<svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
</div>
<div className="text">
   <span>Click to upload image</span>
   </div>
   <input type="file" id="file" onChange={(e)=>{setupdateDP(e.target.files[0])}}/>
</label>

              </div>
            </div>
            {/* ... (rest of the component remains unchanged) ... */}

          </div>
        </div>

        {/* ... (rest of the component remains unchanged) ... */}

      </div>

      <div className="mb-5 flex items-center justify-center gap-x-6">
        <button
          // type="submit"
          onClick={update}
          className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Profile;
