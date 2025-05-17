"use client";
import React, { useState, useEffect } from "react";

// Define the ContactMessage type
interface ContactMessage {
  _id: string;
  name: string;
  email: string;
  message: string;
}

export default function Dashboard() {
  // Set the correct type for the contactMessages state
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([]);
  const [notification, setNotification] = useState<{
    message: string;
    type: string;
  } | null>(null);

  // Fetch contact messages on component mount
  useEffect(() => {
    const fetchContactMessages = async () => {
      try {
        const response = await fetch("https://inventoglobal.com/api/contact");
        const data: ContactMessage[] = await response.json(); // Make sure the data matches the ContactMessage type
        setContactMessages(data); // Set the contact messages from the backend
      } catch (error) {
        console.error("Error fetching contact messages:", error);
        setNotification({
          message: "Failed to fetch contact messages.",
          type: "error",
        });
      }
    };
    fetchContactMessages();
  }, []);

  return (
    <div className="w-full p-8 overflow-y-auto bg-gray-100 text-black">
      {/* Notification */}
      {notification && (
        <div
          className={`p-4 mb-4 rounded text-white ${
            notification.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {notification.message}
        </div>
      )}

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Contact Messages</h1>

      {/* List of Contact Messages */}
      <ul className="space-y-4">
        {contactMessages.length > 0 ? (
          contactMessages.map((message) => (
            <li key={message._id} className="bg-white p-4 rounded shadow">
              <h4 className="text-lg font-bold">{message.name}</h4>
              <p className="text-sm text-gray-600">{message.email}</p>
              <p className="mt-2">{message.message}</p>
            </li>
          ))
        ) : (
          <li>No contact messages yet.</li>
        )}
      </ul>
    </div>
  );
}
