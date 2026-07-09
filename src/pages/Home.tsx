import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Calendar,
  ArrowRight,
  MapPin,
  Phone,
  Clock
} from 'lucide-react';
import heroImage from '@/assets/campus-exterior-signage.jpg';

const Home = () => {
  const academicPrograms = [
    {
      title: "Nursery",
      description: "Early years foundation building strong literacy, numeracy, and social development in a nurturing environment.",
      icon: BookOpen,
      ages: "Pre-school"
    },
    {
      title: "Primary School", 
      description: "Building strong academic foundations with personalized attention and small class sizes.",
      icon: Users,
      ages: "Primary 1-6"
    },
    {
      title: "Secondary School",
      description: "Junior and Senior Secondary education preparing students for WAEC/SSCE and beyond.",
      icon: GraduationCap,
      ages: "JSS 1 - SS 3"
    }
  ];

  const quickFacts = [
    {
      title: "Founded",
      value: "2004",
      description: "Over two decades of educational excellence"
    },
    {
      title: "Accredited",
      value: "Nursery-SSS",
      description: "Approved by the Ogun State Ministry of Education"
    },
    {
      title: "Class Size",
      value: "Small",
      description: "Personalized attention for every student"
    }
  ];

  // NOTE: There was no real news/events data available, and the previous version
  // fabricated specific dates, a science competition win, and a library opening.
  // Replaced with real accreditation milestones (verified from Ministry approval letters)
  // until Duke/the client can supply actual upcoming events.
  const milestones = [
    { year: "2004", title: "School Founded" },
    { year: "2008", title: "Nursery School Approved" },
    { year: "2009", title: "Primary Section Approved" },
    { year: "2012", title: "Junior Secondary Approved" },
    { year: "2013", title: "Senior Secondary Approved" }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage}
            alt="Winsome Model Schools campus, Itoki, Ifo"
            className="w-full h-full object-cover opacity-20"
            fetchPriority="high"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              Welcome to
              <span className="block text-accent">
                Winsome Model Schools
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium max-w-3xl mx-auto">
              A day school in Itoki, Ifo, dedicated to academic excellence, character
              development, and raising well-rounded students from Nursery through Senior Secondary.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Link to="/admissions">
                <Button className="btn-accent text-lg px-8 py-4 group">
                  Apply for Admission
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/facilities">
                <Button variant="outline" className="text-lg px-8 py-4 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-xl">
                  Schedule a Tour
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickFacts.map((fact, index) => (
              <div key={fact.title} className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {fact.value}
                </div>
                <div className="font-semibold text-primary">
                  {fact.title}
                </div>
                <div className="text-sm text-muted-foreground">
                  {fact.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Academic Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive education programs designed to meet the developmental needs of each age group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {academicPrograms.map((program, index) => (
              <Card key={program.title} className="card-modern group">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <program.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-primary mb-2">
                      {program.title}
                    </h3>
                    <div className="text-accent font-semibold mb-4">
                      {program.ages}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-center text-accent group-hover:text-primary transition-colors">
                    <span className="text-sm font-semibold">Learn More</span>
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-primary mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Two decades of steady growth, from a nursery school to a fully accredited
              Nursery through Senior Secondary institution.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {milestones.map((milestone) => (
              <Card key={milestone.year} className="card-modern text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-xl font-display font-bold text-accent mb-1">
                    {milestone.year}
                  </div>
                  <div className="text-sm font-medium text-primary">
                    {milestone.title}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/about">
              <Button variant="outline">
                Read Our Full Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Visit Our Campus
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We welcome prospective families to visit our campus and experience 
              the Winsome Model Schools community firsthand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-modern text-center">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-primary">Address</h3>
                <div className="text-muted-foreground">
                  <p>Araromi Phase 1, Itoki</p>
                  <p>Ifo LGA, Ogun State</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern text-center">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-school text-school-foreground flex items-center justify-center">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-primary">Phone</h3>
                <div className="text-muted-foreground">
                  <p>0803 231 9017</p>
                  <p className="text-sm">Monday - Friday, from 8 AM</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern text-center">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-primary">School Hours</h3>
                <div className="text-muted-foreground">
                  <p>Monday - Friday</p>
                  <p className="text-sm">Call ahead to schedule a visit</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/admissions">
              <Button className="btn-primary text-lg px-8 py-4">
                Schedule Your Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
