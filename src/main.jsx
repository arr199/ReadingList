import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Router, Route } from './Router.tsx'
import { BookDetails } from './Components/BooksSection/BookDetails.tsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Route path="/" component={ <App />}>
        </Route>
         <Route path="/:id" component={<BookDetails></BookDetails>} >
        </Route>
        <Route path="/book/a" component={<div className='h-screen grid place-items-center'><h1 className='text-3xl'>THIS IS A EXAMPLE <br/>Route : book/a </h1> </div>}>
        </Route>
    </Router>
)
