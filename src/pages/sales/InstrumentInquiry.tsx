import { useSearchParams, Link } from "react-router-dom";
import PageHeader from "@/components/ui/PageHeader";
import { ArrowLeft, Mail, Phone, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const InstrumentInquiry = () => {
  const [searchParams] = useSearchParams();
  const instrumentName = searchParams.get("instrument") || "Unknown Instrument";

  const emailSubject = encodeURIComponent(`Inquiry about ${instrumentName}`);
  const emailBody = encodeURIComponent(
    `Hello,\n\nI am interested in learning more about the ${instrumentName}.\n\nPlease contact me with more information.\n\nThank you!`
  );
  const phoneNumber = "9125963897";
  const formattedPhone = "(912) 596-3897";

  return (
    <div>
      <PageHeader
        title="Instrument Inquiry"
        subtitle={`Inquiring about: ${instrumentName}`}
      />

      <section className="py-16">
        <div className="container max-w-3xl">
          <Link
            to="/sales/violins/eastman"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Eastman Instruments
          </Link>

          <div className="bg-muted/50 p-6 rounded-lg mb-8">
            <h2 className="font-serif text-xl font-semibold mb-2">Inquiring About:</h2>
            <p className="text-lg text-primary font-medium">{instrumentName}</p>
          </div>

          <h2 className="font-serif text-2xl font-semibold mb-6">Contact Us</h2>
          <p className="text-muted-foreground mb-8">
            Choose your preferred method to reach us about this instrument:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email Option */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Send us an email and we'll respond within 24 hours
                </p>
                <a
                  href={`mailto:BWLViolins@juno.com?subject=${emailSubject}&body=${emailBody}`}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Send Email
                </a>
                <p className="text-xs text-muted-foreground mt-3">
                  BWLViolins@juno.com
                </p>
              </CardContent>
            </Card>

            {/* Call/Text Option */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">Call or Text</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Reach us directly by phone or text message
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    Call
                  </a>
                  <a
                    href={`sms:${phoneNumber}?body=${encodeURIComponent(`Hi, I'm interested in the ${instrumentName}. Please send me more information.`)}`}
                    className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-5 py-3 rounded-lg hover:bg-secondary/80 transition-colors"
                  >
                    <MessageSquare className="h-4 w-4" />
                    Text
                  </a>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  {formattedPhone}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstrumentInquiry;
