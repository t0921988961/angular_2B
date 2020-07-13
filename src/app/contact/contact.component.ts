import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MetaService } from '@ngx-meta/core';
import { LanguageService } from '../service/language/language.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  submitted = false;
  langCode = this.languageService.nowUrlPathlangCode;
  intentionList = [
    {
      value: 'quote', text: 'contact.intentionList.quote'
    }, {
      value: 'support', text: 'contact.intentionList.support'
    }, {
      value: 'partner', text: 'contact.intentionList.partner'
    }];
  modelList = null;





  HelloForm = new FormGroup({
    uIntentionSelect: new FormControl('',),
    modelSelect: new FormControl(),
    email: new FormControl('123@gmail.com', [Validators.required, Validators.email]),
    message: new FormControl('test', [Validators.required, Validators.minLength(5)]),
  });

  constructor(
    public languageService: LanguageService,
    public translate: TranslateService,
    private meta: MetaService,
  ) {

    if (this.langCode === 'zh-TW' || this.langCode === 'zh-CN') {
      this.modelList = [
        {
          value: 1,
          text: 'contact.form.model1'
        }, {
          value: 2,
          text: 'contact.form.model2'
        }, {
          value: 3,
          text: 'contact.form.model3'
        }, {
          value: 4,
          text: 'contact.form.model4'
        }, {
          value: 5,
          text: 'contact.form.model5'
        }, {
          value: 6,
          text: 'contact.form.model6'
        }, {
          value: 7,
          text: 'contact.form.model9'
        }, {
          value: 8,
          text: 'contact.form.model1',
        }, {
          value: 9,
          text: 'contact.form.model2',
        }
      ];
    }
    if (this.langCode === 'en-US' || this.langCode === 'en-GB' || this.langCode === 'fr-FR' || this.langCode === 'de-DE') {
      this.modelList = [
        {
          value: 1,
          text: 'contact.form.model1'
        }, {
          value: 2,
          text: 'contact.form.model2'
        }, {
          value: 3,
          text: 'contact.form.model3'
        }, {
          value: 4,
          text: 'contact.form.model4'
        }, {
          value: 5,
          text: 'contact.form.model5'
        }, {
          value: 6,
          text: 'contact.form.model6'
        }, {
          value: 7,
          text: 'contact.form.model7'
        }, {
          value: 8,
          text: 'contact.form.model8'
        }, {
          value: 9,
          text: 'contact.form.model9'
        }, {
          value: 10,
          text: 'contact.form.model1',
        }, {
          value: 11,
          text: 'contact.form.model2',
        }
      ];
    }
    if (this.langCode === 'ja-JP') {
      this.modelList = [
        {
          value: 1,
          text: 'contact.form.model1'
        }, {
          value: 2,
          text: 'contact.form.model2'
        }, {
          value: 3,
          text: 'contact.form.model3'
        }, {
          value: 4,
          text: 'contact.form.model4'
        }, {
          value: 5,
          text: 'contact.form.model5'
        }, {
          value: 6,
          text: 'contact.form.model6'
        }, {
          value: 7,
          text: 'contact.form.model7'
        }, {
          value: 8,
          text: 'contact.form.model8'
        }, {
          value: 9,
          text: 'contact.form.model2',
        }
      ];
    }
    if (this.langCode === 'ko-KR') {
      this.modelList = [
        {
          value: 1,
          text: 'contact.form.model1'
        }, {
          value: 2,
          text: 'contact.form.model6'
        }, {
          value: 3,
          text: 'contact.form.model2',
        }
      ];
    }
  }

  ngOnInit() {
    // this.meta.setTitle(this.translate.instant('contact.title'));
    // this.meta.setTag('description', this.translate.instant('contact.description'));
  }

  ngOnDestroy(): void {
    // this.meta.setTitle('');
    // this.meta.setTag('description', '');

  }

  doSubmit(form) {
    console.log('form:', form);
    console.log('Hello');
    this.submitted = true;
    console.log('this.HelloForm.value => ', this.HelloForm.value);
    console.log('this.submitted:', this.submitted);
  }

}
