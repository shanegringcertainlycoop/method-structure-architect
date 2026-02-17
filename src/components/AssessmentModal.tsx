import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface AssessmentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AssessmentModal = ({ open, onOpenChange }: AssessmentModalProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", description: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;

    setLoading(true);

    const { error } = await supabase.from("assessment_requests").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      company: form.company.trim() || null,
      description: form.description.trim() || null,
    });

    setLoading(false);

    if (error) {
      toast({ title: "Submission Failed", description: "Please try again.", variant: "destructive" });
      return;
    }

    toast({
      title: "Request Received",
      description: "We will be in contact to schedule your assessment.",
    });

    setForm({ name: "", email: "", company: "", description: "" });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-background border-border sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl font-normal">Request an Assessment</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            A structured review of method maturity and transferability.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-1.5">
            <Label htmlFor="name" className="text-xs tracking-wide uppercase text-muted-foreground">Name</Label>
            <Input id="name" required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="bg-background border-border rounded-sm" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-xs tracking-wide uppercase text-muted-foreground">Email</Label>
            <Input id="email" type="email" required maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="bg-background border-border rounded-sm" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="company" className="text-xs tracking-wide uppercase text-muted-foreground">Company</Label>
            <Input id="company" maxLength={100} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="bg-background border-border rounded-sm" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="description" className="text-xs tracking-wide uppercase text-muted-foreground">Brief Description</Label>
            <Textarea id="description" maxLength={1000} rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="bg-background border-border rounded-sm resize-none" />
          </div>
          <Button type="submit" disabled={loading} className="w-full rounded-sm bg-accent text-accent-foreground hover:bg-accent/90">
            {loading ? "Submitting…" : "Submit Request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AssessmentModal;
