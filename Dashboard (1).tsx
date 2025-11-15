import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Calendar, 
  Activity, 
  Utensils, 
  Droplets, 
  Moon, 
  Stethoscope,
  Heart,
  ArrowRight
} from "lucide-react";

const Dashboard = () => {
  const tools = [
    {
      icon: Calendar,
      title: "Cycle Tracker",
      description: "Track your menstrual cycle",
      link: "/cycle-tracker",
      color: "bg-gradient-primary"
    },
    {
      icon: Activity,
      title: "PCOD Monitor",
      description: "Monitor hormonal health",
      link: "/pcod-monitor",
      color: "bg-gradient-warm"
    },
    {
      icon: Utensils,
      title: "Diet Plan",
      description: "Personalized nutrition",
      link: "/diet-plan",
      color: "bg-gradient-primary"
    },
    {
      icon: Droplets,
      title: "Water Tracker",
      description: "Stay hydrated",
      link: "/water-tracker",
      color: "bg-gradient-warm"
    },
    {
      icon: Moon,
      title: "Sleep Tracker",
      description: "Optimize your rest",
      link: "/sleep-tracker",
      color: "bg-gradient-primary"
    },
    {
      icon: Stethoscope,
      title: "Consultation",
      description: "Connect with doctors",
      link: "/consultation",
      color: "bg-gradient-warm"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Header */}
      <nav className="border-b border-border/40 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-primary fill-primary" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Hormone Hub
            </span>
          </Link>
          <Button variant="ghost" className="rounded-full">
            Profile
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
          {/* Welcome Section */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Welcome back! 👋
            </h1>
            <p className="text-xl text-muted-foreground">
              Your wellness dashboard is ready to support your journey
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 rounded-2xl border-border/40 bg-card/50 backdrop-blur-sm shadow-soft">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Cycle Day</p>
                  <p className="text-3xl font-bold">12</p>
                </div>
                <Calendar className="h-10 w-10 text-primary" />
              </div>
            </Card>
            <Card className="p-6 rounded-2xl border-border/40 bg-card/50 backdrop-blur-sm shadow-soft">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Water Today</p>
                  <p className="text-3xl font-bold">6/8</p>
                </div>
                <Droplets className="h-10 w-10 text-primary" />
              </div>
            </Card>
            <Card className="p-6 rounded-2xl border-border/40 bg-card/50 backdrop-blur-sm shadow-soft">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Sleep Quality</p>
                  <p className="text-3xl font-bold">Good</p>
                </div>
                <Moon className="h-10 w-10 text-primary" />
              </div>
            </Card>
          </div>

          {/* Tools Grid */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Your Wellness Tools</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <Link key={index} to={tool.link}>
                  <Card className="p-8 hover:shadow-medium transition-all duration-300 border-border/40 bg-card/50 backdrop-blur-sm hover:-translate-y-1 rounded-2xl group h-full">
                    <div className={`h-14 w-14 rounded-2xl ${tool.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-soft`}>
                      <tool.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                    <p className="text-muted-foreground mb-4">{tool.description}</p>
                    <div className="flex items-center text-primary group-hover:gap-2 transition-all">
                      <span className="text-sm font-medium">Open</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
