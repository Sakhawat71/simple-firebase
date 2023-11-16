
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";



const Login = () => {

    const auth = getAuth(app);
    const porvider = new GoogleAuthProvider()

    const handelGoogleSignIn  =()=>{
        signInWithPopup(auth,porvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            console.log(error)
        })
    }


    

    return (
        <div className="mt-20 flex justify-center">

            <button
                onClick={handelGoogleSignIn}
                className="btn"
            >Sign with Google</button>

        </div>
    );
};

export default Login;

/**
 *     const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handelGoogleSignIn = () => {

        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => {
                console.log('error', error)
        })

    }
 * 
 * 
 * 
 */