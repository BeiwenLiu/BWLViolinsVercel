import PageHeader from "@/components/ui/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why must we charge the credit card for the first three months rental?",
    answer: "We use the credit card for security reasons since we do not take deposit for the rental.",
  },
  {
    question: "Why are BWL rental instruments priced so low compared to other local music stores?",
    answer: "1) We do not have many employees nor do we have location rental expenses. 2) Most of our instruments come directly from their makers.",
  },
  {
    question: "Why do we have to pay three months rental even if we plan to return the instrument before the 90 days?",
    answer: "We need to charge three months rental for administration purposes. The first three months of your rental is not refundable but the rest is. For example, if you want to return the violin at end of fifth month and you have paid two cycles of three months rent, you will have one month rental refund when you return the instrument.",
  },
  {
    question: "How do you calculate the rental period?",
    answer: "Payment date is the 1st day of the month. If your rental start date is on the 15th or later, we will calculate your starting date on 1st of the following month and you will have some free days of rental. If your rental start date is before the 15th you will still be charged as if the 1st of that month was your rental start date.",
  },
  {
    question: "Does our current rental apply to a future instrument purchase?",
    answer: "Yes, after you rent an instrument for a year, you will get 10% off when you purchase an instrument.",
  },
  {
    question: "Can we trade in a purchased instrument for a better instrument?",
    answer: "We take used instruments based on condition and re-sale prospects.",
  },
  {
    question: "What happens if we lose or damage the instrument while we are renting?",
    answer: "If the instrument is lost or has unfixable damage, you will pay for it as your contract states. Other normal wear and tear or minor damage receives free repair.",
  },
  {
    question: "Do you do business outside of Savannah?",
    answer: "We welcome all customers in all communities. Shipping charges may apply.",
  },
];

const FAQ = () => {
  return (
    <div>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our rentals, policies, and services"
      />

      <section className="py-16">
        <div className="container max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-elegant border border-border px-6"
              >
                <AccordionTrigger className="text-left font-serif text-lg hover:no-underline hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center bg-muted p-8 rounded-lg">
            <h3 className="font-serif text-xl font-semibold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-4">
              Contact us directly and we'll be happy to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-muted-foreground">
              <a href="tel:912-596-3897" className="hover:text-primary transition-colors">
                (912) 596-3897
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="mailto:BWLViolins@juno.com" className="hover:text-primary transition-colors">
                BWLViolins@juno.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
