export const SavedBook = ({ id, picture, book, handleRemove, ...props }) => {
  return (
       <div className="flex flex-col h-[320px]  items-center pt-6 mt-6">
             <img
             className=' shadow-[0px_0px_15px_12px_black] rounded-lg
             p-5 h-40 w-40 aspect-square '
             key={id}
             src={picture} />

                <div className="flex flex-col items-center  h-full  mt-6 ">
                    <p className="pt-6">{book?.title}</p>
                    <button
                    className="hover:bg-red-500 hover:scale-[1.05] transition-scale
                    duration-200  bg-red-600 px-6 py-1 rounded-lg font-bold mt-auto"
                    data-id={id}
                    onClick={handleRemove}>Remover</button>
                </div>

       </div>
  )
}
