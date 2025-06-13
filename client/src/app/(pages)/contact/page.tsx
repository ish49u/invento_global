"use client";
import { useState } from "react";
import Head from "next/head";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | Invento by Veekay Enterprises</title>
        <meta
          name="description"
          content="Reach out to Invento, a Veekay Enterprises brand. We're here to help with any queries or collaborations."
        />
      </Head>

      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-center lg:py-16 pt-16 py-0 px-4 text-black">
        <h1 className="text-2xl md:text-4xl font-bold mb-2 mt-14">
          Contact Invento
        </h1>
        <p className="text-sm md:text-[16px]">
          A Veekay Enterprises Brand — We’re here to help
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:gap-10 gap-5 text-black">
        {/* Contact Form */}
        <div>
          <h2 className="lg:text-2xl text-xl font-semibold lg:mb-6 mb-3">
            Send Us a Message
          </h2>
          {submitted ? (
            <div className="text-green-600 lg:text-lg text-sm font-medium">
              Thank you! We'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block lg:text-sm text-xs font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="lg:w-full w-[92%] border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block lg:text-sm text-xs font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="lg:w-full w-[92%] border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block lg:text-sm text-xs font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="lg:w-full w-[92%]  border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-hoverprimary text-white font-medium py-2 px-6 rounded transition duration-300"
              >
                Submit
              </button>
            </form>
          )}
        </div>

        {/* Company Info */}
        <div>
          <h2 className="lg:text-2xl text-xl font-semibold lg:mb-6 mb-3">
            Contact Information
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Address:</strong> Vee Kay Enterprises E-183, New Focal
              Point Mehta Road Amritsar, Punjab – 143501
            </li>
            <li>
              <strong>Email:</strong>inventoglobal@gmail.com
            </li>
            <li>
              <strong>Phone:</strong>+91 94174 30218,+91 62839 48363
            </li>
          </ul>

          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.2855203125023!2d74.95169607541035!3d31.626031974165798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39197d456631b37f%3A0xde6683a66c91393b!2sVee%20Kay%20Enterprises!5e0!3m2!1sen!2sin!4v1745764333626!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Invento Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
