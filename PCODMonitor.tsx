import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, ArrowLeft, Upload, TrendingUp } from "lucide-react";

const PCODMonitor = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold">PCOD/PCOS Monitor</h1>
            <p className="text-xl text-muted-foreground">
              Track symptoms and manage your hormonal health
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Symptom Tracker */}
            <Card className="p-8 rounded-2xl border-border/40 bg-card/50 backdrop-blur-sm shadow-soft">
              <h2 className="text-2xl font-semibold mb-6">Today's Symptoms</h2>
              <div className="space-y-4">
                {['Acne', 'Hair Loss', 'Irregular Period', 'Mood Changes', 'Weight Changes'].map((symptom) => (
                  <div key={symptom} className="flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                    <span className="font-medium">{symptom}</span>
                    <input type="checkbox" className="h-5 w-5 rounded border-border/60 text-primary focus:ring-primary" />
                  </div>
                ))}
              </div>
            </Card>

            {/* Lab Reports Upload */}
            <div className="space-y-6">
              <Card className="p-8 rounded-2xl border-border/40 bg-card/50 backdrop-blur-sm shadow-soft">
                <h2 className="text-2xl font-semibold mb-6">Upload Lab Reports</h2>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-border/60 rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="font-medium mb-1">Click to upload</p>
                    <p className="text-sm text-muted-foreground">or drag and drop your reports</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 rounded-2xl border-border/40 bg-card/50 backdrop-blur-sm shadow-soft">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Recent Trends
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Symptom Severity</span>
                    <span className="font-semibold text-primary">Improving</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Last Report</span>
                    <span className="font-semibold">2 weeks ago</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Information Section */}
          <Card className="p-8 rounded-2xl border-border/40 bg-gradient-primary shadow-soft">
            <h2 className="text-2xl font-semibold mb-4 text-primary-foreground">Understanding PCOD/PCOS</h2>
            <p className="text-primary-foreground/90 leading-relaxed mb-4">
              Polycystic Ovary Syndrome (PCOS) is a hormonal disorder common among women of reproductive age. 
              Regular monitoring and lifestyle management can significantly improve symptoms.
            </p>
            <Button variant="secondary" className="rounded-full">
              Learn More
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PCODMonitor;
