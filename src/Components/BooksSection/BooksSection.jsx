import { useContext } from 'react'
import { GlobalStateContext } from '../../App'
import { Book } from './Books'

export const BooksSection = () => {
  const { genreFilter } = useContext(GlobalStateContext)
  return (
        <section id="img-container" className='img-container w-full mt-10 gap-2  sm:gap-12 max-w-7xl mx-auto mb-20' >
        { genreFilter && genreFilter.map(({ book }) => {
          return (
              <Book book={book} id={book.ISBN} key={book.ISBN} ></Book>
          )
        })}

        </section>
  )
}
