import { useRef, useState } from "react"
import { isValid } from "../utils/validation"

const LoginForm = () => {

    const [isSignUp , setIsSignUp] = useState(true)
    const [validationMsg ,setValidationMsg] = useState(null)

    const email = useRef(null)
    const pwd = useRef(null)

    const handleButtonClick =()=>{
       const msg = isValid(email.current.value,pwd.current.value)
       setValidationMsg(msg)
    } 
    

    const handleOnSubmit = (e)=>{
       e.preventDefault()
    }

    const handleSignUp =()=>{
        setIsSignUp(!isSignUp)
    }
    
    return (
        <form onSubmit={handleOnSubmit} className='bg-black  py-16 px-20 rounded-lg bg-opacity-80'>
            <h1 className='text-4xl font-semi-bold text-white py-2'>{isSignUp ? "Sign in" : "Sign Up"}</h1>
            <input ref={email} className='w-full mt-8 py-3 px-4 rounded-md bg-stone-700' type='text' placeholder='Email or Phone Number'></input>
            <input ref={pwd} className='w-full mb-10 mt-6 py-3 px-4 rounded-md bg-stone-700' type='password' placeholder='Password'></input>
            <p className="text-sm pb-1 text-red-900 font-semibold">{validationMsg}</p>
            <button className='w-full  py-3 px-4 rounded-md bg-red-700 text-white' onClick={handleButtonClick}>{isSignUp ? "Sign in" : "Sign Up"}</button>
            <div className="flex mt-3 justify-between">
                <div>
                    <input type="checkbox" id="rememberMe" className="cursor-pointer" />
                    <label htmlFor="rememberMe" className="ml-2 text-xs text-gray-400">Remember Me</label>
                </div>
                <div>
                    <p className='text-xs pt-1 text-gray-400'>Need help ?</p>
                </div>
            </div>
            <div className="flex mt-3">
                <div>
                    <h1 className='text-gray-400'>{isSignUp ? "Already a member?" : "New to Netflix?"}</h1>
                </div>
                <div>
                    <h1 onClick={handleSignUp} className=' text-white ml-2 pb-8 cursor-pointer'>{isSignUp ? "Check whats new!" : "Sign Up"}</h1>
                </div>
            </div>
        </form>
    )
}

export default LoginForm