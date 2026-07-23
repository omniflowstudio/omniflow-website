'use client'

import { motion } from 'framer-motion'
import { Link, Share2 } from 'lucide-react'

const team = [
  {
    name: 'Alex Chen',
    role: 'Founder & Creative Director',
    bio: 'Design visionary with 8+ years in digital innovation',
    avatar: '👨‍💼',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Sarah Rodriguez',
    role: 'Lead Developer',
    bio: 'Full-stack expert specializing in scalable solutions',
    avatar: '👩‍💻',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Marcus Johnson',
    role: 'Head of Strategy',
    bio: 'Business strategist driving growth and innovation',
    avatar: '👨‍💼',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Emily Park',
    role: 'UI/UX Designer',
    bio: 'Crafting beautiful and intuitive user experiences',
    avatar: '👩‍🎨',
    social: { linkedin: '#', twitter: '#' },
  },
]

export default function Team() {
  return (
    <section id="team" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/50" />

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
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Talented professionals dedicated to delivering exceptional results for every project
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              {/* Card */}
              <div className="bg-card border border-primary/10 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300">
                {/* Avatar Area */}
                <div className="relative h-40 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {member.avatar}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm font-medium text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-6">{member.bio}</p>

                  {/* Social Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Link className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      aria-label="Twitter"
                    >
                      <Share2 className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-12 border-t border-border/30"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">Interested in joining our team?</h3>
          <a
            href={`https://wa.me/919999999999?text=Hi%20Omni%20Flow%2C%20I%27m%20interested%20in%20career%20opportunities`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
