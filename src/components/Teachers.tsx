import { MySliderTeacher } from "./Swiper";

export const Teachers = () => {
  return (
    <div className="container">
    <div className="teachers-container">
      <h2 className="Teachers-title black-title">Преподаватели</h2>
      <div className="teachers-content">
        <div className="teachers-grid">
          <div className="teachers-item white-round">
            <img className="teachers-img" src="./public/teacher1.jpg"></img>
            <h2 className="teachers-title">Балик Тая</h2>
            <p className="teachers-text">
              Консультант по пользовательскому опыту и продакт-менеджменту в
              EPAM Systems Spain. В прошлом — дизайн-директор IBM iX Russia&CEE,
              дизайн-лид в Luxoft Digital. Клиенты: Citibank (US), JPMorgan, GIC
              (Singapore), UBS, Blackhorse, Nordea, ING (Luxembourg) и другие.
              Лектор в Британской высшей школе дизайна.
            </p>
          </div>
          <div className="teachers-item white-round">
            <img className="teachers-img" src="./public/teacher1.jpg"></img>
            <h2 className="teachers-title">Балик Тая</h2>
            <p className="teachers-text">
              Консультант по пользовательскому опыту и продакт-менеджменту в
              EPAM Systems Spain. В прошлом — дизайн-директор IBM iX Russia&CEE,
              дизайн-лид в Luxoft Digital. Клиенты: Citibank (US), JPMorgan, GIC
              (Singapore), UBS, Blackhorse, Nordea, ING (Luxembourg) и другие.
              Лектор в Британской высшей школе дизайна.
            </p>
          </div>
          <div className="teachers-item white-round">
            <img className="teachers-img" src="./public/teacher1.jpg"></img>
            <h2 className="teachers-title">Балик Тая</h2>
            <p className="teachers-text">
              Консультант по пользовательскому опыту и продакт-менеджменту в
              EPAM Systems Spain. В прошлом — дизайн-директор IBM iX Russia&CEE,
              дизайн-лид в Luxoft Digital. Клиенты: Citibank (US), JPMorgan, GIC
              (Singapore), UBS, Blackhorse, Nordea, ING (Luxembourg) и другие.
              Лектор в Британской высшей школе дизайна.
            </p>
          </div>
        </div>

        <div className="teachers-slider">
          <MySliderTeacher />
        </div>
      </div>
    </div>
    </div>
  );
};
