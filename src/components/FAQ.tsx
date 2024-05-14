import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const FAQ = () => {
  return (
    <div className='container'>
        <h2 className='Faq-title title-black'>FAQ</h2>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
       Подойдет ли программа тем, кто ничего не знает про дизайн?
        </AccordionSummary>
        <AccordionDetails>
        При разработке программы мы ставили задачу сделать ее доступной для новичков. Уделяйте больше внимания практике и не пропускайте занятия. В остальном помогут эксперты, которые будут сопровождать вас на протяжении всего курса.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Чем отличается продуктовый дизайнер от UX/UI-дизайнера?
        </AccordionSummary>
        <AccordionDetails>
        Обязанности продуктового и UX/UI-дизайнера схожи, но приоритеты расставлены по-разному. Для UX/UI-дизайнера важнее пользовательский опыт и эмоции, которые вызывает взаимодействие с продуктом. Он стремится создать приятный и удобный интерфейс. Продуктовый дизайнер фокусируется на бизнес-задачах. Он должен понимать, как создать продукт, который будет соответствовать пользовательским ожиданиям и запросам рынка. Дизайн продукта должен приносить прибыль, поэтому зарплата продуктового дизайнера выше.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Могу ли я купить курс сейчас, а начать учиться позже?
        </AccordionSummary>
        <AccordionDetails>
        Да, вы можете оплатить курс сейчас, а начать обучение — с любым удобным потоком.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Какие способы оплаты курсов доступны?
        </AccordionSummary>
        <AccordionDetails>
        Оплатить полную стоимость курса можно картой российского или иностранного банка. Вы также можете выбрать рассрочку без первоначального взноса от одного из банков-партнеров. В зависимости от стоимости и страны условия могут меняться. В российских банках оплату можно разбить на срок от 6 до 36 месяцев, а в белорусских и казахских — от 6 до 24 месяцев.

Можно платить частями через «Яндекс Сплит». Рассрочку и «Сплит» оформляем на сумму, которая указана на сайте со скидкой.

Оставьте заявку, и менеджер расскажет вам подробнее об условиях оплаты.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
        Можно ли оплатить обучение за счет компании?
        </AccordionSummary>
        <AccordionDetails>
        Мы принимаем оплату за обучение от юридических лиц — если вы хотите получить счет на оплату через компанию, оставьте заявку, и
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         Можно ли поменять выбранный курс на другой в вашей школе?
        </AccordionSummary>
        <AccordionDetails>
        Да, вы можете перейти с одного курса на другой в рамках школы. При этом учитывается разница стоимости продуктов — возможна либо доплата, либо сохранение части суммы на депозите в зависимости от конкретной ситуации.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         Могу ли я вернуть деньги, если курс мне не подойдет?
        </AccordionSummary>
        <AccordionDetails>
        Если вы еще не начали проходить обучение, мы вернем 100% от суммы, поступившей к нам на расчетный счет. В остальных случаях сумма возврата будет меняться в зависимости от объема материалов, которые будут доступны в вашем личном кабинете на момент запроса на возврат. После прохождения половины курса деньги вернуть не получится. Условия возврата могут меняться в зависимости от конкретной ситуации и действующего законодательства.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Как устроено расписание занятий? Возможно ли совмещать учебу с работой?
        </AccordionSummary>
        <AccordionDetails>
        Занятия проходят онлайн, и в большинстве случаев вы сможете смотреть лекции или выполнять практические задания в удобное время в течение недели. Главное — сдавать свои работы вовремя и не отставать от группы.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         Сколько времени дается на домашние задания?
        </AccordionSummary>
        <AccordionDetails>
        Запланируйте посвятить 10–12 часов в неделю просмотру лекций и выполнению домашних заданий. Новые уроки открываются каждый вторник, раз в неделю вы будете выполнять одно задание с проверкой у наставника.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         Какая поддержка предоставляется во время прохождения курса?
        </AccordionSummary>
        <AccordionDetails>
        Наставник — ваш главный друг и помощник в процессе обучения. Это опытный практикующий специалист. Он проверяет ваши домашние работы и дает на них развивающую обратную связь, находит точки роста в ваших проектах, ошибки и удачные решения. Помимо этого, наставник находится с вами в одном учебном чате. Вы всегда можете обратиться к нему за советом и прийти с вопросом по домашнему заданию. Также вы будете видеться с наставником на вебинарах, где он будет подводить итоги прошедших недель и отвечать на ваши вопросы.

Координатор заботится о вашем удобстве на курсе: напоминает о вебинарах и дедлайнах сдачи работ, подсказывает, к кому можно обратиться по учебным вопросам, и собирает обратную связь.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         У меня сохранится доступ к материалам курса после его окончания?

        </AccordionSummary>
        <AccordionDetails>
        После официальной даты окончания курса программа доступна еще 6 месяцев. Вы также можете продлить доступ к обучению, оплатив дополнительно 30% от стоимости курса, которая была актуальна на момент вашего зачисления.
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}