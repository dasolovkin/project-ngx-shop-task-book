import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-shop-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.sass'],
})
export class OrderFormComponent{
  @Output()
  public confirm: EventEmitter<any> = new EventEmitter();

  public form: FormGroup = this.formBuilder.group({
    name: ['Джон Сина', [Validators.required]],
    telephone: ['+44 7911 123456', [Validators.required, this.phoneValidator]],
    email: ['john@gmail.com', [Validators.email, Validators.required]],
    address: ['Рымарская 25', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder) {
  }

  public submit(): void {
    console.log('submit');
    if (this.form.valid) {
      this.confirm.emit(this.form.value);
      this.form.reset();
    } else {
      this.form.setErrors({
        email: this.form.get('email')?.errors,
        telephone: this.form.get('telephone')?.errors,
        name: this.form.get('name')?.errors,
        address: this.form.get('address')?.errors,
      });
    }
  }

  public phoneValidator(formControl: FormControl) {
    if (!formControl.value || formControl.value.length < 13) {
      return { phoneValidator: { message: 'Номер телефона указан не корректно'} };
    }
    return null;
  }
}

