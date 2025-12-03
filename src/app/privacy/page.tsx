import { Header } from "@/components/instantly/header";
import { Footer } from "@/components/instantly/footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--instantly-bg-light))]">
      <Header />

      <div className="instantly-container py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 md:p-12 instantly-card-shadow">
          <h1 className="text-[hsl(var(--instantly-text-dark))] mb-4">Privacy Policy</h1>
          <p className="text-[hsl(var(--instantly-text-muted))] mb-8">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8 text-[hsl(var(--instantly-text-dark))]">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p className="text-[hsl(var(--instantly-text-muted))] leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--instantly-text-muted))]">
                <li>Account information (name, email, phone number)</li>
                <li>Profile information (photos, service descriptions, specialties)</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Communication data (messages, chat logs, reviews)</li>
                <li>Location data (for delivery and service matching)</li>
                <li>Usage data (how you interact with our platform)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="text-[hsl(var(--instantly-text-muted))] leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--instantly-text-muted))]">
                <li>Provide, maintain, and improve our services</li>
                <li>Connect service providers with customers</li>
                <li>Process payments and transactions</li>
                <li>Send notifications about your account and services</li>
                <li>Provide customer support</li>
                <li>Ensure platform security and prevent fraud</li>
                <li>Comply with legal obligations</li>
                <li>Analyze platform usage to improve user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
              <p className="text-[hsl(var(--instantly-text-muted))] leading-relaxed mb-4">
                We share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--instantly-text-muted))]">
                <li>
                  <strong>With Other Users:</strong> Service providers and customers can see relevant profile
                  information to facilitate connections
                </li>
                <li>
                  <strong>With Service Providers:</strong> We share data with third-party providers who help
                  us operate the platform (payment processors, hosting services, etc.)
                </li>
                <li>
                  <strong>For Legal Reasons:</strong> We may disclose information if required by law or to
                  protect our rights and safety
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may share information for other purposes with your
                  explicit consent
                </li>
              </ul>
              <p className="text-[hsl(var(--instantly-text-muted))] leading-relaxed mt-4">
                <strong>We never sell your personal information to third parties.</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. OAuth and Google Login</h2>
              <p className="text-[hsl(var(--instantly-text-muted))] leading-relaxed">
                When you sign in using OAuth (such as Google login), we receive basic profile information
                from your OAuth provider. This typically includes your name, email address, and profile picture.
                We use this information only to create and maintain your account. We do not access your emails,
                contacts, or other Google account data without additional explicit permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
              <p className="text-[hsl(var(--instantly-text-muted))] leading-relaxed">
                We implement industry-standard security measures to protect your information, including
                encryption, secure servers, and regular security audits. However, no system is completely
                secure, and we cannot guarantee absolute security. We encourage you to use strong passwords
                and enable two-factor authentication when available.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Location Data</h2>
              <p className="text-[hsl(var(--instantly-text-muted))] leading-relaxed">
                For instant delivery services, we collect and use location data to match service providers
                with nearby customers and track deliveries. You can control location permissions through
                your device settings, but disabling location services may limit platform functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Live Streaming Data</h2>
              <p className="text-[hsl(var(--instantly-text-muted))] leading-relaxed">
                Live streaming content may be recorded and stored temporarily for quality assurance and
                safety purposes. Stream recordings are automatically deleted after 30 days unless flagged
                for review. Chat messages during streams are stored to maintain conversation history.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Your Privacy Rights</h2>
              <p className="text-[hsl(var(--instantly-text-muted))] leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--instantly-text-muted))]">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>Opt out of marketing communications</li>
                <li>Export your data in a portable format</li>
                <li>Withdraw consent for data processing where applicable</li>
              </ul>
              <p className="text-[hsl(var(--instantly-text-muted))] leading-relaxed mt-4">
                To exercise these rights, contact us at privacy@instantly-inc.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Cookies and Tracking</h2>
              <p className="text-[hsl(var(--instantly-text-muted))] leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience, analyze usage
                patterns, and provide personalized content. You can control cookie preferences through your
                browser settings, though some features may not function properly if cookies are disabled.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Children's Privacy</h2>
              <p className="text-[hsl(var(--instantly-text-muted))] leading-relaxed">
                Our services are not intended for individuals under 18 years of age. We do not knowingly
                collect information from children. If we learn that we have collected information from a
                child, we will delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. International Users</h2>
              <p className="text-[hsl(var(--instantly-text-muted))] leading-relaxed">
                Your information may be transferred to and processed in countries other than your own.
                We ensure appropriate safeguards are in place to protect your information in accordance
                with this privacy policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Changes to Privacy Policy</h2>
              <p className="text-[hsl(var(--instantly-text-muted))] leading-relaxed">
                We may update this Privacy Policy periodically. We will notify you of significant changes
                via email or platform notification. Your continued use of the platform after changes
                constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">13. Contact Us</h2>
              <p className="text-[hsl(var(--instantly-text-muted))] leading-relaxed">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-4 p-4 bg-[hsl(var(--instantly-bg-light))] rounded-lg">
                <p className="text-[hsl(var(--instantly-text-dark))]">
                  <strong>Instantly Inc. - Privacy Team</strong><br />
                  Email: privacy@instantly-inc.com<br />
                  Phone: 1-800-INSTANT<br />
                  Address: 123 Innovation Drive, San Francisco, CA 94105
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
