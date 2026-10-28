interface ExperienceCardProps {
  role: string;
  place: string;
  description: string;
}

export default function ExperienceCard({ role, place, description }: ExperienceCardProps) {
  return (
    <article className="p-4 border rounded bg-white shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900">{role}</h3>
      <p className="text-blue-700 font-medium mb-2">{place}</p>
      <p className="text-gray-700">{description}</p>
    </article>
  );
}
