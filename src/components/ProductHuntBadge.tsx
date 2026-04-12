import { cn } from "@/lib/utils";

interface ProductHuntBadgeProps {
  className?: string;
}

const PRODUCT_HUNT_URL =
  "https://www.producthunt.com/products/collecta-2?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-collecta-3";
const PRODUCT_HUNT_IMAGE_URL =
  "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1122016&theme=light&t=1776018019039";

const ProductHuntBadge = ({ className }: ProductHuntBadgeProps) => {
  return (
    <a
      href={PRODUCT_HUNT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View Collecta on Product Hunt"
      className="inline-flex shrink-0"
    >
      <img
        alt="Collecta - Turn saved content into posts you actually publish | Product Hunt"
        src={PRODUCT_HUNT_IMAGE_URL}
        width={250}
        height={54}
        className={cn("h-auto w-[250px]", className)}
      />
    </a>
  );
};

export default ProductHuntBadge;
