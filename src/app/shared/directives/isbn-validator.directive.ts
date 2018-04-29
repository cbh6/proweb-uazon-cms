import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import * as validator from 'validator';
@Directive({
  selector: '[validateIsbn][formControlName],[validateIsbn][formControl],[validateIsbn][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: forwardRef(() => IsbnValidator), multi: true }]
})
export class IsbnValidator implements Validator {
  constructor() {}

  validate(c: AbstractControl): { [key: string]: any } {
    // self value (e.g. retype password)
    const v = c.value;

    if (v && !validator.isISBN(v.toString())) {
      return {
        validateIsbn: false
      };
    }
    return null;
  }
}
