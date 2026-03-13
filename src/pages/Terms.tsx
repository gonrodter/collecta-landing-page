import LegalPageLayout from "@/components/LegalPageLayout";

const sections = [
  {
    heading: "1. Description of the Service",
    paragraphs: [
      'Collecta is a mobile application designed to help users save content from different platforms and transform inspiration into structured content ideas using AI-powered tools.',
      "Features may include:",
    ],
    lines: [
      "Saving posts and links from external platforms",
      "Organizing inspiration content",
      "AI-generated summaries or content structures",
      "Content planning and execution tools",
      "We may modify or update features at any time.",
    ],
  },
  {
    heading: "2. Account Registration",
    paragraphs: [
      "To use Collecta, you may be required to create an account.",
      "You agree to:",
    ],
    lines: [
      "Provide accurate information",
      "Keep your login credentials secure",
      "Be responsible for all activity under your account",
      "We reserve the right to suspend or terminate accounts that violate these Terms.",
    ],
  },
  {
    heading: "3. User Content",
    paragraphs: [
      "You retain ownership of the content you save or create in Collecta.",
      "By using the Service, you grant Collecta a limited license to store, process, and display your content solely for the purpose of providing the service.",
      "You are responsible for ensuring that the content you save or upload does not violate any laws or third-party rights.",
    ],
  },
  {
    heading: "4. External Content",
    paragraphs: [
      "Collecta may store references or previews of content from third-party platforms (such as social media posts).",
      "All rights to such content belong to their respective owners. Collecta does not claim ownership over third-party content.",
    ],
  },
  {
    heading: "5. AI-Generated Content",
    paragraphs: [
      "Collecta may generate text or structured outputs using artificial intelligence.",
      "These outputs are generated automatically and may not always be accurate or appropriate. You are responsible for reviewing and using generated content at your own discretion.",
      "Collecta does not guarantee the accuracy or reliability of AI-generated results.",
    ],
  },
  {
    heading: "6. Acceptable Use",
    paragraphs: ["You agree not to use Collecta to:"],
    lines: [
      "Violate any laws or regulations",
      "Infringe intellectual property rights",
      "Distribute harmful or illegal content",
      "Attempt to reverse engineer or exploit the platform",
      "Interfere with the operation of the service",
    ],
  },
  {
    heading: "7. Subscription and Payments",
    paragraphs: [
      "Some features of Collecta may require a paid subscription.",
      "If subscriptions are offered:",
    ],
    lines: [
      "Payments will be processed through the Apple App Store.",
      "Subscriptions renew automatically unless canceled.",
      "Billing terms will follow Apple’s App Store policies.",
    ],
  },
  {
    heading: "8. Termination",
    paragraphs: ["We may suspend or terminate your account if:"],
    lines: [
      "You violate these Terms",
      "You misuse the service",
      "Required by law",
      "You may also stop using the service at any time.",
    ],
  },
  {
    heading: "9. Disclaimer",
    paragraphs: [
      'Collecta is provided "as is" without warranties of any kind.',
      "We do not guarantee that the service will be uninterrupted, secure, or error-free.",
    ],
  },
  {
    heading: "10. Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, Collecta shall not be liable for any indirect, incidental, or consequential damages resulting from the use of the service.",
    ],
  },
  {
    heading: "11. Changes to the Terms",
    paragraphs: [
      "We may update these Terms from time to time.",
      "Continued use of Collecta after changes indicates acceptance of the updated Terms.",
    ],
  },
  {
    heading: "12. Contact",
    paragraphs: ["If you have questions about these Terms, contact us at:"],
    lines: ["contact@terron-studio.com"],
  },
];

const Terms = () => {
  return (
    <LegalPageLayout title="Terms of Service" subtitle="Last updated: March 13, 2026">
      <article className="space-y-10 text-left">
        <div className="space-y-6 text-base leading-8 text-foreground/90 sm:text-lg">
          <p>These Terms of Service ("Terms") govern your use of the Collecta mobile application and related services ("Service") operated by Collecta ("we", "our", or "us").</p>
          <p>By accessing or using Collecta, you agree to be bound by these Terms.</p>
        </div>

        {sections.map((section) => (
          <section key={section.heading} className="space-y-5 text-left">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{section.heading}</h2>

            <div className="space-y-4 text-base leading-8 text-foreground/90 sm:text-lg">
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

              {section.lines ? (
                <div className="space-y-2">
                  {section.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              ) : null}
            </div>
          </section>
        ))}
      </article>
    </LegalPageLayout>
  );
};

export default Terms;
