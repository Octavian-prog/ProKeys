// src/components/Common/ContactForm.tsx
import React, { useState } from 'react';

const ContactForm = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Message submitted:', message);
  };

  return (
    <section className="contact-section bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-300 ">
          Have questions or need assistance? Send us a message, and we'll get back to you as soon as possible.
        </p>
      </div>

      <form
        className="contact-form bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
            Your Message
          </label>
          {/* <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here..."
            className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          /> */}
          <textarea
  id="message"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  placeholder="Write your message here..."
  className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
/>

        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
