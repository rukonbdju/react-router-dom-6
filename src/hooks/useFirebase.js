import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, signOut, sendPasswordResetEmail, sendEmailVerification, updateProfile } from "firebase/auth";
import app from "../../firebase.config";
import { useEffect, useState } from "react";
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const facebookProvider = new FacebookAuthProvider();
const useFirebase = () => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const [profileUpdated, setProfileUpdated] = useState(false);
    console.log(profileUpdated)
    const [sentEmail, setSentEmail] = useState(false);
    const [error, setError] = useState({});

    // Google, Github, Facebook Authentication

    const handleSignInWithPopUp = (option) => {
        console.log(option)
        let provider;
        if (option === 'google') {
            provider = googleProvider;
        }
        if (option === 'github') {
            provider = githubProvider;
        }
        if (option === 'facebook') {
            provider = facebookProvider;
        }
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user)
            }).catch((error) => {
                setError(error)
            });

    }

    //Update user profile (only name)

    const handleUpdateProfile = (name) => {
        console.log(name)
        updateProfile(auth.currentUser, {
            displayName: name,
          }).then(() => {
            setProfileUpdated
          }).catch((error) => {
            console.error(error)
          });
    }

    //Email varification for new user

    const handleSendEmailVerification = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                setSentEmail(true)
                setUser(auth.currentUser)
            })
            .catch(err => console.error(err))
    }

    //Create new user with email and password

    const handleCreateUserWithEmailAndPassword = (email, password,name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                handleUpdateProfile(name)
                handleSendEmailVerification();
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {
                setError(error)
            });
    }

    //sign in with email and password

    const handleSignInWithEmailAndPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
            })
            .catch((error) => {
                setError(error)
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error)
            });

    }

    //User logout

    const handleLogOut = () => {
        signOut(auth).then(() => {
            setUser(null)
        }).catch((error) => {
            setError(error)
        })
    }

    //Reset password by sending email

    const handlePasswordResetEmail = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log('Email is sent')
            })
            .catch((error) => {
                console.error(error);
            })
    }


    //get the state of user weather is loged in or not

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                // ...
            } else {
                setUser(null)
            }
            setLoading(false)
        });
    }, [auth])

    const methods = { handleCreateUserWithEmailAndPassword, handleSignInWithPopUp, handleSignInWithEmailAndPassword, handleLogOut, handlePasswordResetEmail}
    const authInfo = { user, loading, error,sentEmail }
    //return all the fuction and user and auth information
    return { authInfo, methods }
}

export default useFirebase;