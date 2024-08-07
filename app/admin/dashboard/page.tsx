"use client";
import React from 'react';
import { useUser, useClerk } from "@clerk/clerk-react";

export default function Dashboard() {
  const { isSignedIn, user, isLoaded } = useUser();
  const { signOut } = useClerk();

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  if (!isSignedIn) {
    return <div className="text-center text-red-500">Not signed in</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to your Dashboard, {user.fullName}!</h1>
        <button 
          onClick={() => signOut()} 
          className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Sign Out
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white shadow p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Activity Overview</h2>
            <ul className="list-disc list-inside">
              <li>Logged in from a new device</li>
              <li>Updated profile picture</li>
              <li>Joined a new group</li>
              <li>Completed a new challenge</li>
            </ul>
          </div>
          <div className="bg-white shadow p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Your Profile</h2>
            <p><strong>Full Name:</strong> {user.fullName}</p>
            <p><strong>Email:</strong> {user.primaryEmailAddress?.emailAddress}</p>
            <p><strong>Username:</strong> {user.username}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
