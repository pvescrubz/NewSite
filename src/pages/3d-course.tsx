import { AdvantagesBlock } from "../components/Advantages-block";
import { After } from "../components/After";
import { HeroBlock } from "../components/Hero-course.tsx";
import { Firms } from "../components/Firms.tsx";
import { StudWorks } from "../components/Student-wroks.tsx";
import { AccordionExpandDefault } from "../components/Accordion.tsx";
import { Teachers } from "../components/Teachers.tsx";
import { Whywe } from "../components/Whywe.tsx";
import {FAQ} from "../components/FAQ.tsx";
import { CourseMain } from "../components/CourseMain.tsx";
import { Price } from "../components/Price.tsx";
import { useTranslation } from 'react-i18next';
import FormComponent from "../components/Form.tsx";

export const D3_course = () => {
    const { t } = useTranslation();
    // Определите контекст страницы (например, "ux" или "design")
    const context = "d3"; // или "design" в зависимости от контекста страницы
    return (
    <>
    <div className="container">
    <CourseMain  context={context} t={t}/>
     <AdvantagesBlock />
    <HeroBlock context={context} t={t} />
    <After context={context} t={t}/>
    <Firms />
    <StudWorks />
    <Teachers context={context} t={t} />
    <Price context={context} t={t} />
    <AccordionExpandDefault  context={context} t={t} />
    <Whywe />
    <FormComponent />
    <FAQ />
    </div>
    </>
    
       )
}