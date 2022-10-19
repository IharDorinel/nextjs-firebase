import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {wrapper} from "../redux";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import React, {useEffect, useState} from "react";
import {createFirebaseApp} from "../utils/firebase";
import {useRouter} from "next/router";
import Loader from "../components/Loader/Loader";

type TUser = {
    user: string,
    setUser: (user: string) => void
}

type TLoader = {
    isLoader: boolean,
    setIsLoader: (isLoader: boolean) => void
}

export interface IContextValue {
    user: TUser,
    auth: any,
    loader: TLoader
}

const defaultContext: IContextValue = {
    user: {
        user: '',
        setUser: () => {}
    },
    auth: {},
    loader: {
        isLoader: false,
        setIsLoader: () => {}
    }
}

export const AppContext = React.createContext(defaultContext)


    // @ts-ignore
function MyApp({ Component, pageProps }: AppProps) {

    const [user, setUser] = useState('')
    // @ts-ignore
    const app = createFirebaseApp()
    const auth = getAuth(app)
    const [isLoader, setIsLoader] = useState(true)

    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user.email ?? '')
                setIsLoader(false)
            } else {
                router.push('/sign')
                setIsLoader(false)
            }
        })
    }, [auth, router])

    const contextValue = {
        user: {
            user,
            setUser
        },
        auth,
        loader: {
            isLoader,
            setIsLoader
        }
    }

  return (
 <AppContext.Provider value={contextValue}>
     {
         isLoader ? <Loader /> : <Component {...pageProps} />
     }
 </AppContext.Provider>
      )
}

export default wrapper.withRedux(MyApp)



