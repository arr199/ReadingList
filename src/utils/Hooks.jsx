import { useState, useEffect } from 'react'
import library from '../books'
export function useGetBooks () {
  const [books, setBooks] = useState([])
  const [genre, setGenre] = useState()
  const [genreSelected, SetGenreSelected] = useState(JSON.parse(localStorage.getItem('genre')) ?? 'All books')// an array with all the genre no duplicates
  // set our books list and our genre list eliminating duplicates
  useEffect(() => {
    // getting the books and genre list //
    setBooks(JSON.parse(localStorage.getItem('books')) ?? library.library)
    setGenre(a => {
      const newGenreArray = Array.from(new Set([...library.library].map((e) => e.book.genre)))

      return newGenreArray
    })
  }, [])
  return { books, setBooks, genre, genreSelected, SetGenreSelected }
}
