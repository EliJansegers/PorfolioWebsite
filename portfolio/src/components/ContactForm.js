import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_YOUR_SERVICE_ID,
      process.env.REACT_APP_YOUR_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_YOUR_USER_ID
    )
    .then((result) => {
        console.log(result.text);
        // Handle success (e.g., show a success message)
    }, (error) => {
        console.log(error.text);
        // Handle errors (e.g., show an error message)
    });
  };

  return (
    <div className="flex justify-center">
      <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg bg-white rounded-lg shadow-md p-8 mt-6 mb-6">
        {/* Input fields with improved styling */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input type="text" name="user_name" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input type="email" name="user_email" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">LinkedIn Profile</label>
          <input type="text" name="user_linkedin" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
          <textarea name="message" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
        </div>

        <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
