import { AbstractControl, ValidationErrors } from "@angular/forms"

export const PasswordStrengthValidator = function (control: AbstractControl): ValidationErrors | null {

  let value: string = control.value || '';
  let msg = "";
  if (!value) {
    return null
  }

  let upperCaseCharacters = /[A-Z]+/g;
  let lowerCaseCharacters = /[a-z]+/g;
  let numberCharacters = /[0-9]+/g;
  let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    
if(upperCaseCharacters.test(value)==false)
{
  return{
    passwordStrength:'password should contain at least one uppercase letter'
  }
}
if(lowerCaseCharacters.test(value)==false)
{
  return{
    passwordStrength:'password should contain at least one lowercase letter'
  }
}
if(numberCharacters.test(value)==false)
{
  return{
    passwordStrength:'password should contain at least one number'

  }
}
if(specialCharacters.test(value)==false)
{
  return{
    passwordStrength:'password should contain at least on special Character'
  }
}
return null
}