import React from "react";
import { Helmet } from "react-helmet";

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <title>eSIM Explorer - Compare the Best eSIM Plans</title>
        <meta
          name="description"
          content="Find and compare the best eSIM plans for travelers. See offers from Airalo, Nomad, SimOptions, Ubigi, and more."
        />
        <meta name="keywords" content="esim, travel sim, airalo, nomad, ubigi, simoptions, compare esim, best esim 2025" />
      </Helmet>
      <header className="p-4 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-xl font-bold">📶 eSIM Explorer</h1>
      </header>
      <main className="p-4 max-w-4xl mx-auto">{children}</main>
      <footer className="text-center text-sm text-gray-500 py-6"> 
        &copy; {new Date().getFullYear()} eSIM Explorer. All rights reserved.
      </footer>
    </>
  );
}