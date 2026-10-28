import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'Task Manager',
    description: 'A full-stack MVC web application with models, controllers, routes, and views, plus a REST API for tasks with data validation and error handling.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'MVC'],
    link: 'https://github.com/Sherrypeach/task-manager',
  },
  {
    title: 'Personal Portfolio Site',
    description: 'My professional portfolio showing my education, skills, projects, and work experience, hosted on GitHub Pages.',
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
