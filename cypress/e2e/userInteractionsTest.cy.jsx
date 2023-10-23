/* eslint-disable no-undef */

describe('Browsing', () => {
  it('should render the page', () => {
    // user vistit the website
    cy.visit('http://localhost:5173/')
    // user select fantasía on hte genre menu // and expect
    cy.findByRole('combobox').select('Fantasía')
    // user add a book to reading list
    cy.get('[data-id="978-0618640157"]').click()
    // expect the text to change to "Tienes 1 libro"
    cy.get('[data-id="have-books"]').invoke('text').then(text => expect(text.trim()).equal('Tienes 1 libro'))
    // user remove a book from reading list
    cy.get('[data-id="978-0618640157"]').click()
    // expect the text to change to "No hay libros actualmente"
    cy.get('[data-id="no-books"]').invoke('text').then(data => expect(data.trim()).equal('No hay libros actualmente'))
    // user click on select All books
    cy.findByRole('combobox').select('All books')
    // user use the page filter input and change it to 500 page
    cy.findAllByRole('slider')
      .invoke('val', 500)
      .trigger('input')
  })
})
