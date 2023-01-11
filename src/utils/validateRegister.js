export const validateEmail = (text) => {
  const isEmail =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

  if (!isEmail.test(text)) {
    return true;
  } else {
    return false;
  }
};

export const validateUsername = (text) => {
  const isUsername = /^[a-z0-9_-]{6,16}$/;

  if (!isUsername.test(text)) {
    return true;
  } else {
    return false;
  }
};

export const validatePassword = (text) => {
  const isStrongPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/;

  if (!isStrongPassword.test(text)) {
    return true;
  } else {
    return false;
  }
};

export const validateConfirmPassword = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    return true;
  } else {
    return false;
  }
};

export const validatePhone = (text) => {
  const isVNPhoneMobile =
    /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;

  if (!isVNPhoneMobile.test(text)) {
    return true;
  } else {
    return false;
  }
};
