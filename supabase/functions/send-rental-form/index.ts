import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface RentalFormData {
  firstName: string;
  lastName: string;
  studentName: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  email: string;
  homePhone: string;
  cellPhone: string;
  instrumentType: string;
  instrumentSize: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: RentalFormData = await req.json();

    const emailHtml = `
      <h1>New Rental Form Submission</h1>
      
      <h2>Personal Information</h2>
      <p><strong>First Name:</strong> ${formData.firstName}</p>
      <p><strong>Last Name:</strong> ${formData.lastName}</p>
      <p><strong>Student Name:</strong> ${formData.studentName || "N/A"}</p>
      
      <h2>Address</h2>
      <p><strong>Address Line 1:</strong> ${formData.addressLine1}</p>
      <p><strong>Address Line 2:</strong> ${formData.addressLine2 || "N/A"}</p>
      <p><strong>City:</strong> ${formData.city}</p>
      <p><strong>State:</strong> ${formData.state}</p>
      <p><strong>Zip:</strong> ${formData.zip}</p>
      <p><strong>Country:</strong> ${formData.country || "N/A"}</p>
      
      <h2>Contact Information</h2>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Home Phone:</strong> ${formData.homePhone || "N/A"}</p>
      <p><strong>Cell Phone:</strong> ${formData.cellPhone}</p>
      
      <h2>Instrument Information</h2>
      <p><strong>Instrument Type:</strong> ${formData.instrumentType}</p>
      <p><strong>Instrument Size:</strong> ${formData.instrumentSize}</p>
    `;

    const emailResponse = await resend.emails.send({
      from: "BWL Violins Contact Form <[email protected]>",
      to: ["BWLViolins@juno.com"],
      subject: `New Rental Request from ${formData.firstName} ${formData.lastName}`,
      html: emailHtml,
      reply_to: formData.email,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-rental-form function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
