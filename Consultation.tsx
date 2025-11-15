import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Heart, ArrowLeft, Calendar, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Consultation = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted!",
      description: "A doctor will contact you within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Header */}
      <nav className="border-b border-border/40 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-primary fill-primary" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Hormone Hub
            </span>
          </Link>
          <Link to="/dashboard">
            <Button variant="ghost" className="rounded-full">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Dashboard
            </Button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Doctor Consultation</h1>
            <p className="text-xl text-muted-foreground">
              Connect with healthcare professionals who understand women's health
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Consultation Form */}
            <Card className="p-8 rounded-2xl border-border/40 bg-card/50 backdrop-blur-sm shadow-soft">
              <h2 className="text-2xl font-semibold mb-6">Book a Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name"
                    placeholder="Your name"
                    required
                    className="rounded-xl border-border/60 bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="rounded-xl border-border/60 bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    required
                    className="rounded-xl border-border/60 bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="concern">Primary Concern</Label>
                  <Textarea 
                    id="concern"
                    placeholder="Please describe your health concerns..."
                    required
                    className="rounded-xl border-border/60 bg-background/50 min-h-[120px]"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full rounded-xl bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft"
                >
                  Request Consultation
                </Button>
              </form>
            </Card>

            {/* Info Cards */}
            <div className="space-y-6">
              <Card className="p-8 rounded-2xl border-border/40 bg-gradient-primary shadow-soft">
                <Calendar className="h-12 w-12 mb-4 text-primary-foreground" />
                <h3 className="text-xl font-semibold mb-2 text-primary-foreground">
                  Flexible Scheduling
                </h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  Choose appointment times that work best for you. We offer both in-person 
                  and virtual consultations.
                </p>
              </Card>

              <Card className="p-8 rounded-2xl border-border/40 bg-gradient-warm shadow-soft">
                <Clock className="h-12 w-12 mb-4 text-secondary-foreground" />
                <h3 className="text-xl font-semibold mb-2 text-secondary-foreground">
                  Quick Response
                </h3>
                <p className="text-secondary-foreground/90 leading-relaxed">
                  Our team typically responds within 24 hours. Urgent concerns are 
                  prioritized for same-day consultation.
                </p>
              </Card>

              <Card className="p-6 rounded-2xl border-border/40 bg-card/50 backdrop-blur-sm shadow-soft">
                <h3 className="text-lg font-semibold mb-4">What to Prepare</h3>
                <ul className="space-y-3">
                  {[
                    "Recent lab reports (if any)",
                    "List of current medications",
                    "Symptom history and patterns",
                    "Questions for your doctor"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
