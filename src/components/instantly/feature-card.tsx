import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  bgColor: "blue" | "green";
}

export function FeatureCard({ icon, title, description, bgColor }: FeatureCardProps) {
  const bgColorClass = bgColor === "blue"
    ? "bg-[hsl(var(--instantly-feature-blue))]"
    : "bg-[hsl(var(--instantly-feature-green))]";

  return (
    <div className={`${bgColorClass} rounded-xl p-10 instantly-card-shadow hover:shadow-lg transition-shadow`}>
      <div className="flex flex-col items-center text-center">
        {/* Icon Circle */}
        <div className={`${bgColorClass} rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm`}>
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-[hsl(var(--instantly-text-dark))] mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[hsl(var(--instantly-text-muted))] text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
