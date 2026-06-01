import LegalPageLayout from "@/components/LegalPageLayout";
import { useI18n } from "@/lib/i18n";

const Privacy = () => {
  const { t } = useI18n();

  return (
    <LegalPageLayout title={t("Privacy Policy")} subtitle={t("Last updated: March 13, 2026")} pageTitle={t("Privacy Policy | Collecta")} className="max-w-3xl">
      <article className="space-y-10 text-left">
        <div className="space-y-6 text-base leading-8 text-foreground/90 sm:text-lg">
          <p>
            {t("Collecta, operated by Terron Studio (\"we\", \"our\", or \"us\"), respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you use the Collecta mobile application and related services.")}
          </p>
          <p>{t("By using Collecta, you agree to the collection and use of information in accordance with this policy.")}</p>
        </div>

        <section className="space-y-5 text-left">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{t("1. Information We Collect")}</h2>
          <div className="space-y-4 text-base leading-8 text-foreground/90 sm:text-lg">
            <p>{t("We may collect the following types of information when you use Collecta:")}</p>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">{t("Account Information")}</h3>
              <p>{t("When you create an account, we may collect:")}</p>
              <ul className="space-y-1">
                <li>{t("Name")}</li>
                <li>{t("Email address")}</li>
                <li>{t("Authentication provider (Google, Apple, etc.)")}</li>
                <li>{t("Account creation date")}</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">{t("Content You Save")}</h3>
              <p>{t("Collecta allows you to save content from external platforms. We may store:")}</p>
              <ul className="space-y-1">
                <li>{t("URLs of saved content")}</li>
                <li>{t("Images or thumbnails associated with the content")}</li>
                <li>{t("Metadata such as title, description, author, or platform")}</li>
                <li>{t("Tags or notes you add")}</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">{t("Generated Content")}</h3>
              <p>{t("When you use Collecta’s AI features (such as generating content or post ideas), we may process:")}</p>
              <ul className="space-y-1">
                <li>{t("Your saved posts")}</li>
                <li>{t("Prompts or instructions you provide")}</li>
                <li>{t("Generated outputs")}</li>
              </ul>
              <p>{t("This information is used to provide the requested functionality.")}</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">{t("Usage Information")}</h3>
              <p>{t("We may automatically collect certain information about how you use the app:")}</p>
              <ul className="space-y-1">
                <li>{t("Feature usage")}</li>
                <li>{t("Interaction events")}</li>
                <li>{t("Device type")}</li>
                <li>{t("App version")}</li>
                <li>{t("Crash reports")}</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">{t("Device Information")}</h3>
              <p>{t("We may collect limited device data such as:")}</p>
              <ul className="space-y-1">
                <li>{t("Device type")}</li>
                <li>{t("Operating system")}</li>
                <li>{t("App version")}</li>
                <li>{t("Anonymous identifiers")}</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-5 text-left">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{t("2. How We Use Your Information")}</h2>
          <div className="space-y-4 text-base leading-8 text-foreground/90 sm:text-lg">
            <p>{t("We use the collected information to:")}</p>
            <ul className="space-y-1">
              <li>{t("Provide and maintain the Collecta service")}</li>
              <li>{t("Allow you to save and organize inspiration content")}</li>
              <li>{t("Generate structured content using AI")}</li>
              <li>{t("Improve app performance and features")}</li>
              <li>{t("Monitor usage and detect technical issues")}</li>
              <li>{t("Communicate important updates related to the service")}</li>
            </ul>
          </div>
        </section>

        <section className="space-y-5 text-left">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{t("3. Third-Party Services")}</h2>
          <div className="space-y-4 text-base leading-8 text-foreground/90 sm:text-lg">
            <p>{t("Collecta may use third-party services to operate the app, such as:")}</p>
            <ul className="space-y-1">
              <li>{t("Authentication providers (Google, Apple)")}</li>
              <li>{t("Cloud infrastructure")}</li>
              <li>{t("Analytics services")}</li>
              <li>{t("AI processing services")}</li>
              <li>{t("Subscription and billing providers")}</li>
            </ul>
            <p>{t("These third parties may process limited data only to perform their services and are required to protect your information.")}</p>
          </div>
        </section>

        <section className="space-y-5 text-left">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{t("4. Data Storage and Security")}</h2>
          <div className="space-y-4 text-base leading-8 text-foreground/90 sm:text-lg">
            <p>{t("Your information is stored using secure cloud infrastructure. We implement reasonable security measures to protect your data from unauthorized access, alteration, or disclosure.")}</p>
            <p>{t("However, no system can be guaranteed to be 100% secure.")}</p>
          </div>
        </section>

        <section className="space-y-5 text-left">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{t("5. Data Retention")}</h2>
          <div className="space-y-4 text-base leading-8 text-foreground/90 sm:text-lg">
            <p>{t("We retain your information for as long as your account is active or as necessary to provide the service.")}</p>
            <p>{t("If you delete your account, we will delete or anonymize your personal data within a reasonable period of time, unless retention is required for legal obligations.")}</p>
            <p>{t("You can request deletion of your account and associated data from within the app or by contacting us at the email below.")}</p>
          </div>
        </section>

        <section className="space-y-5 text-left">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{t("6. Your Rights")}</h2>
          <div className="space-y-4 text-base leading-8 text-foreground/90 sm:text-lg">
            <p>{t("Depending on your location, you may have the right to:")}</p>
            <ul className="space-y-1">
              <li>{t("Access the personal data we hold about you")}</li>
              <li>{t("Request correction of inaccurate information")}</li>
              <li>{t("Request deletion of your data")}</li>
              <li>{t("Withdraw consent for data processing")}</li>
            </ul>
            <p>{t("You can request this by contacting us at the email below.")}</p>
          </div>
        </section>

        <section className="space-y-5 text-left">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{t("7. Children's Privacy")}</h2>
          <div className="space-y-4 text-base leading-8 text-foreground/90 sm:text-lg">
            <p>{t("Collecta is not intended for children under the age of 13. We do not knowingly collect personal data from children.")}</p>
            <p>{t("If we become aware that a child has provided personal information, we will delete it.")}</p>
          </div>
        </section>

        <section className="space-y-5 text-left">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{t("8. Changes to This Privacy Policy")}</h2>
          <div className="space-y-4 text-base leading-8 text-foreground/90 sm:text-lg">
            <p>{t("We may update this Privacy Policy from time to time. When we do, we will update the \"Last updated\" date.")}</p>
            <p>{t("Continued use of the service after changes indicates acceptance of the updated policy.")}</p>
          </div>
        </section>

        <section className="space-y-5 text-left">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{t("9. Contact")}</h2>
          <div className="space-y-4 text-base leading-8 text-foreground/90 sm:text-lg">
            <p>{t("For subscriptions purchased through Apple, payment processing is handled by Apple. We do not store your full payment information.")}</p>
            <p>{t("If you have questions about this Privacy Policy, you can contact us at:")}</p>
            <p className="font-medium text-foreground">contact@terron-studio.com</p>
          </div>
        </section>
      </article>
    </LegalPageLayout>
  );
};

export default Privacy;
