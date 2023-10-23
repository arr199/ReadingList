import { useContext } from 'react'
import { GlobalStateContext } from '../../App'
import { Book } from './Books'

export const BooksSection = () => {
  const { genreFilter } = useContext(GlobalStateContext)
  return (
        <section id="img-container" className='img-container w-[60%]  [&>img]:self-start [&>img]:place-self-start '>
        { genreFilter && genreFilter.map(e => {
          return (
              <Book id={e.book.ISBN} picture={e.book.cover} key={e.book.ISBN} ></Book>
          )
        })}
        </section>
  )
}
