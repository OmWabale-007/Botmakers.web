import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroBg from '../assets/hero-bg.jpg';

function Home() {
  const navigate = useNavigate();

  const handleNav = (label) => {
    navigate(`/clicked/${encodeURIComponent(label)}`);
  };

  const [judge, setJudge] = useState({ name: '', location: '', email: '' });
  const [volunteer, setVolunteer] = useState({ name: '', location: '', email: '' });
  const [member, setMember] = useState({ name: '', location: '', email: '' });

  const handleJudgeSubmit = (e) => {
    e.preventDefault();
    if (!judge.name) return;
    navigate(`/clicked/${encodeURIComponent(`Thank You, ${judge.name}! You are registered as a Judge`)}`);
  };

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    if (!volunteer.name) return;
    navigate(`/clicked/${encodeURIComponent(`Thank You, ${volunteer.name}! You are registered as a Volunteer`)}`);
  };

  const handleMemberSubmit = (e) => {
    e.preventDefault();
    if (!member.name) return;
    navigate(`/clicked/${encodeURIComponent(`Thank You, ${member.name}! You are registered as a Community Member`)}`);
  };

  return (
    <div className="antialiased overflow-x-hidden relative text-[#e0e0e0] font-sans bg-[#0a0a0a]">
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-grid opacity-20"></div>

      <header className="sticky top-0 z-50 bg-brand-black/90 backdrop-blur-md border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <a 
                className="text-2xl font-display font-bold italic tracking-tighter cursor-pointer"
                onClick={(e) => { e.preventDefault(); navigate('/'); }}
              >
                <span className="text-brand-blue">BOT</span><span className="text-white">LEAGUE</span>
              </a>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a className="text-sm font-medium text-brand-red border-b-2 border-brand-red pb-5 mt-5 cursor-pointer" onClick={() => handleNav('Events')}>Events</a>
              <a className="text-sm font-medium text-brand-text hover:text-white transition-colors py-5 cursor-pointer" onClick={() => handleNav('Programs')}>Programs</a>
              <a className="text-sm font-medium text-brand-text hover:text-white transition-colors py-5 cursor-pointer" onClick={() => handleNav('Community')}>Community</a>
              <a className="text-sm font-medium text-brand-text hover:text-white transition-colors py-5 cursor-pointer" onClick={() => handleNav('Ranks')}>Ranks</a>
            </nav>
            <div className="flex items-center space-x-4">
              <a className="text-sm font-medium text-brand-text hover:text-white transition-colors cursor-pointer" onClick={() => handleNav('Login')}>LOGIN</a>
              <a className="clip-button bg-brand-red hover:bg-brand-redHover text-white text-xs font-bold py-2 px-6 transition-colors cursor-pointer" onClick={() => handleNav('Register Now')}>REGISTER NOW</a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="relative bg-brand-dark pt-20 pb-32 overflow-hidden border-b border-brand-border">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroBg} 
              className="w-full h-full object-cover" 
              alt="Hero Background" 
            />
            <div className="absolute inset-0 bg-brand-black/60"></div>
          </div>

          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-brand-black border border-brand-border rounded-full px-4 py-1 flex items-center space-x-2 z-10">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
            <span className="text-xs font-bold text-white uppercase tracking-wider">Live | Episode 14 - Bengaluru Regionals</span>
            <a className="text-xs text-brand-red hover:text-white transition-colors ml-2 font-semibold cursor-pointer" onClick={() => handleNav('Watch Live')}>WATCH LIVE</a>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 lg:flex items-center gap-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4 tracking-wide text-shadow-sm">
                INDIA'S ULTIMATE<br />ROBOTICS ARENA
              </h1>
              <p className="text-lg text-brand-text mb-8 max-w-xl mx-auto">
                Build. Compete. Rank. The National Ecosystem for Robotics Arena.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a className="clip-button bg-brand-red hover:bg-brand-redHover text-white font-bold py-3 px-8 transition-colors text-sm tracking-wider cursor-pointer" onClick={() => handleNav('Create Account')}>CREATE ACCOUNT</a>
                <a className="clip-button bg-transparent border border-brand-text text-brand-text hover:text-white hover:border-white font-bold py-3 px-8 transition-colors text-sm tracking-wider cursor-pointer" onClick={() => handleNav('Explore Events')}>EXPLORE EVENTS</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-brand-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 tracking-wider">COMPETITIONS &amp; EVENTS</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              <div className="bg-brand-card border border-brand-border rounded-lg p-6 flex flex-col">
                <h3 className="text-brand-red text-sm font-bold tracking-widest mb-6 border-b border-brand-border pb-2">LIVE NOW</h3>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-lg font-bold text-white">Bengaluru Regionals</h4>
                    <p className="text-xs text-brand-muted mt-1">National qualifiers for the Ultimate Robotics Arena.</p>
                  </div>
                  <span className="bg-brand-red text-white text-[10px] font-bold px-2 py-1 rounded">Ongoing</span>
                </div>
                <div className="flex-grow flex items-center justify-center py-8">
                  <div className="flex space-x-4 w-full text-xs text-brand-muted font-mono">
                    <div className="flex flex-col space-y-4 w-1/3">
                      <div className="bg-brand-dark p-2 border border-brand-border rounded text-center">Team A</div>
                      <div className="bg-brand-dark p-2 border border-brand-border rounded text-center">Team B</div>
                    </div>
                    <div className="flex flex-col justify-center w-1/3">
                      <div className="border-t border-r border-b border-brand-border h-12 w-full rounded-r"></div>
                    </div>
                    <div className="flex flex-col justify-center w-1/3">
                      <div className="bg-brand-dark p-2 border border-brand-red text-white font-bold rounded text-center shadow-[0_0_10px_rgba(255,51,51,0.5)]">Winner</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-card border border-brand-border rounded-lg p-6">
                <h3 className="text-white text-sm font-bold tracking-widest mb-6 border-b border-brand-border pb-2">UPCOMING</h3>
                <div className="space-y-6">
                  <div className="bg-brand-dark p-4 rounded border border-brand-border">
                    <h4 className="text-base font-bold text-white mb-2">Event in Mumbai</h4>
                    <div className="grid grid-cols-3 gap-2 text-xs mb-4">
                      <div>
                        <span className="text-brand-muted block">Event Date</span>
                        <span className="text-brand-text">15/12/25</span>
                      </div>
                      <div>
                        <span className="text-brand-muted block">Location</span>
                        <span className="text-brand-text">IIT Bombay</span>
                      </div>
                      <div>
                        <span className="text-brand-muted block">Category</span>
                        <span className="text-brand-text">Combat Robotics</span>
                      </div>
                    </div>
                    <a className="block w-full text-center bg-brand-red hover:bg-brand-redHover text-white text-xs font-bold py-2 rounded transition-colors cursor-pointer" onClick={() => handleNav('Register for Mumbai Event')}>REGISTER</a>
                  </div>
                  <div className="bg-brand-dark p-4 rounded border border-brand-border">
                    <h4 className="text-base font-bold text-white mb-2">Event in Delhi</h4>
                    <div className="grid grid-cols-3 gap-2 text-xs mb-4">
                      <div>
                        <span className="text-brand-muted block">Event Date</span>
                        <span className="text-brand-text">20/01/26</span>
                      </div>
                      <div>
                        <span className="text-brand-muted block">Location</span>
                        <span className="text-brand-text">Pragati Maidan</span>
                      </div>
                      <div>
                        <span className="text-brand-muted block">Category</span>
                        <span className="text-brand-text">Autonomous Drones</span>
                      </div>
                    </div>
                    <a className="block w-full text-center bg-brand-red hover:bg-brand-redHover text-white text-xs font-bold py-2 rounded transition-colors cursor-pointer" onClick={() => handleNav('Register for Delhi Event')}>REGISTER</a>
                  </div>
                </div>
              </div>

              <div className="bg-brand-card border border-brand-border rounded-lg p-6">
                <h3 className="text-white text-sm font-bold tracking-widest mb-6 border-b border-brand-border pb-2">PAST RESULTS</h3>
                <div className="space-y-4">
                  <div 
                    className="bg-brand-dark p-4 rounded border border-brand-border flex justify-between items-center cursor-pointer hover:border-brand-text transition-colors"
                    onClick={() => handleNav('Bengaluru Regionals - S14 Finals')}
                  >
                    <div>
                      <h4 className="text-sm font-bold text-white">Bengaluru Regionals</h4>
                      <p className="text-xs text-brand-muted mt-1">Season 14 Finals - High Octane Action</p>
                    </div>
                    <svg className="w-4 h-4 text-brand-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <div 
                    className="bg-brand-dark p-4 rounded border border-brand-border flex justify-between items-center cursor-pointer hover:border-brand-text transition-colors"
                    onClick={() => handleNav('Bengaluru Regionals - S14 Semi-Finals')}
                  >
                    <div>
                      <h4 className="text-sm font-bold text-white">Bengaluru Regionals</h4>
                      <p className="text-xs text-brand-muted mt-1">Season 14 Finals - High Octane Action</p>
                    </div>
                    <svg className="w-4 h-4 text-brand-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <div 
                    className="bg-brand-dark p-4 rounded border border-brand-border flex justify-between items-center cursor-pointer hover:border-brand-text transition-colors"
                    onClick={() => handleNav('Bengaluru Regionals - S14 Quarter-Finals')}
                  >
                    <div>
                      <h4 className="text-sm font-bold text-white">Bengaluru Regionals</h4>
                      <p className="text-xs text-brand-muted mt-1">Season 14 Finals - High Octane Action</p>
                    </div>
                    <svg className="w-4 h-4 text-brand-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="py-20 bg-brand-dark border-t border-b border-brand-border text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h4 className="text-brand-red text-sm font-bold tracking-widest mb-2">USER JOURNEY</h4>
            <h2 className="text-3xl font-bold text-white mb-4 tracking-wider">YOUR PATH TO THE LEAGUE</h2>
            <p className="text-brand-muted text-sm mb-16">Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
            <div className="flex flex-col md:flex-row justify-center items-center relative max-w-4xl mx-auto">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-blueDark -translate-y-1/2 z-0"></div>
              
              <div className="flex flex-col md:flex-row justify-between w-full relative z-10 space-y-8 md:space-y-0">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full border-2 border-brand-blue bg-brand-black flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(0,102,204,0.3)]">
                    <svg className="w-8 h-8 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                    </svg>
                  </div>
                  <span className="text-brand-red text-xs font-bold mb-1">STEP 1</span>
                  <span className="text-white text-sm font-bold tracking-wide text-center">BUILD YOUR<br />TEAM</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full border-2 border-brand-blue bg-brand-black flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(0,102,204,0.3)]">
                    <svg className="w-8 h-8 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                    </svg>
                  </div>
                  <span className="text-brand-red text-xs font-bold mb-1">STEP 2</span>
                  <span className="text-white text-sm font-bold tracking-wide text-center">COMPETE ACROSS<br />INDIA</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full border-2 border-brand-blue bg-brand-black flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(0,102,204,0.3)]">
                    <svg className="w-8 h-8 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                    </svg>
                  </div>
                  <span className="text-brand-red text-xs font-bold mb-1">STEP 3</span>
                  <span className="text-white text-sm font-bold tracking-wide text-center">EARN NATIONAL<br />RANKING &amp; VALUE</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full border-2 border-brand-blue bg-brand-black flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(0,102,204,0.3)]">
                    <svg className="w-8 h-8 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                    </svg>
                  </div>
                  <span className="text-brand-red text-xs font-bold mb-1">STEP 4</span>
                  <span className="text-white text-sm font-bold tracking-wide text-center">JOIN THE<br />LEAGUE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-brand-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 tracking-wider">WHAT IS BOTLEAGUE?</h2>
            <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
              <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <span className="text-brand-red font-bold text-xl block mb-2">1.</span>
                  <h4 class="text-white font-bold mb-2">STRUCTURED EVENTS</h4>
                  <p className="text-brand-muted text-sm">"From one-off events to a year-round competitive season."</p>
                </div>
                <div>
                  <span className="text-brand-red font-bold text-xl block mb-2">2.</span>
                  <h4 class="text-white font-bold mb-2">DIGITAL IDENTITY</h4>
                  <p className="text-brand-muted text-sm">"Your professional robotics legacy, tracked and verified."</p>
                </div>
                <div>
                  <span className="text-brand-red font-bold text-xl block mb-2">3.</span>
                  <h4 class="text-white font-bold mb-2">NATIONAL RANKING</h4>
                  <p className="text-brand-muted text-sm">"Benchmark your skills against the best engineers in India."</p>
                </div>
                <div>
                  <span className="text-brand-red font-bold text-xl block mb-2">4.</span>
                  <h4 class="text-white font-bold mb-2">CAREER PATHWAY</h4>
                  <p className="text-brand-muted text-sm">"Turning arena victories into real-world industry opportunities."</p>
                </div>
              </div>
              <div className="w-full lg:w-1/3 flex justify-center opacity-70">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-lOQPTCjv4jEPBtNeOYv4iYk_x0Nu14SJsjNp7tTgTeLmsDEUXgYK50yjtn-0E2CpUMXJcwqpQdF2tRskHaNwOyfPAextvpNGUvaCDoRzxGbnnFOuf7vhkBYH6lTtjiMltl_Hou-JqtjOREWFJQicO5-5KVE9pCFBwwbkx1vO2NbsTZtwm5NpWhict_sgQ1PBEyoEBOtHBsiqJh4R18QNVf1ECbzF6P13cndu7z8iNTo4tMaJJOQDwcLjigwa4a6sfRTZNIPSSA" 
                  alt="Digital Identity Icon" 
                  className="w-64 h-64 object-cover rounded-lg shadow-[0_0_15px_rgba(0,102,204,0.3)]" 
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-brand-dark border-t border-b border-brand-border relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h4 className="text-brand-red text-sm font-bold tracking-widest mb-2">SPORTS</h4>
            <h2 className="text-3xl font-bold text-white mb-12 tracking-wider">COMPETITION DISCIPLINES</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              
              <div 
                className="relative group overflow-hidden rounded border border-brand-border aspect-video bg-brand-card cursor-pointer"
                onClick={() => handleNav('Discipline: Robo Race')}
              >
                <img 
                  alt="Robo Race" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnSrM1lrnxcB8GGov63-uu5-7fdvzUYlsCYxNw2acwuObVhgHAhVm76pkGQeRSnrYTfE_piq-QrSl1aSZ84hYGV33q54QxNqgG78XA15IWFCgwWpIdeZFHorBumHhjgQFb1lp4WgZbMZ365aYbioN8G54QCDLDYnc7MN9gy12i_YhPv2Jyg3N1Zt4LGQlKH7mpPfr5OzxqqurASxZAs_OAB90jS0Qn2_VSuMsUchOR1sfRY4JNPifXwPeTVH8zCWefSSIXe0h7fw" 
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-brand-black to-transparent p-4">
                  <span className="text-white font-bold text-sm">Robo Race</span>
                </div>
              </div>

              <div 
                className="relative group overflow-hidden rounded border border-brand-border aspect-video bg-brand-card cursor-pointer"
                onClick={() => handleNav('Discipline: Line Follower')}
              >
                <img 
                  alt="Line Follower" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI2prpefkwq-aBQO9ToVq5KjxFuNR-NPdXziDq9nHYIT-dC4kyDFsWJgrsxSqviwMPa9QIk6qJekTaXxBTjXU_18T_wZujPYiDyHFFeLc0e0NeXvDPwWiF9SIWxDtsXNpg7X96yP_5y3Hi_7XcgbP8VNhhRraRr0xqzP6LLF4uA34KYi5qvnsANhnHqttFCb0Ls_aub0FoMAB_4aLJKQD7PoGo3Bfhy4MqB6dH7eeCbO1XDBSSU9_w040m4e-IT_1q8BC9zvmq2g" 
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-brand-black to-transparent p-4">
                  <span className="text-white font-bold text-sm">Line Follower</span>
                </div>
              </div>

              <div 
                className="relative group overflow-hidden rounded border border-brand-border aspect-video bg-brand-card cursor-pointer"
                onClick={() => handleNav('Discipline: RC Racing')}
              >
                <img 
                  alt="RC Racing" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxeIS7x3kA_ss-f88JFdCsMvUwkfJEMmyvt2Biwj70el4mk-W1t2IlBdhZ3IaxsXZBjG8ZDS2PuvrYBpigRCvir3r7uHlC4xXSpuxc4LIDGk69o8ERWRQZjf-HrW19Q4AcvMYZVBmad_6T3Bdc_uXpDnk5Zx_0HpBn1Ptpd0o-U8emKV9qyACzuzDXJZHakG2ryU9F07zrEGu9SSaDouqkbGrVRxXT8nGUjoitESCGEt9p8nFuga6aXR4tZ48YDBvEPGB6_fwKbA" 
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-brand-black to-transparent p-4">
                  <span className="text-white font-bold text-sm">RC Racing</span>
                </div>
              </div>

              <div 
                className="relative group overflow-hidden rounded border border-brand-border aspect-video bg-brand-card cursor-pointer"
                onClick={() => handleNav('Discipline: FPV Drone Racing & Aeromodelling')}
              >
                <img 
                  alt="FPV Drone Racing &amp; Aeromodelling" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCizE8PgAchEvyiV0YBN-glHu72ZsNqvYlOTsgtQfxV9hu8ZUtr8rbKO7J1a4NxYc5wo57N9i7wu4LicZ46G9Vq2ljvNqXjcwyTftQxDZ17rEax07djWyCNB5tPyxtNMdzoyyIvKec6Nr-SiG2qOU0-mgPfDrXTsOffgVa2r6SIJW9L89Xq1s0u2G6L2kOtJc8VU0l6PA3EuljBXCMqHj26d9znDLPqX5YUAsLE_Ewh27gcelVd6hJImB07sYNVPzScL13gz4ef-w" 
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-brand-black to-transparent p-4">
                  <span className="text-white font-bold text-xs leading-tight block">FPV Drone Racing &amp;<br />Aeromodelling</span>
                </div>
              </div>

              <div 
                className="relative group overflow-hidden rounded border border-brand-border aspect-video bg-brand-card cursor-pointer"
                onClick={() => handleNav('Discipline: Robo Hockey')}
              >
                <img 
                  alt="Robo Hockey" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVLz_M50fzNtGqvQTcMhKSEWZzplz3hix36gl9UyNRP-2Zm4zukfv7v6b10tO_kxtRTMFEPzt1mUYLtGZPcKwxk7TZpdKg4YfRcpbsnubPztM08CbfL2akiCVZ3x1J7XB_xEKqGi2pdPQqnRZ5GrlOVLodtvecB_9DXJkOiOdDQDAcskDb4SFP092KUR3npAWuZK-Ud9srcUkThwO0PF3CFqER4HOq-8lKCEh9Gwe5aDI1shlBuTBwO6rEgriWvznxbZqRPky2Hw" 
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-brand-black to-transparent p-4">
                  <span className="text-white font-bold text-sm">Robo Hockey</span>
                </div>
              </div>

              <div 
                className="relative group overflow-hidden rounded border border-brand-border aspect-video bg-brand-card cursor-pointer"
                onClick={() => handleNav('Discipline: Robo War')}
              >
                <img 
                  alt="Robo War" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1IuXDOUyiEVZlQTlOBXtPVbe9jYuI-KXBuTQE10LaC945TVtbmHFKvQ3jSdVN4yhyiCJXi0zOYnPntUsqsEBUCyNuGU4v1ebjn6Mmtc-_bwo-_5FIpRHiFT_FDDLBvm2kpcuv2YU12Lq6lpCR_1YG6EYg0WasotEjVYRe3BNabxfKFmnxKER-X6cbwA3tcEKPeU9q1U6nfgmgOAnVICrxT8c6eKVOCXI3O7JVOH_qwrcQjFeubLy264BAZGeWAFKMungTw3Tofw" 
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-brand-black to-transparent p-4">
                  <span className="text-white font-bold text-sm">Robo War</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="py-20 bg-brand-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16">
              
              <div className="w-full lg:w-1/2">
                <h4 className="text-brand-red text-sm font-bold tracking-widest mb-2">WHY REGISTER ?</h4>
                <h2 className="text-3xl font-bold text-white mb-12 tracking-wider">THE LEAGUE ADVANTAGE</h2>
                <div className="space-y-8">
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-bold mb-1">NATIONAL RECOGNITION</h4>
                      <p className="text-brand-muted text-sm">"Benchmark your skills on India's official robotics leaderboard."</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-bold mb-1">FAIR JUDGING</h4>
                      <p className="text-brand-muted text-sm">"Compete with confidence under standardized, expert-led evaluation."</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-bold mb-1">CAREER OPS</h4>
                      <p className="text-brand-muted text-sm">"Bridge the gap between arena victories and top-tier tech placements."</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-bold mb-1">HIGH - ENERGY ECO</h4>
                      <p className="text-brand-muted text-sm">"Join a nationwide community of elite innovators and robotics athletes."</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <div className="w-full max-w-sm bg-brand-card border border-brand-blue rounded-lg p-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/5 pointer-events-none"></div>
                  <h3 
                    className="text-center text-white font-bold tracking-widest mb-6 uppercase border-b border-brand-border pb-2 cursor-pointer"
                    onClick={() => handleNav('Leaderboard details')}
                  >
                    Leaderboard
                  </h3>
                  
                  <div 
                    className="flex items-center justify-between bg-brand-dark border border-brand-border rounded p-2 mb-2 cursor-pointer hover:border-brand-blue"
                    onClick={() => handleNav('Leaderboard #01 Player Details')}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-brand-blue font-bold">#01</span>
                      <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                      <span className="text-white text-sm font-semibold">Player Name</span>
                    </div>
                    <span className="text-brand-text text-sm font-mono">508754</span>
                  </div>

                  <div 
                    className="flex items-center justify-between bg-brand-dark border border-brand-border rounded p-2 mb-2 cursor-pointer hover:border-brand-blue"
                    onClick={() => handleNav('Leaderboard #02 Player Details')}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-brand-muted font-bold text-xs">#02</span>
                      <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
                      <span className="text-brand-muted text-xs">Player Name</span>
                    </div>
                    <span className="text-brand-muted text-xs font-mono">22000</span>
                  </div>

                  <div 
                    className="flex items-center justify-between bg-brand-dark border border-brand-border rounded p-2 mb-2 cursor-pointer hover:border-brand-blue"
                    onClick={() => handleNav('Leaderboard #03 Player Details')}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-brand-muted font-bold text-xs">#03</span>
                      <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
                      <span className="text-brand-muted text-xs">Player Name</span>
                    </div>
                    <span className="text-brand-muted text-xs font-mono">20230</span>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="py-20 bg-brand-dark border-t border-brand-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 tracking-wider">JOIN THE ECOSYSTEM</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              
              <div className="bg-brand-card border border-brand-border rounded-lg p-6">
                <h3 className="text-white text-sm font-bold tracking-widest mb-6 border-b border-brand-border pb-2">BECOME A JUDGE</h3>
                <form onSubmit={handleJudgeSubmit} className="space-y-4">
                  <input 
                    className="w-full bg-brand-black border border-brand-border rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-brand-red" 
                    placeholder="Name" 
                    type="text" 
                    value={judge.name}
                    onChange={(e) => setJudge({ ...judge, name: e.target.value })}
                    required
                  />
                  <input 
                    className="w-full bg-brand-black border border-brand-border rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-brand-red" 
                    placeholder="Location" 
                    type="text" 
                    value={judge.location}
                    onChange={(e) => setJudge({ ...judge, location: e.target.value })}
                  />
                  <input 
                    className="w-full bg-brand-black border border-brand-border rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-brand-red" 
                    placeholder="Email" 
                    type="email" 
                    value={judge.email}
                    onChange={(e) => setJudge({ ...judge, email: e.target.value })}
                  />
                  <button className="w-full bg-brand-red hover:bg-brand-redHover text-white text-sm font-bold py-2 rounded transition-colors mt-2 cursor-pointer" type="submit">SIGN UP</button>
                </form>
              </div>

              <div className="bg-brand-card border border-brand-border rounded-lg p-6">
                <h3 className="text-white text-sm font-bold tracking-widest mb-6 border-b border-brand-border pb-2">VOLUNTEER</h3>
                <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                  <input 
                    className="w-full bg-brand-black border border-brand-border rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-brand-red" 
                    placeholder="Name" 
                    type="text" 
                    value={volunteer.name}
                    onChange={(e) => setVolunteer({ ...volunteer, name: e.target.value })}
                    required
                  />
                  <input 
                    className="w-full bg-brand-black border border-brand-border rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-brand-red" 
                    placeholder="Location" 
                    type="text" 
                    value={volunteer.location}
                    onChange={(e) => setVolunteer({ ...volunteer, location: e.target.value })}
                  />
                  <input 
                    className="w-full bg-brand-black border border-brand-border rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-brand-red" 
                    placeholder="Email" 
                    type="email" 
                    value={volunteer.email}
                    onChange={(e) => setVolunteer({ ...volunteer, email: e.target.value })}
                  />
                  <button className="w-full bg-brand-red hover:bg-brand-redHover text-white text-sm font-bold py-2 rounded transition-colors mt-2 cursor-pointer" type="submit">SIGN UP</button>
                </form>
              </div>

              <div className="bg-brand-card border border-brand-border rounded-lg p-6">
                <h3 className="text-white text-sm font-bold tracking-widest mb-6 border-b border-brand-border pb-2">COMMUNITY MEMBER</h3>
                <form onSubmit={handleMemberSubmit} className="space-y-4">
                  <input 
                    className="w-full bg-brand-black border border-brand-border rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-brand-red" 
                    placeholder="Name" 
                    type="text" 
                    value={member.name}
                    onChange={(e) => setMember({ ...member, name: e.target.value })}
                    required
                  />
                  <input 
                    className="w-full bg-brand-black border border-brand-border rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-brand-red" 
                    placeholder="Location" 
                    type="text" 
                    value={member.location}
                    onChange={(e) => setMember({ ...member, location: e.target.value })}
                  />
                  <input 
                    className="w-full bg-brand-black border border-brand-border rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-brand-red" 
                    placeholder="Email" 
                    type="email" 
                    value={member.email}
                    onChange={(e) => setMember({ ...member, email: e.target.value })}
                  />
                  <button className="w-full bg-brand-red hover:bg-brand-redHover text-white text-sm font-bold py-2 rounded transition-colors mt-2 cursor-pointer" type="submit">SIGN UP</button>
                </form>
              </div>

            </div>
          </div>
        </section>
      </main>

      <footer className="bg-brand-black border-t border-brand-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <h4 className="text-white text-sm font-bold tracking-widest mb-6 border-b border-brand-border pb-2">SPONSORS</h4>
            <div className="flex flex-wrap items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
              
              <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNav('Sponsor: NIT Delhi')}>
                <div className="w-10 h-10 flex-shrink-0">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE_7DpAK0AzcXp1lBR19iGwIJNFlM5EE0YsoXs9DXpIjQy1lEz2YXy3rZnhwDmgo6QLntC6CWHTD8TD8F8xGdQ6RxRiXjSs1ZwDOR0TSLGyiQI_3HKb32YQGS_Txi87Hc-_1rBVA-ZvSl8gZijyoaPq-GR4tfv6YZChIrxVj5aekATVhpENEqhLB4-t-x1CB_D4ikepkuszfLr1wCJA9VBPscz6k5FatTebHl0vOui3X8G0FTvNV33YPQcxZvpVFVU3VYElfiwew" alt="NIT Delhi Logo" className="w-full h-full object-contain" />
                </div>
                <span className="text-xs font-bold text-white uppercase tracking-wider">NIT DELHI</span>
              </div>

              <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNav('Sponsor: Indian BIT')}>
                <div className="w-10 h-10 flex-shrink-0">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuChVo1ICtipWiu08glK6KvpDhDXFikCNW4-kaKtl--wobU_cY7z9ucgISRouPfFpMTfD8M_wMdwfP84iQE_n2ipDXikJY-hXHENI5Xj1pAdrJMrOoW1BQUTXnsxG7iJKvY0_Gas_PxOvDhqw4yYGkYa-F2Za9u2Abckp61Sihi7rmnVSgZk1uIrEcr23fGncGeQsSJJfyqytzrcr7IKa1zNX288xNteEAJ04c38o05VvzwRdhqIdd6DYd9NzUrTVCPWoh0xag7p3g" alt="Indian BIT Logo" className="w-full h-full object-contain" />
                </div>
                <span className="text-xs font-bold text-white uppercase tracking-wider">INDIAN BIT</span>
              </div>

              <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNav('Sponsor: NIT Silchar')}>
                <div className="w-10 h-10 flex-shrink-0">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA80vTe917DKHRtRxWbE3KHMt7ZyfIyNHihJbVAVQxYd7VAr86O7_R2lLRLp-Qi4WKzw2w9bHu-GmE51x1-uy0uFQCqAY79LBFtnbUQLFkd8xAc7MdQZp234dZqU7sX83yHSjFgcZ19eJeeaW9xnFfWNyB3P5xV42LTCSVzA1S0m2XR734RWbTzTGxD394Ph4QsL2EjT5roPwu96-9pIt-SClaOzwJ3qiCe01g0GVmfwyKSArii5bRYV8VfF0wJenAJE1LD-6QAZQ" alt="NIT Silchar Logo" className="w-full h-full object-contain" />
                </div>
                <span className="text-xs font-bold text-white uppercase tracking-wider">NIT SILCHAR</span>
              </div>

              <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNav('Sponsor: Robo Company')}>
                <div className="w-10 h-10 flex-shrink-0">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYzdmJXPf-SEtezV5wU5BxK0y0bTKbkOZFH2rqhG2Wk3vn-dHJ_-FRz0GvPTpP_hoPkNV8_tYYhEVShEFG4baYRlGKo3VAnOuO-fg4Y8pt1C3E79ZoxwqKQiJyZ56kTn-22iVRyqDvWlay6-qN006XMNz3xbNl28v1WuDNU0Ou-GHzkB2t2kIMROz_QDOWQ4kNom6MTUiVczc4cxNMbl01HYdcXL4kmKFjpmiO6CEsA-1Mf2HrVmIkQ0wo-xMYr2vvNM1gwiPSgg" alt="Robo Company Logo" className="w-full h-full object-contain" />
                </div>
                <span className="text-xs font-bold text-white uppercase tracking-wider">ROBO COMPANY</span>
              </div>

              <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNav('Sponsor: IIT Bombay')}>
                <div className="w-10 h-10 flex-shrink-0">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJu0dWYJ0wjq0zbc8Tq_PLLwIrmbG7cl-d66eMuprNrU__filU8L8gjEz2jzZsMJIPd_MbnifhknhUUGnbylFzZQdaQz39Y39YYADLMgJrfMmaK-TZ9lkyhD7gwQzzavTuHZB5NXJIFAfV3AszdqxlPTShIfWoKtIh5imogv2EkqJlx6zYAU5mgUJYG6_F7FrkbYgMl8iVVo0rxrk93KevyJL5M-oPuF6g9mEbyeCrgkkbDhCBbFTWDAVauIGKlNXl-b7wZiAHAA" alt="IIT Bombay Logo" className="w-full h-full object-contain" />
                </div>
                <span className="text-xs font-bold text-white uppercase tracking-wider">IIT BOMBAY</span>
              </div>

              <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNav('Sponsor: General Robotics')}>
                <div className="w-10 h-10 flex-shrink-0">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBILCUVCpKV1eDAujVrvbLJ_hukers0xVyqbMl2SPmeHlfQQZQTERqW9Dgpeo4F7MUSi3CuA4czdWLX_wFKb5o2ELj6vK3oOnzo8z-PsJ_VCshv4WLxqEEQ-gTbGPmqRjq2u_osNc84mdPpK-JKB2PB1Y3ZvbQDvI_Ozhob1uaHCqne5Sb1u2ClR1Wb2ZbMtL4yoLY2mhj46b8gK3B90tKfuWoU4tEe8SzBCtzYX8UfZJo-e_dJY-wNjoZs52lVx6LxMUyMm-m4fQ" alt="General Robotics Logo" className="w-full h-full object-contain" />
                </div>
                <span className="text-xs font-bold text-white uppercase tracking-wider">GENERAL ROBOTICS</span>
              </div>

            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-brand-border pt-8">
            <div>
              <h4 className="text-white text-sm font-bold tracking-widest mb-4">QUICK LINKS</h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-brand-muted">
                <a className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNav('The Arena')}>The Arena</a>
                <a className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNav('Join the Team')}>Join the Team</a>
                <a className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNav('Episodes')}>Episodes</a>
                <a className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNav('Sponsorships')}>Sponsorships</a>
                <a className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNav('National Rankings')}>National Rankings</a>
                <a className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNav('Help Center')}>Help Center</a>
                <a className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNav('Programs')}>Programs</a>
                <a className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNav('Contact Us')}>Contact Us</a>
                <a className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNav('Rulebooks')}>Rulebooks</a>
                <a className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNav('Legal')}>Legal</a>
              </div>
            </div>

            <div className="md:text-right">
              <h4 className="text-white text-sm font-bold tracking-widest mb-4">SOCIAL MEDIA</h4>
              <div className="flex md:justify-end space-x-4">
                
                <a className="text-brand-muted hover:text-white transition-colors cursor-pointer" onClick={() => handleNav('Social: YouTube')}>
                  <span className="sr-only">YouTube</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                  </svg>
                </a>

                <a className="text-brand-muted hover:text-white transition-colors cursor-pointer" onClick={() => handleNav('Social: Instagram')}>
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                  </svg>
                </a>

                <a className="text-brand-muted hover:text-white transition-colors cursor-pointer" onClick={() => handleNav('Social: Facebook')}>
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                  </svg>
                </a>

                <a className="text-brand-muted hover:text-white transition-colors cursor-pointer" onClick={() => handleNav('Social: Twitter')}>
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                  </svg>
                </a>

              </div>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default Home;
