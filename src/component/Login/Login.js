import React from 'react' 
import './Login.css'
import {db} from './../../firebase'
import { collection, addDoc } from "firebase/firestore";


const Login =()=> {
        const [title, setTitle] = React.useState("");
        const handleSubmit = async (e) => {
        e.preventDefault();
        if (title !== "") {
            await addDoc(collection(db, "email"), {
            title,
            completed: false,
            });
            setTitle("");
        }
        };
        return (
            <section className="container text-center">
                <form onSubmit={handleSubmit}>
                <div className="input_container">
                <input
                    type="email"
                    placeholder="Enter email"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                </div>
                <div className="btn_container">
                <button className='btn'>Add</button>
                </div>
                </form>
            </section>
        );
}
export default Login
