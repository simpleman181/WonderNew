import { motion } from 'framer-motion';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.3 + index * 0.05,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2, ease: 'easeOut' }
      }}
      whileTap={{ scale: 0.98 }}
      className="block relative overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="aspect-[3/1] w-full">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          loading={index < 9 ? 'eager' : 'lazy'}
        />
      </div>
    </motion.a>
  );
}
