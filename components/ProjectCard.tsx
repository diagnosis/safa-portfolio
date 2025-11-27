import {Project} from "@/lib/projects";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";



export const ProjectCard =
    ({project} :{project: Project} )=> {
    return(
      <Card className="flex flex-col h-full">
          <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
          </CardHeader>

       <CardContent className="flex-grow">
           <div className={"flex flex-wrap gap-2"}>
               {project.techStack.map((tech)=>(
                   <Badge key={tech} variant={"secondary"}>
                       {tech}
                   </Badge>
               ))}
           </div>
       </CardContent>
          <CardFooter className="flex gap-3">
              <Button asChild variant="default" size="sm">
                  <Link href={`/projects/${project.slug}`}>
                      Learn More →
                  </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                  </a>
              </Button>
          </CardFooter>
      </Card>
    )

}