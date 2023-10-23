export const SavedBook = ({ id, picture, ...props }) => {
  return (
        <>
             <img data-id={id} {...props}
             className='hover:scale-[1.05] max-[400px]:w-[100px] cursor-pointer max-w-[200px]  max-h-[200px]  p-5'
             key={id} src={picture}></img>
        </>
  )
}
