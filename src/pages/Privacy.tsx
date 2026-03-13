import LegalPageLayout from "@/components/LegalPageLayout";

const Privacy = () => {
  return (
    <LegalPageLayout title="Privacy Policy" subtitle="Last updated: March 13, 2026" className="max-w-3xl">
      <article className="space-y-10 text-left">
        <div className="space-y-6 text-base leading-8 text-foreground/90 sm:text-lg">
          <p>
            Collecta (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting the personal
            information you share with us. This Privacy Policy explains how we collect, use, and safeguard your
            information when you use the Collecta mobile application and related services.
          </p>
          <p>By using Collecta, you agree to the collection and use of information in accordance with this policy.</p>
        </div>

        <section className="space-y-5 text-left">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">1. Information We Collect</h2>
          <div className="space-y-4 text-base leading-8 text-foreground/90 sm:text-lg">
            <p>We may collect the following types of information when you use Collecta:</p>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">Account Information</h3>
              <p>When you create an account, we may collect:</p>
              <ul className="space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Authentication provider (Google, Apple, etc.)</li>
                <li>Account creation date</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">Content You Save</h3>
              <p>Collecta allows you to save content from external platforms. We may store:</p>
              <ul className="space-y-1">
                <li>URLs of saved content</li>
                <li>Images or thumbnails associated with the content</li>
                <li>Metadata such as title, description, author, or platform</li>
                <li>Tags or notes you add</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">Generated Content</h3>
              <p>When you use Collecta’s AI features (such as generating content or post ideas), we may process:</p>
              <ul className="space-y-1">
                <li>Your saved posts</li>
                <li>Prompts or instructions you provide</li>
                <li>Generated outputs</li>
              </ul>
              <p>This information is used to provide the requested functionality.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">Usage Information</h3>
              <p>We may automatically collect certain information about how you use the app:</p>
              <ul className="space-y-1">
                <li>Feature usage</li>
                <li>Interaction events</li>
                <li>Device type</li>
                <li>App version</li>
                <li>Crash reports</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">Device Information</h3>
              <p>We may collect limited device data such as:</p>
              <ul className="space-y-1">
                <li>Device type</li>
                <li>Operating system</li>
                <li>App version</li>
                <li>Anonymous identifiers</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-5 text-left">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">2. How We Use Your Information</h2>
          <div className="space-y-4 text-base leading-8 text-foreground/90 sm:text-lg">
            <p>We use the collected information to:</p>
            <ul className="space-y-1">
              <li>Provide and maintain the Collecta service</li>
              <li>Allow you to save and organize inspiration content</li>
              <li>Generate structured content using AI</li>
              <li>Improve app performance and features</li>
              <li>Monitor usage and detect technical issues</li>
              <li>Communicate important updates related to the service</li>
            </ul>
          </div>
        </section>

        <section className="space-y-5 text-left">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">3. Third-Party Services</h2>
          <div className="space-y-4 text-base leading-8 text-foreground/90 sm:text-lg">
            <p>Collecta may use third-party services to operate the app, such as:</p>
            <ul className="space-y-1">
              <li>Authentication providers (Google, Apple)</li>
              <li>Cloud infrastructure</li>
              <li>Analytics services</li>
              <li>AI processing services</li>
            </ul>
            <p>
              These third parties may process limited data only to perform their services and are required to protect
              your information.
            </p>
          </div>
        </section>

        <section className="space-y-5 text-left">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">4. Data Storage and Security</h2>
          <div className="space-y-4 text-base leading-8 text-foreground/90 sm:text-lg">
            <p>
              Your information is stored using secure cloud infrastructure. We implement reasonable security measures
              to protect your data from unauthorized access, alteration, or disclosure.
            </p>
            <p>However, no system can be guaranteed to be 100% secure.</p>
          </div>
        </section>

        <section className="space-y-5 text-left">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">5. Data Retention</h2>
          <div className="space-y-4 text-base leading-8 text-foreground/90 sm:text-lg">
            <p>We retain your information for as long as your account is active or as necessary to provide the service.</p>
            <p>
              If you delete your account, we will delete or anonymize your personal data within a reasonable period of
              time, unless retention is required for legal obligations.
            </p>
          </div>
        </section>

        <section className="space-y-5 text-left">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">6. Your Rights</h2>
          <div className="space-y-4 text-base leading-8 text-foreground/90 sm:text-lg">
            <p>Depending on your location, you may have the right to:</p>
            <ul className="space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for data processing</li>
            </ul>
            <p>You can request this by contacting us at the email below.</p>
          </div>
        </section>

        <section className="space-y-5 text-left">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">7. Children&apos;s Privacy</h2>
          <div className="space-y-4 text-base leading-8 text-foreground/90 sm:text-lg">
            <p>Collecta is not intended for children under the age of 13. We do not knowingly collect personal data from children.</p>
            <p>If we become aware that a child has provided personal information, we will delete it.</p>
          </div>
        </section>

        <section className="space-y-5 text-left">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">8. Changes to This Privacy Policy</h2>
          <div className="space-y-4 text-base leading-8 text-foreground/90 sm:text-lg">
            <p>We may update this Privacy Policy from time to time. When we do, we will update the &quot;Last updated&quot; date.</p>
            <p>Continued use of the service after changes indicates acceptance of the updated policy.</p>
          </div>
        </section>

        <section className="space-y-5 text-left">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">9. Contact</h2>
          <div className="space-y-4 text-base leading-8 text-foreground/90 sm:text-lg">
            <p>If you have questions about this Privacy Policy, you can contact us at:</p>
            <p className="font-medium text-foreground">contact@terron-studio.com</p>
          </div>
        </section>
      </article>
    </LegalPageLayout>
  );
};

export default Privacy;
