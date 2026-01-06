import { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin } from "lucide-react";

const RentalForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    studentName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    email: "",
    homePhone: "",
    cellPhone: "",
    instrumentType: "",
    instrumentSize: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Submitted",
      description: "Thank you! We will contact you shortly.",
    });
  };

  const getSizeOptions = () => {
    return [
      { value: "1/16", label: "1/16" },
      { value: "1/10", label: "1/10" },
      { value: "1/8", label: "1/8" },
      { value: "1/4", label: "1/4" },
      { value: "1/2", label: "1/2" },
      { value: "3/4", label: "3/4" },
      { value: "4/4", label: "4/4 (full size)" },
    ];
  };

  return (
    <div>
      <PageHeader
        title="Fill out this form to start your rental today"
        subtitle=""
      />

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-6 mb-8 text-center">
            <p className="text-muted-foreground">
              After we receive your information, you will receive an official rental form from us via email.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="card-elegant">
              <h2 className="font-serif text-xl font-semibold mb-6">Personal Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="studentName">Student Name</Label>
                  <Input
                    id="studentName"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="card-elegant">
              <h2 className="font-serif text-xl font-semibold mb-6">Address</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="addressLine1">Address Line 1 *</Label>
                  <Input
                    id="addressLine1"
                    name="addressLine1"
                    value={formData.addressLine1}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="addressLine2">Address Line 2</Label>
                  <Input
                    id="addressLine2"
                    name="addressLine2"
                    value={formData.addressLine2}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State *</Label>
                  <Input
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">Zip *</Label>
                  <Input
                    id="zip"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="card-elegant">
              <h2 className="font-serif text-xl font-semibold mb-6">Contact Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="homePhone">Home Phone</Label>
                  <Input
                    id="homePhone"
                    name="homePhone"
                    type="tel"
                    value={formData.homePhone}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cellPhone">Cell Phone *</Label>
                  <Input
                    id="cellPhone"
                    name="cellPhone"
                    type="tel"
                    value={formData.cellPhone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Instrument Information */}
            <div className="card-elegant">
              <h2 className="font-serif text-xl font-semibold mb-6">Instrument Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="instrumentType">Instrument Type *</Label>
                  <Select
                    value={formData.instrumentType}
                    onValueChange={(value) => {
                      handleSelectChange("instrumentType", value);
                      handleSelectChange("instrumentSize", "");
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select instrument" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="violin">Violin</SelectItem>
                      <SelectItem value="viola">Viola</SelectItem>
                      <SelectItem value="cello">Cello</SelectItem>
                      <SelectItem value="bass">Bass</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instrumentSize">Size *</Label>
                  <Select
                    value={formData.instrumentSize}
                    onValueChange={(value) => handleSelectChange("instrumentSize", value)}
                    disabled={!formData.instrumentType}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={formData.instrumentType ? "Select size" : "Select instrument first"} />
                    </SelectTrigger>
                    <SelectContent>
                      {getSizeOptions().map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button type="submit" size="lg" className="px-12">
                Submit
              </Button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="mt-16 bg-muted p-8 rounded-lg text-center">
            <h3 className="font-serif text-xl font-semibold mb-4">
              We look forward to working with you!
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-secondary" />
                <a href="mailto:BWLViolins@juno.com" className="hover:text-primary transition-colors">
                  BWLViolins@juno.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-secondary" />
                <span>8312 Kent Drive, Savannah, GA 31406</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RentalForm;
