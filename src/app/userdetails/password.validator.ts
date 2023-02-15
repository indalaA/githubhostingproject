import { FormControl } from '@angular/forms';

export interface ValidationResult {
    [key: string]: boolean;
}

export class PasswordValidator {

    public static strong(control: FormControl): ValidationResult |null{
        let value:string=control.value || '';
        let msg="";
        if (!value) { 
            return null
        }
        let hasNumber = /\d/.test(control.value);
        let hasUpper = /[A-Z]/.test(control.value);
        let hasLower = /[a-z]/.test(control.value);
        let hasspecialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(control.value);
        console.log('Num, Upp, Low', hasNumber, hasUpper, hasLower ,hasspecialCharacters);
        const valid = hasNumber && hasUpper && hasLower && hasspecialCharacters;
        if(!valid)
        {     
        return { strong: true};
        }
        return  null
        
    }
}

function passwordstrength(passwordstrength: any) {
    throw new Error('Function not implemented.');
}
