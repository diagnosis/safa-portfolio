import {Project} from "@/lib/projects";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";



export const ProjectCard =
    ({project} :{project: Project} )=> {
    return(
      <Card className="flex flex-col h-full transition-all-smooth hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 group border-gray-800 bg-gray-900/50 backdrop-blur-sm">
          <CardHeader>
              <CardTitle className="group-hover:text-blue-400 transition-all-smooth">{project.title}</CardTitle>
              <CardDescription className="text-gray-400 leading-relaxed">{project.description}</CardDescription>
          </CardHeader>

       <CardContent className="flex-grow">
           <div className={"flex flex-wrap gap-2"}>
               {project.techStack.map((tech)=>(
                   <Badge key={tech} variant={"secondary"} className="bg-gray-800 hover:bg-gray-700 transition-all-smooth text-gray-300">
                       {tech}
                   </Badge>
               ))}
           </div>
       </CardContent>
          <CardFooter className="flex gap-3">
              <Button asChild variant="default" size="sm" className="bg-blue-600 hover:bg-blue-500 transition-all-smooth flex-1">
                  <Link href={`/projects/${project.slug}`}>
                      Learn More →
                  </Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-all-smooth flex-1">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                  </a>
              </Button>
          </CardFooter>
      </Card>
    )

}