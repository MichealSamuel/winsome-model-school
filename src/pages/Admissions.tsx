import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Users, FileText, CheckCircle, Clock, ArrowRight } from 'lucide-react';

const formSchema = z.object({
  studentName: z.string().min(2, 'Student name must be at least 2 characters'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  intendedEntry: z.string().min(1, 'Intended entry term is required'),
  currentGrade: z.string().min(1, 'Current grade level is required'),
  parentName: z.string().min(2, 'Parent/Guardian name must be at least 2 characters'),
  parentEmail: z.string().email('Please enter a valid email address'),
  parentPhone: z.string().min(10, 'Please enter a valid phone number'),
  address: z.string().optional(),
  previousSchool: z.string().optional(),
  programInterest: z.string().min(1, 'Please select a program of interest'),
  notes: z.string().optional(),
  consent: z.boolean().refine(val => val === true, 'You must agree to the processing of information'),
});

type FormData = z.infer<typeof formSchema>;

const Admissions = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: '',
      dateOfBirth: '',
      intendedEntry: '',
      currentGrade: '',
      parentName: '',
      parentEmail: '',
      parentPhone: '',
      address: '',
      previousSchool: '',
      programInterest: '',
      notes: '',
      consent: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real app, this would POST to /api/admissions
      console.log('Form submission:', data);
      
      setIsSubmitted(true);
      toast({
        title: "Application Submitted Successfully!",
        description: "We'll be in touch within 2-3 business days.",
      });
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const admissionSteps = [
    {
      icon: FileText,
      title: "Submit Application",
      description: "Complete our online application form with all required information."
    },
    {
      icon: Calendar,
      title: "Schedule Interview",
      description: "We'll arrange a campus visit and interview with our admissions team."
    },
    {
      icon: Users,
      title: "Assessment & Review",
      description: "Academic assessment and comprehensive application review process."
    },
    {
      icon: CheckCircle,
      title: "Admission Decision",
      description: "Receive your admission decision and welcome packet."
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
        <Card className="card-elevated max-w-md w-full mx-4">
          <CardContent className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-2xl font-display font-semibold text-primary mb-2">
                Application Submitted!
              </h2>
              <p className="text-muted-foreground">
                Thank you for your interest in Winsome Model Schools. We've received your application 
                and will contact you within 2-3 business days to schedule your next steps.
              </p>
            </div>
            <div className="bg-secondary p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Reference ID:</strong> WMS-{Date.now().toString().slice(-8)}
              </p>
            </div>
            <Button 
              onClick={() => {
                setIsSubmitted(false);
                form.reset();
              }}
              className="btn-primary"
            >
              Submit Another Application
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-display font-semibold text-white mb-6">
              Join Our Community
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
              Begin your journey at Winsome Model Schools. We're excited to learn more 
              about you and welcome you to our exceptional learning community.
            </p>
          </div>
        </div>
      </section>

      {/* Accreditation Trust Strip */}
      <section className="py-10 bg-secondary border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Winsome Model Schools is provisionally approved by the Ogun State Ministry of Education,
            Science and Technology from Nursery through Senior Secondary level.{' '}
            <Link to="/about" className="text-accent underline hover:text-accent/80">
              View our accreditation letters
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-semibold text-primary mb-4">
              Admission Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our streamlined admission process is designed to get to know your family 
              and help you discover if Winsome Model Schools is the right fit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={step.title} className="text-center space-y-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-display font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
                {index < admissionSteps.length - 1 && (
                  <div className="hidden md:block">
                    <ArrowRight className="h-6 w-6 text-muted-foreground mx-auto mt-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="card-elevated">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-display font-semibold text-primary">
                  Admissions Application
                </CardTitle>
                <CardDescription className="text-lg">
                  Please complete all required fields to begin the admission process.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Student Information */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-display font-semibold text-primary border-b border-border pb-2">
                        Student Information
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="studentName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Student's Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter student's full name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="dateOfBirth"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Date of Birth *</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="intendedEntry"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Intended Entry Year/Term *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select entry term" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="fall-2024">Fall 2024</SelectItem>
                                  <SelectItem value="spring-2025">Spring 2025</SelectItem>
                                  <SelectItem value="fall-2025">Fall 2025</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="currentGrade"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Current Grade Level *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select grade level" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="pre-k">Pre-K</SelectItem>
                                  <SelectItem value="kindergarten">Kindergarten</SelectItem>
                                  <SelectItem value="grade-1">Grade 1</SelectItem>
                                  <SelectItem value="grade-2">Grade 2</SelectItem>
                                  <SelectItem value="grade-3">Grade 3</SelectItem>
                                  <SelectItem value="grade-4">Grade 4</SelectItem>
                                  <SelectItem value="grade-5">Grade 5</SelectItem>
                                  <SelectItem value="grade-6">Grade 6</SelectItem>
                                  <SelectItem value="grade-7">Grade 7</SelectItem>
                                  <SelectItem value="grade-8">Grade 8</SelectItem>
                                  <SelectItem value="grade-9">Grade 9</SelectItem>
                                  <SelectItem value="grade-10">Grade 10</SelectItem>
                                  <SelectItem value="grade-11">Grade 11</SelectItem>
                                  <SelectItem value="grade-12">Grade 12</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Parent Information */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-display font-semibold text-primary border-b border-border pb-2">
                        Parent/Guardian Information
                      </h3>
                      
                      <FormField
                        control={form.control}
                        name="parentName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Parent/Guardian Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter parent/guardian name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="parentEmail"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="parent@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="parentPhone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="(555) 123-4567" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Address (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Street address, City, State, ZIP" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-display font-semibold text-primary border-b border-border pb-2">
                        Additional Information
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="previousSchool"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Previous School (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="Name of previous school" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="programInterest"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Program Interest *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select program" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="nursery">Nursery Program</SelectItem>
                                  <SelectItem value="primary">Primary School</SelectItem>
                                  <SelectItem value="secondary">Secondary School</SelectItem>
                                  <SelectItem value="stem">STEM Track</SelectItem>
                                  <SelectItem value="arts">Arts & Humanities Track</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="notes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Notes or Questions (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Share any additional information, specific questions, or special circumstances we should know about..."
                                className="min-h-[100px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Consent */}
                    <FormField
                      control={form.control}
                      name="consent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 border border-border rounded-lg">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm">
                              I agree to the processing of this information for admissions purposes *
                            </FormLabel>
                            <p className="text-xs text-muted-foreground">
                              By checking this box, you consent to Winsome Model Schools processing the provided information 
                              for admission evaluation and communication purposes.
                            </p>
                          </div>
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <div className="pt-6">
                      <Button
                        type="submit"
                        className="btn-primary w-full text-lg py-4"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Clock className="mr-2 h-5 w-5 animate-spin" />
                            Submitting Application...
                          </>
                        ) : (
                          <>
                            Submit Application
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-display font-semibold text-primary mb-4">
              Questions About Admissions?
            </h2>
            <p className="text-muted-foreground mb-8">
              Our admissions team is here to help guide you through the process.
            </p>
            <div className="bg-secondary p-6 rounded-xl">
              <div className="space-y-2">
                <p className="font-medium text-primary">
                  Admissions Office
                </p>
                <p className="text-muted-foreground">
                  Email: [admissions@winsomeforteschool.com]
                </p>
                <p className="text-muted-foreground">
                  Phone: [+2345678910112]
                </p>
                <p className="text-muted-foreground text-sm">
                  Office Hours: Monday - Friday, 8:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
