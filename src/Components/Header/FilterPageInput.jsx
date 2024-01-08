export const FilterPageInput = ({ setFilterByPage, filterByPage, ...props }) => {
  return (
        <>
            <div className='flex flex-col max-[470px]:gap-2  flex-wrap pr-4 justify-start'>
                <h2>Filtrar por páginas</h2>
                <div className='flex gap-1'>
                    <input className=' w-[200px]' onChange={e => setFilterByPage(e.target.value)} value={filterByPage || 0} min={0} max={1000} type='range'>
                    </input>
                    <span className=''>{filterByPage || 0}</span>
                </div>
            </div>
        </>
  )
}
