// src/components/Common/ContactForm.tsx
import React, { useState } from 'react';

const ContactForm = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Message submitted:', { email, phone, message });
  };

  return (
    <section className="contact-section mt-7 min-h-screen bg-gradient-to-br from-gray-300 via-gray-800 to-gray-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl mb-4">Get in Touch</h2>
        <p className="text-lg font-semibold text-gray-300 ">
          Have questions or need assistance? Send us a message, or contact us directly on social media!
        </p>
      </div>

      <form
        className="contact-form bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="Your phone number"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here..."
            className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition duration-300 mb-4"
        >
          Send Message
        </button>
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="https://www.instagram.com/NUME_INSTAGRAM"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-pink-500 to-yellow-500 text-white px-5 py-3 rounded-full font-bold shadow hover:scale-105 transition"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/NUME_FACEBOOK"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-5 py-3 rounded-full font-bold shadow hover:scale-105 transition"
          >
            Facebook
          </a>
          <a
            href="https://wa.me/NUMAR_TELEFON"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-5 py-3 rounded-full font-bold shadow hover:scale-105 transition"
          >
            WhatsApp
          </a>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
