class Validate {
  email(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  password(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return re.test(String(password));
  }

  name(name) {
    const re = /^[a-zA-Z ]{2,30}$/;
    return re.test(String(name));
  }

  signup(params) {
    return (this.name(params['firstName']) && this.name(params['lastName'])
      && this.password(params['password']) && this.email(params['email']));
  }
}

export default new Validate();