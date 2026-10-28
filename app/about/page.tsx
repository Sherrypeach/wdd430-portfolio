import ExperienceCard from '@/components/ExperienceCard';

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 mb-8">
        I am a bilingual (English/Spanish) developer and project manager who enjoys building web apps and working with remote teams.
      </p>
      <section className="grid gap-4 md:grid-cols-2">
        <ExperienceCard
          role="Technical Project Manager & Developer"
          place="PandoDev"
          description="Manage client projects and build full-stack features."
        />
        <ExperienceCard
          role="Data Coordinator"
          place="FamilySearch"
          description="Coordinated historical records projects, assigned work, and tracked deadlines and quality."
        />
        <ExperienceCard
          role="Freelance Web Manager"
          place="Small businesses in Argentina"
          description="Managed and updated websites for several local businesses."
        />
      </section>
    </main>
  );
}
