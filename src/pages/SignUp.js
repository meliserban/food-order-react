import React from "react";
import "../styles/SignUp.css";
import { motion } from "framer-motion/dist/framer-motion";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
}; 


  return (
    <motion.div onSubmit={addUserHandler} className="contact"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity:0}}>
      <div className="rightSide">
        <h1> Sign Up </h1>
        <form id="contact-form" method="POST">
          <input name="name" placeholder="enter your name" type="text" />
          <input name="surname" placeholder="enter your surname" type="text" />
          <input name="email" placeholder="enter email" type="email" />
          <input name="password" placeholder="enter a password" type="password" />
          <button type="submit"> Sign Up</button>
        </form>
      </div>

    </motion.div>
  );
}

export default AddUser;