import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const navigate = useNavigate();

  // Vite provides the base URL via import.meta.env.BASE_URL
  const base = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '');
  const path = project.url.replace(/^\//, '');
  const href = `${base}/${path}`;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Use SPA navigation when possible
    navigate(project.url.replace(/^\//, '/') );
  };

  return (
    <a href={href} onClick={handleClick} className="block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      >
        <div className="aspect-square bg-gray-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23ddd" width="200" height="200"/%3E%3C/svg%3E';
            }}
          />
        </div>
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
        </div>
      </motion.div>
    </a>
  );
}
