import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, ArrowLeft, Apple, Beef, Coffee } from "lucide-react";

const DietPlan = () => {
  const meals = [
    {
      time: "Breakfast",
      icon: Coffee,
      items: ["Oatmeal with berries", "Greek yogurt", "Green tea"],
      calories: "350 cal"
    },
    {
      time: "Lunch",
      icon: Apple,
      items: ["Grilled salmon", "Quinoa salad", "Steamed vegetables"],
      calories: "450 cal"
    },
    {
      time: "Dinner",
      icon: Beef,
      items: ["Chicken breast", "Brown rice", "Mixed greens"],
      calories: "400 cal"
    }
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold">Personalized Diet Plan</h1>
            <p className="text-xl text-muted-foreground">
              Nutrition tailored for your hormonal health
            </p>
          </div>

          {/* Daily Summary */}
          <Card className="p-8 rounded-2xl border-border/40 bg-gradient-warm shadow-soft">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-sm text-secondary-foreground/80 mb-1">Daily Goal</p>
                <p className="text-4xl font-bold text-secondary-foreground">1,800</p>
                <p className="text-sm text-secondary-foreground/80">calories</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-secondary-foreground/80 mb-1">Consumed</p>
                <p className="text-4xl font-bold text-secondary-foreground">1,200</p>
                <p className="text-sm text-secondary-foreground/80">calories</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-secondary-foreground/80 mb-1">Remaining</p>
                <p className="text-4xl font-bold text-secondary-foreground">600</p>
                <p className="text-sm text-secondary-foreground/80">calories</p>
              </div>
            </div>
          </Card>

          {/* Meal Plans */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Today's Meals</h2>
            {meals.map((meal, index) => (
              <Card key={index} className="p-6 rounded-2xl border-border/40 bg-card/50 backdrop-blur-sm shadow-soft hover:shadow-medium transition-all">
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-soft">
                    <meal.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold">{meal.time}</h3>
                      <span className="text-sm font-medium text-primary">{meal.calories}</span>
                    </div>
                    <ul className="space-y-2">
                      {meal.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Nutritional Tips */}
          <Card className="p-8 rounded-2xl border-border/40 bg-card/50 backdrop-blur-sm shadow-soft">
            <h2 className="text-2xl font-semibold mb-4">Nutritional Tips for PCOD/PCOS</h2>
            <ul className="space-y-3">
              {[
                "Focus on whole grains and complex carbohydrates",
                "Include plenty of fiber-rich foods",
                "Choose lean proteins and healthy fats",
                "Limit processed foods and added sugars",
                "Stay hydrated throughout the day"
              ].map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DietPlan;
