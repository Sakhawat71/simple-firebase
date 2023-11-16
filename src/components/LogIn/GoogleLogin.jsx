import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import app from "../../firebase/firebase.init";

const GoogleLogin = () => {

    const [user,setUser] = useState(null)

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const handelSignIn =()=>{
        signInWithPopup(auth,googleProvider)
        .then(result =>{
            const siggnUser = result.user;
            setUser(siggnUser);
        })
    }
    const handelSignOut =()=>{
        signOut(auth)
        .then(()=>{
            setUser(null)
        })
        .catch(error =>{
            console.log('error',error)
        })
    }

    console.log(user)

    return (
        <div>
            <div className="flex justify-center my-10">
                {
                    user ? 
                    <button 
                    onClick={handelSignOut}
                    className="btn"
                    >Sign Out</button>
                    :
                    <button 
                    onClick={handelSignIn}
                    className="btn"
                    >Sign In</button>
                }
            </div>
            <div className="text-center">
                <figure className="flex justify-center">
                    <img src={user?.photoURL} alt="" />
                </figure>
                <h1 className="text-2xl">{user?.displayName}</h1>
                <p className="text-xl">{user?.email}</p>
            </div>
        </div>
    );
};

export default GoogleLogin;