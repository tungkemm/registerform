export const validateFullname = (text) => {
  const checkSpecial = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (text.length > 0) {
    if (text.replace(/[^0-9]/g, "").length > 0 || checkSpecial.test(text)) {
      return "Fullname khong duoc nhap so va ky tu dac biet";
    } else {
      return "";
    }
  } else {
    return "Fullname khong duoc de trong";
  }
};

export const validateEmail = (text) => {
  const isEmail =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

  if (text.length > 0) {
    if (!isEmail.test(text)) {
      return "Email khong hop le";
    } else {
      return "";
    }
  } else {
    return "Email khong duoc de trong";
  }
};

export const validateUsername = (text) => {
  const isUsername = /^[a-z0-9_-]{6,16}$/;

  if (text.length > 0) {
    if (!isUsername.test(text)) {
      return "Username phai viet lien, co it nhat 6 ky tu va ko chua ky tu dac biet";
    } else {
      return "";
    }
  } else {
    return "Username khong duoc de trong";
  }
};

export const validatePassword = (text) => {
  const isStrongPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/;

  if (text.length > 0) {
    if (!isStrongPassword.test(text)) {
      return "Mat khau khong du manh (vi du mat khau hop le: Tung@2000)";
    } else {
      return "";
    }
  } else {
    return "Password khong duoc de trong";
  }
};

export const validateConfirmPassword = (password, confirmPassword) => {
  if (confirmPassword.length > 0) {
    if (confirmPassword !== password) {
      return "Mat khau khong trung khop";
    } else {
      return "";
    }
  } else {
    return "Confirm password khong duoc de trong";
  }
};

export const validatePhone = (text) => {
  const isVNPhoneMobile =
    /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;

  if (text.length > 0) {
    if (!isVNPhoneMobile.test(text)) {
      return "Phone khong hop le";
    } else {
      return "";
    }
  } else {
    return "Phone khong duoc de trong";
  }
};
