import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import app from "../../firebase/firebase.init";

const login = () => {
  const [user, setuser] = useState(null);
  const auth = getAuth(app);
  console.log(app);
  const provider= new GoogleAuthProvider();

  const handileGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInuser = result.user;
        console.log(loggedInuser);
        setuser(loggedInuser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setuser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {/* user ? logout : sign in */}

      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handileGoogleSignIn}>Google login</button>
      )}

      {user && (
        <div>
          <h3>User:{user?.displayName}</h3>
          <p>Email:{user?.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default login;
