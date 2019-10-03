export const required = (values: string) => (!values ? 'Required' : undefined);

export const validateEmail = (values: string) => {
  if(!values) {
    return 'Required'
  } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values)) {
    return 'Invalid'
  } else {
    return null;
  }
};

export const validatePassword = (values: any) => {
  if(!values) {
    return 'Required'
  } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/.test(values)) {
      return '8 to 15 characters which contain at least one numeric digit, one uppercase and one lowercase letter'
  } else {
    return null;
  }
};