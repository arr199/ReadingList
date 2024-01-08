import React from "react";
import { useGetBooks } from "../../utils/Hooks.jsx"
import { Link } from "../../Router";



export function BookDetails ({ param }) {
    const { books } = useGetBooks()
    const bookArray = [...books]?.filter( ({ book }) => book?.ISBN === param.id)

    if (!bookArray.length) {
        return (
              
        <div className="h-screen  flex flex-col mt-20 sm:mt-40 items-center gap-4 ">
            <h1 className="text-5xl font-bold">Ups este libro no existe.</h1>
            <Link className="text-xl font-bold" path="/">&larr;  Volver</Link>
        </div>
        )
    }


    const { book }  = bookArray[0]
    console.log(book)
    return (
        
        <div className="h-screen  flex max-w-4xl mx-auto sm:py-20 py-4 justify-center  gap-10 sm:gap-32 flex-wrap">
            <div className="shadow-[0px_0px_15px_12px_black] max-h-[500px] max-w-[350px] w-[80%] sm:w-full ">
                <img className="p-6 w-full h-full" src={book.cover} alt="" />
            </div>
            <div className="flex flex-col gap-3 max-w-[320px] sm:px-0 px-4">
                <span className="sm:text-xl text-sm">Título: {book.title}</span>
                <span className="sm:text-xl text-sm">Autor: {book.author.name}</span>
                <span className="sm:text-xl text-sm">Páginas: {book.pages}</span>
                <span className="sm:text-xl text-sm">Género: {book.genre}</span>
                <span className="sm:text-xl text-sm">Año: {book.year}</span>
                <p className="mt-10 text-sm sm:text-xl">Synopsis:</p>
                <p className="leading-7 text-balance">{book.synopsis}</p>
                <Link className="font-bold self-start mt-10 pb-10 sm:pb:0" path="/">&larr; Ver mas libros</Link>
            </div>
        </div>
    )
  }
  