import React from 'react'

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font mt-5" >
  <div className="mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col" style={{background:"#ebeeef", padding:"16px 0px 64px", borderTop:"1px solid rgba(0,47,52,.2)"}}>
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto md:text-left md:mt-0 mt-10">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
  
        <span className="ml-3 text-xl">Follow Us</span>
      </a>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="ml-4 text-gray-500">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            />
            <circle cx={4} cy={4} r={2} stroke="none" />
          </svg>
        </a>
      </span>

      <div className='flex' style={{marginTop:"35px"}}>
        <img src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg" height={80} width={80}/>

        <img src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg" height={80} width={80}/>

        <img src="	https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg" height={80} width={80}/>
      </div>
    </div>
    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first ms-2">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font text-start tracking-widest mb-3" style={{color:"#002F34",fontWeight:700 , fontSize:"14px"}}>
         POPULAR CATEGORIES
        </h2>
        <nav className="list-none mb-10 text-start">
          <li>
            <a className=" hover:text-gray-800" style={{color:"#002F34A3",fontWeight:500 , fontSize:"12px"}}>Cars</a>
          </li>
          <li>
            <a className=" hover:text-gray-800" style={{color:"#002F34A3",fontWeight:500 , fontSize:"12px"}}>Flats for Rent</a>
          </li>
          <li>
            <a className=" hover:text-gray-800" style={{color:"#002F34A3",fontWeight:500 , fontSize:"12px"}}>Mobile Phones</a>
          </li>
          <li>
            <a className=" hover:text-gray-800" style={{color:"#002F34A3",fontWeight:500 , fontSize:"12px"}}>Jobs</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font text-start tracking-widest mb-3" style={{color:"#002F34",fontWeight:700 , fontSize:"14px"}}>
         TRENDING SEARCHES
        </h2>
        <nav className="list-none mb-10 text-start">
          <li>
            <a className=" hover:text-gray-800" style={{color:"#002F34A3",fontWeight:500 , fontSize:"12px"}}>Bikes</a>
          </li>
          <li>
            <a className=" hover:text-gray-800" style={{color:"#002F34A3",fontWeight:500 , fontSize:"12px"}}>Watches</a>
          </li>
          <li>
            <a className=" hover:text-gray-800" style={{color:"#002F34A3",fontWeight:500 , fontSize:"12px"}}>Books</a>
          </li>
          <li>
            <a className=" hover:text-gray-800" style={{color:"#002F34A3",fontWeight:500 , fontSize:"12px"}}>Dogs</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font text-start tracking-widest mb-3" style={{color:"#002F34",fontWeight:700 , fontSize:"14px"}}>
         ABOUT US
        </h2>
        <nav className="list-none mb-10 text-start">
          <li>
            <a className=" hover:text-gray-800" style={{color:"#002F34A3",fontWeight:500 , fontSize:"12px"}}>About Dubizzle Group</a>
          </li>
          <li>
            <a className=" hover:text-gray-800" style={{color:"#002F34A3",fontWeight:500 , fontSize:"12px"}}>OLX Blog</a>
          </li>
          <li>
            <a className=" hover:text-gray-800" style={{color:"#002F34A3",fontWeight:500 , fontSize:"12px"}}>Contact Us</a>
          </li>
          <li>
            <a className=" hover:text-gray-800" style={{color:"#002F34A3",fontWeight:500 , fontSize:"12px"}}>OLX for Businesses</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font text-start tracking-widest mb-3" style={{color:"#002F34",fontWeight:700 , fontSize:"14px"}}>
        OLX
        </h2>
        <nav className="list-none mb-10 text-start">
          <li>
            <a className=" hover:text-gray-800" style={{color:"#002F34A3",fontWeight:500 , fontSize:"12px"}}>Help</a>
          </li>
          <li>
            <a className=" hover:text-gray-800" style={{color:"#002F34A3",fontWeight:500 , fontSize:"12px"}}>Sitemap</a>
          </li>
          <li>
            <a className=" hover:text-gray-800" style={{color:"#002F34A3",fontWeight:500 , fontSize:"12px"}}>Terms of use</a>
          </li>
          <li>
            <a className=" hover:text-gray-800" style={{color:"#002F34A3",fontWeight:500 , fontSize:"12px"}}>Privacy Policy</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div style={{background:"#002F34"}}>
    <div className="container justify-end mx-auto py-3 flex flex-wrap flex-col sm:flex-row">
      <p className="text-white text-end sm:text-left" style={{fontSize:"14px" ,fontWeight:400}}>
     <span className='font-bold'>Free Classifieds in Pakistan.</span>   © 2006 - 2024 OLX
      </p>

    </div>
  </div>
</footer>

  )
}

export default Footer