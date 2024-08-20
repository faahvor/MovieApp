import { Link } from 'react-router-dom'

export const Error404 = () => {
  return (
    <div className='bg-black h-screen flex text-white pt-5 items-center' >
       <h1 className="pl-10">404 Not Found</h1>
       <button className='bg-white text-black px-3 py-1 rounded-lg font-semibold ml-2'>
        <Link to={"/"}>Go to Home Page</Link>
       </button>
        </div>
  )
}
