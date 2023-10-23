import { SavedBook } from './SavedBook'

export function ReadingList ({ lectureBooks, handleRemoveImageFromLecture }) {
  return (
    <>
   { lectureBooks
     ? <section className=' w-[50%] md:w-[36%] border-[3px] border-white rounded h-[max-content] min-h-screen'>
          <h1 className=' text-[26px] md:text-[32px]'>Lista de Lectura</h1>
          { lectureBooks && lectureBooks.length !== 0 ? <h1 data-id='have-books'> Tienes {lectureBooks.length} libro{lectureBooks.length > 1 ? 's' : ''}  </h1> : <h1 data-id="no-books">No hay libros actualmente</h1>}
          <div className='lecture-list-container w-[300px]'>
            {lectureBooks && lectureBooks.map(e => {
              return <SavedBook id={e.book.ISBN} picture={e.book.cover} key={e.book.ISBN} onClick={handleRemoveImageFromLecture}></SavedBook>
            }) }
          </div>
      </section>
     : ''}
    </>
  )
}
