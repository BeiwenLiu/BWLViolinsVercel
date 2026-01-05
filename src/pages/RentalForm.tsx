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
import { Phone, Mail, MapPin } from "lucide-react";

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
    driversLicense: "",
    email: "",
    homePhone: "",
    cellPhone: "",
    workPhone: "",
    faxNumber: "",
    schoolTeacher: "",
    instrumentSize: "",
    rentOrPurchase: "",
    creditCardNumber: "",
    expirationDate: "",
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

  return (
    <div>
      <PageHeader
        title="Rental & Purchase Form"
        subtitle="Fill out this form to start your rental or purchase today"
      />

      <section className="py-16">
        <div className="container max-w-4xl">
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
                  <Label htmlFor="driversLicense">Driver's License Number</Label>
                  <Input
                    id="driversLicense"
                    name="driversLicense"
                    value={formData.driversLicense}
                    onChange={handleChange}
                  />
                </div>
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
                <div className="space-y-2">
                  <Label htmlFor="workPhone">Work Phone</Label>
                  <Input
                    id="workPhone"
                    name="workPhone"
                    type="tel"
                    value={formData.workPhone}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="faxNumber">Fax Number</Label>
                  <Input
                    id="faxNumber"
                    name="faxNumber"
                    value={formData.faxNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Instrument Information */}
            <div className="card-elegant">
              <h2 className="font-serif text-xl font-semibold mb-6">Instrument Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="schoolTeacher">School and Strings Teacher</Label>
                  <Input
                    id="schoolTeacher"
                    name="schoolTeacher"
                    value={formData.schoolTeacher}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instrumentSize">Violin/Viola/Cello Size *</Label>
                  <Select
                    value={formData.instrumentSize}
                    onValueChange={(value) => handleSelectChange("instrumentSize", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1/16">1/16</SelectItem>
                      <SelectItem value="1/10">1/10</SelectItem>
                      <SelectItem value="1/8">1/8</SelectItem>
                      <SelectItem value="1/4">1/4</SelectItem>
                      <SelectItem value="1/2">1/2</SelectItem>
                      <SelectItem value="3/4">3/4</SelectItem>
                      <SelectItem value="4/4">4/4 (Full Size)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rentOrPurchase">Rent or Purchase *</Label>
                  <Select
                    value={formData.rentOrPurchase}
                    onValueChange={(value) => handleSelectChange("rentOrPurchase", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rent">Rent</SelectItem>
                      <SelectItem value="rent-to-own">Rent to Own</SelectItem>
                      <SelectItem value="purchase">Purchase</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="card-elegant">
              <h2 className="font-serif text-xl font-semibold mb-6">Payment Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="creditCardNumber">Credit Card Number *</Label>
                  <Input
                    id="creditCardNumber"
                    name="creditCardNumber"
                    value={formData.creditCardNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expirationDate">Expiration Date *</Label>
                  <Input
                    id="expirationDate"
                    name="expirationDate"
                    placeholder="MM/YY"
                    value={formData.expirationDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button type="submit" size="lg" className="px-12">
                Submit Application
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
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-secondary" />
                <span>(912) 596-3897 or (912) 303-9522</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RentalForm;
