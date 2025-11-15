import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Calendar, 
  Heart, 
  Utensils, 
  Droplets, 
  Moon, 
  Stethoscope,
  Users,
  Sparkles,
  ArrowRight,
  Activity
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Calendar,
      title: "Cycle Tracker",
      description: "Track your menstrual cycle with intelligent predictions and insights"
    },
    {
      icon: Activity,
      title: "PCOD/PCOS Monitor",
      description: "Comprehensive monitoring for hormonal health conditions"
    },
    {
      icon: Utensils,
      title: "Personalized Diet Plans",
      description: "Nutrition guidance tailored to your hormonal health needs"
    },
    {
      icon: Droplets,
      title: "Water Tracker",
      description: "Stay hydrated with gentle reminders throughout your day"
    },
    {
      icon: Moon,
      title: "Sleep Schedule",
      description: "Optimize your rest patterns for better hormonal balance"
    },
    {
      icon: Stethoscope,
      title: "Doctor Consultation",
      description: "Connect with healthcare professionals who understand you"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Navigation */}
      <nav className="border-b border-border/40 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-primary fill-primary" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Hormone Hub
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/auth">
              <Button variant="ghost" className="rounded-full">Login</Button>
            </Link>
            <Link to="/auth">
              <Button className="rounded-full bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary-light/30 px-4 py-2 rounded-full">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Your Wellness Journey Starts Here</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Take Control of Your
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Hormonal Health
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive tracking, personalized insights, and expert support for women's hormonal wellness. 
            Monitor PCOD, PCOS, thyroid health, and more—all in one nurturing space.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/auth">
              <Button size="lg" className="rounded-full bg-gradient-primary hover:opacity-90 transition-all shadow-medium hover:shadow-glow group">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="rounded-full border-primary/30 hover:bg-primary-light/20">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything You Need</h2>
          <p className="text-xl text-muted-foreground">Holistic tools for complete hormonal wellness</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-medium transition-all duration-300 border-border/40 bg-card/50 backdrop-blur-sm hover:-translate-y-1 rounded-2xl group"
            >
              <div className="h-14 w-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-soft">
                <feature.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="max-w-4xl mx-auto p-12 md:p-16 text-center bg-gradient-warm rounded-3xl border-0 shadow-medium">
          <Users className="h-16 w-16 mx-auto mb-6 text-secondary-foreground" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary-foreground">
            Join Our Community
          </h2>
          <p className="text-lg text-secondary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect with thousands of women on similar wellness journeys. Share experiences, 
            find support, and grow together in a safe, understanding space.
          </p>
          <Link to="/auth">
            <Button size="lg" variant="secondary" className="rounded-full shadow-soft hover:shadow-medium transition-all">
              Join Now
            </Button>
          </Link>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background/80 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary fill-primary" />
              <span className="text-xl font-bold">Hormone Hub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Hormone Hub. Empowering women's health.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
