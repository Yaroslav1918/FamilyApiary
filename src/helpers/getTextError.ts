const signupErrorMessages = {
  400: "Здається, щось було вказано не вірно. Спробуйте, будь ласка, ще раз.",
  500: "Здається, щось було вказано не вірно. Спробуйте, будь ласка, ще раз.",
  409: "Користувач з такою електронною поштою вже зареєстрований.",
};

const loginErrorMessages = {
  403: "Ви ввели неправильний логін або пароль.",
  404: "Такого користувача не зареєстровано.",
  412: "Ви не підтвердили реєстрацію. Будь ласка, перевірте пошту в папці вхідні або папку спам.",
};
const signupErrorMessagesEN = {
  400: "It seems that something was said incorrectly. Please try again.",
  500: "It seems that something was said incorrectly. Please try again.",
  409: "A user with this email is already registered",
};

const loginErrorMessagesEN = {
  403: "You have entered an incorrect login or password.",
  404: "No such user registered.",
  412: "You have not confirmed your registration. Please check your inbox or spam folder.",
};

const getTextError = (errors: any) => (status: number) =>
  errors[status] || "Упс, щось пішло не так, спробуйте повторити пізніше :)";

export const getSignupError = getTextError(signupErrorMessages);
export const getLoginError = getTextError(loginErrorMessages);
export const getSignupErrorEN = getTextError(signupErrorMessagesEN);
export const getLoginErrorEN = getTextError(loginErrorMessagesEN);
