'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ShoppingCart, FileText, Smartphone, Zap, BarChart3, Settings } from 'lucide-react'

const portfolio = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Full-featured e-commerce platform with payment integration',
    icon: ShoppingCart,
    color: 'from-blue-500 to-blue-600',
    link: '#',
  },
  {
    id: 2,
    title: 'Customized Landing Pages',
    category: 'Web Design',
    description: 'High-converting landing pages tailored to specific campaigns and audiences',
    icon: FileText,
    color: 'from-purple-500 to-purple-600',
    link: '#',
  },
  {
    id: 3,
    title: 'Mobile Fitness App',
    category: 'Mobile App',
    description: 'Cross-platform fitness tracking and workout planning app',
    icon: Zap,
    color: 'from-green-500 to-green-600',
    link: '#',
  },
  {
    id: 4,
    title: 'Corporate Website',
    category: 'Web Design',
    description: 'Professional corporate website with modern design',
    icon: BarChart3,
    color: 'from-pink-500 to-pink-600',
    link: '#',
  },
  {
    id: 5,
    title: 'Social Commerce App',
    category: 'Mobile Development',
    description: 'Social media integrated shopping experience',
    icon: Smartphone,
    color: 'from-yellow-500 to-yellow-600',
    link: '#',
  },
  {
    id: 6,
    title: 'Content Management System',
    category: 'Web Development',
    description: 'Scalable CMS for digital content management',
    icon: Settings,
    color: 'from-orange-500 to-orange-600',
    link: '#',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background" />
      <div className="absolute top-1/2 -left-96 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our recent projects and see how we&apos;ve transformed businesses through innovative digital solutions
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.a
                key={project.id}
                href={project.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)' }}
                className="group relative bg-card border border-primary/10 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                {/* Icon Area */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${project.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.a>
            )
          })}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href={`https://wa.me/919999999999?text=Hi%20Omni%20Flow%2C%20I%20would%20like%20to%20see%20more%20of%20your%20projects`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-primary/50 text-foreground rounded-lg hover:bg-primary/10 transition-colors font-medium"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
