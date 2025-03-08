import {Navigate} from "react-router-dom"
import {jwtdecode} from "jwt-decode"
import {api} from "../api"
import {ACCESS_TOKEN, REFRESH_TOKEN} from "../constants"
import {useState, useEffect} from "react"

function ProtectedRoutes({children}){
    const [isAuthorized, setisAuthorized] = useState(null);

    useEffect(() =>{
        checkAuth().catch((error) => setisAuthorized(false));
    }, [])

    const refreshToken = async() =>{
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);

        try{
            const response = await api.post("/api/token/refresh/", {
                refresh: refreshToken
            });

            if (response.status === 200){
                const token = response.data.access;
                localStorage.setItem(ACCESS_TOKEN, token);
                setisAuthorized(true);
            }else{
                setisAuthorized(false);
            }

        }catch(error){
            console.log(error);
            setisAuthorized(false);
        }
    }

    const checkAuth = async() => {
        const token = localStorage.getItem(ACCESS_TOKEN);

        if (!token){
            setisAuthorized(false);
            return;
        }

        const decoded = jwtdecode(token);
        const currentTime = Date.now() / 1000;
        const tokenExpiration = decoded.exp;

        if (tokenExpiration < currentTime){
            await refreshToken();
        }else{
            setisAuthorized(true);
        }
    }

    if (isAuthorized === null){
        return <div>Loading...</div>;
    }

    return isAuthorized ? children : <Navigate to = "/login"/>
}

export default ProtectedRoutes;