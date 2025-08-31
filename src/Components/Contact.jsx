import React, { useRef, useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS configuration
    const serviceId = 'service_pgw7hx3';
    const templateId = 'template_cx68w2q';
    const publicKey = 'tq4VV68mY98bjXL-G';

    // Send email
    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        (response) => {
          console.log('Email sent successfully!', response.status, response.text);
          setSubmitStatus('success');
          form.current.reset(); // Clear the form
        },
        (error) => {
          console.error('Failed to send email:', error);
          setSubmitStatus('error');
        },
      )
      .finally(() => {
        setIsSubmitting(false);
        // Clear status message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center lg:justify-between items-center"
    >
      {/* Left Section - Contact Info */}
      <div className="w-full lg:w-[40%] flex flex-col gap-6 text-center lg:text-left">
        {/* Let's work together heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl capitalize font-medium leading-tight">
          let's <span className="text-orange-500">work</span>
          <br className="hidden sm:block" />
          <span className="sm:ml-2 lg:ml-0"> together</span>
          <span className="inline-block w-2 h-2 bg-orange-500 rounded-full ml-1">.</span>
        </h1>

        {/* Contact Details */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {/* Email */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center sm:items-start lg:items-center xl:items-start gap-2 sm:gap-3">
            <h2 className="text-lg sm:text-xl flex items-center gap-3 font-medium">
              <span className="text-xl sm:text-2xl text-orange-500">
                <IoIosMail />
              </span>
              Mail
            </h2>
            <p className="text-sm sm:text-base break-all">hemant6081@gmail.com</p>
          </div>

          {/* Address */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center sm:items-start lg:items-center xl:items-start gap-2 sm:gap-3">
            <h2 className="text-lg sm:text-xl flex items-center gap-3 font-medium">
              <span className="text-xl sm:text-2xl text-orange-500">
                <FaAddressBook />
              </span>
              Address
            </h2>
            <p className="text-sm sm:text-base">New Delhi</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center sm:items-start lg:items-center xl:items-start gap-2 sm:gap-3">
            <h2 className="text-lg sm:text-xl flex items-center gap-3 font-medium">
              <span className="text-xl sm:text-2xl text-orange-500">
                <FaPhoneAlt />
              </span>
              Phone
            </h2>
            <p className="text-sm sm:text-base">+91 9810231216</p>
          </div>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="w-full lg:w-[60%] max-w-md lg:max-w-none">
        <motion.form 
          ref={form} 
          onSubmit={onSubmitHandler} 
          className="flex flex-col gap-4 sm:gap-6" 
          method="post"
        >
          <input
            className="p-3 sm:p-4 outline-none rounded-xl text-base sm:text-lg lg:text-xl bg-transparent border-2 border-gray-300 focus:border-orange-500 transition-colors placeholder:text-gray-400"
            type="text"
            name="from_name"
            placeholder="Name"
            required
            disabled={isSubmitting}
          />
          <input
            className="p-3 sm:p-4 outline-none rounded-xl text-base sm:text-lg lg:text-xl bg-transparent border-2 border-gray-300 focus:border-orange-500 transition-colors placeholder:text-gray-400"
            type="email"
            name="from_email"
            placeholder="Email"
            required
            disabled={isSubmitting}
          />
          <textarea
            className="px-3 sm:px-4 py-4 sm:py-6 outline-none rounded-xl text-base sm:text-lg lg:text-xl bg-transparent border-2 border-gray-300 focus:border-orange-500 transition-colors placeholder:text-gray-400 resize-none"
            rows="8"
            name="message"
            placeholder="Message"
            required
            disabled={isSubmitting}
          ></textarea>
          
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded-xl">
              ✓ Message sent successfully! We'll get back to you soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-xl">
              ✗ Failed to send message. Please try again or email directly.
            </div>
          )}
          
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            type="submit"
            disabled={isSubmitting}
            className={`w-full p-3 sm:p-4 mt-3 text-base sm:text-lg lg:text-xl font-medium rounded-xl transition-colors ${
              isSubmitting 
                ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                : 'bg-orange-500 text-white hover:bg-orange-600'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;