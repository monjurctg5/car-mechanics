import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged,signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAutentication from "../firebase/firebaseConfig";


initializeAutentication()
const auth = getAuth()
const goolgeProvider = new GoogleAuthProvider()
const useFirebase = ()=>{
    const [user,setUser] = useState({})
    const [isLoading,setIsLoading] = useState(true)

    const signInUsingGoogle = ()=>{
        setIsLoading(true)
       return signInWithPopup(auth,goolgeProvider)
      
    }
    const logout = ()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .finally(()=>{
            setIsLoading(false)
        })
       
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
        return ()=> unsubscribe
    },[])

return {
    user,
    signInUsingGoogle,
    logout,
    setIsLoading,
    isLoading
   

}
}

export default useFirebase