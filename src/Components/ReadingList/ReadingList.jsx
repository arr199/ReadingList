import { SavedBook } from './SavedBook'
import { GlobalStateContext } from '../../App'
import { useContext, useRef } from 'react'
import { useClickOutside } from '../../utils/Hooks'
export function ReadingList ({ lectureBooks, handleRemoveImageFromLecture }) {
  const { listOpen, setListOpen } = useContext(GlobalStateContext)
  const myRef = useRef()
  useClickOutside(myRef, setListOpen)

  return (
    <>
    {lectureBooks && listOpen
      ? <section ref={myRef}
      className='reading-list-section  bg-slate-900 overflow-y-scroll opacity animate-fade-left  animate-duration-[400ms] transition-all px-4
      duration-300  w-[70%] sm:w-[50%] md:w-[36%] h-full rounded  min-h-screen fixed right-0 top-0 z-30 pb-4 sm:pb-16
      '>
            <h1 className=' text-[26px] md:text-[32px] mt-2 sm:mt-8'>Lista de Lectura</h1>
            { lectureBooks && lectureBooks.length !== 0 ? <h1 data-id='have-books'> Tienes {lectureBooks.length} libro{lectureBooks.length > 1 ? 's' : ''}  </h1> : <h1 data-id="no-books">No hay libros actualmente</h1>}
            <div className='lecture-list-container gap-2 mt-6 '>
              {lectureBooks && lectureBooks.map(({ book }) => {
                return (
                      <SavedBook key={book.ISBN} book={book} id={book.ISBN} picture={book.cover} handleRemove={handleRemoveImageFromLecture}></SavedBook>
                )
              }) }
            </div>
        </section>
      : ''}
    </>
  )
}
