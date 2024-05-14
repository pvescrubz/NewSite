import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';
import React from 'react';

interface MycontextPropse {
    context: string; // Определяем тип context как строку
    t: (key: string) => string; // Предполагая, что t имеет тип any, но лучше указать конкретный тип, если это возможно
  }


const SummaryText = styled(Typography)({
  });
  

export const AccordionExpandDefault:React.FC<MycontextPropse> = ({ context, t }) => {
 
  return (
    <div>
      <Accordion defaultExpanded className='accordion-block'>
      {/* <StyledTypography>12 month</StyledTypography> */}
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >  
        <SummaryText className="accordion-title">2 месяцев</SummaryText>
        <div className='accordion-title_block white-round'>
        <Typography className="accordion-module">Модуль 1</Typography>
        <Typography className='accordion-module-name'>{t(`${context}.accordion.title1`)}</Typography>
        </div>
        
        </AccordionSummary>
        <AccordionDetails>
        <ul className='accordion-list'>
          <li>{t(`${context}.accordion.item1`)}</li>
          <li>{t(`${context}.accordion.item2`)}</li>
          <li>{t(`${context}.accordion.item3`)}</li>
          <li>{t(`${context}.accordion.item4`)}</li>
          <li>{t(`${context}.accordion.item5`)}</li>
          <li>{t(`${context}.accordion.item6`)}</li>
          <li>{t(`${context}.accordion.item7`)}</li>
        </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion  className='accordion-block'>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >  
        <SummaryText className="accordion-title">1.5 месяца</SummaryText>
        <div className='accordion-title_block white-round'>
        <Typography className="accordion-module">Модуль 2</Typography>
        <Typography className='accordion-module-name'>{t(`${context}.accordion.title2`)}</Typography>
        </div>
        </AccordionSummary>
        <AccordionDetails>
        <ul className='accordion-list'>
        <li>{t(`${context}.accordion.item8`)}</li>
          <li>{t(`${context}.accordion.item9`)}</li>
          <li>{t(`${context}.accordion.item10`)}</li>
          <li>{t(`${context}.accordion.item11`)}</li>
          <li>{t(`${context}.accordion.item12`)}</li>
          <li>{t(`${context}.accordion.item13`)}</li>
          <li>{t(`${context}.accordion.item14`)}</li>
        </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion  className='accordion-block'>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >  
        <SummaryText className="accordion-title">2.5 месяца</SummaryText>
        <div className='accordion-title_block white-round'>
        <Typography className="accordion-module">Модуль 3</Typography>
        <Typography className='accordion-module-name'>{t(`${context}.accordion.title3`)}</Typography>
        </div>
        </AccordionSummary>
        <AccordionDetails>
        <ul className='accordion-list'>
        <li>{t(`${context}.accordion.item15`)}</li>
          <li>{t(`${context}.accordion.item16`)}</li>
          <li>{t(`${context}.accordion.item17`)}</li>
          <li>{t(`${context}.accordion.item18`)}</li>
          <li>{t(`${context}.accordion.item19`)}</li>
          <li>{t(`${context}.accordion.item20`)}</li>
          <li>{t(`${context}.accordion.item21`)}</li>
        </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion  className='accordion-block'>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >  
        <SummaryText className="accordion-title">3.5 месяца</SummaryText>
        <div className='accordion-title_block white-round'>
        <Typography className="accordion-module">Модуль 4</Typography>
        <Typography className='accordion-module-name'>{t(`${context}.accordion.title4`)}</Typography>
        </div>
        </AccordionSummary>
        <AccordionDetails>
        <ul className='accordion-list'>
        <li>{t(`${context}.accordion.item22`)}</li>
          <li>{t(`${context}.accordion.item23`)}</li>
          <li>{t(`${context}.accordion.item24`)}</li>
          <li>{t(`${context}.accordion.item25`)}</li>
          <li>{t(`${context}.accordion.item26`)}</li>
          <li>{t(`${context}.accordion.item27`)}</li>
          <li>{t(`${context}.accordion.item28`)}</li>
          <li>{t(`${context}.accordion.item29`)}</li>
          <li>{t(`${context}.accordion.item30`)}</li>
          <li>{t(`${context}.accordion.item31`)}</li>
        </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion  className='accordion-block'>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >  
        <SummaryText className="accordion-title">2 месяца</SummaryText>
        <div className='accordion-title_block white-round'>
        <Typography className="accordion-module">Модуль 5</Typography>
        <Typography className='accordion-module-name'>{t(`${context}.accordion.title5`)}</Typography>
        </div>
        </AccordionSummary>
        <AccordionDetails>
        <ul className='accordion-list'>
        <li>{t(`${context}.accordion.item22`)}</li>
          <li>{t(`${context}.accordion.item32`)}</li>
          <li>{t(`${context}.accordion.item33`)}</li>
          <li>{t(`${context}.accordion.item34`)}</li>
          <li>{t(`${context}.accordion.item35`)}</li>
          <li>{t(`${context}.accordion.item36`)}</li>
        </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion  className='accordion-block'>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >  
        <SummaryText className="accordion-title">2.5 месяца</SummaryText>
        <div className='accordion-title_block white-round'>
        <Typography className="accordion-module">Модуль 6</Typography>
        <Typography className='accordion-module-name'>{t(`${context}.accordion.title6`)}</Typography>
        </div>
        </AccordionSummary>
        <AccordionDetails>
        <ul className='accordion-list'>
        <li>{t(`${context}.accordion.item22`)}</li>
          <li>{t(`${context}.accordion.item37`)}</li>
          <li>{t(`${context}.accordion.item38`)}</li>
          <li>{t(`${context}.accordion.item39`)}</li>
          <li>{t(`${context}.accordion.item40`)}</li>

        </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}