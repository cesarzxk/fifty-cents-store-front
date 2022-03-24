import { Alert, AlertDescription, AlertIcon, CloseButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";

type Props = {
    status?:number, 
    setStatus:(status:number)=>void, 
    params?:string[],
}

function Warnning({status, setStatus, params}:Props){
    const [currentType, setCurrentType] = useState<"error" | "info" | "warning" | "success"|undefined>()
    const [currentMsg, setCurrentMsg] = useState<string>('')

    const statusList = 
        {
            412:{
                type:"error" as "error",
                msg:"Por favor preencher todos os campos!"

            },
            200:{
                type:"sucess" as "success",
                msg:"Ação realizada com sucesso!"

            },
            409:{
                type:"warning" as "warning",
                msg:"Email já cadastrado!"
            },

            404:{
                type:"error" as "error",
                msg:"Erro interno!"

            },
            401:{
                type:"error" as "error",
                msg:"Email ou senha incorretos!"

            },
            500:{
                type:"error" as "error",
                msg:"Erro fatal interno!!"

            },
        }
    

    useEffect(()=>{
        switchStatus()
    }, [status])


    function switchStatus (){
        switch(status){
        case 412:
            setCurrentType(statusList[412].type)
            setCurrentMsg(statusList[412].msg)
            break;
        
        case 200:
            setCurrentType(statusList[200].type)
            setCurrentMsg(statusList[200].msg)
            break;
        
        case 409:
            setCurrentType(statusList[409].type)
            setCurrentMsg(statusList[409].msg)
            break;
        
        case 404:
            setCurrentType(statusList[404].type)
            setCurrentMsg(statusList[404].msg)
            break;
        
        case 401:
            setCurrentType(statusList[401].type)
            setCurrentMsg(statusList[401].msg)
            break;
        
        case 500:
            setCurrentType(statusList[500].type)
            setCurrentMsg(statusList[500].msg)
            break;
        }
    }


    return(
        
        (status == 0)?(
            <>
            
            </>
        
        ):(
            <Alert 
            position='absolute' 
            status={currentType}>
                <AlertIcon />
                <AlertDescription>{currentMsg}</AlertDescription>
                <CloseButton position='absolute' right='8px' top='8px' 
                onClick={()=>setStatus(0)}
                />
            </Alert>
        )

        )
    
}
export default Warnning;