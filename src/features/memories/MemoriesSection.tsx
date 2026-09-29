import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

interface Memory {
  id: number
  title: string
  description: string
  image: string
}

interface MemoriesSectionProps {
  memories: Memory[]
}

export function MemoriesSection({ memories }: MemoriesSectionProps) {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl font-bold font-[Outfit] text-[var(--text-primary)] mb-12 text-center"
        >
          Romantik Anılarımız
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memories.map((memory, index) => (
            <motion.article
              key={memory.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-semibold font-[Outfit] mb-1">{memory.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-[var(--text-muted)] mb-4">{memory.description}</p>
                <button
                  onClick={() => console.log(`Anı paylaşıldı: ${memory.title}`)}
                  className="inline-flex items-center gap-2 text-rose-500 hover:text-rose-600 transition-colors"
                >
                  <Heart size={16} />
                  <span className="text-sm font-medium">Anıyı paylaş</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}