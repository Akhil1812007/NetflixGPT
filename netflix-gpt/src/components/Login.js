import { useEffect, useState } from "react";
import Header from "./Header";
   

const Login =()=>{
    const [isSignIn,setSignIn]=useState(true) 
    const  toggleIsSignInForm=()=>{
        setSignIn(!isSignIn);
    }
    return (
        <div>
            <Header/>
            <div>
                <img className="absolute"
                src='https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg'
                alt='back-ground '/>
                            
            </div>
            <form className=" absolute p-12 rounded-md bg-black w-1/4 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
                <h1 className="font-bold p-4 m-2">{isSignIn ?"Sign In ":"Sign up"}</h1>
                {!isSignIn &&(
                    <input type="text"
                    placeholder="Full Name" 
                    className="p-4 m-2 w-full rounded-md bg-gray-500"/>

                 )

                }
                <input 
                    type="text" 
                    placeholder="Email address" 
                    className="p-4 m-2 w-full rounded-md bg-gray-500"/>
                <input 
                    type="password" 
                    placeholder="password" 
                    className="p-4 m-2 w-full rounded-md  bg-gray-500"/>
                <button 
                    className="bg-red-600 p-4 m-1.5 w-full rounded-md" >{isSignIn?"Sign In ":"Sign up"}</button>
                <p 
                    className="p-4 font-bold text-center"  
                    onClick={toggleIsSignInForm}>{isSignIn?"Are you new to Netflix Sign Up":"already user"}</p>

            </form>
        </div>

    )
}

export default Login;