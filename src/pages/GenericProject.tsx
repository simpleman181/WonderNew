import { Link, useParams } from 'react-router-dom';
import { projects } from '@/data/projects';

export function GenericProject() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-xl text-center">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <p className="text-gray-600 mb-6">We couldn't find that project.</p>
          <Link to="/" className="text-blue-600 underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <Link to="/" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Home
      </Link>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <div className="mb-6">
          <img src={project.image} alt={project.title} className="w-full rounded-lg shadow" />
        </div>
        <p className="text-gray-700">This project is available as a placeholder page. If you have a specific interactive implementation, replace this file with the real project component exported as `{project.id}`.</p>
      </div>
    </div>
  );
}
