'use client';
import { Send } from 'lucide-react';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const SubmitForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    const object = {
      access_key: "708bc748-2ea4-40c1-afd8-dd7d6e3104d8",
      name,
      email,
      message,
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(object)
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: 'Success!',
        text: 'Message sent successfully!',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      setName('');
      setEmail('');
      setMessage('');
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Something went wrong. Please try again.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col justify-center gap-8 w-full my-10">
      <div className="flex flex-col md:flex-row gap-8 self-center justify-center w-full md:w-sm">
        <input 
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter Your name"
          required
          className="border-b-2 text-sm font-semibold outline-none"
        />
        <input 
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter Your email"
          required
          className="border-b-2 text-sm font-semibold outline-none"
        />
      </div>
      <textarea 
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your needs"
        required
        className="border-b-2 text-sm font-semibold outline-none w-full md:w-sm self-center"
      />
      <button 
        type="submit"
        className="rounded-full text-Dark-Navy bg-Aqua-Neon cursor-pointer py-2 px-6 flex w-fit gap-2 items-center self-center"
      >
        Send Message <Send />
      </button>
    </form>
  );
};

export default SubmitForm;