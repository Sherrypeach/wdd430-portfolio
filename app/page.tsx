import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'CSE 340 Course Project',
    description: 'A server-side web application built for my Web Backend Development course.',
    technologies: ['Node.js', 'Express', 'PostgreSQL'],
    link: 'https://github.com/Sherrypeach/cse340-course',
  },
  {
    title: 'Personal Portfolio Site',
    description: 'My personal portfolio website, hosted on GitHub Pages.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://sherrypeach.github.io/cassandra-portfolio',
  },
];

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          Full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
