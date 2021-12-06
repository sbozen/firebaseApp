import React, { useEffect, useState } from 'react';
import SignIn from './signIn';
import SignUp from './signUp';
import ShowUserData from './showUserData';
import db, { auth } from "../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";


function Home() {

    const [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const [users, setUsers] = useState([]);

    useEffect(() => {
        db.collection("users").onSnapshot((snapshot) =>
            setUsers(

                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    email: doc.email,
                    name: doc.data().name,
                    Surname: doc.data().surname,
                    phone: doc.data().phone,
                }))
            ));

    }, []);


    return (
        <div>

            {user?.email ? (<ShowUserData data={user.email} />) : (<SignUp />)}

        </div>

    )
}

export default Home;
//button in card grid