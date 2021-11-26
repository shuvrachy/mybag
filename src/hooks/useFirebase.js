import { useEffect, useState } from "react";

import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth";
import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init";


//initialize firebase app
initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
      console.log(email, password); 
      setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              setAuthError('');
              const newUser = {email, displayName: name};
              setUser(newUser);

              //save user to database
              saveUser(email, name, 'POST');

              //send name to firebase after register
              updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
                
              }).catch((error) => {
                
              });
              const destination =  '/';
            history.push(destination);
            
  })
  .catch((error) => {
    
    setAuthError(error.message);
  //  console.log(errorMessage);
  })
  .finally(()=> setIsLoading(false));
    }

  //onauthstatechanged(observer user state)
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
          
        } 
        else {
            setUser({});
        }
        setIsLoading(false)
      });
      
  }, [])

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setAuthError('');
  })
  .catch((error) => {
    setAuthError(error.message);
  })
  .finally(()=> setIsLoading(false));
  }
  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            saveUser(user.email, user.displayName, 'PUT');
            setAuthError('');
            const destination = location?.state?.from || '/';
            history.replace(destination);
        }).catch((error) => {
            setAuthError(error.message);
        }).finally(() => setIsLoading(false));
}
  /* const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
       
        
        const destination = location?.state?.from || '/';
        history.replace(destination);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    
    const user = result.user;
     //save user data to database
     saveUser(user.email, user.displayName, 'PUT');
    setAuthError('');
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
  
  })
  .finally(()=> setIsLoading(false));
  }
 */
    useEffect(() => {
      fetch(`https://sheltered-gorge-39495.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    }, [user.email])

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=> setIsLoading(false));
    }
    //SAVE USER DATA ( POST API)
    const saveUser = (email, displayName, method) => {
      const user = {email, displayName};
      fetch('https://sheltered-gorge-39495.herokuapp.com/users', {
        method: method,
        headers: {
          'content-type' : 'application/json' 
        },
        body: JSON.stringify(user)
      })
      .then()
    }

    return {

        user,
        admin,
        registerUser,
        loginUser,
        logout,
        authError,
        signInWithGoogle,
        isLoading,
    }

}

export default useFirebase;