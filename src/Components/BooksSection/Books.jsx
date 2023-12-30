import { useContext } from 'react'
import { GlobalStateContext } from '../../App'

export const Book = ({ id, book, ...props }) => {
  const { handleImageClick } = useContext(GlobalStateContext)

  return (
      <div className=' flex flex-col h-full w-full '>
        <div className='h-full w-full rounded-lg flex flex-col justify-center items-center shadow-[0px_0px_15px_12px_black]'>
          <img
            className='  w-full h-full object-fill aspect-square  p-5 rounded-lg'
            src={book.cover} />
        </div>
        <div className='mt-5 self-start flex flex-col w-full gap-4'>
          <p>{book.title}</p>
          <p>{book.year}</p>
          <button onClick={handleImageClick} data-id={id} className='mt-auto hover:bg-purple-500 hover:scale-[1.05] transition-scale
            duration-200  bg-purple-600 px-6 py-1 rounded-lg font-bold w-full'>
              Añadir
          </button>
        </div>
      </div>

  )
}
