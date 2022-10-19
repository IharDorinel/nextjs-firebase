import React, {useState} from 'react';
import {createUserWithEmailAndPassword} from "firebase/auth";

interface ISignUp {
    auth: any,
    setUser: (user: string) => void,
    setSignin: (signin: boolean) => void,
    setError: (error: string) => void,
    loginSuccess: () => void
}

// @ts-ignore
const SignUp = ({auth, setUser, setSignin, setError, loginSuccess}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const registerUser = (e: React.FormEvent<HTMLFormElement>, email: string, password: string) => {
        e.preventDefault()

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                setUser(user.email ?? '')
                loginSuccess()
            })
            .catch((error) => {
                setError(error.message)
            })
    }


    return (
        <form className="flex flex-col"
              onSubmit={(e) => registerUser(e, email, password)}>
            <h2 className="text-center text-3x1 m-3 text-blue-500">Sign Up</h2>
            <label className="flex flex-col items-center">
                Email
                <input className="border-2 hover:border-blue-300 border-blue-200 rounded p-1 outline-none" value={email} type={'email'} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label className="flex flex-col items-center">
                Password
                <input className="border-2 hover:border-blue-300 border-blue-200 rounded p-1 outline-none" value={password} type={'password'} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button className="p-2 hover:bg-blue-300 bg-blue-200 m-3 rounded-2x1 text-white text-xl" type={'submit'}>Create an account</button>
            <div className="hover:text-blue-500 cursor-pointer text-center" onClick={() => {
                setSignin(true)
                setError('')
            }}>Back to Sign In</div>
        </form>
    )
}

export default SignUp


