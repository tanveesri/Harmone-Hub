import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, ArrowLeft, Droplets, Plus } from "lucide-react";

const WaterTracker = () => {
  const [glassesConsumed, setGlassesConsumed] = useState(6);
  const dailyGoal = 8;

  const addGlass = () => {
    if (glassesConsumed < dailyGoal + 4) {
      setGlassesConsumed(prev => prev + 1);
    }
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
        <div className="max-w-2xl mx-auto space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Water Tracker</h1>
            <p className="text-xl text-muted-foreground">
              Stay hydrated for optimal hormonal health
            </p>
          </div>

          {/* Main Tracker Card */}
          <Card className="p-12 rounded-2xl border-border/40 bg-gradient-primary shadow-medium text-center">
            <Droplets className="h-20 w-20 mx-auto mb-6 text-primary-foreground" />
            <h2 className="text-6xl font-bold mb-4 text-primary-foreground">
              {glassesConsumed}/{dailyGoal}
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">glasses today</p>
            
            <div className="w-full h-6 bg-primary-foreground/20 rounded-full overflow-hidden mb-8">
              <div 
                className="h-full bg-primary-foreground rounded-full transition-all duration-500"
                style={{ width: `${Math.min((glassesConsumed / dailyGoal) * 100, 100)}%` }}
              />
            </div>

            <Button 
              onClick={addGlass}
              size="lg"
              variant="secondary"
              className="rounded-full shadow-soft hover:shadow-medium transition-all"
            >
              <Plus className="h-5 w-5 mr-2" />
              Add Glass
            </Button>
          </Card>

          {/* History */}
          <Card className="p-8 rounded-2xl border-border/40 bg-card/50 backdrop-blur-sm shadow-soft">
            <h2 className="text-2xl font-semibold mb-6">Weekly Progress</h2>
            <div className="grid grid-cols-7 gap-3">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                <div key={index} className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">{day}</p>
                  <div className="h-24 bg-muted/30 rounded-xl flex items-end p-2">
                    <div 
                      className="w-full bg-gradient-primary rounded-lg"
                      style={{ height: `${Math.random() * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Tips */}
          <Card className="p-8 rounded-2xl border-border/40 bg-gradient-warm shadow-soft">
            <h2 className="text-2xl font-semibold mb-4 text-secondary-foreground">
              Hydration Tips
            </h2>
            <ul className="space-y-3">
              {[
                "Start your day with a glass of water",
                "Drink water before, during, and after exercise",
                "Keep a water bottle with you throughout the day",
                "Set reminders to drink water regularly"
              ].map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Droplets className="h-5 w-5 text-secondary-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-secondary-foreground/90 leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WaterTracker;
