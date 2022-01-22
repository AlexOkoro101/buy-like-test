import { useRouter } from "next/router"
import { useEffect } from "react"
import { enviroment } from "../../src/components/enviroment"

function VerifyEmail() {
    const router = useRouter()
    const token = router;

    useEffect(() => {
        verifyUser()
        return () => {
            verifyUser()
        }
    }, [])

    const verifyUser = () => {
        var requestOptions = {
            method: 'POST',
            redirect: 'follow',
            body: token
        };
          
        fetch(enviroment.BASE_URL + "auth/verify/", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            if(result.error == false) {
                localStorage.setItem('verifiedUser', true)
                router.push("/")
            }
        })
        .catch(error => console.log('error', error));
    }


    return (
        <div>
            
        </div>
    )
}

export default VerifyEmail
