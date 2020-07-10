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

  langCode = this.languageService.nowUrlPathlangCode;
  intentionList = [
    {
      value: 'quote', text: 'contact.intentionList.quote'
    }, {
      value: 'support', text: 'contact.intentionList.support'
    }, {
      value: 'partner', text: 'contact.intentionList.partner'
    }];


  HelloForm = new FormGroup({
    uIntentionSelect: new FormControl(Validators.required),
    title: new FormControl('test'),
  });

  constructor(
    public languageService: LanguageService,
    public translate: TranslateService,
    private meta: MetaService,
  ) { }

  ngOnInit() {
    // this.meta.setTitle(this.translate.instant('contact.title'));
    // this.meta.setTag('description', this.translate.instant('contact.description'));
  }

  ngOnDestroy(): void {
    // this.meta.setTitle('');
    // this.meta.setTag('description', '');

  }

  doSubmit(form) {
    console.log('form => ', form);

  }

}
