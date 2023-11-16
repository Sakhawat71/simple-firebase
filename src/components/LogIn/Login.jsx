
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";


const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handelGoogleSignIn = () =>{
        
        signInWithPopup(auth,provider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.log('error', error)
        })
    }

    return (
        <div className="mt-20">
            
            <button 
            onClick={handelGoogleSignIn}
            className="btn"
            >Sign with Google</button>

        </div>
    );
};

export default Login;