
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
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
                // console.log(loggedUser)
                setUser(loggedUser);
            })
            .catch(error => {
                console.log('error', error)
            })
    }

    console.log(user)



    return (
        <div>
            <div className="mt-20 flex justify-center">
                <button
                    onClick={handelGoogleSignIn}
                    className="btn"
                >Sign with Google</button>
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