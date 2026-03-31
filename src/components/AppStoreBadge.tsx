import { cn } from "@/lib/utils";
import { APP_NAME } from "@/lib/appConfig";

interface AppStoreBadgeProps {
  href?: string;
  className?: string;
}

const AppStoreBadge = ({ href, className }: AppStoreBadgeProps) => {
  const isExternal = href?.startsWith("http");
  const badge = (
    <img
      src="/app-store-badge.svg"
      alt="Download on the App Store"
      className={cn("h-14 w-auto", className)}
    />
  );

  if (!href) {
    return <div className="inline-flex shrink-0">{badge}</div>;
  }

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      aria-label={`Download ${APP_NAME} on the App Store`}
      className="inline-flex shrink-0"
    >
      {badge}
    </a>
  );
};

export default AppStoreBadge;
