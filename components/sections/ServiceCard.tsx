interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

export default function ServiceCard({ title, description, imageUrl }: ServiceCardProps) {
  return (
    <div className="bg-brand-gray rounded-xl overflow-hidden border border-white/10">
      {imageUrl && (
        <div className="h-48 bg-brand-dark" />
      )}
      <div className="p-6">
        <h3 className="font-heading font-semibold text-lg text-white mb-2">{title}</h3>
        <p className="text-sm text-white/60">{description}</p>
      </div>
    </div>
  );
}
