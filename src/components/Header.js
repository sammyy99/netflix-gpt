import { netflixIcon } from "../utils/urls"

const Header = () => {
  return (
    <div className='px-10 py-2 w-full bg-gradient-to-b from-black'>
        <img className='w-52' src={netflixIcon} alt='Netflix icon' />
      </div>
  )
}

export default Header