import ExperienceCard from '@/components/ExperienceCard';

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 mb-8">
        I am a bilingual (English/Spanish) software development student and full-stack developer who enjoys building web apps and working with remote teams.
      </p>
      <section className="grid gap-4 md:grid-cols-2">
        <ExperienceCard
          role="Technical Project Manager & Full Stack Developer"
          place="PandoDev"
          description="Manage client projects and build full-stack features."
        />
        <ExperienceCard
          role="Exam Reviewer"
          place="EnglishConnect 3"
          description="Review and score English learner exams."
        />
        <ExperienceCard
          role="Data Entry Specialist"
          place="FamilySearch"
          description="Worked on historical records projects, tracking deadlines and quality."
        />
        <ExperienceCard
          role="Project Manager & ESL Teacher"
          place="Alianza Idiomas"
          description="Coordinated course launches, scheduling, and teacher assignments, and taught English classes."
        />
      </section>
    </main>
  );
}
