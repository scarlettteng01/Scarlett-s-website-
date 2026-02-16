
import React, { useState } from 'react';

// ASRS-v1.1 Part A Questions
// Scoring Logic:
// Q1-Q3: "Sometimes" (2), "Often" (3), "Very Often" (4) are clinically significant.
// Q4-Q6: "Often" (3), "Very Often" (4) are clinically significant.
const QUESTIONS = [
  {
    id: 1,
    text: "How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?",
    thresholdIndex: 2 // Index 2 is "Sometimes"
  },
  {
    id: 2,
    text: "How often do you have difficulty getting things in order when you have to do a task that requires organization?",
    thresholdIndex: 2
  },
  {
    id: 3,
    text: "How often do you have problems remembering appointments or obligations?",
    thresholdIndex: 2
  },
  {
    id: 4,
    text: "When you have a task that requires a lot of thought, how often do you avoid or delay getting started?",
    thresholdIndex: 3 // Index 3 is "Often"
  },
  {
    id: 5,
    text: "How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?",
    thresholdIndex: 3
  },
  {
    id: 6,
    text: "How often do you feel overly active and compelled to do things, like you were driven by a motor?",
    thresholdIndex: 3
  }
];

const OPTIONS = ["Never", "Rarely", "Sometimes", "Often", "Very Often"];

type Step = 'intro' | 'screening' | 'result';

interface AIPreScreeningProps {
  bookingUrl: string;
}

const AIPreScreening: React.FC<AIPreScreeningProps> = ({ bookingUrl }) => {
  const [step, setStep] = useState<Step>('intro');
  const [answers, setAnswers] = useState<number[]>(new Array(6).fill(-1));
  
  const handleOptionSelect = (questionIndex: number, optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    let score = 0;
    answers.forEach((ansIndex, qIndex) => {
      // Check if the answer index meets or exceeds the clinical threshold for that question
      if (ansIndex >= QUESTIONS[qIndex].thresholdIndex) {
        score++;
      }
    });
    return score;
  };

  const handleFinish = () => {
    // Validate all answered
    if (answers.includes(-1)) return;
    setStep('result');
  };

  const resetForm = () => {
    setAnswers(new Array(6).fill(-1));
    setStep('intro');
  };

  const score = calculateScore();
  const isPositive = score >= 4;

  const handleBooking = () => {
    if (bookingUrl.startsWith('mailto:')) {
      window.location.href = bookingUrl;
    } else {
      window.open(bookingUrl, '_blank');
    }
  };

  return (
    <section id="screening" className="py-16 bg-teal-50 border-y border-teal-100 scroll-mt-32">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            ASRS-v1.1 Standard Screener
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-teal-900 mb-6">Adult ADHD Self-Report</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            This tool uses the World Health Organization's 6-question screening scale to help identify symptoms consistent with Adult ADHD.
          </p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-2xl border border-teal-100 overflow-hidden min-h-[600px] flex flex-col relative transition-all duration-500">
          
          {/* Header Bar */}
          <div className="bg-teal-600 p-6 flex items-center justify-between shadow-md z-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-500/50 flex items-center justify-center text-white ring-2 ring-white/20">
                <span className="text-2xl">📋</span>
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-none">Clinical Pre-Screening</p>
                <p className="text-teal-100 text-xs mt-1.5 font-medium uppercase tracking-wider">
                  Confidential • Immediate Results
                </p>
              </div>
            </div>
            {step === 'screening' && (
               <div className="text-teal-100 text-sm font-bold">
                 {answers.filter(a => a !== -1).length} / 6 Answered
               </div>
            )}
          </div>

          {/* Content Area */}
          <div className="flex-1 p-8 md:p-12 bg-slate-50/30">
            
            {/* STEP 1: INTRO */}
            {step === 'intro' && (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center text-5xl mb-4 border border-teal-100">
                   🧐
                </div>
                <h3 className="text-3xl font-bold text-slate-800">Is it ADHD or just a busy life?</h3>
                <p className="text-slate-600 text-lg max-w-lg leading-relaxed">
                  Many adults live with undiagnosed ADHD, attributing their struggles to stress or personality. This quick check takes less than 2 minutes.
                </p>
                <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl text-amber-800 text-sm font-medium max-w-md">
                   <strong>Note:</strong> This is a screening tool, not a medical diagnosis. A full diagnosis requires a clinical interview with a specialist like Scarlett.
                </div>
                <button 
                  onClick={() => setStep('screening')}
                  className="px-12 py-5 bg-teal-600 text-white rounded-2xl font-bold text-lg hover:bg-teal-700 transition-all shadow-xl hover:shadow-teal-100 hover:-translate-y-1"
                >
                  Start Assessment
                </button>
              </div>
            )}

            {/* STEP 2: SCREENING FORM */}
            {step === 'screening' && (
              <div className="max-w-3xl mx-auto space-y-12 animate-in slide-in-from-right duration-500">
                {QUESTIONS.map((q, qIdx) => (
                  <div key={q.id} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
                    <h4 className="text-lg font-bold text-slate-800 mb-6 flex gap-3">
                      <span className="text-teal-500 opacity-50">0{q.id}.</span> 
                      {q.text}
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {OPTIONS.map((opt, oIdx) => (
                        <label 
                          key={oIdx} 
                          className={`
                            relative cursor-pointer py-3 px-2 rounded-xl text-center text-sm font-bold transition-all border-2
                            ${answers[qIdx] === oIdx 
                              ? 'bg-teal-600 text-white border-teal-600 shadow-lg scale-105' 
                              : 'bg-slate-50 text-slate-500 border-slate-100 hover:border-teal-200 hover:bg-teal-50'
                            }
                          `}
                        >
                          <input 
                            type="radio" 
                            name={`q-${q.id}`} 
                            className="sr-only"
                            onChange={() => handleOptionSelect(qIdx, oIdx)}
                            checked={answers[qIdx] === oIdx}
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="flex justify-center pt-8">
                  <button 
                    onClick={handleFinish}
                    disabled={answers.includes(-1)}
                    className="px-16 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-800 transition-all shadow-xl"
                  >
                    View Results
                  </button>
                </div>
                {answers.includes(-1) && (
                   <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-widest">Please answer all questions to proceed</p>
                )}
              </div>
            )}

            {/* STEP 3: RESULTS */}
            {step === 'result' && (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-500 max-w-2xl mx-auto">
                {isPositive ? (
                  <>
                    <div className="w-24 h-24 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6 ring-8 ring-red-50/50">
                      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Results: Highly Consistent with ADHD</h3>
                    <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                      Your score ({score}/6) indicates symptoms <strong>highly consistent</strong> with Adult ADHD. This score meets the clinical threshold typically required to warrant a formal diagnostic assessment.
                    </p>
                    <div className="bg-teal-50 border border-teal-100 p-6 rounded-2xl mb-8 w-full">
                       <h4 className="font-bold text-teal-800 mb-2">Recommended Next Step</h4>
                       <p className="text-teal-700 text-sm">
                         Book a comprehensive assessment with Scarlett to confirm this diagnosis and discuss treatment options, including medication if appropriate.
                       </p>
                    </div>
                    <button 
                      onClick={handleBooking}
                      className="w-full md:w-auto px-12 py-5 bg-teal-600 text-white rounded-2xl font-bold text-lg hover:bg-teal-700 transition-all shadow-xl shadow-teal-200/50 mb-4"
                    >
                      Book Assessment Now ($750)
                    </button>
                  </>
                ) : (
                  <>
                    <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6 ring-8 ring-green-50/50">
                       <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                       </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Results: Low Likelihood</h3>
                    <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                      Your score ({score}/6) does not currently meet the typical threshold for high ADHD likelihood. However, neurodiversity is complex, and screenings can sometimes miss subtle presentations (especially in women).
                    </p>
                    <div className="flex flex-col md:flex-row gap-4">
                      <button 
                        onClick={handleBooking}
                        className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-2xl font-bold hover:border-teal-500 hover:text-teal-600 transition-all"
                      >
                        Book Anyway
                      </button>
                      <button 
                        onClick={resetForm}
                        className="px-8 py-4 bg-teal-50 text-teal-700 rounded-2xl font-bold hover:bg-teal-100 transition-all"
                      >
                        Retake Screening
                      </button>
                    </div>
                  </>
                )}
                <p className="mt-8 text-xs text-slate-400 font-medium">
                  Based on the ASRS-v1.1 Symptom Checklist Part A.
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPreScreening;
