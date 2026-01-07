import Link from 'next/link';
import { ArrowRight, Code2, Smartphone, Zap, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="pt-40 pb-16 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 overflow-hidden relative" style={{
      background: 'linear-gradient(135deg, #0f172a 0%, rgba(15, 23, 42, 0.95) 50%, #1e293b 100%)',
      position: 'relative'
    }}>
      <style>{`
        @keyframes electricMadness {
          0% { 
            box-shadow: 0 0 30px 15px rgba(255, 215, 0, 0.8), 
                        0 0 60px 30px rgba(192, 192, 192, 0.4),
                        0 0 90px 45px rgba(255, 140, 0, 0.3);
            transform: translate(0, 0) scale(1);
          }
          25% {
            box-shadow: 0 0 50px 25px rgba(255, 215, 0, 0.9),
                        0 0 80px 40px rgba(192, 192, 192, 0.6),
                        0 0 120px 60px rgba(255, 140, 0, 0.5);
            transform: translate(-15px, -15px) scale(1.1);
          }
          50% {
            box-shadow: 0 0 70px 35px rgba(255, 215, 0, 1),
                        0 0 100px 50px rgba(192, 192, 192, 0.8),
                        0 0 150px 75px rgba(255, 140, 0, 0.6);
            transform: translate(15px, 15px) scale(1.2);
          }
          75% {
            box-shadow: 0 0 50px 25px rgba(255, 215, 0, 0.9),
                        0 0 80px 40px rgba(192, 192, 192, 0.6),
                        0 0 120px 60px rgba(255, 140, 0, 0.5);
            transform: translate(-10px, 10px) scale(1.1);
          }
          100% {
            box-shadow: 0 0 30px 15px rgba(255, 215, 0, 0.8),
                        0 0 60px 30px rgba(192, 192, 192, 0.4),
                        0 0 90px 45px rgba(255, 140, 0, 0.3);
            transform: translate(0, 0) scale(1);
          }
        }
        @keyframes electricTwist {
          0%, 100% { transform: rotate(0deg) translateX(0px); opacity: 0.6; }
          25% { transform: rotate(90deg) translateX(20px); opacity: 0.9; }
          50% { transform: rotate(180deg) translateX(-20px); opacity: 1; }
          75% { transform: rotate(270deg) translateX(20px); opacity: 0.9; }
        }
        @keyframes electricFlash {
          0%, 100% { opacity: 0.4; filter: brightness(1); }
          50% { opacity: 1; filter: brightness(1.5); }
        }
        .electric-madness {
          animation: electricMadness 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
        }
        .electric-twist {
          animation: electricTwist 3s linear infinite;
        }
        .electric-flash {
          animation: electricFlash 0.8s ease-in-out infinite;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-yellow-900/40 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium border border-yellow-700/50">
                <Zap className="h-4 w-4" />
                <span>Trusted by Indian Businesses</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Transform Your Business with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
                  {' '}Expert Tech Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                We help businesses across India scale faster with cutting-edge web and mobile applications. 
                From startups to enterprises, we've delivered 50+ successful projects with 100% client satisfaction.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                <span className="text-gray-200 font-medium">5+ years of proven expertise in web & mobile development</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                <span className="text-gray-200 font-medium">Dedicated team of skilled developers and designers</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                <span className="text-gray-200 font-medium">On-time delivery and ongoing technical support</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/get-quote"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-slate-900 font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-200 hover:scale-105 shadow-lg shadow-yellow-500/20"
              >
                Get Free Quote Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-600 text-gray-200 font-semibold rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200"
              >
                Schedule a Call
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">50+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">100%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Side - Team/Visual */}
          <div className="relative">
            <div className="relative z-10 flex flex-col gap-6">
              {/* Team Member Image */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl p-1 h-80">
                <div className="bg-white rounded-3xl w-full h-full overflow-hidden relative">
                  <Image 
                    src="/hero.webp" 
                    alt="Indian Professional" 
                    fill
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-700">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/30 to-yellow-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="h-8 w-8 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Quick Turnaround</h3>
                    <p className="text-sm text-gray-400">Fast delivery without compromising quality</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Electrifying Background Decorations - Gold & Silver */}
            <div className="absolute -top-4 -right-4 w-60 h-60 rounded-full electric-madness" style={{
              background: 'radial-gradient(circle, rgba(255, 215, 0, 0.9) 0%, rgba(192, 192, 192, 0.5) 50%, rgba(0, 0, 0, 0.2) 100%)',
              filter: 'blur(50px)'
            }}></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full electric-twist" style={{
              background: 'radial-gradient(circle, rgba(192, 192, 192, 0.9) 0%, rgba(255, 140, 0, 0.5) 50%, rgba(0, 0, 0, 0.3) 100%)',
              filter: 'blur(40px)'
            }}></div>
            <div className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full electric-flash" style={{
              background: 'radial-gradient(circle, rgba(255, 215, 0, 1) 0%, rgba(192, 192, 192, 0.6) 100%)',
              filter: 'blur(35px)'
            }}></div>
            <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full electric-madness" style={{
              background: 'radial-gradient(circle, rgba(255, 140, 0, 0.9) 0%, rgba(255, 215, 0, 0.5) 50%, rgba(0, 0, 0, 0.2) 100%)',
              filter: 'blur(30px)',
              animationDelay: '0.5s'
            }}></div>
            <div className="absolute top-2/3 right-1/4 w-36 h-36 rounded-full electric-flash" style={{
              background: 'radial-gradient(circle, rgba(192, 192, 192, 0.8) 0%, rgba(255, 215, 0, 0.4) 100%)',
              filter: 'blur(32px)',
              animationDelay: '0.3s'
            }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}