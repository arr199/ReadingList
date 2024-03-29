/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

// handle change when filter by genre

export function FilterGenreMenu ({ genreList, ...e }) {
  return (
      <div className='flex flex-col sm:gap-0 gap-2'>
       <h2>Filtrar por género</h2>
       <select className='w-[200px] p-2 rounded ' {...e}>
       <option value="All books">Todos</option>
              { genreList
                ? genreList.map((e, index) =>
                <option className="mt-2" key={index} value={e} >{e}</option>
                )
                : ''}
       </select>

      </div>
  )
}
