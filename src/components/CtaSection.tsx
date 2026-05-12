import AppleLogo from "@/components/AppleLogo";
import { APP_STORE_URL, HAS_APP_STORE_URL } from "@/lib/appConfig";

const CtaSection = () => {
  const ctaHref = HAS_APP_STORE_URL ? APP_STORE_URL : undefined;

  return (
    <section id="download" className="scroll-mt-6 bg-[linear-gradient(180deg,#fbfcf7_0%,#edf7f3_45%,#fbfcf7_100%)] px-5 py-16 text-[#111312] sm:py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-extrabold uppercase leading-[0.95] tracking-normal sm:text-6xl">
            Start
          </h2>
          <p className="mt-3 text-2xl font-extrabold uppercase leading-tight">
            Turning saves into content
          </p>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#646865]">
            Collect what inspires you, organize it, and turn it into content even before you feel ready.
          </p>

          <a
            href={ctaHref}
            target={HAS_APP_STORE_URL ? "_blank" : undefined}
            rel={HAS_APP_STORE_URL ? "noreferrer" : undefined}
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#56ABA0] px-6 py-3 text-base font-bold text-[#fbfcf7] shadow-[0_18px_34px_-18px_rgba(17,19,18,0.46)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_46px_-22px_rgba(17,19,18,0.56)]"
          >
            <AppleLogo className="h-5 w-5" />
            Download on the App Store
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
