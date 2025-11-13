// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* top navigation */}
      <Navbar />

      {/* page body */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* optional page header area (child pages can render inside) */}
        <div id="page-header" className="mb-6">
          {/* (leave empty — pages may set document.title or render their own header) */}
        </div>

        {/* page content from routes */}
        <section className="w-full">
          <Outlet />
        </section>
      </main>

      {/* footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-500 flex items-center justify-between">
          <div>© {new Date().getFullYear()} Cartify. All rights reserved.</div>
          <div className="space-x-4">
            <a className="hover:text-gray-700" href="/terms">Terms</a>
            <a className="hover:text-gray-700" href="/privacy">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
