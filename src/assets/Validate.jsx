export const checkValidDataForLogin = (email, pass) => {

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPassValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pass);

    if (!isEmailValid) {
        return "Email id is not valid!!";
    }
    if (!isPassValid) {
        return "Password is not valid!!";
    }

    return null;
}

export const checkValidDataForRegistration = (email, pass, phone) => {

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPassValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pass);
    const isPhoneValid = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone);

    if (!isEmailValid) {
        return "Email id is not valid!!";
    }
    if (!isPassValid) {
        return "Password is not valid!!";
    }
    if (!isPhoneValid) {
        return "Phone number is not valid!!";
    }

    return null;
}