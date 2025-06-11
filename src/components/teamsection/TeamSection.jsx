import React from "react";
import adnan from '../../assets/images/adnan.png'
import tom from '../../assets/images/adnan.png' 
import matt from '../../assets/images/matt.png'
import antonios from '../../assets/images/antonios.png'

const teamMembers = [
   {
    name: "ADNAN KHAN",
    role: "CEO",
    image: tom,
    linkedin: "#",
    description:
      "Adnan is a qualified accountant and seasoned residential property expert who has served as Director of Central Services at Stirling Ackroyd and as Sales Director at Leaders Romans Group—Britain’s third-largest estate agency network. In addition to his extensive hands-on experience in real estate finance and operations, he is also a cryptocurrency owner and passionate enthusiast.",
    color: "text-pink-500",
  },
  {
    name: "ADNAN KHAN",
    role: "CEO",
    image: adnan,
    linkedin: "#",
    description:
      "Adnan is a qualified accountant and seasoned residential property expert who has served as Director of Central Services at Stirling Ackroyd and as Sales Director at Leaders Romans Group—Britain’s third-largest estate agency network. In addition to his extensive hands-on experience in real estate finance and operations, he is also a cryptocurrency owner and passionate enthusiast.",
    color: "text-pink-500",
  },
  {
    name: "MATT HEWITT",
    role: "COO",
    image: matt,
    linkedin: "#",
    description:
      "Matt is a qualified accountant with senior management experience at Safeway plc and Dell Computer Technologies. He went on to serve as Chief Marketing Officer at Countrywide plc—then the UK’s largest estate agency network—and was a founding member and Chief Operating Officer of Stirling Ackroyd Group Ltd, which was sold to Leaders Romans Group (the UK’s third-largest estate agency network) in 2024.",
    color: "text-fuchsia-400",
  },
  {
    name: "ANTONIOS KOZAKIS",
    role: "SALES DIRECTOR",
    image: antonios,
    linkedin: "#",
    description:
      "He is a seasoned residential property expert with extensive experience managing call centres, streamlining customer service operations and leading high-performing teams. As Area Sales Director at Leaders Group (LRG)—the UK’s third-largest estate agency network—he owned regional sales growth, mentored multiple teams and consistently exceeded targets in both lettings and sales.",
    color: "text-pink-400",
  },
];

export default function TeamSection() {
  return (
    <section className="w-full bg-gradient-to-tr from-[#1c1b2d] to-[#06121e] py-24 px-4">      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16" data-aos="fade-up">
          <p className="text-xs text-white/70 uppercase font-medium">THE TEAM</p>
          <h2 className="text-[24px] md:text-[32px] font-bold text-white mt-1 tracking-tight">PEOPLE BEHIND THE SCENES</h2>
        </div>
        <div className="flex flex-wrap gap-8">          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="w-[290px] bg-gradient-to-b from-white/5 to-white/0 border border-white/10 rounded-[24px] overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.3)] backdrop-blur-sm"
              data-aos="fade-up"
              data-aos-delay={idx * 200}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[340px] object-cover"
              />
              <div className="p-5 text-white flex flex-col gap-3 min-h-[220px]">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold tracking-wide uppercase">
                    {member.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="text-white"
>
  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 
           0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 
           19h-3v-10h3v10zm-1.5-11.28c-.97 
           0-1.75-.79-1.75-1.75s.78-1.75 
           1.75-1.75 1.75.79 1.75 
           1.75-.78 1.75-1.75 
           1.75zm13.25 11.28h-3v-5.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 
           1.12-2.5 2.5v5.5h-3v-10h3v1.39c.83-1.02 
           2.08-1.39 3.31-1.39 2.48 0 4.5 2.02 4.5 
           4.5v5.5z"/>
</svg>

                    <span className={`text-xs font-semibold ${member.color}`}>{member.role}</span>
                  </div>
                </div>
                <p className="text-xs text-white/80 leading-snug">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
