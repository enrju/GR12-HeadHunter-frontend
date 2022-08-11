import {Dispatch, SetStateAction} from "react";
import {NavigateFunction} from "react-router-dom";

export const handleChangePass = async (oldPassword: string, newPassword: string, repeatNewPass: string, setMessage: Dispatch<SetStateAction<string>>, setLabelActive: Dispatch<SetStateAction<boolean>>, setLoad: Dispatch<SetStateAction<boolean>>, navigate: NavigateFunction) => {
    if (newPassword !== repeatNewPass) {
        setMessage('Podane hasła nie są takie same')
        setLabelActive(true)
        setTimeout(() => {
            setLabelActive(false)
        }, 1300)
        return
    }

    if (newPassword.length < 8) {
        setMessage('Podane hasło musi mieć długość conajmniej 8 znaków')
        setLabelActive(true)
        setTimeout(() => {
            setLabelActive(false)
        }, 1300)
        return
    }

    return await fetch('http://localhost:3001/login/passchange', {
        method: 'PATCH',
        body: JSON.stringify({oldPassword, newPassword}),
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    }).then(res => res.json())
        .then(data => {
            setMessage(data.message)
            setLoad(true)
            if(!data.actionStatus){
                setTimeout(()=>{
                    setLabelActive(true)
                    setLoad(false)
                    setTimeout(() => {
                        setLabelActive(false)
                    }, 1300)
                },2000)
                return
            }
            setTimeout(()=>{
                setLabelActive(true)
                setTimeout(() => {
                    setLabelActive(false)
                    setLoad(false)
                    navigate('/')
                }, 1300)
            },2000)
        })
}