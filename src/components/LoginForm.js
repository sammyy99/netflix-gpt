const LoginForm = () => {
    return (
        <form className='bg-black  py-16 px-20 rounded-md bg-opacity-80'>
            <h1 className='text-4xl font-semi-bold text-white py-2'>Sign In</h1>
            <input className='w-full mt-8 py-3 px-4 rounded-md bg-stone-700' type='text' placeholder='Email or Phone Number'></input>
            <input className='w-full mt-6 py-3 px-4 rounded-md bg-stone-700' type='password' placeholder='Password'></input>
            <button className='w-full mt-10 py-3 px-4 rounded-md bg-red-700 text-white'>Sign In</button>
            <div className="flex mt-3 justify-between">
                <div>
                    <input type="checkbox" id="rememberMe" className="" />
                    <label htmlFor="rememberMe" className="ml-2 text-xs text-gray-400">Remember Me</label>
                </div>
                <div>
                    <p className='text-xs pt-1 text-gray-400'>Need help ?</p>
                </div>
            </div>
            <div className="flex mt-3">
                <div>
                    <h1 className='text-gray-400'>New to Netflix?</h1>
                </div>
                <div>
                    <h1 className=' text-white ml-2 pb-8'>Sign up now.</h1>
                </div>
            </div>
        </form>
    )
}

export default LoginForm