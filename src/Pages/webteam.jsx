// // import React from 'react';
// // import styled from 'styled-components';
// // import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
// // const TeamsContainer = styled.div`
// //   position: relative;
// //   min-height: 100vh;
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   overflow-y: auto;

// //   &::before {
// //     content: '';
// //     position: fixed;
// //     top: 0;
// //     left: 0;
// //     width: 100%;
// //     height: 100%;
// //     background-image: url('/bg.jpg');
// //     background-size: cover;
// //     background-position: center;
// //     background-repeat: no-repeat;
// //     z-index: 1;
// //     opacity: 0.2;
// //   }
// // `;

// // const Content = styled.div`
// //   position: relative;
// //   z-index: 1;
// //   color: white;
// //   text-align: center;
// //   padding: 20px;
// // `;

// // const Webteam = () => {
// //   return (
// //     <TeamsContainer>
// //       <Content>
// //         <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
// //           Meet Our Team
// //         </h2>
// //         <div className="relative w-full max-w-md mx-auto">
// //       {/* Card Container */}
// //       <div className="relative overflow-hidden rounded-lg bg-transparent p-1">
// //         {/* Content Container */}
// //         <div className="relative z-10 p-6">
// //           {/* Profile Image */}
// //           <div className="relative mx-auto w-48 h-48 mb-6 hover:-translate-y-2 transition-transform duration-300">
// //             <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 shadow-[0_0_15px_rgba(0,255,255,0.5),0_0_30px_rgba(0,255,255,0.3),0_0_45px_rgba(0,255,255,0.1)]"></div>
// //             <div className="relative rounded-full overflow-hidden">
// //               <img
// //                 src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
// //                 alt="Developer Profile"
// //                 className="w-full h-full object-cover"
// //               />
// //             </div>
// //           </div>

// //           {/* Name */}
// //           <h2 className="text-3xl font-bold text-center mb-2 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
// //             Sarah Anderson
// //           </h2>

// //           {/* Title */}
// //           <p className="text-cyan-400 text-center text-lg mb-6 font-mono tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
// //             Senior Full Stack Developer
// //           </p>

// //           {/* Social Links */}
// //           <div className="flex justify-center gap-6">
// //             {[
// //               { icon: Github, href: "https://github.com", label: "GitHub" },
// //               { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
// //               { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
// //               { icon: Mail, href: "mailto:contact@example.com", label: "Email" }
// //             ].map((social, index) => (
// //               <a
// //                 key={index}
// //                 href={social.href}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="group relative"
// //                 aria-label={social.label}
// //               >
// //                 <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
// //                 <div className="relative p-2 bg-gray-900 rounded-full transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
// //                   <social.icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
// //                 </div>
// //               </a>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //       </Content>
// //     </TeamsContainer>
// //   );
// // };

// // export default Webteam;
// import React from 'react';
// import styled from 'styled-components';
// import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

// const TeamsContainer = styled.div`
//   position: relative;
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   overflow-y: auto;

//   &::before {
//     content: '';
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-image: url('/bg.jpg');
//     background-size: cover;
//     background-position: center;
//     background-repeat: no-repeat;
//     z-index: 1;
//     opacity: 0.2;
//   }
// `;

// const Content = styled.div`
//   position: relative;
//   z-index: 1;
//   color: white;
//   text-align: center;
//   padding: 20px;
// `;

// const CardContainer = styled.div`
//   display: flex;
//   gap: 20px;
//   flex-wrap: wrap;
//   justify-content: center;
// `;

// const teamMembers = [
//   {
//     name: "Chandu Chintalapudi",
//     title: "Full Stack Developer",
//     image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
//     social: {
//       github: "https://github.com/CHchandu2005/",
//       linkedin: "https://linkedin.com/in/chandra",
//       email: "mailto:chanduchitalapudi9@gmail.com",
//     }
//   },
//   {
//     name: "Viswani Donthu",
//     title: "Backend Developer",
//     image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&h=400&fit=crop",
//     social: {
//       github: "https://github.com/viswani",
//       linkedin: "https://linkedin.com/in/viswani",
     
//       email: "mailto:donthuviswani@gmail.com",
//     }
//   }
// ];

// const Webteam = () => {
//   return (
//     <TeamsContainer>
//       <Content>
//         <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//           Meet Our Team
//         </h2>
//         <CardContainer>
//           {teamMembers.map((member, index) => (
//             <div key={index} className="relative w-80 mx-auto bg-transparent p-1 rounded-lg">
//               <div className="relative z-10 p-6 text-center">
//                 <div className="relative mx-auto w-48 h-48 mb-6 hover:-translate-y-2 transition-transform duration-300">
//                   <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 shadow-lg"></div>
//                   <div className="relative rounded-full overflow-hidden">
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>
//                 <h2 className="text-2xl font-bold mb-2 text-white">{member.name}</h2>
//                 <p className="text-cyan-400 text-lg mb-4">{member.title}</p>
//                 <div className="flex justify-center gap-4">
//                   {[
//                     { icon: Github, href: member.social.github },
//                     { icon: Linkedin, href: member.social.linkedin },
                 
//                     { icon: Mail, href: member.social.email }
//                   ].map((social, i) => (
//                     <a
//                       key={i}
//                       href={social.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="group relative"
//                     >
//                       <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
//                       <div className="relative p-2 bg-gray-900 rounded-full transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
//                         <social.icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
//                       </div>
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </CardContainer>
//       </Content>
//     </TeamsContainer>
//   );
// };

// export default Webteam;
import React from 'react';
import styled from 'styled-components';
import { Github, Linkedin, Mail } from 'lucide-react';

const TeamsContainer = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 1;
    opacity: 0.2;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  padding: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const teamMembers = [
  {
    name: "Chandu Chintalapudi",
    title: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    social: {
      github: "https://github.com/CHchandu2005/",
      linkedin: "https://linkedin.com/in/chintalapudi-chandra-sekhar-2468b4287",
      email: "chanduchitalapudi9@gmail.com",
    }
  },
  {
    name: "Viswani Donthu",
    title: "Backend Developer",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&h=400&fit=crop",
    social: {
      github: "https://github.com/ViswaniDonthu",
      linkedin: "https://linkedin.com/in/viswani-donthu-78bb45252",
      email: "donthuviswani@gmail.com",
    }
  }
];

const Webteam = () => {
  return (
    <TeamsContainer>
      <Content>
        {/* <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Meet Our Team
        </h2> */}
        <CardContainer>
          {teamMembers.map((member, index) => (
            <div key={index} className="relative w-80 bg-transparent p-1 rounded-lg">
              <div className="relative z-10 p-6 text-center">
                <div className="relative mx-auto w-48 h-48 mb-6 hover:-translate-y-2 transition-transform duration-300">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 shadow-lg"></div>
                  <div className="relative rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-2 text-white">{member.name}</h2>
                <p className="text-cyan-400 text-lg mb-4">{member.title}</p>
                <div className="flex justify-center gap-4">
                  {[
                    { icon: Github, href: member.social.github },
                    { icon: Linkedin, href: member.social.linkedin },
                    { icon: Mail, href: `mailto:${member.social.email}` },  // Fixed mailto link
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative p-2 bg-gray-900 rounded-full transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                        <social.icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </CardContainer>
      </Content>
    </TeamsContainer>
  );
};

export default Webteam;

