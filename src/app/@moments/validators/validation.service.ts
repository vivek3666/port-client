import {Constants} from "../constants/constants";

export class ValidationService {

  static emailValidator(control: any) {
    if (control.value) {
      if (typeof control.value === 'string' && control.value.match(Constants.VALIDATE_EMAIL)) {
        return null;
      } else {
        return {'invalidEmailAddress': true};
      }
    }
    return null;
  }


  static requireEmailValidator(control: any) {
    if (!control.value || typeof control.value !== 'string' || control.value.trim() === '') {
      return {'requiredEmail': true};
    } else {
      return null;
    }
  }

  static requireFirstNameValidator(control: any) {
    if (!control.value || control.value.trim() === '') {
      return {'requiredFirstName': true};
    } else {
      return null;
    }
  }

  static requireLastNameValidator(control: any) {
    if (control.value === '' || control.value === undefined) {
      return {'requiredLastName': true};
    } else {
      return null;
    }
  }


  static requirePasswordValidator(control: any) {
    if (control.value === '' || control.value === undefined) {
      return {'requiredPassword': true};
    } else {
      return null;
    }
  }

  static required(control: any) {
    if (!control.value || control.value.trim() === '') {
      return {'requiredField': true};
    } else {
      return null;
    }
  }
}
