/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

// handle change when filter by genre

export function FilterGenreMenu ({ genreList, ...e }) {
  return (
      <div className='flex flex-col'>
       <h2>Filtrar por género</h2>
       <select className='w-[200px]' {...e}>
       <option value="All books">Todos</option>
              { genreList
                ? genreList.map((e, index) =>
                <option key={index} value={e} >{e}</option>
                )
                : ''}
       </select>

      </div>
  )
}
