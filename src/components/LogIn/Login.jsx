
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";



const Login = () => {

    const [user, setUser] = useState([]);

    const auth = getAuth(app);
    const porvider = new GoogleAuthProvider()

    const handelGoogleSignIn = () => {
        signInWithPopup(auth, porvider)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser);
            })
            .catch(error => {
                console.log('error', error)
            })
    }
    const handelSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null)
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div>
            <div className="mt-20 flex justify-center">

                {
                    user ? <button
                        onClick={handelSignOut}
                        className="btn"
                    >Sign Out</button> 
                    :
                     <button
                        onClick={handelGoogleSignIn}
                        className="btn"
                    >Sign with Google</button>
                }
            </div>

            {
                user && <div className="text-center my-10">
                    <figure className="flex justify-center"><img src={user.photoURL} alt="" /></figure>
                    <h2>{user.displayName}</h2>
                    <h3>{user.email}</h3>
                    <p>{user.metadata?.creationTime}</p>
                </div>
            }
        </div>

    );
};

export default Login;