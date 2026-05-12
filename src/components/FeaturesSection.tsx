import { Children, useEffect, useRef, useState, type ReactNode } from "react";
import { BookMarked, Database, FileText, Heart, Link2, MessageCircle, Repeat2, Route, Tags, WandSparkles } from "lucide-react";

import contentReadyMockup from "@/assets/content-ready-mockup.png";
import generateMockup from "@/assets/feature-generate-mockup.png";
import heroMockup from "@/assets/saves-mockup.png";
import organizeMockup from "@/assets/feature-organize-mockup.png";
import selectInspoMockup from "@/assets/feature-select-inspo-mockup.png";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const REDDIT_WIDGET_SCRIPT_ID = "reddit-widgets-script";

const tweets = [
  {
    bodyLines: [
      "nice.",
      "idea hoarding is a form of procrastination.",
      "collecting feels like progress, but nothing changes until one idea gets pushed through reality.",
    ],
    author: "Lulu Neversnooze",
    handle: "@luluneverstops",
    avatarUrl: "https://pbs.twimg.com/profile_images/2046569342595403776/YJREVLnq_400x400.jpg",
    avatarClassName: "bg-[radial-gradient(circle_at_65%_35%,#2dd4bf_0,#0f766e_28%,#111827_62%)]",
    href: "https://twitter.com/luluneverstops/status/2049844998460637192?ref_src=twsrc%5Etfw",
    time: "3:35 PM · Apr 30, 2026",
  },
  {
    bodyLines: ["I NEED A PLAYSTORE VERSION"],
    author: "Rayane",
    handle: "@FlippedRay",
    avatarUrl: "https://pbs.twimg.com/profile_images/2033902698597388289/cCw7DzcX_400x400.jpg",
    avatarClassName: "bg-[linear-gradient(135deg,#eab308,#22c55e_45%,#2563eb)]",
    href: "https://twitter.com/FlippedRay/status/2045221822866522133?ref_src=twsrc%5Etfw",
    time: "9:24 PM · Apr 17, 2026",
  },
  {
    bodyLines: ["wait i need this. my notes app isnt cutting it anymore"],
    author: "Mads",
    handle: "@madsf88",
    avatarUrl: "https://pbs.twimg.com/profile_images/2028551964309504001/TZOccSqz_400x400.jpg",
    avatarClassName: "bg-[linear-gradient(135deg,#f0abfc,#fde68a_45%,#64748b)]",
    href: "https://twitter.com/madsf88/status/2044832092274438248?ref_src=twsrc%5Etfw",
    time: "7:35 PM · Apr 16, 2026",
  },
  {
    bodyLines: ["this is exactly the bridge most people miss. execution is the only thing that separates a hobby from a business."],
    author: "Sridhar",
    handle: "@sridharfyi",
    avatarUrl: "https://pbs.twimg.com/profile_images/1774608801800339456/GIawSjxp_400x400.jpg",
    avatarClassName: "bg-[linear-gradient(135deg,#0f172a,#475569_50%,#94a3b8)]",
    href: "https://x.com/sridharfyi/status/2054243765351600586?s=20",
    time: "May 12, 2026",
  },
];

const includes = [
  {
    title: "A centralized database of saves",
    copy: "Bring saved posts, links and rough ideas into one place built for creating, not just storing.",
    image: heroMockup,
    alt: "Collecta centralized database of saved inspiration",
    Icon: Database,
  },
  {
    title: "Your ideas categorized by topic",
    copy: "Group inspiration by themes, niches and content buckets so the right reference is easy to find.",
    image: organizeMockup,
    alt: "Collecta ideas categorized by topic",
    Icon: Tags,
  },
  {
    title: "A tool to turn your ideas into content",
    copy: "Generate a step-by-step plan, angle, hooks and script from the inspiration you already collected.",
    image: generateMockup,
    alt: "Collecta tool for turning ideas into content",
    Icon: WandSparkles,
  },
];

const benefits = [
  {
    title: "Beat blank page syndrome",
    copy: "Start from inspiration you already saved instead of staring at an empty document.",
    Icon: FileText,
  },
  {
    title: "Turn saves into output",
    copy: "Transform references, links and ideas into hooks, scripts, structures and checklists.",
    Icon: BookMarked,
  },
  {
    title: "Build a repeatable creation workflow",
    copy: "Move from saved inspiration to ready drafts with a clear next step every time.",
    Icon: Route,
  },
];

const pipelineStats = [
  { label: "Saved inspiration", value: "42" },
  { label: "Ready ideas", value: "12" },
  { label: "Drafts generated", value: "5" },
  { label: "Ready to publish", value: "3" },
];

const pipelineSteps = [
  {
    title: "Saves",
    copy: "Centralize saved posts, links and rough ideas in one place",
    image: heroMockup,
    alt: "Collecta saved inspiration screen",
    desktopClassName: "left-0 top-[260px] w-[260px]",
  },
  {
    title: "Select saves",
    copy: "Choose the references you want to create from",
    image: selectInspoMockup,
    alt: "Collecta select saves screen",
    desktopClassName: "left-[28%] top-[80px] w-[260px]",
  },
  {
    title: "Full execution plan",
    copy: "Generate angle, hooks, script and checklist",
    image: generateMockup,
    alt: "Collecta post generation screen",
    desktopClassName: "left-[54%] top-[300px] w-[260px]",
  },
  {
    title: "Content ready",
    copy: "Use the plan to record, write and publish",
    image: contentReadyMockup,
    alt: "Collecta execution checklist screen",
    desktopClassName: "right-0 top-[170px] w-[260px]",
  },
];

const SectionHeading = ({
  title,
  copy,
  className = "",
}: {
  title: string;
  copy?: string;
  className?: string;
}) => (
  <div className={`mx-auto max-w-3xl text-center ${className}`}>
    <h2 className="text-3xl font-extrabold leading-[1.06] tracking-normal text-[#111312] sm:text-4xl lg:text-5xl">
      {title}
    </h2>
    {copy ? <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#646865] sm:text-lg sm:leading-8">{copy}</p> : null}
  </div>
);

const XLogo = () => (
  <svg className="h-5 w-5 text-[#111312]" viewBox="0 0 24 24" aria-label="X">
    <path
      fill="currentColor"
      d="M18.9 2h3.3l-7.2 8.2L23.5 22h-6.6l-5.2-6.8L5.8 22H2.5l7.7-8.8L2 2h6.8l4.7 6.2L18.9 2Zm-1.2 18h1.8L7.8 3.9h-2L17.7 20Z"
    />
  </svg>
);

const XActionLink = ({
  href,
  label,
  className,
  children,
}: {
  href: string;
  label: string;
  className: string;
  children: ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className={`inline-flex h-7 min-w-7 items-center justify-center gap-1 rounded-full transition-colors ${className}`}
  >
    {children}
  </a>
);

const ProductHuntLogo = () => (
  <svg className="h-5 w-5 text-[#DA552F]" viewBox="0 0 40 40" aria-label="Product Hunt">
    <g fill="none" fillRule="evenodd">
      <path d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20" fill="currentColor" />
      <path d="M22.667 20H17v-6h5.667c1.656 0 3 1.343 3 3s-1.344 3-3 3m0-10H13v20h4v-6h5.667c3.866 0 7-3.134 7-7s-3.134-7-7-7" fill="#FFF" />
    </g>
  </svg>
);

const MobileCardCarousel = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <Carousel opts={{ align: "start", containScroll: "trimSnaps" }} className={`lg:hidden ${className}`}>
    <CarouselContent>
      {Children.map(children, (child, index) => (
        <CarouselItem key={index} className="sm:max-w-[48%]" style={{ flexBasis: "86%", maxWidth: "86%" }}>
          {child}
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
);

const TwitterResponseCard = ({ tweet }: { tweet: (typeof tweets)[number] }) => (
  <article className="relative flex min-h-[320px] w-full min-w-0 max-w-full flex-col overflow-hidden rounded-[28px] bg-white p-5 text-left font-sans text-[#0f1419] shadow-[0_18px_60px_-46px_rgba(17,19,18,0.52)] ring-1 ring-[#e8ebe4] transition hover:-translate-y-0.5 hover:shadow-[0_24px_70px_-46px_rgba(17,19,18,0.62)]">
    <a href={tweet.href} target="_blank" rel="noreferrer" aria-label={`Open ${tweet.author}'s tweet`} className="absolute inset-0 z-0 rounded-[28px]" />
    <div className="relative z-10 flex items-start justify-between gap-4">
      <div className="flex min-w-0 items-center gap-3">
        <span className={`flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full ${tweet.avatarClassName}`}>
          <img src={tweet.avatarUrl} alt={tweet.author} className="h-full w-full object-cover" loading="lazy" />
        </span>
        <div className="min-w-0">
          <div className="flex min-w-0 items-center gap-1">
            <p className="truncate text-base font-extrabold leading-tight">{tweet.author}</p>
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#1d9bf0] text-[10px] font-extrabold leading-none text-white">
              ✓
            </span>
          </div>
          <p className="truncate text-sm font-medium leading-tight text-[#536471]">{tweet.handle}</p>
        </div>
      </div>
      <XLogo />
    </div>

    <div className="relative z-10 mt-5 space-y-4 text-base leading-6">
      {tweet.bodyLines.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </div>

    <div className="relative z-10 mt-auto pt-5">
      <p className="text-sm font-medium text-[#536471]">{tweet.time}</p>
      <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-[#cfd9de] pt-3 text-sm font-bold text-[#536471]">
        <XActionLink href={tweet.href} label="Like on X" className="text-[#f91880] hover:bg-[#f91880]/10">
          <Heart className="h-4 w-4 fill-current stroke-current" />
        </XActionLink>
        <XActionLink href={tweet.href} label="Reply on X" className="text-[#1d9bf0] hover:bg-[#1d9bf0]/10">
          <MessageCircle className="h-4 w-4 fill-[#1d9bf0] stroke-current" />
        </XActionLink>
        <XActionLink href={tweet.href} label="Retweet on X" className="text-[#00ba7c] hover:bg-[#00ba7c]/10">
          <Repeat2 className="h-4 w-4 stroke-current" />
        </XActionLink>
        <a href={tweet.href} target="_blank" rel="noreferrer" className="inline-flex h-7 items-center transition-colors hover:text-[#1d9bf0]">
          Reply
        </a>
        <a href={tweet.href} target="_blank" rel="noreferrer" className="inline-flex h-7 items-center gap-1 transition-colors hover:text-[#1d9bf0]">
          <Link2 className="h-4 w-4" />
          Copy link
        </a>
      </div>
    </div>
  </article>
);

const ProductHuntCommentCard = () => (
  <article
    id="comment-5337848"
    data-test="comment-5337848"
    className="relative flex min-h-[320px] flex-row gap-3 rounded-[28px] bg-white p-5 text-left font-sans text-[#111827] shadow-[0_18px_60px_-46px_rgba(17,19,18,0.52)] ring-1 ring-[#e8ebe4] transition hover:-translate-y-0.5 hover:shadow-[0_24px_70px_-46px_rgba(17,19,18,0.62)]"
  >
    <a
      href="https://www.producthunt.com/products/collecta-2?comment=5337848"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open Product Hunt comment"
      className="absolute inset-0 z-0 rounded-[28px]"
    />
    <span className="absolute right-5 top-5 z-10">
      <ProductHuntLogo />
    </span>

    <span className="relative z-10 block h-fit shrink-0 rounded-full">
      <img
        loading="lazy"
        alt="Sarah Porter"
        className="h-8 w-8 rounded-full"
        src="https://ph-avatars.imgix.net/9558477/14bd1c9c-df1f-4fc3-9858-59888c0a32fb.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=32&h=32&fit=crop&frame=1"
        srcSet="https://ph-avatars.imgix.net/9558477/14bd1c9c-df1f-4fc3-9858-59888c0a32fb.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=32&h=32&fit=crop&frame=1&dpr=1 1x, https://ph-avatars.imgix.net/9558477/14bd1c9c-df1f-4fc3-9858-59888c0a32fb.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=32&h=32&fit=crop&frame=1&dpr=2 2x, https://ph-avatars.imgix.net/9558477/14bd1c9c-df1f-4fc3-9858-59888c0a32fb.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=32&h=32&fit=crop&frame=1&dpr=3 3x"
      />
    </span>

    <div className="relative z-10 flex min-w-0 flex-1 flex-col gap-2 pr-7">
      <p className="line-clamp-1 w-fit text-base font-semibold text-gray-900">
        Sarah Porter
      </p>

      <p className="block text-base leading-6 text-[#111827]">
        I’m sure I have 100s of screenshots from my socials that I grabbed with the best intentions of returning to later, but forgot about the next day. Very nice to be able to keep all those fleeting thoughts in one place.
      </p>

      <div className="mt-auto flex flex-row flex-wrap items-center gap-3 pt-3 text-sm font-semibold text-gray-600">
        <a
          href="https://www.producthunt.com/products/collecta-2?comment=5337848"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-1 text-[#ff6154] transition-colors hover:text-[#DA552F]"
          aria-label="Upvoted"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className="stroke-[1.5px] stroke-current">
            <path d="M2 5.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C3.52 2 4.08 2 5.2 2h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C14 3.52 14 4.08 14 5.2v5.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C12.48 14 11.92 14 10.8 14H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C2 12.48 2 11.92 2 10.8z" />
            <path d="M7.2 5.733a1 1 0 0 1 1.6 0l2 2.667A1 1 0 0 1 10 10H6a1 1 0 0 1-.8-1.6z" />
          </svg>
          <span>Upvoted (1)</span>
        </a>

        <span className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1920" className="h-4 w-4 fill-current">
            <path d="M1034.59 564.21 959.198 320l-73.785 242.527H640l198.898 151.577L761.906 960l198.895-151.578L1159.7 960l-78.6-244.21L1280 564.21z" />
            <path d="M357.542 0H1562.46v119.181H1920v423.687a423.7 423.7 0 0 1-124.09 299.592 423.74 423.74 0 0 1-237.96 119.589A423.64 423.64 0 0 1 1438.36 1200c-77.91 77.91-183.04 122.35-293.03 124.05v172.26c0 14.07 5.58 27.56 15.53 37.5a53.04 53.04 0 0 0 37.5 15.54c64.96 0 127.25 25.8 173.18 71.73a244.93 244.93 0 0 1 71.74 173.18V1920H476.723v-125.74a244.91 244.91 0 0 1 244.916-244.91 53.02 53.02 0 0 0 37.501-15.54 53 53 0 0 0 15.534-37.5v-172.26A423.7 423.7 0 0 1 481.637 1200a423.68 423.68 0 0 1-119.589-237.951A423.695 423.695 0 0 1 0 542.868V119.181h357.542zm132.29 132.29v768.12c0 77.283 30.701 151.4 85.348 206.05a291.4 291.4 0 0 0 206.049 85.35h125.735v304.5c0 49.15-19.525 96.29-54.28 131.05a185.35 185.35 0 0 1-131.045 54.28 112.6 112.6 0 0 0-79.638 32.99 112.6 112.6 0 0 0-32.797 73.08H1310.8a112.62 112.62 0 0 0-32.8-73.08 112.6 112.6 0 0 0-79.64-32.99 185.327 185.327 0 0 1-185.32-185.33v-304.5h125.73a291.4 291.4 0 0 0 291.4-291.4V132.29zm-132.29 119.181H132.29v291.397a291.4 291.4 0 0 0 225.252 283.791zM1562.46 826.659V251.471h225.25v291.397a291.4 291.4 0 0 1-85.35 206.049 291.4 291.4 0 0 1-139.9 77.742" />
          </svg>
          <span>Award</span>
        </span>

        <span className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className="stroke-current stroke-[1.5px]">
            <path d="M5.333 6.333H8M5.333 8.667H10M8 14a6 6 0 1 0-5.561-3.744c.054.134.08.2.093.254a.6.6 0 0 1 .016.146c0 .055-.01.115-.03.236l-.395 2.372c-.042.248-.062.372-.024.462a.33.33 0 0 0 .175.175c.09.038.214.018.463-.024l2.371-.395c.12-.02.18-.03.236-.03a.6.6 0 0 1 .146.016c.054.012.12.04.254.093A6 6 0 0 0 8 14" />
          </svg>
          <span>Reply</span>
        </span>

        <span className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className="stroke-current stroke-[1.5px]">
            <path d="M2.667 10s.666-.667 2.666-.667 3.333 1.334 5.333 1.334S13.333 10 13.333 10V2s-.667.667-2.667.667-3.333-1.334-5.333-1.334S2.667 2 2.667 2v12.667" />
          </svg>
          <span>Report</span>
        </span>

        <span className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className="stroke-current stroke-[1.5px]">
            <path d="M14 8v2.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C12.48 14 11.92 14 10.8 14H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C2 12.48 2 11.92 2 10.8V8m8.667-3.333L8 2m0 0L5.333 4.667M8 2v8" />
          </svg>
          <span>Share</span>
        </span>

        <span className="flex items-center gap-1 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className="stroke-current stroke-[1.5px]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 4v4l2.667 1.333m4-1.333A6.667 6.667 0 1 1 1.333 8a6.667 6.667 0 0 1 13.334 0" />
          </svg>
          <time dateTime="2026-05-03T06:11:04-07:00">9d ago</time>
        </span>

        <span className="text-lg leading-none text-gray-400">...</span>
      </div>
    </div>
  </article>
);

const RedditEmbedCard = () => {
  const redditRef = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    const existingScript = document.getElementById(REDDIT_WIDGET_SCRIPT_ID);

    if (existingScript) {
      return undefined;
    }

    const script = document.createElement("script");
    script.id = REDDIT_WIDGET_SCRIPT_ID;
    script.src = "https://embed.reddit.com/widgets.js";
    script.async = true;
    script.charset = "UTF-8";
    document.body.appendChild(script);

    return undefined;
  }, []);

  return (
    <article className="flex min-h-[320px] items-start justify-center overflow-hidden rounded-[28px] bg-white p-5 shadow-[0_18px_60px_-46px_rgba(17,19,18,0.52)] ring-1 ring-[#e8ebe4] transition hover:-translate-y-0.5 hover:shadow-[0_24px_70px_-46px_rgba(17,19,18,0.62)]">
      <blockquote ref={redditRef} className="reddit-embed-bq" data-embed-height="280">
        <a href="https://www.reddit.com/r/buildinpublic/comments/1t9ytwc/comment/ol6gvng/">Comment</a>
        <br /> by{" "}
        <a href="https://www.reddit.com/user/Terr0nzz/">u/Terr0nzz</a> from discussion{" "}
        <a href="https://www.reddit.com/r/buildinpublic/comments/1t9ytwc/i_think_saving_posts_gives_us_the_illusion_of/">
          I think saving posts gives us the illusion of progress
        </a>
        <br /> in{" "}
        <a href="https://www.reddit.com/r/buildinpublic/">buildinpublic</a>
      </blockquote>
    </article>
  );
};

const MockupImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative mx-auto w-full max-w-[140px] aspect-[9/19] sm:max-w-[240px]">
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_28px_44px_rgba(17,19,18,0.14)] transition-all duration-500 ease-out hover:-translate-y-1 hover:drop-shadow-[0_34px_52px_rgba(17,19,18,0.18)]"
    />
  </div>
);

const PipelineStepContent = ({ step }: { step: (typeof pipelineSteps)[number] }) => (
  <>
    <img
      src={step.image}
      alt={step.alt}
      className="mx-auto h-56 w-full object-contain drop-shadow-[0_20px_34px_rgba(17,19,18,0.14)] transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-[0_26px_42px_rgba(17,19,18,0.18)]"
    />
    <div className="mt-4 text-center">
      <p className="text-xl font-extrabold">{step.title}</p>
      <p className="mx-auto mt-2 max-w-[230px] text-sm leading-6 text-[#646865]">{step.copy}</p>
    </div>
  </>
);

const IncludeOptionCard = ({
  item,
  isActive,
  onClick,
}: {
  item: (typeof includes)[number];
  isActive: boolean;
  onClick: () => void;
}) => {
  const Icon = item.Icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-full w-full rounded-[20px] bg-white p-4 text-left shadow-[0_16px_50px_-42px_rgba(17,19,18,0.5)] ring-1 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_24px_70px_-46px_rgba(17,19,18,0.62)] sm:rounded-[26px] sm:p-6 ${
        isActive ? "ring-[#111312]/45" : "ring-[#e6e9e2] hover:ring-[#cfd6ce]"
      }`}
    >
      <div className="flex gap-3 sm:gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-[#eef7f4] text-[#56ABA0] sm:h-12 sm:w-12 sm:rounded-[16px]">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
        </span>

        <span className="min-w-0 max-w-[calc(100vw-132px)] sm:max-w-none">
          <span className="block text-lg font-extrabold leading-tight tracking-normal sm:text-2xl">
            {item.title}
          </span>

          <span className="mt-1.5 block text-sm leading-6 text-[#646865] sm:mt-2 sm:text-base sm:leading-7">
            {item.copy}
          </span>
        </span>
      </div>
    </button>
  );
};

const BenefitCard = ({ benefit }: { benefit: (typeof benefits)[number] }) => {
  const Icon = benefit.Icon;

  return (
    <div className="h-full rounded-[24px] bg-white p-5 shadow-[0_22px_70px_-50px_rgba(17,19,18,0.5)] ring-1 ring-[#e8ebe4] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_78px_-50px_rgba(17,19,18,0.62)] sm:rounded-[34px] sm:p-8">
      <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#eef7f4] text-[#56ABA0] sm:h-16 sm:w-16 sm:rounded-[22px]">
        <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
      </div>

      <h3 className="mt-6 text-xl font-extrabold leading-tight tracking-normal sm:mt-8 sm:text-2xl">
        {benefit.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-[#646865] sm:mt-4 sm:text-base sm:leading-7">
        {benefit.copy}
      </p>
    </div>
  );
};

const PipelineStatCard = ({ stat }: { stat: (typeof pipelineStats)[number] }) => (
  <div className="h-full rounded-[24px] bg-white p-5 shadow-[0_16px_48px_-38px_rgba(17,19,18,0.5)] ring-1 ring-[#e8ebe4] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_64px_-42px_rgba(17,19,18,0.62)]">
    <p className="text-4xl font-extrabold tracking-normal text-[#56ABA0]">{stat.value}</p>
    <p className="mt-1 text-sm font-bold text-[#646865]">{stat.label}</p>
  </div>
);

const FeaturesSection = () => {
  const [activeInclude, setActiveInclude] = useState(0);
  const activeFeature = includes[activeInclude];

  return (
    <div className="bg-[#fbfcf7] text-left text-[#111312]">
      <section id="proof" className="scroll-mt-6 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading title="Creators are already talking about the problem" />

          <MobileCardCarousel className="mt-9">
            {tweets.map((tweet) => (
              <TwitterResponseCard key={tweet.href} tweet={tweet} />
            ))}
            <ProductHuntCommentCard />
            <RedditEmbedCard />
          </MobileCardCarousel>

          <div className="mt-9 hidden w-full min-w-0 grid-cols-1 gap-5 lg:grid lg:grid-cols-3">
            {tweets.map((tweet) => (
              <TwitterResponseCard key={tweet.href} tweet={tweet} />
            ))}
            <ProductHuntCommentCard />
            <RedditEmbedCard />
          </div>
        </div>
      </section>

      <section id="include" className="scroll-mt-6 px-5 py-14 sm:py-20">
        <div className="sm:container mx-auto max-w-7xl">
          <SectionHeading title="What does Collecta include" />

          <div className="mt-10 grid items-start gap-9 lg:grid-cols-[0.95fr_1.05fr]">
            <MockupImage src={activeFeature.image} alt={activeFeature.alt} />

            <div>
              <MobileCardCarousel>
                {includes.map((item, index) => (
                  <IncludeOptionCard
                    key={item.title}
                    item={item}
                    isActive={activeInclude === index}
                    onClick={() => setActiveInclude(index)}
                  />
                ))}
              </MobileCardCarousel>

              <div className="hidden gap-4 lg:grid">
                {includes.map((item, index) => (
                  <IncludeOptionCard
                    key={item.title}
                    item={item}
                    isActive={activeInclude === index}
                    onClick={() => setActiveInclude(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="scroll-mt-6 px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Why choose Collecta?"
            copy="Collecta turns scattered inspiration into publish-ready content."
          />

          <MobileCardCarousel className="mt-8 sm:mt-10">
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.title} benefit={benefit} />
            ))}
          </MobileCardCarousel>

          <div className="mt-8 hidden gap-4 sm:mt-10 sm:gap-6 lg:grid lg:grid-cols-3">
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.title} benefit={benefit} />
            ))}
          </div>
        </div>
      </section>

      <section id="pipeline" className="scroll-mt-6 px-5 py-14 sm:py-20">
        <div className="sm:container mx-auto max-w-7xl">
          <SectionHeading
            title="Turn saved inspiration into a content pipeline"
            copy="Collecta helps your inspiration move forward, from saved references to generated ideas, drafts and posts ready to publish."
          />

          <MobileCardCarousel className="mt-8">
            {pipelineStats.map((stat) => (
              <PipelineStatCard key={stat.label} stat={stat} />
            ))}
          </MobileCardCarousel>

          <div className="mt-8 hidden gap-4 lg:grid lg:grid-cols-4">
            {pipelineStats.map((stat) => (
              <PipelineStatCard key={stat.label} stat={stat} />
            ))}
          </div>

          <div className="relative mt-12">
            <div className="hidden min-h-[620px] lg:block">
              <svg
                aria-hidden="true"
                className="absolute inset-x-0 top-12 h-[520px] w-full"
                viewBox="0 0 1200 520"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M24 350 C170 350 210 150 360 150 C515 150 485 380 635 380 C780 380 750 155 920 155 C1065 155 1050 300 1176 300"
                  stroke="#d9eee9"
                  strokeWidth="24"
                  strokeLinecap="round"
                />
              </svg>

              {pipelineSteps.map((step) => (
                <div key={step.title} className={`absolute ${step.desktopClassName}`}>
                  <PipelineStepContent step={step} />
                </div>
              ))}
            </div>

            <div className="relative grid gap-10 pl-8 lg:hidden">
              <div className="absolute bottom-12 left-3 top-6 w-3 rounded-full bg-[#d9eee9]" />
              {pipelineSteps.map((step) => (
                <div key={step.title} className="relative">
                  <span className="absolute -left-[34px] top-24 h-6 w-6 rounded-full border-4 border-[#fbfcf7] bg-[#56ABA0]" />
                  <PipelineStepContent step={step} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;
