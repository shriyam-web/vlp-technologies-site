"use client";

import { useState, useEffect } from "react";
import { X, ChevronRight } from "lucide-react";

export function LeadCapturePopup() {
  const [showBunny, setShowBunny] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showSadBunny, setShowSadBunny] = useState(false);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [step, setStep] = useState<"greeting" | "motive" | "contact" | "success">("greeting");
  const [selectedMotive, setSelectedMotive] = useState<string>("");
  const [formData, setFormData] = useState({ name: "", mobile: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const motives = [
    { id: "website", label: "🌐 Build Website" },
    { id: "sales", label: "📈 Boost Sales" },
    { id: "leads", label: "🎯 Lead Generation" },
    { id: "mobile", label: "📱 Mobile App" },
    { id: "redesign", label: "🎨 Redesign Site" },
    { id: "other", label: "💡 Something Else" },
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowBunny(true);
    }, 1500);

    const timer2 = setTimeout(() => {
      setShowMessage(true);
    }, 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleYes = () => {
    setShowBunny(false);
    setShowMessage(false);
    setShowSadBunny(false);
    setIsWidgetOpen(true);
  };

  const handleSkip = () => {
    setShowBunny(false);
    setShowMessage(false);
    setShowSadBunny(true);
  };

  const handleSadBunnyClick = () => {
    setShowSadBunny(false);
    setIsWidgetOpen(true);
  };

  const handleMotiveSelect = (motiveId: string) => {
    setSelectedMotive(motiveId);
  };

  const handleNextStep = () => {
    if (selectedMotive) {
      setStep("contact");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (formData.name.trim() && formData.mobile.trim()) {
      setIsSubmitting(true);
      try {
        await fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            motive: selectedMotive,
            name: formData.name,
            mobile: formData.mobile,
            formType: "bunny",
          }),
        });
        setStep("success");
        setTimeout(() => {
          setIsWidgetOpen(false);
          setShowBunny(false);
          setShowMessage(false);
          setShowSadBunny(false);
          setStep("greeting");
          setSelectedMotive("");
          setFormData({ name: "", mobile: "" });
        }, 2000);
      } catch (error) {
        console.error("Error:", error);
      }
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsWidgetOpen(false);
    setShowBunny(false);
    setShowMessage(false);
  };

  return (
    <>
      <style>{`
        @keyframes walkInFromLeft {
          from {
            transform: translateX(-400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes walkingMotion {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes earTwitch {
          0%, 100% {
            transform: rotate(-5deg);
          }
          50% {
            transform: rotate(5deg);
          }
        }

        @keyframes tailSwish {
          0%, 100% {
            transform: rotate(-15deg);
          }
          50% {
            transform: rotate(15deg);
          }
        }

        @keyframes sadBounce {
          0%, 100% {
            transform: scale(1) translateY(0);
          }
          50% {
            transform: scale(1.05) translateY(-3px);
          }
        }

        @keyframes fadeInSpeech {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes tearDrop {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(15px);
          }
        }

        .bunny-walk {
          animation: walkInFromLeft 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .bunny-body {
          animation: walkingMotion 0.6s ease-in-out infinite;
        }

        .bunny-ear {
          animation: earTwitch 0.8s ease-in-out infinite;
        }

        .bunny-tail {
          animation: tailSwish 0.9s ease-in-out infinite;
        }

        .sad-bunny {
          animation: sadBounce 2s ease-in-out infinite, fadeInSpeech 0.5s ease-out;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .sad-bunny:hover {
          transform: scale(1.1);
        }

        .tear {
          animation: tearDrop 1.2s ease-in infinite;
        }

        .speech-bubble {
          animation: fadeInSpeech 0.5s ease-out 1.2s both;
        }

        .sad-speech {
          animation: fadeInSpeech 0.5s ease-out both;
        }

        .motive-btn {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .motive-btn:hover {
          transform: translateX(6px);
          background-color: #fef3c7;
        }

        .motive-btn.selected {
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          border-color: #d97706;
          color: white;
          box-shadow: 0 0 15px rgba(251, 191, 36, 0.3);
        }

        .input-field {
          transition: all 0.3s ease;
        }

        .input-field:focus {
          border-color: #fbbf24;
          box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.1);
          background-color: #fffbeb;
        }
      `}</style>

      {/* Walking Bunny - Bottom Left Corner */}
      {showBunny && !isWidgetOpen && !showSadBunny && (
        <div className="fixed bottom-6 left-6 z-40 bunny-walk">
          <div className="bunny-body">
            <svg width="140" height="160" viewBox="0 0 140 160" className="drop-shadow-xl">
              {/* Ground shadow */}
              <ellipse cx="70" cy="155" rx="35" ry="5" fill="#00000010" />

              {/* Left Ear */}
              <g className="bunny-ear" style={{ transformOrigin: "50px 20px" }}>
                <ellipse cx="50" cy="35" rx="16" ry="42" fill="#8B7355" />
                <ellipse cx="50" cy="40" rx="9" ry="28" fill="#D4A574" />
              </g>

              {/* Right Ear */}
              <g className="bunny-ear" style={{ transformOrigin: "90px 20px" }}>
                <ellipse cx="90" cy="35" rx="16" ry="42" fill="#8B7355" />
                <ellipse cx="90" cy="40" rx="9" ry="28" fill="#D4A574" />
              </g>

              {/* Head */}
              <circle cx="70" cy="70" r="40" fill="#C9A876" stroke="#8B7355" strokeWidth="2" />

              {/* Head highlight */}
              <ellipse cx="55" cy="50" rx="18" ry="22" fill="#E8C4A0" opacity="0.6" />

              {/* Left Eye */}
              <circle cx="55" cy="65" r="7" fill="white" />
              <circle cx="56" cy="65" r="5" fill="#1a1a1a" />
              <circle cx="57" cy="63" r="2.5" fill="white" />

              {/* Right Eye */}
              <circle cx="85" cy="65" r="7" fill="white" />
              <circle cx="84" cy="65" r="5" fill="#1a1a1a" />
              <circle cx="83" cy="63" r="2.5" fill="white" />

              {/* Eyebrows - Smart look */}
              <path d="M 45 55 Q 55 50 62 54" stroke="#8B7355" strokeWidth="2" fill="none" strokeLinecap="round" />
              <path d="M 78 54 Q 85 50 95 55" stroke="#8B7355" strokeWidth="2" fill="none" strokeLinecap="round" />

              {/* Nose */}
              <circle cx="70" cy="75" r="5" fill="#A0826D" />

              {/* Smile - Friendly */}
              <path d="M 70 75 Q 65 82 60 80" stroke="#8B7355" strokeWidth="2" fill="none" strokeLinecap="round" />
              <path d="M 70 75 Q 75 82 80 80" stroke="#8B7355" strokeWidth="2" fill="none" strokeLinecap="round" />

              {/* Body */}
              <rect x="40" y="105" width="60" height="45" rx="15" fill="#D2B48C" stroke="#8B7355" strokeWidth="2" />

              {/* Belly - Lighter shade */}
              <ellipse cx="70" cy="125" rx="20" ry="22" fill="#E8C4A0" opacity="0.5" />

              {/* Left Arm */}
              <circle cx="28" cy="115" r="12" fill="#C9A876" stroke="#8B7355" strokeWidth="1.5" />

              {/* Right Arm */}
              <circle cx="112" cy="115" r="12" fill="#C9A876" stroke="#8B7355" strokeWidth="1.5" />

              {/* Left Leg */}
              <ellipse cx="45" cy="148" rx="11" ry="15" fill="#C9A876" stroke="#8B7355" strokeWidth="1.5" />
              <ellipse cx="45" cy="158" rx="9" ry="6" fill="#8B7355" />

              {/* Right Leg */}
              <ellipse cx="95" cy="148" rx="11" ry="15" fill="#C9A876" stroke="#8B7355" strokeWidth="1.5" />
              <ellipse cx="95" cy="158" rx="9" ry="6" fill="#8B7355" />

              {/* Tail */}
              <g className="bunny-tail" style={{ transformOrigin: "110px 120px" }}>
                <path d="M 110 120 Q 125 105 120 80" stroke="#D2B48C" strokeWidth="14" fill="none" strokeLinecap="round" />
                <circle cx="116" cy="72" r="10" fill="#D2B48C" stroke="#8B7355" strokeWidth="1" />
              </g>
            </svg>
          </div>
        </div>
      )}

      {/* Speech Bubble with Question */}
      {showMessage && !isWidgetOpen && !showSadBunny && (
        <div className="fixed bottom-48 left-6 z-40 speech-bubble max-w-xs">
          <div className="bg-white rounded-2xl shadow-lg p-5 border-2 border-yellow-400">
            {/* Pointer */}
            <div className="absolute -bottom-3 left-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>

            <h3 className="font-bold text-gray-900 mb-2 text-base">
              Quick question! 👋
            </h3>
            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
              Can I have 10 seconds to understand what you need? I promise to help!
            </p>

            <div className="flex gap-2">
              <button
                onClick={handleYes}
                className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-bold py-2 rounded-lg transition-all shadow-md hover:shadow-lg text-sm"
              >
                Yes!
              </button>
              <button
                onClick={handleSkip}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 rounded-lg transition-all text-sm"
              >
                Skip
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sad Bunny - Smaller */}
      {showSadBunny && !isWidgetOpen && (
        <div className="fixed bottom-6 left-6 z-40 sad-bunny group cursor-pointer" onClick={handleSadBunnyClick}>
          <div className="relative">
            <svg width="85" height="100" viewBox="0 0 140 160" className="drop-shadow-lg">
              {/* Ground shadow */}
              <ellipse cx="70" cy="155" rx="35" ry="5" fill="#00000010" />

              {/* Left Ear - Droopy */}
              <g style={{ transformOrigin: "50px 20px", transform: "rotate(-15deg)" }}>
                <ellipse cx="50" cy="35" rx="16" ry="42" fill="#8B7355" />
                <ellipse cx="50" cy="40" rx="9" ry="28" fill="#D4A574" />
              </g>

              {/* Right Ear - Droopy */}
              <g style={{ transformOrigin: "90px 20px", transform: "rotate(15deg)" }}>
                <ellipse cx="90" cy="35" rx="16" ry="42" fill="#8B7355" />
                <ellipse cx="90" cy="40" rx="9" ry="28" fill="#D4A574" />
              </g>

              {/* Head */}
              <circle cx="70" cy="70" r="40" fill="#C9A876" stroke="#8B7355" strokeWidth="2" />

              {/* Head highlight */}
              <ellipse cx="55" cy="50" rx="18" ry="22" fill="#E8C4A0" opacity="0.6" />

              {/* Left Eye - Sad */}
              <circle cx="55" cy="65" r="7" fill="white" />
              <circle cx="56" cy="65" r="5" fill="#1a1a1a" />
              <circle cx="57" cy="68" r="2.5" fill="white" />

              {/* Right Eye - Sad */}
              <circle cx="85" cy="65" r="7" fill="white" />
              <circle cx="84" cy="65" r="5" fill="#1a1a1a" />
              <circle cx="83" cy="68" r="2.5" fill="white" />

              {/* Eyebrows - Sad (angled down toward center) */}
              <path d="M 45 52 Q 55 58 62 60" stroke="#8B7355" strokeWidth="2" fill="none" strokeLinecap="round" />
              <path d="M 78 60 Q 85 58 95 52" stroke="#8B7355" strokeWidth="2" fill="none" strokeLinecap="round" />

              {/* Nose */}
              <circle cx="70" cy="75" r="5" fill="#A0826D" />

              {/* Frown - Sad (curves downward) */}
              <path d="M 65 82 Q 70 86 75 82" stroke="#8B7355" strokeWidth="2" fill="none" strokeLinecap="round" />

              {/* Tear */}
              <g className="tear">
                <circle cx="58" cy="72" r="2" fill="#87CEEB" opacity="0.8" />
              </g>

              {/* Body */}
              <rect x="40" y="105" width="60" height="45" rx="15" fill="#D2B48C" stroke="#8B7355" strokeWidth="2" />

              {/* Belly */}
              <ellipse cx="70" cy="125" rx="20" ry="22" fill="#E8C4A0" opacity="0.5" />

              {/* Left Arm - Drooping */}
              <circle cx="28" cy="125" r="12" fill="#C9A876" stroke="#8B7355" strokeWidth="1.5" />

              {/* Right Arm - Drooping */}
              <circle cx="112" cy="125" r="12" fill="#C9A876" stroke="#8B7355" strokeWidth="1.5" />

              {/* Left Leg */}
              <ellipse cx="45" cy="148" rx="11" ry="15" fill="#C9A876" stroke="#8B7355" strokeWidth="1.5" />
              <ellipse cx="45" cy="158" rx="9" ry="6" fill="#8B7355" />

              {/* Right Leg */}
              <ellipse cx="95" cy="148" rx="11" ry="15" fill="#C9A876" stroke="#8B7355" strokeWidth="1.5" />
              <ellipse cx="95" cy="158" rx="9" ry="6" fill="#8B7355" />

              {/* Tail - Drooping */}
              <path d="M 110 120 Q 125 130 120 145" stroke="#D2B48C" strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.7" />
            </svg>

            {/* Sad Speech Bubble - Closer and more compact */}
            <div className="absolute left-0 -top-20 bg-white rounded-lg shadow-lg p-2 border-2 border-gray-300 sad-speech whitespace-nowrap text-nowrap">
              <div className="absolute -bottom-2 left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
              <p className="text-gray-700 text-xs font-medium">
                I was here to help... 😔
              </p>
            </div>

            {/* Hover tooltip */}
            <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Click to continue
            </div>
          </div>
        </div>
      )}

      {/* Main Widget Panel */}
      {isWidgetOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Widget - Centered */}
          <div className={`relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden mx-4`}>
            {/* Header */}
            <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 p-5 text-slate-900">
              <div className="flex items-center gap-3">
                <div className="text-2xl">🐰</div>
                <div className="flex-1">
                  <h3 className="font-bold text-base">
                    {step === "greeting" && "Let's Find Your Solution"}
                    {step === "motive" && "What's Your Goal?"}
                    {step === "contact" && "Almost There!"}
                    {step === "success" && "Perfect!"}
                  </h3>
                  <p className="text-xs opacity-80 mt-0.5">Quick questions</p>
                </div>

                <button
                  onClick={handleClose}
                  className="flex-shrink-0 p-1 hover:bg-black/10 rounded-full transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 overflow-y-auto max-h-96">
              {step === "greeting" && (
                <div className="space-y-4">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    I'm here to help match you with the perfect solution. Let's start with what you need!
                  </p>
                  <button
                    onClick={() => setStep("motive")}
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-bold py-2 rounded-lg transition-all shadow-md hover:shadow-lg text-sm"
                  >
                    Continue
                  </button>
                </div>
              )}

              {step === "motive" && (
                <div className="space-y-2">
                  <p className="text-gray-600 text-xs font-semibold uppercase tracking-wide mb-3">What do you need?</p>
                  {motives.map((motive) => (
                    <button
                      key={motive.id}
                      onClick={() => handleMotiveSelect(motive.id)}
                      className={`motive-btn w-full p-3 rounded-lg border-2 text-left text-sm font-semibold transition-all ${
                        selectedMotive === motive.id
                          ? "border-yellow-500 bg-yellow-100"
                          : "border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      {motive.label}
                    </button>
                  ))}

                  {selectedMotive && (
                    <button
                      onClick={handleNextStep}
                      className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-bold py-2 rounded-lg transition-all mt-3 flex items-center justify-center gap-2 shadow-md hover:shadow-lg text-sm"
                    >
                      Next <ChevronRight className="h-4 w-4" />
                    </button>
                  )}
                </div>
              )}

              {step === "contact" && (
                <div className="space-y-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input-field w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:outline-none text-sm placeholder-gray-500"
                  />
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="input-field w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:outline-none text-sm placeholder-gray-500"
                  />

                  <p className="text-xs text-gray-500">
                    ✓ Your info is safe. We'll call within 24 hours.
                  </p>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting || !formData.name.trim() || !formData.mobile.trim()}
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-bold py-2 rounded-lg transition-all shadow-md hover:shadow-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                  </button>
                </div>
              )}

              {step === "success" && (
                <div className="space-y-3 text-center py-4">
                  <div className="text-4xl">✨</div>
                  <h4 className="font-bold text-gray-900">Done!</h4>
                  <p className="text-gray-600 text-xs">
                    We'll be in touch within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
