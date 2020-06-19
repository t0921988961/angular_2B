import { Component, OnInit } from '@angular/core';
import { CallApiService } from 'src/app/service/callAPI/call-api.service';
import { LanguageService } from 'src/app/service/language/language.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.scss']
})
export class FootComponent implements OnInit {

  // API URL Domain name
  apiUrl = this.callApiService.apiUrl;
  // For Formal-site
  apiParameter = this.callApiService.apiParameter;
  apiLangParameter = this.callApiService.apiLangParameter;

  apiFootResponse$: Observable<any>;

  constructor(public translateService: LanguageService, public callApiService: CallApiService) { }

  ngOnInit() {
    const isFooterApiPath = this.apiUrl + '/' + this.apiParameter + '/FooterToB/' + this.translateService.nowLangCode;
    this.apiFootResponse$ = this.callApiService.get(isFooterApiPath, 'Foot_Api');
  }

}
