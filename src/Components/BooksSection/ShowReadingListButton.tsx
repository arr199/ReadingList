import React from "react"
import { GlobalStateContext } from '../../App'
import { useContext } from 'react'

export const ShowReadingListButton = ({...props}) => {

  const { setListOpen , lectureBooks} = useContext(GlobalStateContext)
    return (
        <div 
              onClick={ () => setListOpen(true)} 
              className="opacity-40 transition-opacity duration-200 hover:opacity-100 hover:cursor-pointer  hover:bg-purple-800 
              shadow-[_0px_0px_30px_5px_black] fixed top-0 sm:top-[50%] right-0 
              bg-purple-900 pl-6 pb-4 pt-8 pr-2  rounded-l-full flex flex-col items-center">
                  <img 
                  className="sm:w-20 sm:h-20 w-10 h-10 "
                  src="/favicons/favicon-96.png" alt="" />
                  <span>{lectureBooks.length ?? 0}</span>
         </div>

    )

}