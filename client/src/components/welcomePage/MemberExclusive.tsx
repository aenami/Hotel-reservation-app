import { motion } from "framer-motion";

export function MemberExclusive() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="hidden lg:block mt-12 max-w-sm"
    >
      <div className="p-6 bg-surface-lowest/80 backdrop-blur-xl rounded-xl border border-white/20 shadow-lg">
        <p className="font-serif text-lg italic mb-2">Member Exclusive</p>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
          Enjoy complimentary concierge airport transfers for all Reserve members this season.
        </p>
        <a 
          href="#" 
          className="text-[10px] uppercase tracking-widest font-bold text-secondary border-b border-secondary/30 pb-1 hover:text-secondary/70 transition-colors inline-block"
        >
          Learn More
        </a>
      </div>
    </motion.div>
  );
}
