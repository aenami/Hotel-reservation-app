import { Header } from '../components/Header';
import BookingCard from '../components/welcomePage/BookingCard';
import { MemberExclusive } from '../components/welcomePage/MemberExclusive';
import { motion } from 'framer-motion';

function WelcomePage() {

  return (
    <div className="min-h-screen bg-surface selection:bg-secondary/20">
      <Header />
      
      <main className="relative min-h-screen pt-20 overflow-hidden flex flex-col">
        {/* Asymmetric Background Composition */}
        <div className="absolute top-0 right-0 w-[60%] h-full z-0 hidden lg:block">
          <div className="absolute inset-0 hero-gradient z-10" />
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
            alt="Luxurious hotel interior"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Main Content Area */}
        <section className="relative z-20 flex-1 px-8 lg:px-24 py-12 lg:py-24 flex flex-col justify-center lg:pb-48">
          <div className="max-w-2xl">
            {/* Welcome Branding */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-secondary font-bold">
                Your Curated Journey
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-serif text-5xl lg:text-7xl text-primary leading-[1.1] tracking-tighter mb-12"
            >
              Welcome back, Julian.
              <br />
              <span className="italic text-secondary font-light">
                Your sanctuary awaits.
              </span>
            </motion.h1>

            <BookingCard />
            
            <MemberExclusive />
          </div>
        </section>
      </main>
    
    </div>
  );
}

export default WelcomePage
