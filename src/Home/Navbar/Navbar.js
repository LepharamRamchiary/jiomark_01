import React from 'react'
// import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
    // console.log(data)
    return (
        <div className='navbar fixed top-0 bg-sky-600 text-white items-center  h-20  w-full p-3 flex space-x-2'>
            <div className='border-red-900 mx-11 p-2 cursor-pointer w-14 h-12 rounded-full hover:bg-sky-700 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>

            <div className='flex items-center justify-between w-full'>
                <div className='p-2 cursor-pointer rounded-full hover:bg-sky-700 '>
                    <svg width="128" height="24" viewBox="0 0 125 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.104 13.12C13.104 15.216 12.592 16.784 11.568 17.824C10.544 18.864 8.912 19.384 6.672 19.384C4.656 19.384 3.144 18.872 2.136 17.848C1.144 16.808 0.648 15.344 0.648 13.456V13.312H5.352C5.352 14.064 5.448 14.6 5.64 14.92C5.848 15.224 6.184 15.376 6.648 15.376C7.064 15.376 7.368 15.216 7.56 14.896C7.768 14.576 7.872 14.048 7.872 13.312V2.416H13.104V13.12ZM20.0769 2.68C20.0769 3.112 19.9649 3.504 19.7409 3.856C19.5329 4.192 19.2369 4.464 18.8529 4.672C18.4689 4.864 18.0369 4.96 17.5569 4.96C17.0769 4.96 16.6449 4.864 16.2609 4.672C15.8769 4.464 15.5729 4.192 15.3489 3.856C15.1409 3.504 15.0369 3.112 15.0369 2.68C15.0369 2.248 15.1409 1.864 15.3489 1.528C15.5729 1.176 15.8769 0.903999 16.2609 0.711999C16.6449 0.503999 17.0769 0.399999 17.5569 0.399999C18.0369 0.399999 18.4689 0.503999 18.8529 0.711999C19.2369 0.903999 19.5329 1.176 19.7409 1.528C19.9649 1.864 20.0769 2.248 20.0769 2.68ZM19.9329 6.544V19H15.1809V6.544H19.9329ZM34.7256 12.76C34.7256 14.056 34.4616 15.2 33.9336 16.192C33.4056 17.168 32.6456 17.936 31.6536 18.496C30.6616 19.04 29.4776 19.312 28.1016 19.312C26.7256 19.312 25.5336 19.04 24.5256 18.496C23.5336 17.936 22.7736 17.168 22.2456 16.192C21.7176 15.2 21.4536 14.056 21.4536 12.76C21.4536 11.464 21.7176 10.328 22.2456 9.352C22.7736 8.36 23.5336 7.592 24.5256 7.048C25.5336 6.504 26.7256 6.232 28.1016 6.232C29.4776 6.232 30.6616 6.512 31.6536 7.072C32.6456 7.616 33.4056 8.384 33.9336 9.376C34.4616 10.352 34.7256 11.48 34.7256 12.76ZM28.1016 15.856C28.7256 15.856 29.1896 15.608 29.4936 15.112C29.8136 14.616 29.9736 13.832 29.9736 12.76C29.9736 11.688 29.8136 10.912 29.4936 10.432C29.1736 9.936 28.7016 9.688 28.0776 9.688C27.4696 9.688 27.0056 9.928 26.6856 10.408C26.3656 10.888 26.2056 11.672 26.2056 12.76C26.2056 13.816 26.3656 14.6 26.6856 15.112C27.0056 15.608 27.4776 15.856 28.1016 15.856ZM43.2969 2.416L45.8409 12.04H45.8889L48.4569 2.416H55.5849V19H50.7609V8.056H50.5929L47.8329 19H43.9209L41.1609 8.056H40.9929V19H36.1689V2.416H43.2969ZM64.8934 10.912C64.8934 10.416 64.8374 10.032 64.7254 9.76C64.6134 9.488 64.4454 9.304 64.2214 9.208C63.9974 9.096 63.6934 9.04 63.3094 9.04C62.7974 9.04 62.4134 9.144 62.1574 9.352C61.9174 9.56 61.7894 9.808 61.7734 10.096H57.3814C57.5414 8.816 58.1094 7.856 59.0854 7.216C60.0774 6.56 61.6054 6.232 63.6694 6.232C65.0614 6.232 66.1734 6.416 67.0054 6.784C67.8534 7.136 68.4694 7.688 68.8534 8.44C69.2534 9.192 69.4534 10.176 69.4534 11.392V19H65.2294L65.0134 17.68H64.9654C64.5654 18.192 64.0614 18.592 63.4534 18.88C62.8454 19.168 62.0614 19.312 61.1014 19.312C60.2374 19.312 59.4774 19.16 58.8214 18.856C58.1814 18.536 57.6854 18.08 57.3334 17.488C56.9814 16.896 56.8054 16.192 56.8054 15.376C56.8054 14.048 57.3414 13.048 58.4134 12.376C59.5014 11.704 61.0534 11.368 63.0694 11.368H64.8934V10.912ZM63.6454 13.504C63.0694 13.504 62.5974 13.632 62.2294 13.888C61.8614 14.144 61.6774 14.504 61.6774 14.968C61.6774 15.448 61.8134 15.816 62.0854 16.072C62.3574 16.312 62.7014 16.432 63.1174 16.432C63.6774 16.432 64.1094 16.256 64.4134 15.904C64.7334 15.552 64.8934 15.056 64.8934 14.416V13.504H63.6454ZM80.6509 10.504C80.4909 10.44 80.3229 10.392 80.1469 10.36C79.9709 10.328 79.7389 10.312 79.4509 10.312C78.2669 10.312 77.3949 10.624 76.8349 11.248C76.2909 11.856 76.0189 12.784 76.0189 14.032V19H71.2669V6.544H75.8269V8.536H75.8749C76.1789 7.752 76.6429 7.176 77.2669 6.808C77.9069 6.424 78.6349 6.232 79.4509 6.232C79.9469 6.232 80.3469 6.288 80.6509 6.4V10.504ZM86.8521 6.544H89.3241V9.472H86.8521V13.6C86.8521 14.224 86.9641 14.696 87.1881 15.016C87.4281 15.32 87.8281 15.472 88.3881 15.472C88.7241 15.472 89.0361 15.44 89.3241 15.376V18.928C88.7481 19.12 88.0121 19.216 87.1161 19.216C85.5801 19.216 84.3561 18.824 83.4441 18.04C82.5481 17.24 82.1001 15.992 82.1001 14.296V9.472H80.0601V6.544H82.1001V2.752H86.8521V6.544ZM98.3614 10.708C100.113 10.708 100.989 11.392 100.989 12.76C100.989 13.168 100.893 13.512 100.701 13.792C100.517 14.072 100.241 14.304 99.8734 14.488V14.512C100.377 14.656 100.753 14.908 101.001 15.268C101.257 15.62 101.385 16.06 101.385 16.588C101.385 17.108 101.253 17.552 100.989 17.92C100.725 18.28 100.369 18.552 99.9214 18.736C99.4814 18.912 98.9974 19 98.4694 19H94.3894V10.708H98.3614ZM98.0854 14.056C98.4294 14.056 98.6934 13.976 98.8774 13.816C99.0694 13.656 99.1654 13.416 99.1654 13.096C99.1654 12.488 98.7694 12.184 97.9774 12.184H96.2734V14.056H98.0854ZM98.1934 17.524C98.6174 17.524 98.9414 17.436 99.1654 17.26C99.3894 17.084 99.5014 16.82 99.5014 16.468C99.5014 16.092 99.3894 15.808 99.1654 15.616C98.9494 15.424 98.6414 15.328 98.2414 15.328H96.2734V17.524H98.1934ZM109.127 10.708V12.304H104.759V14.008H108.767V15.472H104.759V17.404H109.223V19H102.875V10.708H109.127ZM116.932 10.708V12.304H114.46V19H112.576V12.304H110.104V10.708H116.932ZM121.363 10.708L124.459 19H122.503L121.891 17.224H118.831L118.207 19H116.299L119.443 10.708H121.363ZM120.379 12.82L119.323 15.82H121.423L120.403 12.82H120.379Z" fill="white" />
                    </svg>
                </div>
                <div className="w-80 items-center flex relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="p-1  w-10 h-10 outline-none border-none rounded-l-full text-black bg-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input
                        type="text"
                        className="p-2 w-80 text-black outline-none border-none"
                        placeholder="Search JioMart"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="p-1 w-10 h-10 outline-none border-none rounded-r-full text-black bg-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                </div>
            </div>
            <div className='p-3 mr-4 w-14 h-12 cursor-pointer rounded-full hover:bg-sky-700 text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />

                </svg>
            </div>
            <div className='mr-5 flex w-32 h-12 p-2 items-center gap-1 cursor-pointer rounded-full hover:bg-sky-700 text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <h1 className='decoration-4'>Sign In</h1>
            </div>
        </div>
    )
}

export default Navbar
