/* eslint-disable brace-style */
/* eslint-disable react/prop-types */
import { useMemo, createContext, useState, useEffect } from 'react'
import './index.css'
import { Header } from './Components/Header/Header'
import { ReadingList } from './Components/ReadingList/ReadingList'
import { BooksSection } from './Components/BooksSection/BooksSection'
import { MainContent } from './Components/MainContent'
import { useGetBooks } from './utils/hooks'
import { ShowReadingListButton } from './Components/BooksSection/ShowReadingListButton'

// setting up my global context //
export const GlobalStateContext = createContext()

function App () {
  const { books, setBooks, genre, SetGenreSelected, genreSelected } = useGetBooks() // hook with all the initial book  data
  const [lectureBooks, setLectureBooks] = useState(JSON.parse(localStorage.getItem('lectureBooks')) ?? []) // the current books on the lecture book
  const [filterByPage, setFilterByPage] = useState(JSON.parse(localStorage.getItem('filterByPage')) ?? 0) // controlling the input filter by page
  const [listOpen, setListOpen] = useState(false) // open and close the reading list
  console.log(listOpen)
  useEffect(() => {
    if (!books || books.length === 0) return
    // saving the books list and lecture list to local storege everytime one of them change
    localStorage.setItem('books', JSON.stringify(books))
    localStorage.setItem('lectureBooks', JSON.stringify(lectureBooks))
    localStorage.setItem('filterByPage', JSON.stringify(filterByPage))

    // listening to a storage event to change the page in different browser tabs
    function handleChange (e) {
      if (e.key === 'books') {
        setBooks(JSON.parse(e.newValue))
      } else if (e.key === 'lectureBooks') {
        setLectureBooks(JSON.parse(e.newValue))
      } else if (e.key === 'genre') {
        SetGenreSelected(JSON.parse(e.newValue))
      } else if (e.key === 'filterByPage') {
        setFilterByPage(JSON.parse(e.newValue))
      }
    }
    window.addEventListener('storage', handleChange)
    return () => window.removeEventListener('storage', handleChange)
  }, [lectureBooks, books, filterByPage])

  // add to lecture list //
  function handleImageClick (e) {
    const id = e.target.dataset.id
    const newBooks = [...books].filter(e => e.book.ISBN !== id)
    setBooks(newBooks)
    const newLectureBook = [...books].filter(e => e.book.ISBN === id)
    if (!lectureBooks) setLectureBooks(newLectureBook)
    else setLectureBooks(e => [...e, newLectureBook[0]])
  }
  // remove from lecture list //
  function handleRemoveImageFromLecture (e) {
    const id = e.target.dataset.id
    const newLectureBooks = [...lectureBooks].filter(e => e.book.ISBN !== id)
    setLectureBooks(newLectureBooks)

    const newBooks = [...lectureBooks].filter(e => e.book.ISBN === id)
    setBooks(e => [...e, newBooks[0]])
  }

  function handleSelectGenre (e) {
    SetGenreSelected(e.target.value)
    localStorage.setItem('genre', JSON.stringify(e.target.value))
  }
  // filter the books by page //
  const pageFilter = useMemo(() => {
    if (!books) return

    return [...books].filter(e => e.book.pages > filterByPage)
  }, [filterByPage, books])

  const genreFilter = useMemo(() => {
    // if the user is already filtering by page we filter by genre this list //
    if (pageFilter) {
      if (genreSelected && genreSelected !== 'All books') {
        return [...pageFilter].filter(e => e.book.genre === genreSelected)
      }
      else return [...pageFilter]
    }
    // if is not filtering by page then filter the books list  //
    else {
      if (books) return [...books].filter(e => e.book.genre === genreSelected)
      else return books
    }
  }, [genreSelected, books, pageFilter])
  // create an object with all the states i need for my components //
  const contextObject = {
    genreFilter,
    lectureBooks,
    genreSelected,
    filterByPage,
    genre,
    listOpen,
    setListOpen,
    handleImageClick,
    setFilterByPage,
    handleRemoveImageFromLecture,
    handleSelectGenre
  }
  // rendering //
  return (
    <>
      <GlobalStateContext.Provider value={contextObject}>
        <Header
          filterByPage={ filterByPage} setFilterByPage={setFilterByPage}
          genreFilter={genreFilter} genre={genre} handleSelectGenre={handleSelectGenre}
          genreSelected={genreSelected}>
        </Header>
        <MainContent>
          <BooksSection></BooksSection>
          <ReadingList
            lectureBooks={lectureBooks}
            handleRemoveImageFromLecture={handleRemoveImageFromLecture}></ReadingList>
        </MainContent>
        <ShowReadingListButton />
      </GlobalStateContext.Provider>
    </>
  )
}
export default App
