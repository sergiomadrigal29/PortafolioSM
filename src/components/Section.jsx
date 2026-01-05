import React from "react";
import '../styles/blobs.css'

const Section = ({ children, className = "" }) => (
  <section
    className={`relative w-full flex flex-col items-center justify-center py-12 px-4 min-h-[70vh] ${className}`}
  >
    <div
      className="bg-blob-perla"
      style={{ top: "-60px", left: "-100px", position: "absolute" }}
    ></div>
    <div
      className="bg-blob-plateado"
      style={{ bottom: "-40px", right: "-60px", position: "absolute" }}
    ></div>
    {children}
  </section>
); 

export default Section;
