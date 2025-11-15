import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Heart, ArrowLeft } from "lucide-react";

const CycleTracker = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

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
            <h1 className="text-4xl md:text-5xl font-bold">Cycle Tracker</h1>
            <p className="text-xl text-muted-foreground">
              Track and understand your menstrual cycle patterns
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Calendar */}
            <Card className="p-8 rounded-2xl border-border/40 bg-card/50 backdrop-blur-sm shadow-soft">
              <h2 className="text-2xl font-semibold mb-6">Your Calendar</h2>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-xl border-border/40"
              />
            </Card>

            {/* Info Cards */}
            <div className="space-y-6">
              <Card className="p-6 rounded-2xl border-border/40 bg-card/50 backdrop-blur-sm shadow-soft">
                <h3 className="text-lg font-semibold mb-4">Current Phase</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Cycle Day</span>
                    <span className="font-semibold">12 of 28</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Phase</span>
                    <span className="font-semibold text-primary">Follicular</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden mt-4">
                    <div className="h-full bg-gradient-primary rounded-full" style={{ width: '43%' }} />
                  </div>
                </div>
              </Card>

              <Card className="p-6 rounded-2xl border-border/40 bg-card/50 backdrop-blur-sm shadow-soft">
                <h3 className="text-lg font-semibold mb-4">Predictions</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-secondary" />
                    <div>
                      <p className="font-medium">Next Period</p>
                      <p className="text-sm text-muted-foreground">In 16 days (May 1)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-accent" />
                    <div>
                      <p className="font-medium">Fertile Window</p>
                      <p className="text-sm text-muted-foreground">Apr 18 - Apr 23</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 rounded-2xl border-border/40 bg-gradient-warm shadow-soft">
                <h3 className="text-lg font-semibold mb-2 text-secondary-foreground">Today's Insight</h3>
                <p className="text-secondary-foreground/90">
                  You're in your follicular phase - a great time for starting new projects and physical activity.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CycleTracker;
