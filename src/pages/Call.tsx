import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import SiteNav from "@/components/SiteNav";

const Call = () => (
  <>
    <Helmet>
      <title>Book a Call — Certainly</title>
      <meta
        name="description"
        content="Schedule a 30-minute call with Shane Gring to discuss Systems of Trust, certification strategy, or how Certainly can help your organization."
      />
    </Helmet>

    {/* Match Calendly's light gray background */}
    <div className="fixed inset-0 bg-[#fafafa]" />

    <div className="relative z-10 h-screen flex flex-col overflow-hidden">
      <SiteNav />

      <main className="flex-1 grid lg:grid-cols-5 items-center gap-8 lg:gap-12 px-6 lg:px-12 max-w-7xl mx-auto w-full py-4">
        {/* Left: Bio */}
        <div className="lg:col-span-2 flex flex-col justify-center">
          <div className="mb-5">
            <img
              src="/images/shane-gring.jpg"
              alt="Shane Gring"
              className="w-full aspect-[4/3] object-cover object-top rounded-sm"
            />
          </div>

          <div className="mb-3">
            <h1 className="font-serif text-2xl text-gray-900 leading-tight">Shane Gring</h1>
            <p className="text-[#C8A54B] text-xs tracking-wide uppercase mt-1">
              Founder, Certainly
            </p>
          </div>

          <p className="text-gray-600 leading-relaxed mb-4 text-[15px]">
            I help founders document the method behind their work — so it can be transferred, licensed, and credentialed.
          </p>

          <div className="space-y-2">
            {[
              "Systems of Trust\u2122 methodology",
              "Certification & licensing architecture",
              "AI-integrated governance",
              "Fractional credential operations",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <ArrowRight className="w-3 h-3 text-[#C8A54B] shrink-0" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Right: Calendly embed */}
        <div className="lg:col-span-3 h-full flex items-center">
          <iframe
            src="https://calendly.com/shane-gring-certainly/30min?hide_landing_page_details=1&hide_gdpr_banner=1"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Schedule a call with Shane Gring"
            className="min-h-[500px] lg:min-h-0 lg:h-[calc(100vh-100px)]"
            style={{ border: "none" }}
          />
        </div>
      </main>
    </div>
  </>
);

export default Call;
