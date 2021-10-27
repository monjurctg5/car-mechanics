import React from 'react';
import { Link ,useLocation,useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInUsingGoogle,setIsLoading} = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirec_uri = location.state?.from ||"/" 
    const handleGoogleLogin = ()=>{
        console.log(location.state?.from);
        
        signInUsingGoogle()
        .then(result=>{
            setIsLoading(false)

            history.push(redirec_uri)
        })

    }
    return (
        <div className= "w-50 mx-auto mt-5 brder shadow p-5">
        <h1 className="text-center text-success">Please Login</h1>
        <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          
            />
            
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"
            />
        </div>
        <div class="mb-3 form-check">
          <p>New User? <Link to = '/register'>Register Here</Link></p>
        </div>
        <button type="submit" class="btn btn-primary" >Submit</button>
        </form>
        <p className = "text-center">----------------------OR-----------------------</p>
        <h4 className = "text-center mt-4">Login withs</h4>
        <div className="d-flex mt-4 justify-content-center ">
            <div className = "mx-4 btn bg-white border rounded p-2" onClick = {handleGoogleLogin}  ><h4>
                <span className="text-primary">G</span>
                <span className="text-danger">o</span>
                <span className="text-warning">o</span>
                <span className="text-primary">g</span>
                <span className="text-success">l</span>
                <span className="text-danger">e</span>
               </h4></div>
            <div className = " btn mx-4 bg-primary text-white border rounded p-2" ><h4>FaceBook</h4></div>
            <div className = "mx-4 btn bg-dark text-white border rounded p-2" ><h4>Github</h4></div>

        </div>
    </div>
);
};

export default Login;