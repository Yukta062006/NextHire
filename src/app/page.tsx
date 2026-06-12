"use client";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Upload, 
  FileSearch, 
  ShieldCheck, 
  BrainCircuit, 
  Activity, 
  Target,
  PlayCircle,
  Sparkles,
  LogOut
} from "lucide-react";
import AuthDrawer from "@/components/layout/AuthDrawer";

const PIPELINE_STEPS = [
  { id: 1, title: "Resume Upload", icon: Upload },
  { id: 2, title: "JD Analysis", icon: FileSearch },
  { id: 3, title: "Skill Verification", icon: ShieldCheck },
  { id: 4, title: "Adaptive Interview", icon: BrainCircuit },
  { id: 5, title: "Pressure Analysis", icon: Activity },
  { id: 6, title: "Hiring Readiness Score", icon: Target },
];

export default function LandingPage() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [isAuthDrawerOpen, setIsAuthDrawerOpen] = useState(false);
  const [authDrawerTab, setAuthDrawerTab] = useState<"signin" | "signup">("signin");

  const checkAuthStatus = () => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("NextHire_token");
      const userStr = localStorage.getItem("NextHire_user");
      if (token && token !== "guest-token-12345") {
        setIsLoggedIn(true);
        if (userStr) {
          try {
            setUser(JSON.parse(userStr));
          } catch {
            setUser(null);
          }
        }
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("NextHire_token");
    localStorage.removeItem("NextHire_user");
    // Re-initialize guest credentials so pages don't break
    localStorage.setItem("NextHire_token", "guest-token-12345");
    localStorage.setItem("NextHire_user", JSON.stringify({
      id: "guest-id",
      name: "Alex D.",
      email: "guest@NextHire.ai",
      role: "candidate",
      target_role: "Frontend Engineer",
      experience_level: "Fresher",
      career_goals: "Master frontend frameworks and build premium user interfaces."
    }));
    checkAuthStatus();
    router.refresh();
  };

  const openAuthDrawer = (tab: "signin" | "signup") => {
    setAuthDrawerTab(tab);
    setIsAuthDrawerOpen(true);
  };

 return (
<div className="min-h-screen bg-background text-white overflow-hidden selection:bg-primary selection:text-white flex flex-col justify-between relative">
  {/* Space Background */}
<div className="absolute inset-0 pointer-events-none overflow-hidden">
  
  
 {/* Giant Planet Ring */}
<div className="absolute top-[-350px] left-1/2 -translate-x-1/2 w-[1600px] h-[1600px] rounded-full border border-cyan-400/30 shadow-[0_0_150px_rgba(34,211,238,0.5)]" />

{/* Outer Cyan Aura */}
<div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1800px] h-[1800px] rounded-full bg-cyan-500/10 blur-[300px]" />

{/* Blue Core Glow */}
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-blue-500/30 blur-[220px] rounded-full" />

{/* Bright Cyan Center Glow */}
<div className="absolute top-100 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-cyan-400/20 blur-[180px] rounded-full" />

  {/* Floating Stars */}
  <div className="absolute top-20 left-[15%] w-1 h-1 bg-cyan-300 rounded-full animate-pulse" />
  <div className="absolute top-40 left-[75%] w-1 h-1 bg-cyan-300 rounded-full animate-pulse" />
  <div className="absolute top-60 left-[25%] w-1 h-1 bg-white rounded-full animate-pulse" />
  <div className="absolute top-32 left-[55%] w-2 h-2 bg-white rounded-full animate-pulse" />
  <div className="absolute top-80 left-[85%] w-2 h-2 bg-cyan-300 rounded-full animate-pulse" />
<div className="absolute top-[15%] left-[40%] w-1 h-1 bg-white rounded-full animate-pulse" />
<div className="absolute top-[35%] left-[60%] w-2 h-2 bg-cyan-300 rounded-full animate-pulse" />
<div className="absolute top-[25%] left-[80%] w-2 h-2 bg-white rounded-full animate-pulse" />
<div className="absolute top-[50%] left-[10%] w-1 h-1 bg-cyan-300 rounded-full animate-pulse" />
  {/* Left Wave */}
<div className="absolute left-0 bottom-10 w-[900px] opacity-70">
  <svg
    viewBox="0 0 1000 300"
    fill="none"
    className="drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
  >
   <path
  d="M0 120 C300 20,600 350,1000 180"
  stroke="#22D3EE"
  strokeWidth="3"
/>
<path
  d="M0 180 C250 80,700 280,1000 150"
  stroke="#3B82F6"
  strokeWidth="2"
/>
  </svg>
</div>

{/* Right Wave */}
<div className="absolute right-0 bottom-10 w-[900px] opacity-70">
  <svg
    viewBox="0 0 1000 300"
    fill="none"
    className="drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
  >
    <path
  d="M0 120 C300 20,600 350,1000 180"
  stroke="#22D3EE"
  strokeWidth="3"
/>
<path
  d="M0 180 C250 80,700 280,1000 150"
  stroke="#3B82F6"
  strokeWidth="2"
/>
  </svg>
</div>
{/* Floating Orb 1 */}
<motion.div
  animate={{
    y: [0, -30, 0],
    x: [0, 15, 0],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
  }}
  className="absolute top-40 left-[20%] w-16 h-16 rounded-full bg-cyan-400/20 blur-2xl"
/>

{/* Floating Orb 2 */}
<motion.div
  animate={{
    y: [0, 25, 0],
    x: [0, -20, 0],
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
  }}
  className="absolute top-64 right-[20%] w-24 h-24 rounded-full bg-blue-500/20 blur-3xl"
/>

{/* Floating Orb 3 */}
<motion.div
  animate={{
    y: [0, -20, 0],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
  }}
  className="absolute bottom-32 left-[35%] w-12 h-12 rounded-full bg-cyan-300/20 blur-xl"
/>
{/* Shooting Star */}
  <motion.div
    animate={{
      x: [0, 300],
      y: [0, 120],
      opacity: [0, 1, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      repeatDelay: 6,
    }}
    className="absolute top-24 left-24 w-32 h-[2px] bg-cyan-400 blur-[1px]"
  />
</div>

    {/* Existing Content */}
  <div className="relative z-10">
  </div>

      {/* Premium Sticky Navigation Header */}
      <header className="fixed top-0 left-0 w-full h-20 border-b border-border/65 bg-background/60 backdrop-blur-lg z-50 flex items-center px-6 md:px-12 justify-between">
        <Link href="/" className="flex items-center space-x-2.5">
          <motion.img
  src="/logo.png"
  alt="NextHire Logo"
  className="w-9 h-9 object-contain"
  animate={{
    y: [0, -3, 0]
  }}
  transition={{
    duration: 3,
    repeat: Infinity
  }}
/>
          <span className="text-2xl font-bold tracking-tighter text-gradient-primary">NextHire</span>
        </Link>

        <nav className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <div className="hidden md:flex items-center space-x-2 bg-white/5 border border-border px-3.5 py-1.5 rounded-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs text-gray-300 font-medium">Logged in as {user?.name || "User"}</span>
              </div>
              <Link 
                href="/dashboard"
                className="px-5 py-2.5 bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover rounded-lg text-sm text-white font-medium transition-all shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]"
              >
                Go to Dashboard
              </Link>
              <button 
                onClick={handleLogout}
                className="p-2.5 bg-red-500/10 hover:bg-red-500/25 border border-red-500/20 text-red-400 hover:text-red-300 rounded-lg text-sm transition-all cursor-pointer flex items-center justify-center"
                title="Log Out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => openAuthDrawer("signin")}
                className="px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                Sign In
              </button>
              <button
                onClick={() => openAuthDrawer("signup")}
                className="px-4 py-2.5 bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover rounded-lg text-sm text-white font-semibold transition-all shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] cursor-pointer"
              >
                Sign Up
              </button>
            </>
          )}
        </nav>
      </header>

      {/* Main Landing View */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24 flex-1">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{
    opacity: 1,
    y: [0, -8, 0]
  }}
  transition={{
    opacity: { duration: 0.8 },
    y: {
      duration: 4,
      repeat: Infinity
    }
  }}
>
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6 border-primary/30">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-sm text-gray-300">NextHire Engine v2.0 is Live</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter drop-shadow-[0_0_30px_rgba(34,211,238,0.25)]">
              Ace Every Interview with <br />
              <span className="text-gradient-primary animate-pulse">
  NextHire
</span>

            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            AI-powered hiring intelligence that analyzes resumes, understands job descriptions, conducts adaptive interviews, verifies skills, evaluates performance, and predicts hiring readiness.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col items-center justify-center space-y-4 pt-4"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <button 
                onClick={() => router.push("/dashboard")}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover text-white rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.5)] flex items-center justify-center space-x-2 group cursor-pointer"
              >
                <span>{isLoggedIn ? "Go to Dashboard" : "Explore as Guest"}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a 
                href="https://vimeo.com/1200711181"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/5 rounded-xl font-medium transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <PlayCircle className="w-5 h-5 text-gray-400" />
                <span>Video Demo</span>
              </a>
            </div>

            {!isLoggedIn && (
              <p className="text-xs text-gray-400">
                Running in Guest Mode.{" "}
                <button onClick={() => openAuthDrawer("signin")} className="text-secondary hover:text-secondary-hover hover:underline font-semibold cursor-pointer">Sign In</button>
                {" "}or{" "}
                <button onClick={() => openAuthDrawer("signup")} className="text-secondary hover:text-secondary-hover hover:underline font-semibold cursor-pointer">Sign Up</button>
                {" "}to save progress permanently.
              </p>
            )}
          </motion.div>
        </div>

        {/* Hero Visualization Pipeline */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 mb-32 relative"
        >
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 rounded-full hidden md:block"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 relative">
            {PIPELINE_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="relative flex flex-col items-center">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
  scale: 1,
  opacity: 1,
  boxShadow: [
    "0 0 10px rgba(59,130,246,0.2)",
    "0 0 25px rgba(59,130,246,0.5)",
    "0 0 10px rgba(59,130,246,0.2)"
  ]
}}                    
whileHover={{
  scale: 1.15,
  y: -10,
  boxShadow: "0px 0px 35px rgba(59,130,246,0.8)"
}}
                    transition={{
  delay: 1 + index * 0.15,
  type: "spring",
  boxShadow: {
    duration: 2,
    repeat: Infinity
  }
}}
className="w-16 h-16 rounded-2xl bg-card border border-primary/40 flex items-center justify-center relative z-10 mb-4 shadow-[0_0_20px_rgba(59,130,246,0.35)]"                  >
                    <Icon className={`w-7 h-7 ${index === 5 ? 'text-[#22C55E]' : 'text-secondary'}`} />
                  </motion.div>
                  <p className="text-center text-sm font-medium text-gray-300 max-w-[100px]">
                    {step.title}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-y border-border/65"
        >
          <motion.div
  whileHover={{ scale: 1.05, y: -8 }}
  className="text-center space-y-2 p-4 rounded-xl"
>
  <motion.h3
    animate={{
      textShadow: [
        "0 0 5px rgba(59,130,246,0.2)",
        "0 0 20px rgba(59,130,246,0.8)",
        "0 0 5px rgba(59,130,246,0.2)"
      ]
    }}
    transition={{
      duration: 2,
      repeat: Infinity
    }}
    className="text-4xl md:text-5xl font-bold text-white"
  >
    <CountUp end={10000} duration={3} separator="," />+
  </motion.h3>

  <p className="text-gray-400 font-medium">
    Interviews Completed
  </p>
</motion.div>

<div className="text-center space-y-2 border-y md:border-y-0 md:border-x border-border/65 py-8 md:py-0">
  <motion.h3
    animate={{
      textShadow: [
        "0 0 5px rgba(59,130,246,0.2)",
        "0 0 20px rgba(59,130,246,0.8)",
        "0 0 5px rgba(59,130,246,0.2)"
      ]
    }}
    transition={{
      duration: 2,
      repeat: Infinity
    }}
    className="text-4xl md:text-5xl font-bold text-white"
  >
    <CountUp end={50000} duration={3} separator="," />+
  </motion.h3>

  <p className="text-gray-400 font-medium">
    Questions Evaluated
  </p>
</div>

<motion.div
  whileHover={{ scale: 1.05, y: -8 }}
  className="text-center space-y-2 p-4 rounded-xl"
>
  <motion.h3
    animate={{
      textShadow: [
        "0 0 5px rgba(34,197,94,0.2)",
        "0 0 20px rgba(34,197,94,0.8)",
        "0 0 5px rgba(34,197,94,0.2)"
      ]
    }}
    transition={{
      duration: 2,
      repeat: Infinity
    }}
    className="text-4xl md:text-5xl font-bold text-[#22C55E]"
  >
    <CountUp end={95} duration={3} />%
  </motion.h3>

  <p className="text-gray-400 font-medium">
    Candidate Satisfaction
  </p>
</motion.div>
        </motion.div>
      </main>

      {/* Auth side drawer */}
      <AuthDrawer 
        isOpen={isAuthDrawerOpen} 
        onClose={() => setIsAuthDrawerOpen(false)} 
        initialTab={authDrawerTab}
        onAuthSuccess={checkAuthStatus}
      />
    </div>
  );
}
