import * as Yup from 'yup';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const language = i18next.use(LanguageDetector);

const lngs = {
  email: {
    en: 'Enter your email in the format your@email.com',
    ua: 'Введіть електронну пошту в форматі your@email.com',
  },
  required: {
    en: 'Required field',
    ua: 'Необхідно заповнити поле',
  },
  password: {
    en: 'Field can contain Latin letters, numbers and symbols',
    ua: 'Поле може містити літери латиниці, цифри та знаки',
  },
  passwordLength: {
    en: 'The password must be between 5 and 30 characters long',
    ua: 'Пароль має бути від 5 до 30 символів',
  },
  emailLength: {
    en: 'Email must be between 7 and 63 characters long',
    ua: 'Електронна пошта повинна містити від 7 до 63 символів',
  },
};

export const validationLoginSchema = Yup.object({
  email: Yup.string()
    .email(language.resolvedLanguage === 'uk' ? lngs.email.ua : lngs.email.en)
    .min(7)
    .max(63)
    .email()
    .required(
      language.resolvedLanguage === 'uk' ? lngs.required.ua : lngs.required.en,
    )
    .typeError(
      language.resolvedLanguage === 'uk' ? lngs.email.ua : lngs.email.en,
    ),

  password: Yup.string()
    .min(5)
    .max(30)
    .required(
      language.resolvedLanguage === 'uk' ? lngs.required.ua : lngs.required.en,
    )
    .typeError(
      language.resolvedLanguage === 'uk' ? lngs.password.ua : lngs.password.en,
    ),
});

export const validate = (values: { email: string; password: string; })  => {
    interface FormValues {
        email: string;
        password: string;
      }
      
      const errors: Partial<FormValues> = {};

  if (!values.email) {
    errors.email =
      language.resolvedLanguage === 'uk' ? lngs.required.ua : lngs.required.en;
  } else if (values.email.length < 6 || values.email.length > 62) {
    errors.email =
      language.resolvedLanguage === 'uk'
        ? lngs.emailLength.ua
        : lngs.emailLength.en;
  }

  if (!values.password) {
    errors.password =
      language.resolvedLanguage === 'uk' ? lngs.required.ua : lngs.required.en;
  } else if (values.password.length < 4 || values.password.length > 29) {
    errors.password =
      language.resolvedLanguage === 'uk'
        ? lngs.passwordLength.ua
        : lngs.passwordLength.en;
  }

  return errors;
};