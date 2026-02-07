import { Header } from '@/components/Header';
import { NewsletterButton } from '@/components/NewsletterButton';
import { ProjectGrid } from '@/components/ProjectGrid';
import { Footer } from '@/components/Footer';
import { projects } from '@/data/projects';

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <NewsletterButton />
      <Header />
      <main>
        <ProjectGrid projects={projects} />
      </main>
      <Footer />
    </div>
  );
}
