import { ReactNode } from "react";
import Image from "next/image";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  bgColor: "blue" | "green";
  image?: string;
}

export function FeatureCard({ icon, title, description, bgColor, image }: FeatureCardProps) {
  const bgColorClass = bgColor === "blue"
    ? "bg-[hsl(var(--instantly-feature-blue))]"
    : "bg-[hsl(var(--instantly-feature-green))]";

  return (
    <div className={`${bgColorClass} rounded-xl overflow-hidden instantly-card-shadow hover:shadow-lg transition-all hover:-translate-y-1`}>
      {/* Image Section */}
      {image && (
        <div className="relative w-full h-48 bg-white">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="p-8">
        <div className="flex flex-col items-center text-center">
          {/* Icon Circle */}
          <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-md">
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
    </div>
  );
}
