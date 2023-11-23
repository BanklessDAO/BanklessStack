import React from 'react'

function index() {
  return (
    <div className="bg-black items-center justify-center">
      <p className=" text-white text-center text-2xl font-semibold mb-8 mt-5 tracking-widest">PROJECTS</p>
        <div className="text-white grid gap-6 justify-items-center bg-no-repeat bg-left bg-cover">
            <button className="btn bg-rose-800 border hover:border hover:bg-rose-500 hover:p-2 p-1 
            w-7/12 h-11 rounded-lg rounded-tl-3xl rounded-br-3xl transform hover:scale-105 shadow-lg duration-200 flex justify-center items-center">
                <span className="centered-word text-2x1 p-1 rounded-lg tracking-widest text-center ml-40 mr-20">BANKLESS LABS</span>  
                <span className="left-word tracking-widest text-sm text-green-500">ACTIVE</span> 
            </button>
            
            <button className="btn bg-rose-800 border hover:border hover:bg-rose-500 hover:p-2 p-1 
            w-7/12 h-11 rounded-lg rounded-tr-3xl rounded-bl-3xl transform hover:scale-105 shadow-lg duration-200 flex justify-center items-center">
                <span className="centered-word text-2x1 p-1 rounded-lg tracking-widest text-center ml-40 mr-20">BANKLESS CARD</span>  
                <span className="left-word tracking-widest text-sm text-gray-500">BUILDING</span> 
            </button>
            
            <button className="btn bg-rose-800 border hover:border hover:bg-rose-500 hover:p-2 p-1 
            w-7/12 h-11 rounded-lg rounded-tl-3xl rounded-br-3xl transform hover:scale-105 shadow-lg duration-200 flex justify-center items-center">
                <span className="centered-word text-2x1 p-1 rounded-lg tracking-widest text-center ml-40 mr-20">BANKLESS LOANS</span>  
                <span className="left-word tracking-widest text-sm text-green-500">ACTIVE</span> 
            </button>
            
            <button className="btn bg-rose-800 border hover:border hover:bg-rose-500 hover:p-2 p-1 
            w-7/12 h-11 rounded-lg rounded-tr-3xl rounded-bl-3xl transform hover:scale-105 shadow-lg duration-200 flex justify-center items-center">
                <span className="centered-word text-2x1 p-1 rounded-lg tracking-widest text-center ml-40 mr-20">BANKLESS ACADEMY</span>  
                <span className="left-word tracking-widest text-sm text-green-500">ACTIVE</span> 
            </button>

             {/* <!-- See All Button --> */}
             <button className="see-all text-rose-600 p-2 rounded-lg rounded-tr-3xl rounded-bl-3xl border border-rose-800 hover:bg-darkgrey hover:p-2.5 hover:border  hover:border-pink-500 transform hover:scale-105 shadow-lg duration-200">
                SEE ALL
            </button>
            
           
        </div> 
    </div>
  )
}

export default index;