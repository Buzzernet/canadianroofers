import { Star } from "lucide-react";

interface GoogleStarsProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { star: 14, text: "text-xs" },
  md: { star: 18, text: "text-sm" },
  lg: { star: 22, text: "text-base" },
};

const GoogleStars = ({ className = "", size = "md" }: GoogleStarsProps) => {
  const s = sizeMap[size];
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={s.star} className="fill-star text-star" />
        ))}
      </div>
      <span className={`${s.text} font-semibold text-foreground`}>5.0</span>
      <span className={`${s.text} text-muted-foreground`}>Google Reviews</span>
    </div>
  );
};

export default GoogleStars;
