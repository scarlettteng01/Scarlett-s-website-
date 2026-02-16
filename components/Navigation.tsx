
import React, { useState } from 'react';

interface NavigationProps {
  bookingUrl: string;
}

const Navigation: React.FC<NavigationProps> = ({ bookingUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Courses', href: '#courses' },
    { name: 'Fees', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Inquiry', href: '#enquire' },
  ];

  const handleBookingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (bookingUrl.startsWith('mailto:')) {
      window.location.href = bookingUrl;
    } else {
      window.open(bookingUrl, '_blank');
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Calculate offset to account for the sticky header (approx 96px/24rem)
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 glass-morphism shadow-sm border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, '#about')}
              className="flex flex-col group cursor-pointer"
            >
              <span className="text-3xl font-bold text-slate-900 tracking-tighter group-hover:text-teal-700 transition-colors">Scarlett Teng</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 xl:space-x-10 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-500 hover:text-teal-700 font-bold text-[10px] uppercase tracking-[0.2em] transition-colors whitespace-nowrap cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={handleBookingClick}
              className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-teal-700 transition-all shadow-xl active:scale-95 whitespace-nowrap ml-6"
            >
              Book Online
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
             <button 
               onClick={() => setIsOpen(!isOpen)}
               className="text-slate-900 p-2 hover:bg-slate-100 rounded-xl transition-colors"
               aria-label="Toggle menu"
             >
                {isOpen ? (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 py-10 px-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 overflow-y-auto max-h-[85vh] rounded-b-[2rem] absolute w-full left-0 top-24">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-8 py-6 text-slate-800 hover:bg-teal-50 hover:text-teal-700 rounded-3xl font-black text-xs uppercase tracking-widest transition-all"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={(e) => {
              setIsOpen(false);
              handleBookingClick(e);
            }}
            className="block w-full text-center bg-teal-600 text-white py-6 rounded-3xl font-black text-xs uppercase tracking-widest shadow-2xl mt-8"
          >
            Book Assessment Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
