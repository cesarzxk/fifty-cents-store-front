import { useContext, useEffect, useState } from 'react';
import { createContext, ReactNode } from "react";
import { authenticate, register } from '../../Api';
import { useCookies } from 'react-cookie'
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';


type authContextData = {
    userInfo: userInfoType | undefined,
    isLogued: boolean,
    token: string,
    handlerLogin: (email: string, password: string) => Promise<number>,
    handlerRegister: (user: userRegisterType) => Promise<number>,
    handlerLogout: () => void;

}

export const AuthContext = createContext({} as authContextData);

type authProviderProps = {
    children: ReactNode;

}

type userInfoType = {
    _id?: string,
    name: string,
    lastname: string,
    email: string
}

interface userRegisterType extends userInfoType {
    password: string
}


export function AuthProvider({ children }: authProviderProps) {
    const navigate = useNavigate()
    const [cookie, setCookie, removeCookie] = useCookies();
    const [userInfo, setUserInfo] = useState<userInfoType | undefined>(
        {
            name: cookie.name,
            lastname: cookie.lastname,
            email: cookie.email,
            _id: cookie._id
        }
    );
    const [isLogued, setIsLogued] = useState(false);
    const [token, setToken] = useState(cookie.token);

    useEffect(() => {
        RetrieveSection()
        console.log(isLogued)
    }, [])

    function RetrieveSection() {
        if (cookie.token != undefined) {
            setIsLogued(true)
        }
    }


    async function handlerLogin(email: string, password: string) {

        const { data, status } = await authenticate.post('', {
            email: email,
            password: password

        }).then(result => {
            return {
                status: result.status,
                data: result.data
            }

        }).catch((e: AxiosError) => {
            return {
                status: e.response?.status ? e.response?.status : 0,
                data: e.response?.data
            }
        }
        )

        if (status === 200) {
            setUserInfo(data)
            setToken(data.token)
            setCookie('token', data.token)
            setCookie('name', data.name)
            setCookie('email', data.email)
            setCookie('lastname', data.lastname)
            setCookie('_id', data.id)
            setIsLogued(true)
        }

        return status

    }


    function handlerLogout() {
        removeCookie('token');
        removeCookie('name');
        removeCookie('email');
        removeCookie('lastname');
        removeCookie('_id');
        setUserInfo(undefined)
        setIsLogued(false)
        navigate('/')
    }


    async function handlerRegister(user: userRegisterType) {
        const { status, data } = await register.post('',
            {
                password: user.password,
                name: user.name,
                lastname: user.lastname,
                email: user.email,
            }
        ).then(result => {
            return {
                status: result.status,
                data: result.data
            }

        }).catch((e: AxiosError) => {
            return {
                status: e.response?.status ? e.response?.status : 0,
                data: e.response?.data
            }
        })


        if (status === 200) {
            setUserInfo(data)
            setToken(data.token)
            setCookie('token', data.token)
            setCookie('name', data.name)
            setCookie('email', data.email)
            setCookie('lastname', data.lastname)
            setCookie('_id', data.id)
            setIsLogued(true)
        }

        return status;
    }




    return (
        <AuthContext.Provider value={{
            userInfo,
            isLogued,
            handlerLogin,
            handlerRegister,
            handlerLogout,
            token

        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);