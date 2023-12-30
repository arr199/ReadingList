import { useContext } from 'react'
import { GlobalStateContext } from '../../App'
import { Link } from '../../Router'

export const Book = ({ id, book, ...props }) => {
  const { handleImageClick } = useContext(GlobalStateContext)

  return (
      <div className=' flex flex-col h-full w-full pt-10  items-center'>
        <div className=' max-w-[340px] max-h-[400px] h-full w-full rounded-lg flex flex-col justify-center items-center shadow-[0px_0px_15px_12px_black] pb-4'>
          <img
            className='  w-full h-full object-fill aspect-square  p-5 rounded-lg  '
            src={book.cover} />
             <Link className="font-bold " path={`/${id}`} >
              Detalles &rarr;
             </Link>
        </div>
        <div className='mt-5  flex flex-col w-full gap-4  sm:text-center  items-center '>
          <p>{book.title}</p>
          <p>{book.year}</p>
          <button onClick={handleImageClick}
          data-id={id}
          className='disabled:bg-red-500 mt-auto hover:bg-purple-500 hover:scale-[1.05] transition-scale
            duration-200  bg-purple-600 px-6 py-1 rounded-lg font-bold w-full max-w-[320px]'>
              Añadir
          </button>
        </div>
      </div>

  )
}
