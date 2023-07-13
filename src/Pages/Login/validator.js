const strongPassword = new RegExp(
  "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
);
const mediumPassword = new RegExp(
  "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))"
);

const validEmail = new RegExp(
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
);

const passwordCheck = (pass) => {
  if (pass !== "") {
    if (strongPassword.test(pass)) {
      return "strong";
    } else if (mediumPassword.test(pass)) {
      return "medium";
    } else {
      return "weak";
    }
  } else {
    return "none";
  }
};

const validateEmail = (email) => {
  if (email !== "") {
    if (validEmail.test(email)) return true;
    else return false;
  } else return "none";
};

export {
  strongPassword,
  mediumPassword,
  validEmail,
  passwordCheck,
  validateEmail,
};
