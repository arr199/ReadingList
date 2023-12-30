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

// HANDLE CLICK OUTSIDE
export function useClickOutside (ref, setter) {
  useEffect(() => {
    function handler (e) {
      const container = ref?.current
      const target = e?.target ?? null

      if (target && container) {
        if (!container.contains(target)) {
          container.style.transition = 'all 1s'
          container.style.translate = '100%'
          setTimeout(() => {
            setter(() => false)
          }, 1000)
        }
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])
}
