import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  data: any = {
    // 設定預設狀態
    email: '123@gmail.com',
    phone: '0212345678',
    phones: [],
    password: 123456,
    isRemember: true,
  };

  // 動態欄位,建立陣列裡面有三個 undefined
  phone_fields = new Array(3);

  origClass = '';
  constructor() { }


  ngOnInit(): void {
    this.origClass = document.body.className;
    document.body.className = 'bg-gradient-primary';
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    document.body.className = this.origClass;

  }

  doSubmit(form: NgForm) {
    console.log('form:', form);
    if (form.valid) {
      // do....
      console.log('表單驗證成功');
    }
  }

  isFieldValid(control: NgModel) {
    console.log('control:', control);
    // 檢查表單已經按過 submit ,並且本身欄位 invalid 驗證已過
    // console.log('control.invali:', control.invalid);
    // console.log('control.formDirective.submitted:', control.formDirective.submitted);
    return control.formDirective.submitted && control.invalid;
  }

}
