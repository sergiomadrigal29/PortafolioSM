import React from "react";

const SocialLinks = [
  {
    id: 1,
    title: "Github",
    link: "https://github.com/sergiomadrigal29",
    icon: "bi bi-github",
  },
  {
    id: 2,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/sergio-daniel-madrigal-valle-a3160a310/",
    icon: "bi bi-linkedin",
  },
  {
    id: 3,
    title: "Instagram",
    link: "https://www.instagram.com/_sergio_madrigal/",
    icon: "bi bi-instagram",
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-2 w-full px-4">
      <div className="flex gap-4 mb-2">
        {SocialLinks.map((social) => (
          <a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--azul-marino)] bg-[var(--gris-perla)] text-xl rounded-full p-2 transition-all duration-300 hover:text-[var(--blanco-nieve)] hover:bg-[var(--plateado)] focus:outline-none focus:ring-2 focus:ring-[var(--plateado)]"
            aria-label={social.title}
          >
            <i className={social.icon}></i>
          </a>
        ))}
      </div>
      <span className="text-xs text-[var(--plateado)] text-center">
        Hecho con ❤️ | Inspirado en desarrolladores modernos
      </span>
    </div>
  );
};

export default Footer;
