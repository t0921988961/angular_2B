import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  constructor(
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

}
