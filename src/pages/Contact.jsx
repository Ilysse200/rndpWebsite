import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/maneryll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully! ✅');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong. ❌ Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. ❌ Please try again.');
    }
  };

  return (
    <section className="p-10 max-w-lg mx-auto">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <textarea
          name="message" 
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-200"
        >
          Send Message
        </button>
        {status && <p className="text-sm text-center text-green-700 mt-2">{status}</p>}
      </form>
    </section>
  );
}
