import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

interface AssessmentRecord {
  id: string;
  name: string;
  email: string;
  company: string | null;
  description: string | null;
  created_at: string;
}

interface WebhookPayload {
  type: "INSERT";
  table: string;
  record: AssessmentRecord;
  schema: string;
}

serve(async (req) => {
  try {
    const payload: WebhookPayload = await req.json();
    const { name, email, company, description, created_at } = payload.record;

    const submittedAt = new Date(created_at).toLocaleString("en-US", {
      timeZone: "America/New_York",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Certainly <notifications@certainly.coop>",
        to: ["shane.gring@certainly.coop"],
        subject: `New Method Audit Request — ${name}`,
        html: `
          <div style="font-family: Georgia, serif; max-width: 560px; color: #1a1a1a;">
            <h2 style="margin-bottom: 4px;">New Method Audit Request</h2>
            <p style="color: #666; font-size: 14px; margin-top: 0;">${submittedAt}</p>
            <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 20px 0;" />
            <table style="font-size: 15px; line-height: 1.6; width: 100%;">
              <tr><td style="color: #888; padding: 4px 16px 4px 0; vertical-align: top;">Name</td><td>${name}</td></tr>
              <tr><td style="color: #888; padding: 4px 16px 4px 0; vertical-align: top;">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
              ${company ? `<tr><td style="color: #888; padding: 4px 16px 4px 0; vertical-align: top;">Company</td><td>${company}</td></tr>` : ""}
              ${description ? `<tr><td style="color: #888; padding: 4px 16px 4px 0; vertical-align: top;">Description</td><td>${description}</td></tr>` : ""}
            </table>
            <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 20px 0;" />
            <p style="font-size: 13px; color: #999;">Sent from method-lab.ai</p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Resend error:", error);
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Function error:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
});
