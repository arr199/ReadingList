import { FilterGenreMenu } from './FilterGenreMenu'
import { FilterPageInput } from './FilterPageInput'

export function Header ({ filterByPage, setFilterByPage, genreFilter, genre, handleSelectGenre, genreSelected }) {
  return (

    <header className=' pt-8 mx-auto max-w-7xl px-4'>
      {genreFilter &&
        <>
          {genreFilter.length === 0
            ? <h1 role="header" className='text-2xl md:text-4xl pb-4'>No Hay libros disponibles </h1>
            : <h1 className='  text-2xl md:text-4xl pb-4'> Hay {genreFilter.length} libro{genreFilter.length > 1 ? 's' : ''} disponible{genreFilter.length > 1 ? 's' : ''} </h1>
          }
        </>}
      <div className='flex items-center gap-4 flex-wrap'>
        <FilterPageInput setFilterByPage={setFilterByPage} filterByPage={filterByPage} />
        <FilterGenreMenu genreList={genre} onChange={handleSelectGenre} value={genreSelected} />
      </div>
      <p className='mt-4'>Selecciona un libro y añádelo a tu Lista de Lectura</p>
    </header>
  )
}
