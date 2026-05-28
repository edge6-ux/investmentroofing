interface TestimonialCardProps {
  quote: string;
  author: string;
  location?: string;
}

export default function TestimonialCard({ quote, author, location }: TestimonialCardProps) {
  return (
    <div className="bg-brand-gray rounded-xl p-6 border border-white/10">
      <p className="text-white/80 text-sm leading-relaxed mb-4">&ldquo;{quote}&rdquo;</p>
      <div>
        <p className="font-heading font-semibold text-white text-sm">{author}</p>
        {location && <p className="text-xs text-white/40">{location}</p>}
      </div>
    </div>
  );
}
