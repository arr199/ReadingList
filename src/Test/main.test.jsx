import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MainContent } from '../Components/MainContent'

describe('MainContent component', () => {
  it('should render', () => {
    render(<MainContent></MainContent>)
    screen.debug()
  })
})
