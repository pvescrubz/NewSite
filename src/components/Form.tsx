import { useState, useEffect } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consent: false,
  });

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [telegramSent, setTelegramSent] = useState(false);
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const TOKEN = '5671513077:AAHKA18Lhe6gyKHP0Ie0qNLy7BWxJ80j_Jc';
  const CHAT_ID = '-1001765528652';
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const handleChange = (e: { target: { name: string; value: string; type: string; checked: boolean; }; }) => {
    const { name, value, type, checked } = e.target;
    if (name === 'name') {
      const regex = /^[а-яА-ЯёЁa-zA-Z\s]+$/;
      if (!regex.test(value)) {
        setNameError(true);
      } else {
        setNameError(false);
      }
    }
    if (name === 'phone') {
      const phoneRegex = /^\d{11}$/;
      if (!phoneRegex.test(value)) {
        setPhoneError(true);
      } else {
        setPhoneError(false);
      }
    }
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setSubmitted(true);
    const { name, email, phone } = formData;
    const message = `Заявка с сайта Test:\nИмя: ${name}\nТелефон: ${phone}\nEmail: ${email}`;
    try {
      const response = await fetch(URI_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
        }),
      });
      if (response.ok) {
        setTelegramSent(true);
        setMessage('Заявка отправлена');
        setShowMessage(true);
      } else {
        console.error(`Ошибка отправки сообщения в Telegram: ${response.status} ${response.statusText}`);
        setMessage('Ошибка отправки заявки , попробуйте позже!');
        setShowMessage(true);
      }
    } catch (error) {
      console.error('Ошибка отправки сообщения в Telegram:', error);
      setMessage('Ошибка отправки заявки , попробуйте позже!');
      setShowMessage(true);
    }
  };

  useEffect(() => {
    if (showMessage) {
      const timeout = setTimeout(() => {
        setShowMessage(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [showMessage]);

  return (
    <div className='container'>
      <div className='form-content' id='form-comp'>
      <div className='form-left'>
        <h2 className='form-title-left'>Оставьте заявку на консультацию о курсе</h2>
        <p className='form-left-text'>Наше место встречи каждый день, вне зависимости от того, в каких странах мы живем. Сессии с экспертами, портфолио-ревью, конкурсы, совместные творческие проекты.Оставьте заявку и станьте частью отличного комьюнити!
</p>
      </div>
      <div className='form-right'>
    <form className='main-form' onSubmit={handleSubmit}>
      <div className='form-input'>
        
        <input
          type="text"
          id="name"
          name="name"
          placeholder='Имя'
          value={formData.name}
          onChange={handleChange}
          required
        />
        {nameError && <small style={{ color: 'red' }}>Имя может содержать только буквы и пробелы</small>}
      </div>
      <div className='form-input'>
        
        <input
          type="email"
          id="email"
          name="email"
          placeholder='example@gmail.com'
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-input'>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder='+7 (777) 7777777'
          required
        />
        {phoneError && <small style={{ color: 'red' }}>Неправильный формат номера</small>}
      </div>
      <div className='form-input form-input-personal'>
      <input className='check-box'
          type="checkbox"
          id="consent"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          required
        />
        <label className='label-for' htmlFor="consent">Отправляя заявку, вы даете согласие на обработку своих персональных данных в соответствии с политикой конфиденциальности
</label>
        
      </div>
      <button className="submit" type="submit" disabled={submitted && !telegramSent}>
        Отправить
      </button>
      {showMessage && <p>{message}</p>}
    </form>
    </div>
    </div>
    </div>
  );
};

export default FormComponent;