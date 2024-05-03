import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';


const SummaryText = styled(Typography)({
  });
  

export const AccordionExpandDefault = () => {
  return (
    <div>
      <Accordion defaultExpanded className='accordion-block'>
      {/* <StyledTypography>12 month</StyledTypography> */}
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >  
        <SummaryText className="accordion-title">12 month</SummaryText>
        <div className='accordion-title_block white-round'>
        <Typography className="accordion-module">Модуль 1</Typography>
        <Typography className='accordion-module-name'>Основы UX/UI-дизайна</Typography>
        </div>
        
        </AccordionSummary>
        <AccordionDetails>
        <ul className='accordion-list'>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae excepturi hic ad dolorum libero dolores accusantium blanditiis nesciunt provident consequuntur, et aperiam eius illo quas cumque, nemo animi! Consequatur, est.</li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae excepturi hic ad dolorum libero dolores accusantium blanditiis nesciunt provident consequuntur, et aperiam eius illo quas cumque, nemo animi! Consequatur, est.</li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae excepturi hic ad dolorum libero dolores accusantium blanditiis nesciunt provident consequuntur, et aperiam eius illo quas cumque, nemo animi! Consequatur, est.</li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae excepturi hic ad dolorum libero dolores accusantium blanditiis nesciunt provident consequuntur, et aperiam eius illo quas cumque, nemo animi! Consequatur, est.</li>
          
        </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion  className='accordion-block'>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >  
        <SummaryText className="accordion-title">12 month</SummaryText>
        <div className='accordion-title_block white-round'>
        <Typography className="accordion-module">Модуль 1</Typography>
        <Typography className='accordion-module-name'>Основы UX/UI-дизайна</Typography>
        </div>
        
        </AccordionSummary>
        <AccordionDetails>
        <ul className='accordion-list'>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae excepturi hic ad dolorum libero dolores accusantium blanditiis nesciunt provident consequuntur, et aperiam eius illo quas cumque, nemo animi! Consequatur, est.</li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae excepturi hic ad dolorum libero dolores accusantium blanditiis nesciunt provident consequuntur, et aperiam eius illo quas cumque, nemo animi! Consequatur, est.</li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae excepturi hic ad dolorum libero dolores accusantium blanditiis nesciunt provident consequuntur, et aperiam eius illo quas cumque, nemo animi! Consequatur, est.</li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae excepturi hic ad dolorum libero dolores accusantium blanditiis nesciunt provident consequuntur, et aperiam eius illo quas cumque, nemo animi! Consequatur, est.</li>
          
        </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}