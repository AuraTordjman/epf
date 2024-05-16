'use client'
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebase-config'; 

function App() {
    const [customerName, setCustomerName] = useState("");
    const [customerPassword, setCustomerPassword] = useState("");

    const submit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "customersData"), {
                name: customerName,
                password: customerPassword,
            });
            setCustomerName("");
            setCustomerPassword("");
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <div className="App">
            <div className="App__form">
                <input
                    type="text"
                    placeholder="Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Password"
                    value={customerPassword}
                    onChange={(e) => setCustomerPassword(e.target.value)}
                />
                <button onClick={submit}>Submit</button>
            </div>
        </div>
    );
}

export default App;
