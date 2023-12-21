"use client";

import { useState } from "react";

export default function Traditional() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email || !password || !confirmPassword || !firstName || !lastName) {
      return alert("Please fill out all fields");
    }
    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }

    alert("User created successfully!");
  }

  return (
    <div className="p-10">
      <form className="space-y-5" onSubmit={onSubmit}>
        <div>
          <input
            className="border border-black px-5 py-3"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            className="border border-black px-5 py-3"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            className="border border-black px-5 py-3"
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            className="border border-black px-5 py-3"
            placeholder="First Name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <input
            className="border border-black px-5 py-3"
            placeholder="Last Name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-black text-white px-5 py-3">
          Submit
        </button>
      </form>
    </div>
  );
}
