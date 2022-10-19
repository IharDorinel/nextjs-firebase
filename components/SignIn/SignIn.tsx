import React, {useState} from 'react';
import {signInWithEmailAndPassword} from "firebase/auth";

interface ISignIn {
    auth: any,
    setUser: (user: string) => void,
    setSignin: (signin: boolean) => void,
    setError: (error: string) => void,
    loginSuccess: () => void
}

// @ts-ignore
const SignIn = ({auth, setUser, setSignin, setError, loginSuccess}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e: React.FormEvent<HTMLFormElement>, email: string, password: string) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
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
    onSubmit={(e) => signIn(e, email, password)}>
        <h2 className="text-center text-3x1 m-3 text-blue-500">Sign In</h2>
        <label className="flex flex-col items-center">
            Email
            <input className="border-2 hover:border-blue-300 border-blue-200 rounded p-1 outline-none" value={email} type={'email'} onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label className="flex flex-col items-center">
            Password
            <input className="border-2 hover:border-blue-300 border-blue-200 rounded p-1 outline-none" value={password} type={'password'} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button className="p-2 hover:bg-blue-300 bg-blue-200 m-3 rounded-2x1 text-white text-xl" type={'submit'}>Submit</button>
        <div className="hover:text-blue-500 cursor-pointer text-center" onClick={() => {
            setSignin(false)
            setError('')
        }}>Go to Sign Up</div>
    </form>
)

}

export default SignIn


