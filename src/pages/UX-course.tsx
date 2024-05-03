import { AdvantagesBlock } from "../components/Advantages-block";
import { After } from "../components/After";
import { HeroBlock } from "../components/Hero-course.tsx";
import { Firms } from "../components/Firms.tsx";
import { StudWorks } from "../components/Student-wroks.tsx";
import { AccordionExpandDefault } from "../components/Accordion.tsx";
import { Teachers } from "../components/Teachers.tsx";
import { Whywe } from "../components/Whywe.tsx";

export const UX_course = () => {
    return (
    <>
    <div className="container">
     <AdvantagesBlock />
    <HeroBlock />
    <After />
    <Firms />
    <StudWorks />
    <Teachers />
    <AccordionExpandDefault />
    <Whywe />
    </div>
    </>
    
       )
}