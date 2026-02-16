
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import AIPreScreening from './components/AIPreScreening';

// 📅 BOOKING LINK UPDATED TO EMAIL
const BOOKING_URL = "mailto:hello@scarlettteng.co.nz";

const FAQS = [
  {
    question: "How much does a private ADHD assessment cost?",
    answer: "A comprehensive Full ADHD Assessment with Scarlett is $750. This fee covers the 90-minute clinical assessment, psychiatric testing, and report writing."
  },
  {
    question: "What is included in the $750 fee?",
    answer: `The Full ADHD Assessment fee ($750) includes:

• Clinical Screening: Access to validated, evidence-based screening tools.
• Expert Review: A thorough pre-assessment review of your screening results.
• Comprehensive Assessment: A 90-minute telehealth consultation—a deep dive into your history, symptoms, and functional impact.
• Psychiatric Testing: Standardized diagnostic evaluation.
• Full Diagnostic Report: A professional, detailed report for your records, GP, or employer.
*Note: This fee excludes prescribing. Medication initiation typically occurs during Follow-up Medical Reviews.*`
  },
  {
    question: "Why is a clinical assessment better than a \"quick screening\" service?",
    answer: `You may see newer online services offering "ADHD screens" for a much lower price. It is important to know that these are often screening only, not a formal diagnosis. Many of these companies use non-clinical staff or "reviewers" with little to no actual mental health experience to look over your results.

A screening is just a "red flag" indicator; it is not a diagnosis that most doctors or insurers will accept for treatment. Scarlett’s assessment is a full clinical evaluation conducted by a high-level practitioner with years of specialist experience.`
  },
  {
    question: "What makes Scarlett’s approach different?",
    answer: `When you book with Scarlett, you aren't just getting a checklist. You are getting the expertise of a Mental Health Nurse Practitioner who has spent years diagnosing and prescribing within both private practice and secondary (specialist) mental health services.

While newer services might use multiple "middlemen" to review your paperwork, Scarlett handles your case personally. Her background in both diagnosis and medication management (prescribing) means she understands the complexity of ADHD and how it overlaps with other mental health conditions.`
  },
  {
    question: "What is a Mental Health Nurse Practitioner (MHNP)?",
    answer: "In New Zealand, a Nurse Practitioner is a highly experienced clinician with advanced education (Master's degree) who has been granted an independent scope of practice by the Nursing Council. Unlike a Registered Nurse, an MHNP can independently diagnose complex conditions, order laboratory tests, and prescribe medications."
  },
  {
    question: "Will I be able to start medication if I am diagnosed?",
    answer: "Yes. As a Nurse Practitioner with extensive experience in prescribing within specialist services, Scarlett can discuss medication options as part of your treatment plan. Ongoing medication management requires Follow-up Medical Reviews ($249)."
  },
  {
    question: "Can I use the report for my GP or for work accommodations?",
    answer: "Absolutely. Because Scarlett is a qualified clinician with a background in secondary services, the reports she generates are comprehensive and meet the high standards required by General Practitioners and workplace HR departments for \"reasonable accommodations.\""
  },
  {
    question: "Is an online assessment as valid as an in-person one?",
    answer: "Yes. Telehealth for ADHD and ASD assessments is evidence-based and widely accepted in New Zealand. Scarlett's online protocol is designed to be rigorous while allowing you to be in a comfortable, familiar environment—which often leads to a more accurate representation of your daily traits."
  },
  {
    question: "Do I need a GP referral to see Scarlett?",
    answer: "No, you do not need a referral to book a private assessment with Scarlett. However, once a diagnosis is confirmed and medication is stable, she will typically work with your GP to transfer ongoing maintenance care via a 'shared care' arrangement."
  },
  {
    question: "How long is the wait time for an assessment?",
    answer: "One of the primary benefits of Scarlett's private online practice is reduced wait times. While DHB waitlists can be 12-24 months, Scarlett typically offers assessments within a few weeks. You can check real-time availability via the Google Scheduler link."
  }
];

const App: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const handleBooking = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    window.location.href = BOOKING_URL;
  };

  const handleManualScroll = (id: string) => {
     const element = document.getElementById(id);
     if (element) {
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
    <div className="min-h-screen bg-white">
      <Navigation bookingUrl={BOOKING_URL} />
      
      {/* About Section - MOVED TO TOP & LIGHT THEME */}
      {/* Replaced 'bg-slate-900 text-white' with 'bg-white text-slate-900' and updated inner colors */}
      <section id="about" className="pt-12 pb-24 md:pt-32 bg-white text-slate-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-50 skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest">ADHD & ASD Specialist • Auckland</h2>
                {/* Changed h3 to h1 as this is now the primary heading */}
                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900">Scarlett Teng<br/><span className="text-teal-600 font-light opacity-80 text-4xl block mt-2">MN (Hons), Nurse Practitioner</span></h1>
              </div>
              
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                <p>
                  Welcome. I know that seeking help for your mental health is one of the bravest things you can do, and often, finding the right provider is the hardest part. My name is Scarlett, and I am a <strong>Specialist Mental Health Nurse Practitioner</strong> based in <strong>Auckland</strong>, providing expert diagnostic services across New Zealand.
                </p>
                <p className="border-l-4 border-teal-500 pl-6 italic text-slate-800">
                  My philosophy is simple: <strong>You are more than your symptoms.</strong>
                </p>
                <p>
                  While I am an expert in <strong>psychopharmacology (medication management)</strong> and neurodevelopmental conditions like <strong>Adult ADHD</strong>, I believe medication is a tool, not a cure-all. My practice focuses on treating the whole person—mind, body, and environment. Whether you are struggling with attention deficits, autism spectrum traits, or anxiety, my goal is to partner with you to reclaim your quality of life.
                </p>
                <h4 className="text-slate-900 font-bold pt-4">Credentials & Clinical Experience</h4>
                <p>
                  I hold a <strong>Master of Nursing (Honours)</strong> from the University of Auckland, graduating with distinction, and maintain specialist registration with the Nursing Council of New Zealand. With <strong>20+ years of clinical leadership</strong>, I have led complex diagnostic teams in secondary services (DHB) and managed intricate medication regimens. This extensive public sector background ensures my private practice delivers the gold standard of psychiatric care.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                 <button onClick={() => handleBooking()} className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold text-sm uppercase tracking-widest transition-colors shadow-lg">
                    Book Consultation
                 </button>
              </div>
            </div>

            <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-xl">
              <h4 className="text-2xl font-bold mb-10 text-teal-600">Why Choose a Nurse Practitioner?</h4>
              <ul className="space-y-8">
                {[
                  { label: "Holistic", val: "We treat the person, not just the disease." },
                  { label: "Accessible", val: "Reduced wait times for diagnosis." },
                  { label: "Authority", val: "Full independent prescribing rights." },
                  { label: "Collaborative", val: "We work with you, not just 'on' you." }
                ].map((item, i) => (
                  <li key={i} className="flex flex-col border-b border-slate-100 pb-4">
                    <span className="text-teal-600 text-xs font-black uppercase tracking-widest mb-1">{item.label}</span>
                    <span className="text-slate-800 font-medium text-lg">{item.val}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section - MOVED DOWN */}
      <section id="hero" className="relative py-20 overflow-hidden bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-in fade-in slide-in-from-bottom duration-1000">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-widest mb-10 border border-teal-100">
                Telehealth Only | New Zealand Wide
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight">
                Expert Medication Management with a <span className="text-teal-600">Nursing Touch.</span>
              </h2>
              <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                Scarlett Teng (NP) combines the medical expertise of psychiatry with the heart of nursing. Specialist online assessments for <strong>ADHD</strong>, <strong>Anxiety</strong>, and <strong>Autism (ASD)</strong> across Aotearoa.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <button 
                  onClick={() => handleBooking()}
                  className="px-10 py-5 bg-teal-600 text-white rounded-2xl font-bold text-lg hover:bg-teal-700 transition-all shadow-xl hover:shadow-teal-100/50 text-center"
                >
                  Check Availability & Book
                </button>
                <button 
                  onClick={() => handleManualScroll('screening')}
                  className="px-10 py-5 bg-white text-teal-800 border-2 border-slate-200 rounded-2xl font-bold text-lg hover:border-teal-300 transition-all text-center"
                >
                  Take ADHD Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white scroll-mt-24">
         <div className="max-w-7xl mx-auto px-4 text-center mb-16">
            <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-6">Clinical Scope</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Comprehensive Mental Health Care</h3>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium mb-8">
               Beyond neurodevelopmental specialities, Scarlett manages a range of psychiatric conditions with a holistic, evidence-based approach.
            </p>
            <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
         </div>
         
         {/* Primary Focus: Neurodevelopmental */}
         <div className="max-w-7xl mx-auto px-4 mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {/* Card 1: ADHD */}
               <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-teal-50 hover:border-teal-100 transition-all group relative">
                  <div className="absolute top-8 right-8 bg-white border border-slate-200 text-slate-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">Telehealth Only</div>
                  <div className="text-5xl mb-6">🧠</div>
                  <h5 className="text-xl font-bold text-slate-900 mb-3">Adult ADHD</h5>
                  <p className="text-slate-600 mb-6 font-medium leading-relaxed">Gold-standard DIVA-5 assessments, diagnosis, and medication initiation for attention deficit hyperactivity disorder.</p>
                  <span className="text-teal-600 text-xs font-black uppercase tracking-widest">Specialist Focus</span>
               </div>
               {/* Card 2: ASD */}
               <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-teal-50 hover:border-teal-100 transition-all group relative">
                  <div className="absolute top-8 right-8 bg-white border border-slate-200 text-slate-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">Telehealth Only</div>
                  <div className="text-5xl mb-6">🧩</div>
                  <h5 className="text-xl font-bold text-slate-900 mb-3">Autism (ASD)</h5>
                  <p className="text-slate-600 mb-6 font-medium leading-relaxed">Neuro-affirming evaluations focusing on sensory processing, communication styles, and camouflaging.</p>
                   <span className="text-teal-600 text-xs font-black uppercase tracking-widest">Neuro-affirming</span>
               </div>
                {/* Card 3: Prescribing */}
               <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-teal-50 hover:border-teal-100 transition-all group">
                  <div className="text-5xl mb-6">💊</div>
                  <h5 className="text-xl font-bold text-slate-900 mb-3">Prescribing</h5>
                  <p className="text-slate-600 mb-6 font-medium leading-relaxed">Independent prescribing rights (including Pharmac Special Authority) for stimulants, antidepressants, and mood stabilizers.</p>
                   <span className="text-teal-600 text-xs font-black uppercase tracking-widest">Full Authority</span>
               </div>
            </div>
         </div>

         {/* Secondary Focus: General Psychiatry */}
         <div className="max-w-7xl mx-auto px-4">
             <div className="bg-white border border-slate-100 rounded-[3rem] p-10 md:p-14 shadow-xl">
               <h4 className="text-2xl font-bold text-slate-800 mb-10 border-l-4 border-teal-500 pl-4">General Psychiatric Management</h4>
               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { icon: "☁️", title: "Mood Disorders", desc: "Depression & Bipolar II assessment and stabilization." },
                    { icon: "😰", title: "Anxiety", desc: "Generalized Anxiety (GAD), Panic Disorder & Social Anxiety." },
                    { icon: "🛡️", title: "Trauma / PTSD", desc: "Trauma-informed medication management & care." },
                    { icon: "🌙", title: "Sleep Issues", desc: "Insomnia & sleep disturbances related to mental health." },
                  ].map((item, i) => (
                     <div key={i} className="flex flex-col gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-2xl border border-slate-100">{item.icon}</div>
                        <h5 className="text-lg font-bold text-slate-900">{item.title}</h5>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                     </div>
                  ))}
               </div>
             </div>
         </div>

         <div className="text-center mt-12">
            <button 
               onClick={() => handleManualScroll('pricing')}
               className="inline-flex items-center gap-2 text-teal-600 font-bold uppercase tracking-widest text-xs hover:text-teal-800 transition-colors bg-teal-50 px-6 py-3 rounded-full"
             >
               View Assessment Fees &rarr;
             </button>
         </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-teal-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-[128px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-[128px] opacity-20 translate-y-1/3 -translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-teal-400 uppercase tracking-widest mb-6">Professional Development</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Advanced Nursing Courses</h3>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              Elevating the standard of mental health nursing in Aotearoa. Specialized online modules for Registered Nurses and Nurse Practitioners aspiring to excel in neurodevelopmental assessment and care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Course 1 */}
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 hover:bg-white/10 transition-all group">
              <div className="w-14 h-14 bg-teal-500/20 text-teal-400 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                🎓
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Foundations of ADHD Assessment</h4>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                A comprehensive introduction to the DIVA-5 interview, history taking, and clinical reasoning for Adult ADHD.
              </p>
              <button onClick={() => handleManualScroll('enquire')} className="text-teal-400 text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors">
                Join Waitlist <span className="text-lg">&rarr;</span>
              </button>
            </div>

            {/* Course 2 */}
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 hover:bg-white/10 transition-all group">
              <div className="w-14 h-14 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                🧬
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Psychopharmacology for NPs</h4>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                Advanced prescribing workshop focusing on stimulant titration, contraindications, and managing complex comorbidities.
              </p>
              <button onClick={() => handleManualScroll('enquire')} className="text-purple-400 text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors">
                Join Waitlist <span className="text-lg">&rarr;</span>
              </button>
            </div>

            {/* Course 3 */}
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 hover:bg-white/10 transition-all group">
               <div className="w-14 h-14 bg-orange-500/20 text-orange-400 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                🗣️
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Neuro-affirming Practice</h4>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                Developing language and clinical environments that support neurodivergent clients. Essential for modern practice.
              </p>
              <button onClick={() => handleManualScroll('enquire')} className="text-orange-400 text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors">
                Join Waitlist <span className="text-lg">&rarr;</span>
              </button>
            </div>
          </div>
          
          <div className="mt-16 text-center">
             <p className="text-slate-400 text-sm mb-6 font-medium">Coming late 2025. Express your interest today.</p>
             <button 
                onClick={() => handleManualScroll('enquire')}
                className="px-8 py-4 bg-teal-600 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-teal-500 transition-all shadow-lg hover:shadow-teal-500/50"
             >
                Register Interest
             </button>
          </div>
        </div>
      </section>

      {/* Pricing Section - MOVED BEFORE FAQ */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-6">Transparency</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Investment in Clarity</h3>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">Professional assessment fees for our comprehensive online diagnostic services.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <PriceCard 
              title="Full ADHD Assessment" 
              price="$750" 
              features={["90-min Clinical Interview", "Psychiatric Testing", "Full Diagnostic Report", "Excludes Prescribing"]}
              highlight={true}
              onEnquire={() => handleBooking()}
              ctaText="Book Now"
            />
            <PriceCard 
              title="ASD Assessment" 
              price="$750" 
              features={["Clinical Assessment", "Specialized Testing", "Full Diagnostic Report", "Neuro-affirming Approach"]}
              onEnquire={() => handleBooking()}
              ctaText="Book Now"
            />
            <PriceCard 
              title="Combined ADHD & ASD" 
              price="$1,000" 
              features={["Dual Diagnosis Eval", "Integrated Report", "Comprehensive Review", "Cost Effective"]}
              onEnquire={() => handleBooking()}
              ctaText="Book Now"
            />
          </div>

          {/* CHANGED: Background from bg-slate-900 to bg-white, added border, updated text colors */}
          <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-[3.5rem] p-12 md:p-20 shadow-2xl text-center">
             <h4 className="text-3xl font-bold mb-12 italic text-teal-600">General Psychiatry & Administrative</h4>
             <div className="grid sm:grid-cols-2 gap-y-12 gap-x-8">
                <div className="space-y-2">
                   <p className="text-4xl md:text-5xl font-bold text-slate-900">$349</p>
                   <p className="text-slate-500 font-bold uppercase tracking-widest text-xs leading-relaxed">General Psychiatric Assessment<br/>(Non-ADHD / Mood / Anxiety)</p>
                </div>
                <div className="space-y-2">
                   <p className="text-4xl md:text-5xl font-bold text-slate-900">$249</p>
                   <p className="text-slate-500 font-bold uppercase tracking-widest text-xs leading-relaxed">Follow-up Medical Review</p>
                </div>
                <div className="space-y-2">
                   <p className="text-4xl md:text-5xl font-bold text-slate-900">$25</p>
                   <p className="text-slate-500 font-bold uppercase tracking-widest text-xs leading-relaxed">Prescription Refill<br/>(Outside Appointment)</p>
                </div>
                <div className="space-y-2">
                   <p className="text-4xl md:text-5xl font-bold text-slate-900">$80</p>
                   <p className="text-slate-500 font-bold uppercase tracking-widest text-xs leading-relaxed">Missed Appointment<br/>(Late Cancellation)</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ASRS Screening Section - KEPT IN MIDDLE */}
      <AIPreScreening bookingUrl={BOOKING_URL} />

      {/* FAQ Section - MOVED AFTER PRICING & SCREENING */}
      <section id="faq" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-6">Resources</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Common Questions</h3>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">Everything you need to know about the role of a Mental Health NP and our process.</p>
          </div>

          <div className="space-y-6">
            {FAQS.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-[2.5rem] overflow-hidden bg-white transition-all hover:shadow-lg">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-10 py-8 text-left flex justify-between items-center group"
                >
                  <span className="text-xl font-bold text-slate-800 group-hover:text-teal-700 transition-colors">{faq.question}</span>
                  <span className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-teal-600' : 'text-slate-400'}`}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-10 pb-10 animate-in slide-in-from-top-4 duration-300">
                    <p className="text-slate-600 leading-relaxed font-medium border-t border-slate-100 pt-8 text-lg whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="enquire" className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-[4rem] p-12 md:p-20 border border-slate-100 shadow-xl">
            {formSubmitted ? (
              <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 ring-8 ring-green-50">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-4">Message Sent</h3>
                <p className="text-slate-500 font-medium">We'll be in touch within 48 business hours.</p>
              </div>
            ) : (
              <>
                <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">General Inquiry</h2>
                <p className="text-slate-500 text-center mb-16 font-medium">Unsure which assessment is right for you? Ask our team.</p>
                <form onSubmit={handleFormSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Name</label>
                      <input required type="text" className="w-full px-8 py-5 rounded-3xl border border-slate-200 focus:border-teal-500 outline-none transition-all font-medium bg-slate-50" placeholder="Full name" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email</label>
                      <input required type="email" className="w-full px-8 py-5 rounded-3xl border border-slate-200 focus:border-teal-500 outline-none transition-all font-medium bg-slate-50" placeholder="email@address.com" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Message</label>
                    <textarea className="w-full px-8 py-5 rounded-3xl border border-slate-200 focus:border-teal-500 outline-none transition-all font-medium h-40 resize-none bg-slate-50" placeholder="How can we assist?"></textarea>
                  </div>
                  <button type="submit" className="w-full py-6 bg-slate-900 text-white rounded-3xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl active:scale-95">
                    Send Inquiry
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-20 mb-24">
            <div className="col-span-2 space-y-10">
              <span className="text-4xl font-bold text-teal-400 tracking-tighter">Scarlett Teng</span>
              <p className="text-slate-400 max-w-sm text-lg font-medium leading-relaxed">
                Expert neuro-affirming diagnostic care delivered online across Aotearoa with two decades of senior clinical mastery.
              </p>
            </div>
            <div>
              <h5 className="text-[10px] font-black uppercase tracking-widest text-teal-500 mb-8">Clinical Scope</h5>
              <p className="text-slate-400 font-medium leading-relaxed">Telehealth Assessments<br />All New Zealand Regions<br />Pharmac Prescribing</p>
            </div>
            <div>
              <h5 className="text-[10px] font-black uppercase tracking-widest text-teal-500 mb-8">Contact</h5>
              <p className="text-slate-400 font-medium leading-relaxed italic">E: hello@scarlettteng.co.nz</p>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 text-center text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} Scarlett Teng MN (Hons) | Specialist Mental Health Nurse Practitioner Online
          </div>
        </div>
      </footer>
    </div>
  );
};

const PriceCard: React.FC<{title: string, price: string, features: string[], highlight?: boolean, onEnquire: () => void, ctaText?: string}> = ({title, price, features, highlight, onEnquire, ctaText = "Enquire Now"}) => (
  <div className={`p-12 rounded-[3.5rem] border ${highlight ? 'border-teal-500 ring-8 ring-teal-50 shadow-2xl scale-105 z-10' : 'border-slate-100 shadow-xl'} bg-white transition-all flex flex-col h-full`}>
    <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">{title}</h3>
    <div className="text-5xl font-bold text-teal-600 mb-10 text-center flex items-center justify-center gap-1">
      <span className="text-2xl mt-[-10px]">$</span>{price.replace('$', '')}
    </div>
    <ul className="space-y-6 mb-12 flex-1">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-4 text-sm font-semibold text-slate-500">
          <div className="w-5 h-5 bg-teal-50 text-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
             <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
          </div>
          {f}
        </li>
      ))}
    </ul>
    <button 
      onClick={onEnquire}
      className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${highlight ? 'bg-teal-600 text-white hover:bg-teal-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
    >
      {ctaText}
    </button>
  </div>
);

export default App;
