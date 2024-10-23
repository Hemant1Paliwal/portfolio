import React , {useRef} from "react";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef() ; 
    const onSubmitHandler = (e) => {
        e.preventDefault() ; 
        // send mail 

    emailjs
    .sendForm('service_ymu9g88', 'template_cx68w2q', form.current, {
      publicKey: 'tq4VV68mY98bjXL-G',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
    }
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, x: "-300px" }}
      whileInView={{ opacity: [1], scale: [1], x: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="h-[100%]   w-[80%] mx-auto flex gap-4 justify-between   items-center  "
    >
      <div className="w-[40%]  pl-10  flex flex-col gap-6 p-3 ">
        {/* lets work together */}
        <h1 className="text-6xl capitalize font-medium ">
          let's <span className="text-[orange]">work</span> <br />{" "}
          <span>together </span> <span className="w-2 h-2 rounded-full">.</span>
        </h1>

        <div className="flex flex-col gap-2 ">
          <h2 className="text-xl flex items-center gap-3   font-medium">
            <span className="text-2xl text-[orange]">
              <IoIosMail />
            </span>
            Mail
          </h2>
          <p>hemant6081@gmail.com</p>
        </div>

        <div className="flex flex-col gap-2 ">
          <h2 className="text-xl flex items-center gap-3  font-medium">
            <span className="text-[orange]">
              <FaAddressBook />
            </span>
            Address
          </h2>
          <p>Sector-24 rohini</p>
        </div>

        <div className="flex flex-col gap-2 ">
          <h2 className="text-xl flex items-center gap-3    font-medium">
            <span className="text-[orange]">
              <FaPhoneAlt />
            </span>
            Phone
          </h2>
          <p>+91 9810231216</p>
        </div>
      </div>

      <div className="w-[60%] p-3 ">
        {/* form section */}
        <motion.form ref = {form} onSubmit={onSubmitHandler}  className="flex flex-col gap-4" method="post">
          <input
            className="p-2 outline-none rounded-xl text-xl bg-transparent border-2 "
            type="text"
            name="name"
            placeholder="name"
          />
          <input
            className="p-2 outline-none rounded-xl text-xl bg-transparent border-2 "
            type="email"
            name="email"
            placeholder="Email"
          />
          <textarea
            className="px-2 py-4 outline-none rounded-xl text-xl bg-transparent border-2 "
            rows="10"
            cols="10"
            name  = "message"
            placeholder="Message"
          ></textarea>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.01 }}
            className="w-full p-3 mt-3 text-center  bg-[orange] text-black  rounded-xl "
            value="Send"
          >
            Submit
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
