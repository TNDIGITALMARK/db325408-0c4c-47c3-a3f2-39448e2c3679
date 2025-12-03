import { Header } from "@/components/instantly/header";
import { Footer } from "@/components/instantly/footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--instantly-bg-light))]">
      <Header />

      <div className="instantly-container py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 md:p-12 instantly-card-shadow">
          <h1 className="text-[hsl(var(--instantly-text-dark))] mb-4">Terms of Service</h1>
          <p className="text-[hsl(var(--instantly-text-muted))] mb-8">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8 text-[hsl(var(--instantly-text-dark))]">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-[hsl(var(--instantly-text-muted))] leading-relaxed">
                By accessing or using Instantly Inc.'s services, you agree to be bound by these Terms of Service
                and all applicable laws and regulations. If you do not agree with any of these terms, you are
                prohibited from using or accessing our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Service Provider Agreement</h2>
              <p className="text-[hsl(var(--instantly-text-muted))] leading-relaxed mb-4">
                As a service provider on our platform, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--instantly-text-muted))]">
                <li>Provide accurate and truthful information about your services and qualifications</li>
                <li>Maintain professional conduct at all times when interacting with customers</li>
                <li>Deliver services as described and agreed upon with customers</li>
                <li>Comply with all local, state, and federal laws applicable to your services</li>
                <li>Maintain appropriate licenses, insurance, and certifications as required</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Customer Agreement</h2>
              <p className="text-[hsl(var(--instantly-text-muted))] leading-relaxed mb-4">
                As a customer using our platform, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--instantly-text-muted))]">
                <li>Provide accurate contact and payment information</li>
                <li>Treat service providers with respect and professionalism</li>
                <li>Pay for services as agreed upon</li>
                <li>Provide honest feedback and ratings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Platform Fees and Payments</h2>
              <p className="text-[hsl(var(--instantly-text-muted))] leading-relaxed">
                Instantly Inc. charges a service fee on transactions processed through the platform. All fees
                are clearly disclosed before completing any transaction. Payments are processed securely through
                our trusted payment partners. Service providers receive payment immediately upon job completion,
                minus applicable service fees.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Live Streaming Services</h2>
              <p className="text-[hsl(var(--instantly-text-muted))] leading-relaxed mb-4">
                Users engaging in live streaming activities agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--instantly-text-muted))]">
                <li>Not stream inappropriate, illegal, or offensive content</li>
                <li>Respect intellectual property rights of others</li>
                <li>Not engage in harassment or hate speech</li>
                <li>Comply with community guidelines</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Account Termination</h2>
              <p className="text-[hsl(var(--instantly-text-muted))] leading-relaxed">
                We reserve the right to suspend or terminate accounts that violate these terms, engage in
                fraudulent activity, or harm the platform community. Users may close their accounts at any
                time by contacting our support team.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
              <p className="text-[hsl(var(--instantly-text-muted))] leading-relaxed">
                Instantly Inc. acts as a platform connecting service providers and customers. We are not
                responsible for the quality, safety, or legality of services provided. Users engage with
                service providers at their own risk. Our liability is limited to the maximum extent permitted
                by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Equal Opportunity</h2>
              <p className="text-[hsl(var(--instantly-text-muted))] leading-relaxed">
                Instantly Inc. is committed to equal opportunity and does not discriminate based on race,
                color, religion, gender, sexual orientation, national origin, age, disability, or any other
                protected characteristic. We expect all platform users to uphold these values.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Changes to Terms</h2>
              <p className="text-[hsl(var(--instantly-text-muted))] leading-relaxed">
                We may update these Terms of Service from time to time. Users will be notified of significant
                changes via email or platform notification. Continued use of the platform after changes
                constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
              <p className="text-[hsl(var(--instantly-text-muted))] leading-relaxed">
                If you have questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-[hsl(var(--instantly-bg-light))] rounded-lg">
                <p className="text-[hsl(var(--instantly-text-dark))]">
                  <strong>Instantly Inc.</strong><br />
                  Email: legal@instantly-inc.com<br />
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
