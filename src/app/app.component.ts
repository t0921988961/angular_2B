import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo1';

  constructor(private translateService: TranslateService) {
    this.translateService.setTranslation('zh-TW', {
      Hello: '哈囉'
    });
  }

  ngOnInit(): void {
    this.translateService.use('zh-TW');
  }
}
