'use client';
import React from 'react';
import {useState} from 'react';
import {onAuthStateChanged,signInWithEmailAndPassword} from 'firebase/auth';
import { auth, useAuthContext } from '../authContext';
import { useRouter } from 'next/navigation';

const SignupForm = () => {
  const me  = useAuthContext(); // Retrieve user context

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const router = useRouter();

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    //@ts-ignore
    setUser(currentUser);
  });




  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      router.push('/point-of-sale');
    } catch (error) {
        console.log('Une erreur inattendue s\'est produite');
    }
  };



  console.log(me)
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
      

     
      <form action="/submit" method="post">
       
        




        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Connexion</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email :</label>
          <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" required onChange={(event)=> {setLoginEmail(event.target.value);}}/>
        </div>
        <div className="mb-4">
          <label htmlFor="password1" className="block text-gray-700 font-medium mb-1">Mot de passe :</label>
          <input type="password" id="password1" name="password1" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" required onChange={(event)=> {setLoginPassword(event.target.value);}}/>
        </div>
        <button type="button" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-white-600 transition duration-300"    onClick={login} >Se connecter</button>
      </form>
    </div>
  );
};//
export default SignupForm;