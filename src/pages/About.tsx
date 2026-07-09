import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Award, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import leaderJohn from '@/assets/leader-john-akomolafe.jpg';
import leaderComfort from '@/assets/leader-comfort-akomolafe.jpg';
import approvalNursery2008 from '@/assets/approval-nursery-2008.jpg';
import approvalPrimary2009 from '@/assets/approval-primary-2009.jpg';
import approvalJss2012 from '@/assets/approval-jss-2012.jpg';
import approvalSss2013 from '@/assets/approval-sss-2013.jpg';

const About = () => {
  const milestones = [
    {
      year: "2004",
      title: "Founded",
      description: "Founded in Itoki, Ifo, Ogun State, with a vision to raise well-rounded individuals through excellence in education."
    },
    {
      year: "2008",
      title: "Nursery Approved",
      description: "Ogun State Ministry of Education granted provisional approval for Winsome Model School as a Nursery School."
    },
    {
      year: "2009",
      title: "Primary Section",
      description: "Provisional approval granted to upgrade and establish the Primary section of the school."
    },
    {
      year: "2012",
      title: "Junior Secondary",
      description: "Approval-in-principle granted for Winsome Model College to operate a Junior Secondary School (JSS)."
    },
    {
      year: "2013",
      title: "Senior Secondary",
      description: "Provisional approval granted to upgrade the Junior Secondary School to Senior Secondary School (SSS)."
    }
  ];

  const leadership = [
    {
      name: "Mrs Comfort Modupe Akomolafe",
      title: "Proprietress",
      bio: "Proprietress of Winsome Model Schools, Mrs Akomolafe conceived the school in 2004 and brought the vision to life with her family. A Mathematics and Economics graduate of Kwara State College of Education, she holds a BSc.Ed from Lagos State University and an MEd in Educational Administration and Planning from the University of Calabar. She taught Mathematics across several schools in Ekiti and Lagos States, held posts including Departmental Head and Unit Head, and retired as a Director of Education in 2018 before dedicating herself fully to the school.",
      image: leaderComfort
    },
    {
      name: "Mr John Kayode Akomolafe",
      title: "Director & Business Strategist",
      bio: "A Director and Business Strategist at Winsome Model Schools, John Akomolafe studied Mathematics at Ondo State College of Education before earning a Bachelor's degree in Management Studies from the University of Jos and an MBA in Marketing. His career spans roles as Chief Accountant at FASH Photos, Senior Auditor with the Federal Office of the Auditor-General, human resources and aviation leadership roles across the oil and gas industry, and Regional and Nationwide Operations Manager at CITA Petroleum, before bringing his multicultural business expertise to run the school profitably and accountably.",
      image: leaderJohn
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Over Two Decades",
      description: "Serving the Itoki, Ifo community since 2004 with a steadily growing reputation for academic excellence."
    },
    {
      icon: ShieldCheck,
      title: "Fully Accredited",
      description: "Provisionally approved by the Ogun State Ministry of Education from Nursery through Senior Secondary level."
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Personalized attention that allows us to monitor and guide each child's progress effectively."
    }
  ];

  const accreditations = [
    {
      year: "2008",
      title: "Nursery School Approval",
      image: approvalNursery2008
    },
    {
      year: "2009",
      title: "Primary Section Approval",
      image: approvalPrimary2009
    },
    {
      year: "2012",
      title: "Junior Secondary Approval",
      image: approvalJss2012
    },
    {
      year: "2013",
      title: "Senior Secondary Approval",
      image: approvalSss2013
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-display font-semibold text-white mb-6">
              About Winsome Model Schools
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
              Discover our rich history, dedicated leadership, and commitment to
              educational excellence that spans over two decades, right here in Itoki, Ifo.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-display font-semibold text-primary">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Located in Araromi Phase 1, Itoki, Dalemo, Ogun State, Winsome Model Schools was founded in 2004.
                  Our school has steadily grown to become a beacon of excellence in education. From humble beginnings,
                  we have continued to move from one level of glory to another, guided by a deep commitment to raising
                  well-rounded individuals who will make meaningful contributions to society.
                </p>
                <p>
                  We are a day school and proudly a mixed institution, welcoming both boys and girls into an
                  environment that fosters equality, inclusiveness, and respect for all. We believe that every child
                  has unique talents, abilities, and aspirations, and we are dedicated to providing the support and
                  resources needed for them to discover and maximize their potential.
                </p>
                <p>
                  At the heart of our operations is a strong culture of discipline, hard work, and integrity. Our
                  dedicated team of highly qualified and passionate teachers work tirelessly to create engaging
                  learning experiences, while small class sizes allow us to monitor and guide each child's progress
                  effectively.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={achievement.title} className="card-elevated">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 mx-auto rounded-full bg-accent flex items-center justify-center text-accent-foreground">
                      <achievement.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display font-semibold text-primary">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl font-display font-semibold text-primary">
              Mission & Vision
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-elevated">
                <CardContent className="p-8 text-center space-y-4">
                  <h3 className="text-2xl font-display font-semibold text-primary">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground">
                    To impart knowledge, build character, and prepare students for the challenges and opportunities
                    of the future, nurturing the whole child spiritually, morally, intellectually, socially, and
                    emotionally.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-elevated">
                <CardContent className="p-8 text-center space-y-4">
                  <h3 className="text-2xl font-display font-semibold text-primary">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground">
                    To be a citadel of learning where every student's future aspirations are guaranteed, raising
                    confident, disciplined individuals with the courage to dream big and the wisdom to contribute
                    positively to the world around them.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-semibold text-primary mb-4">
              Leadership & Governance
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated leaders who guide Winsome Model Schools's mission and vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={leader.name} className="card-elevated group">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    <img 
                      src={leader.image}
                      alt={`${leader.name}, ${leader.title}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-primary text-lg">
                      {leader.name}
                    </h3>
                    <p className="text-accent font-medium text-sm">
                      {leader.title}
                    </p>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {leader.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-display font-semibold text-primary mb-4">
              Accreditation
            </h2>
            <p className="text-xl text-muted-foreground">
              Winsome Model Schools is provisionally approved by the Ogun State Ministry of Education, Science
              and Technology at every level, from Nursery through Senior Secondary. Full copies of our approval
              letters are available on request — see our{' '}
              <Link to="/admissions" className="text-accent underline hover:text-accent/80">
                Admissions page
              </Link>{' '}
              for more.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {accreditations.map((item) => (
              <Card key={item.year} className="card-elevated overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={`${item.title} letter, ${item.year}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-4 text-center space-y-2">
                  <div className="seal-year mx-auto">{item.year}</div>
                  <h3 className="text-sm font-medium text-primary mt-1">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-semibold text-primary mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones in the history of Winsome Model Schools.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {milestones.map((milestone, index) => (
                <Card key={milestone.year} className="card-elevated text-center group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-display font-bold text-accent">
                        {milestone.year}
                      </div>
                      <h3 className="font-display font-semibold text-primary mt-2">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic Philosophy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-display font-semibold text-primary">
              Academic Philosophy
            </h2>
            <p className="text-xl text-muted-foreground">
              At Winsome Model Schools, we believe education goes beyond academic achievement. Our approach
              combines innovative teaching methods and modern technology with small class sizes and personalized
              attention, so every child can develop critical thinking, creativity, and problem-solving skills.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="card-elevated">
                <CardContent className="p-6 text-center space-y-4">
                  <h3 className="font-display font-semibold text-primary">
                    Personalized Learning
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Small class sizes and dedicated attention that allow us to monitor and guide each child's
                    progress effectively.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-elevated">
                <CardContent className="p-6 text-center space-y-4">
                  <h3 className="font-display font-semibold text-primary">
                    Character & Values
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Honesty, perseverance, respect, and responsibility woven into our daily routines, alongside
                    academic excellence.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-elevated">
                <CardContent className="p-6 text-center space-y-4">
                  <h3 className="font-display font-semibold text-primary">
                    Diversity & Teamwork
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    A mixed day school that celebrates diversity, encouraging teamwork, friendship, and
                    collaboration among all our students.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-display font-semibold">
              Join Our Community
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Experience the difference that passionate educators and a supportive 
              community can make in your child's educational journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/admissions">
                <Button className="btn-gold text-lg px-8 py-4 group">
                  Start Your Application
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/facilities">
                <Button variant="outline" className="text-lg px-8 py-4 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Explore Our Campus
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
