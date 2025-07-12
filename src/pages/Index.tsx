import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Smartphone, Download, CheckCircle, Briefcase } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-4xl font-bold text-primary-foreground shadow-xl">
                AB
              </div>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Aayush Bhansali
              </h1>
              <h2 className="text-2xl text-muted-foreground mb-6 font-medium">Lead Software Engineer</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                I'm a software engineer that specializes in effective usage of different technologies and programming languages to quickly solve problems. I believe - the problem needs to be solved - no matter the programming language / framework being used making me adaptable to almost any technology.
              </p>
            </div>
            
            <div className="flex gap-4 justify-center mb-8 flex-wrap">
              <Button variant="default" size="lg" className="gap-2">
                <Briefcase className="w-4 h-4" />
                Hire Me
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12">Technical Expertise</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center">
                    <Code className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">JavaScript</Badge>
                    <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">TypeScript</Badge>
                    <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">Python</Badge>
                    <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">Java</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-xl flex items-center justify-center">
                    <Globe className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-lg">Frontend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">React</Badge>
                    <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">Vue.js</Badge>
                    <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">Angular</Badge>
                    <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">Next.js</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-accent/10 to-accent/20 rounded-xl flex items-center justify-center">
                    <Database className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-lg">Backend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">Node.js</Badge>
                    <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">Express</Badge>
                    <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">Django</Badge>
                    <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">PostgreSQL</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-primary/10 to-secondary/20 rounded-xl flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">Docker</Badge>
                    <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">AWS</Badge>
                    <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">Git</Badge>
                    <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">Jenkins</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12">Featured Projects</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                    <Code className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <CardTitle>Project Title 1</CardTitle>
                  <CardDescription>Brief description of your first project</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Node.js</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Github className="w-3 h-3" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <ExternalLink className="w-3 h-3" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                    <Database className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <CardTitle>Project Title 2</CardTitle>
                  <CardDescription>Brief description of your second project</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">Django</Badge>
                    <Badge variant="outline">PostgreSQL</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Github className="w-3 h-3" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <ExternalLink className="w-3 h-3" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg mb-4 flex items-center justify-center">
                    <Smartphone className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <CardTitle>Project Title 3</CardTitle>
                  <CardDescription>Brief description of your third project</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">React Native</Badge>
                    <Badge variant="outline">Firebase</Badge>
                    <Badge variant="outline">Redux</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Github className="w-3 h-3" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <ExternalLink className="w-3 h-3" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Badge className="mb-4 bg-green-500 text-white border-green-500 hover:bg-green-600 gap-1">
                <CheckCircle className="w-3 h-3" />
                Open to Opportunities
              </Badge>
              <h3 className="text-3xl font-bold mb-6">Ready for Your Next Project</h3>
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                I'm actively seeking new opportunities where I can apply my problem-solving skills and adaptability to help your team succeed. Whether it's a full-time role, contract work, or consulting, I'm ready to make an impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Briefcase className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h4 className="font-semibold mb-2">Full-time Roles</h4>
                  <p className="text-sm text-muted-foreground">Looking for leadership and senior engineering positions</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Code className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h4 className="font-semibold mb-2">Contract Work</h4>
                  <p className="text-sm text-muted-foreground">Available for project-based development work</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Mail className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h4 className="font-semibold mb-2">Consulting</h4>
                  <p className="text-sm text-muted-foreground">Technical guidance and architecture consulting</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="gap-2">
                <Mail className="w-4 h-4" />
                Contact for Jobs
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Download className="w-4 h-4" />
                View Resume
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
