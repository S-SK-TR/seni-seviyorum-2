import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

interface HeroSectionProps {
  title: string
  subtitle: string
}

export function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-4">
      <div className="absolute inset-0 bg-[var(--bg-base)]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-rose-500/10 to-transparent"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-2xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex p-4 rounded-full bg-rose-500/10 text-rose-500 mb-6"
        >
          <Heart size={32} />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-bold font-[Outfit] text-[var(--text-primary)] mb-4 leading-tight"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-[var(--text-muted)] max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => console.log('Anılarımıza git')}
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-rose-500 text-white font-medium hover:bg-rose-600 transition-colors duration-200 shadow-lg hover:shadow-xl active:scale-95"
        >
          Anılarımıza Göz At
          <Heart size={16} />
        </motion.button>
      </motion.div>
    </section>
  )
}