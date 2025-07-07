'use client';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function Profile() {
  const { data: session } = useSession();


  if (!session) {
    return (
      <div className="not-signed-in">
        <p className='message blue_gradient'>You need to be signed in to view this page</p>
        <button className="outline_btn" onClick={() => window.location.href = '/api/auth/signin'}>Sign in</button>
      </div>
    );
  }

  return (
      <div className="w-full min-h-screen flex items-center justify-center">
  <div className="bg-[#2e2e2e] border border-blue-500 rounded-xl p-8 shadow-lg flex flex-col items-center space-y-4">

    {/* Profile Image */}
    <img
      src={session.user.image}
      alt="Profile"
      className="w-28 h-28 rounded-full object-cover border-2 border-blue-400"
      draggable={false}
    />

    {/* Profile Details */}
    <div className="text-center text-white space-y-2">
      <h2 className="text-xl font-semibold text-blue-400">{session.user.name}</h2>
      <p><span className="text-gray-300 font-medium">Course:</span> B.Tech</p>
      <p><span className="text-gray-300 font-medium">Email ID:</span> {session.user.email}</p>
      <p><span className="text-gray-300 font-medium">Hostel:</span> C V Raman</p>
    </div>

  </div>
</div>

  );
}
