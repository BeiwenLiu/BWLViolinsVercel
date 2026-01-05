import PageHeader from "@/components/ui/PageHeader";
import { GraduationCap, Clock, DollarSign, Music } from "lucide-react";

const Teaching = () => {
  const tuitionRates = [
    { duration: "30 minutes", price: "$35" },
    { duration: "45 minutes", price: "$50" },
    { duration: "1 hour", price: "$65" },
  ];

  const rules = [
    "Students will work hard and arrive fully prepared for their lesson.",
    "Students will have weekly lessons from Sept. 1 to May 31 (except two weeks vacation of Christmas).",
    "Students will come at least 5 minutes before the lesson time.",
    "If students come late, they will have a shorter lesson.",
    "If students can't make the lesson, they will inform the teacher at least 12 hours before the scheduled time (except illness). If students don't show, the teacher will still get paid.",
    "Students will be required to play in two class recitals each year (Christmas and spring).",
    "Students are responsible for the cost of the piano accompanist (usually $15 covers Suzuki book 1-3, $25 covers Suzuki book 4 and above including concertos).",
    "Tuition will be paid to the teacher by the month and should be received the first week of each month (based on number of weeks).",
  ];

  return (
    <div>
      <PageHeader
        title="Teaching Program"
        subtitle="Professional violin and viola instruction for all ages and levels"
      />

      <section className="py-16">
        <div className="container">
          {/* About Teachers */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="card-elegant">
              <h2 className="font-serif text-2xl font-semibold mb-6 text-center">
                Yvonne Johnson & Lizhou Liu's Teaching Studio
              </h2>
              <p className="text-muted-foreground mb-6">
                Lizhou is joined by his wife, Yvonne, for teaching endeavors. They both have 
                Master of Music degrees from world renowned conservatories and have years of 
                experience teaching all levels and ages of students.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-serif text-lg font-semibold mb-3">Lizhou Liu</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Teaching Assistant at NYU Stony Brook</li>
                    <li>• Former Professor of Viola at Central Conservatory of Music Beijing</li>
                    <li>• Principal Viola, Savannah Symphony (13 years)</li>
                    <li>• Principal Viola, Hilton Head Orchestra</li>
                  </ul>
                </div>
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-serif text-lg font-semibold mb-3">Yvonne Johnson</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Trained in violin and viola pedagogy</li>
                    <li>• Studied under Mimi Zweig of Indiana University</li>
                    <li>• Master of Music degree from renowned conservatory</li>
                    <li>• Years of experience teaching all levels</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Tuition Rates */}
          <div className="max-w-xl mx-auto mb-16">
            <h2 className="section-heading text-center">Tuition Rates</h2>
            <div className="card-elegant">
              {tuitionRates.map((rate, index) => (
                <div
                  key={rate.duration}
                  className={`flex justify-between items-center py-4 ${
                    index !== tuitionRates.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-secondary" />
                    <span className="font-medium">{rate.duration}</span>
                  </div>
                  <span className="text-2xl font-semibold text-primary">{rate.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rules */}
          <div className="max-w-3xl mx-auto">
            <h2 className="section-heading text-center">Regulation and Rules</h2>
            <div className="card-elegant">
              <ul className="space-y-4">
                {rules.map((rule, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teaching;
