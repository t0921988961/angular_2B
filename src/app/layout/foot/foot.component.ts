import { Component, OnInit } from '@angular/core';
import { CallApiService } from 'src/app/service/callAPI/call-api.service';
import { LanguageService } from 'src/app/service/language/language.service';

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

  // nowLangCode = this.translateService.nowLangCode;
  headMenuLists = null;

  constructor(public translateService: LanguageService, public callApiService: CallApiService) { }

  ngOnInit() {

    {
      // tslint:disable-next-line:max-line-length
      this.callApiService.get(this.apiUrl + '/' + this.apiParameter + '/FooterToB/' + this.translateService.nowLangCode).subscribe((res) => {
        // console.log('Footter res:', res);
        this.headMenuLists = res;
      },
        (error) => {
          console.log('Error footer API', error);
        }
      );
    }
  }

}
