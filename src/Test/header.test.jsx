import { afterEach, describe, it, expect } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { Header } from '../Components/Header/Header'

describe('Header Component', () => {
  afterEach(cleanup)
  it('should render', () => {
    render(<Header></Header>)
  })
  it('should render no books available when genrefilter length is 0', () => {
    render(<Header genreFilter={[]}></Header>)

    screen.getByText('No Hay libros disponibles')
  })
  it('should render the number of books available when genrefilter lenght > 0', () => {
    render(<Header genreFilter={[1, 2]}></Header>)
    screen.debug()
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1.textContent).contain('Hay 2 libros disponibles')
  })
})
