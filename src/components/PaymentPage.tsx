/* eslint-disable react-refresh/only-export-components */
import { forwardRef, useState } from "react";
import "./PaymentPage.css";
import { TextField, TextFieldProps, styled } from "@mui/material";
import { InputMask } from "@react-input/mask";
import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SimpleBackdrop from "./SimpleBackdrop";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const PaymentTextField = styled((props: TextFieldProps) => (
  <TextField {...props} />
))(() => ({
  "& .MuiOutlinedInput-root": {
    color: "#000",
    borderRadius: "3px",

    "& fieldset": {
      transition: "border .1s ease-in-out",
      borderColor: "#acacac",
      borderRadius: "3px",
    },
    "& .MuiInputBase-input": {
      padding: "14px",
    },
    "&:hover fieldset": {
      border: `2px solid '#acacac'`,
      borderColor: "#acacac",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#acacac",
      color: "#acacac",
    },
  },

  "& label": {
    color: "#acacac",
  },

  "& label.Mui-focused": {
    color: "#acacac",
  },
  "& .Mui-error fieldset": {
    border: "2px solid #d32f2f",
    borderRadius: "3px",
  },

  "& .MuiInputAdornment-root": {
    zIndex: 1,
  },
}));

const CardNumberMask = forwardRef<HTMLInputElement>((props, forwardedRef) => {
  return (
    <InputMask
      ref={forwardedRef}
      mask="____ ____ ____ ____"
      replacement={{ _: /\d/ }}
      {...props}
    />
  );
});
const CardMmMask = forwardRef<HTMLInputElement>((props, forwardedRef) => {
  return (
    <InputMask
      ref={forwardedRef}
      mask="__"
      replacement={{ _: /\d/ }}
      {...props}
      onChange={(event: { target: { value: string; }; }) => {
        const value = event.target.value;
        if (value.length > 2) {
          event.target.value = value.slice(0, 2);
        }
        if (+value > 12) {
          event.target.value = "12";
        }
      }}
    />
  );
});
const CardYyMask = forwardRef<HTMLInputElement>((props, forwardedRef) => {
  return (
    <InputMask
      ref={forwardedRef}
      mask="__"
      replacement={{ _: /\d/ }}
      {...props}
    />
  );
});
const CardCvcMask = forwardRef<HTMLInputElement>((props, forwardedRef) => {
  return (
    <InputMask
      ref={forwardedRef}
      mask="___"
      replacement={{ _: /\d/ }}
      {...props}
    />
  );
});

const schema = object().shape({
  fullName: string().matches(
    /^[a-zA-Zа-яА-Я-]+(?:\s+[a-zA-Zа-яА-Я-]+){1,}$/,
    "Поле не должно содержать цифры или спец.символы"
  ),

  cardName: string().matches(
    /^[a-zA-Zа-яА-Я-]+(?:\s+[a-zA-Zа-яА-Я-]+){1,}$/,
    "Поле не должно содержать цифры или спец.символы"
  ),

  email: string().matches(
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@[a-zA-Z0-9а-яА-Я-]+(\.[a-zA-Z]{2,})+$/iu,
    "Введите e-mail в формате expample@example.com"
  ),

  cardCVC: string().matches(/^\d{3}$/iu, "Это поле обязательно для заполнения"),

  cardMM: string().matches(
    /^(0[1-9]|1[0-2])$/,
    "Это поле обязательно для заполнения"
  ),
  cardYY: string().matches(/\d{2}$/, "Это поле обязательно для заполнения"),

  cardNumber: string().test(
    "global-ok",
    "Введите действительный номер карты",
    (value: string | undefined) => (value ? isCardValid(value) : false)
  ),
});

function isCardValid(value: string) {
  value = value.replace(/\s+|-/g, "");
  if (!/^\d+$/.test(value)) {
    return false;
  }
  if (value.length < 13 || value.length > 19) {
    return false;
  }
  let sum = 0;
  let shouldDouble = false;
  for (let i = value.length - 1; i >= 0; i--) {
    let digit = parseInt(value.charAt(i), 10);
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
}

const PaymentPage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [showLoader, setShowLoader] = useState(false);


  const onSubmit = (data: unknown) => {
    if (data) {
      setShowLoader(true);
      setTimeout(() => {
        reset();
        setShowLoader(false);
        setPaymentSuccess(true);

      }, 2000);
    }
  };

  return (
    <>
      {paymentSuccess ? (
        <>
          <div className="container error__container">
            <div className="title trans__error">
              
            </div>
          </div>
        </>
      ) : (
        <>
          <Helmet>
            <title>
              
            </title>
          </Helmet>
          <section className="payment-section">
            <div className="container">
              <form
                noValidate
                className="payment-form form-transaction"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="payment-form-item payment-form-item-left">
                  <div className="payment-form-inputs">
                    <h3 className="payment-form-title">
                    
                    </h3>
                    <div className="payment-form-input-wrapper">
                      <label className="payment-form-label">
                        
                      </label>
                      <PaymentTextField
                        name="cardNumber"
                        autoComplete="card-number"
                        error={!!errors.cardNumber}
                        InputProps={{
                          ...register("cardNumber"),
                          inputComponent: CardNumberMask as unknown,
                          placeholder: "1234 5678 9101 1121",
                        }}
                        required
                      />
                    </div>
                    <div className="payment-form-input-wrapper">
                      <label className="payment-form-label">
                       
                      </label>
                      <PaymentTextField
                        name="cardName"
                        autoComplete="card-name"
                        error={!!errors.cardName}
                        InputProps={{
                          ...register("cardName"),
                          placeholder: ``,
                        }}
                        required
                      />
                    </div>
                    <div className="payment-form-input-wrappers-small">
                      <div className="payment-form-input-wrapper payment-form-input-wrapper-small mm-wrapper">
                        <label className="payment-form-label">
                         
                        </label>
                        <PaymentTextField
                          sx={{
                            "& .MuiInputBase-input": {
                              textAlign: "center",
                            },
                          }}
                          name="cardMM"
                          autoComplete="card-mm"
                          error={!!errors.cardMM}
                          InputProps={{
                            ...register("cardMM"),
                            inputComponent: CardMmMask as unknown,
                            placeholder: "MM",
                          }}
                          required
                        />
                      </div>
                      <div className="payment-form-input-wrapper payment-form-input-wrapper-small yy-wrapper">
                        <label className="payment-form-label">
                         
                        </label>
                        <PaymentTextField
                          name="cardYY"
                          sx={{
                            "& .MuiInputBase-input": {
                              textAlign: "center",
                            },
                          }}
                          autoComplete="card-yy"
                          error={!!errors.cardYY}
                          InputProps={{
                            ...register("cardYY"),
                            inputComponent: CardYyMask as unknown,
                            placeholder: "YY",
                          }}
                          required
                        />
                      </div>
                      <div className="payment-form-input-wrapper payment-form-input-wrapper-small cvc-wrapper">
                        <label className="payment-form-label">CVC</label>
                        <PaymentTextField
                          sx={{
                            "& .MuiInputBase-input": {
                              textAlign: "center",
                            },
                          }}
                          name="cardCVC"
                          autoComplete="card-cvc"
                          error={!!errors.cardCVC}
                          InputProps={{
                            ...register("cardCVC"),
                            inputComponent: CardCvcMask as unknown,
                            placeholder: "CVC",
                          }}
                          required
                        />
                      </div>
                    </div>

                    <button className="payment-form-btn" type="submit">
                     
                    </button>
                    <div className="payment-form-text-small">
                      
                      <a href={'/'} target="_blank">
                        
                      </a>
                    </div>
                  </div>
                </div>

                <div className="payment-form-item payment-form-item-right">
                  <div className="payment-form-inputs">
                    <h3 className="payment-form-title">
                     
                    </h3>
                    <div className="payment-form-input-wrapper">
                      <label className="payment-form-label">
                       
                      </label>
                      <PaymentTextField
                        name="fullName"
                        autoComplete="fullname"
                        error={!!errors.fullName}
                        InputProps={{
                          ...register("fullName"),
                          placeholder: `123`,
                        }}
                        required
                      />
                    </div>
                    <div className="payment-form-input-wrapper payment-form-input-wrapper-lastright">
                      <label className="payment-form-label">
                        
                      </label>
                      <PaymentTextField
                        name="email"
                        autoComplete="email"
                        error={!!errors.email}
                        InputProps={{
                          ...register("email"),
                          placeholder: "example@example.com",
                        }}
                        required
                      />
                    </div>
                    <div className="payment-form-right-text">
                      <p className="payment-form-right-text-total">
                        
                      </p>
                      <p
                        id="pay-in-full"
                        className="payment-form-right-text-totalamount"
                      >
                        
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
          <SimpleBackdrop open={showLoader} />
        </>
      )}
    </>
  );
};

export default PaymentPage;


