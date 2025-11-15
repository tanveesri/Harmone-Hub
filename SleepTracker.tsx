import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, ArrowLeft, Moon, Sun } from "lucide-react";

const SleepTracker = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold">Sleep Tracker</h1>
            <p className="text-xl text-muted-foreground">
              Optimize your rest for better hormonal balance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Log Sleep */}
            <Card className="p-8 rounded-2xl border-border/40 bg-card/50 backdrop-blur-sm shadow-soft">
              <h2 className="text-2xl font-semibold mb-6">Log Last Night</h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="bedtime" className="flex items-center gap-2">
                    <Moon className="h-4 w-4" />
                    Bedtime
                  </Label>
                  <Input 
                    id="bedtime"
                    type="time" 
                    defaultValue="22:30"
                    className="rounded-xl border-border/60 bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="waketime" className="flex items-center gap-2">
                    <Sun className="h-4 w-4" />
                    Wake Time
                  </Label>
                  <Input 
                    id="waketime"
                    type="time" 
                    defaultValue="06:30"
                    className="rounded-xl border-border/60 bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Sleep Quality</Label>
                  <div className="flex gap-2">
                    {['Poor', 'Fair', 'Good', 'Excellent'].map((quality) => (
                      <Button
                        key={quality}
                        variant="outline"
                        className="flex-1 rounded-xl hover:bg-primary hover:text-primary-foreground"
                      >
                        {quality}
                      </Button>
                    ))}
                  </div>
                </div>
                <Button className="w-full rounded-xl bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft">
                  Save Sleep Log
                </Button>
              </div>
            </Card>

            {/* Sleep Stats */}
            <div className="space-y-6">
              <Card className="p-8 rounded-2xl border-border/40 bg-gradient-primary shadow-soft text-center">
                <Moon className="h-16 w-16 mx-auto mb-4 text-primary-foreground" />
                <h3 className="text-xl font-semibold mb-2 text-primary-foreground">Last Night</h3>
                <p className="text-5xl font-bold mb-2 text-primary-foreground">8h 15m</p>
                <p className="text-primary-foreground/90">Good quality sleep</p>
              </Card>

              <Card className="p-6 rounded-2xl border-border/40 bg-card/50 backdrop-blur-sm shadow-soft">
                <h3 className="text-lg font-semibold mb-4">Weekly Average</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-semibold">7h 45m</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Quality</span>
                    <span className="font-semibold text-primary">Good</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Consistency</span>
                    <span className="font-semibold">85%</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Sleep Tips */}
          <Card className="p-8 rounded-2xl border-border/40 bg-gradient-warm shadow-soft">
            <h2 className="text-2xl font-semibold mb-4 text-secondary-foreground">
              Sleep Hygiene Tips
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Maintain a consistent sleep schedule",
                "Create a relaxing bedtime routine",
                "Keep your bedroom cool and dark",
                "Avoid screens 1 hour before bed",
                "Limit caffeine after 2 PM",
                "Exercise regularly, but not before bed"
              ].map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-secondary-foreground mt-2 flex-shrink-0" />
                  <span className="text-secondary-foreground/90 leading-relaxed">{tip}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SleepTracker;
