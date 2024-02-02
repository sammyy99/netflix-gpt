import { signOut } from "firebase/auth";
import { netflixIcon, proflieIcon } from "../utils/urls"
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const BrowserHeader = () => {

    const navigate = useNavigate()

    const handleOnSignOut = () => {
        signOut(auth).then(() => {
          navigate("/")
        }).catch((error) => {
          // An error happened.
        });
      }

  return (
    <div className="w-full fixed">
      <div className="flex px-12 py-2 w-full bg-gradient-to-b from-black justify-between">
      <div className=''>
        <img className='w-28' src={netflixIcon} alt='Netflix icon' />
      </div>

      <div className="flex">
        <img class="py-2" alt="" src={proflieIcon}/>
        <button onClick={handleOnSignOut} className="px-1 text-s">(SignOut)</button>
      </div>
    </div>
    </div>
  )
}

export default BrowserHeader
