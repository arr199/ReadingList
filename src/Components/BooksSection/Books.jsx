import { useContext } from 'react'
import { GlobalStateContext } from '../../App'

export const Book = ({ id, picture, ...props }) => {
  const { handleImageClick } = useContext(GlobalStateContext)
  return (
        <>
             <img data-id={id} onClick={handleImageClick}
             className='hover:scale-[1.05] cursor-pointer max-w-[130px] md:max-w-[250px]  h-auto '
             key={id} src={picture} {...props}/>
        </>
  )
}
