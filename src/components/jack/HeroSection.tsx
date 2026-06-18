import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FadeIn } from "./FadeIn";
import { Magnet } from "./Magnet";
import { ContactButton } from "./ContactButton";
import aminePortrait from "@/assets/amine.png";

const NAV_LINKS = [
  "About",
  "Skills",
  "Services",
  "Projects",
  "Contact",
];

export function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section
      className="h-screen flex flex-col relative"
      style={{ overflowX: "clip" }}
    >
      {/* Navbar */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 md:py-5 border-b border-white/[0.05] backdrop-blur-md bg-[#0C0C0C]/80"
      >
        <a
          href="#"
          className="text-white font-black uppercase tracking-widest text-sm sm:text-lg md:text-xl hover:opacity-80 transition-opacity flex items-center gap-2"
        >
          <span>Varun</span>
          <span className="hidden sm:inline text-white/40 font-light text-xs sm:text-sm uppercase tracking-wider">
            | Full Stack Developer
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4 sm:gap-6 md:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="
                relative
                text-[#D7E2EA]/85
                hover:text-white
                font-medium
                uppercase
                tracking-wider
                text-xs sm:text-sm md:text-base
                transition-colors duration-200
                pb-1
                after:content-['']
                after:absolute
                after:left-0
                after:bottom-0
                after:w-0
                after:h-[2px]
                after:bg-gradient-to-r
                after:from-purple-500
                after:to-pink-500
                hover:after:w-full
                after:transition-all
                after:duration-300
              "
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white hover:text-white/80 p-2 transition-colors duration-200 relative z-50"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 border-b border-white/10 bg-[#0C0C0C]/95 backdrop-blur-lg flex flex-col items-center py-8 gap-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="
                  text-white/80
                  hover:text-white
                  font-semibold
                  uppercase
                  tracking-widest
                  text-sm
                  transition-colors duration-200
                "
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </FadeIn>

      {/* Title */}
      <div className="overflow-hidden mt-24 sm:mt-24 md:mt-20 px-4">
        <FadeIn delay={0.15} y={40}>
          <h1
            className="
              hero-heading
              font-black
              uppercase
              tracking-tight
              leading-none
              text-center
              w-full
              text-[10vw]
              sm:text-[11vw]
              md:text-[12vw]
              lg:text-[13vw]
            "
          >
            Hi, i&apos;m Varun
          </h1>
        </FadeIn>
      </div>

      {/* Description + Button */}
      <div
        className="
          mt-auto
          flex
          flex-col
          sm:flex-row
          items-center
          sm:items-end
          justify-between
          gap-6
          pb-8
          sm:pb-8
          md:pb-10
          px-6
          md:px-10
          relative
          z-20
          text-center
          sm:text-left
        "
      >
        <FadeIn delay={0.35} y={20}>
          <p
            className="
              text-[#D7E2EA]
              font-light
              uppercase
              tracking-wide
              leading-snug
              max-w-xs
              sm:max-w-[220px]
              md:max-w-[260px]
            "
            style={{
              fontSize: "clamp(0.8rem, 1.4vw, 1.5rem)",
            }}
          >
            AI & Data Science Student & MERN Stack Developer
            building intelligent, scalable web applications
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="shrink-0">
          <ContactButton />
        </FadeIn>
      </div>

      {/* Portrait */}
      <FadeIn
        delay={0.6}
        y={30}
        className="
          absolute
          left-1/2
          -translate-x-1/2
          z-10
          top-1/2
          -translate-y-1/2
          sm:top-auto
          sm:translate-y-0
          sm:bottom-0
          w-[280px]
          sm:w-[360px]
          md:w-[440px]
          lg:w-[520px]
        "
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <img
            src={aminePortrait}
            alt="Amine Hamzaoui portrait"
            className="w-full h-auto select-none pointer-events-none"
            draggable={false}
          />
        </Magnet>
      </FadeIn>
    </section>
  );
}