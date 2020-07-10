import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/service/language/language.service';
import { CallApiService } from 'src/app/service/callAPI/call-api.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-casestudy-list',
  templateUrl: './casestudy-list.component.html',
  styleUrls: ['./casestudy-list.component.scss']
})
export class CasestudyListComponent implements OnInit {

  langCode = this.languageService.nowUrlPathlangCode;

  apiCaseStudyList$: Observable<any>;
  apiCaseStudyList;


  constructor(
    public languageService: LanguageService,
    public callApiService: CallApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // Use ResolveService *************************************
    // console.log('this.route.snapshot.data.cres:', this.route.snapshot.data.cres);
    this.route.data.subscribe(
      res => {
        this.apiCaseStudyList = res.cres;
      }
    );
    // console.log('LIST this.route:', this.route.data);


    // Call LangCode API
    // this.apiCaseStudyList$ = this.callApiService.get(this.isCaseStudyListApiPath, 'CaseStudyList_API');
  }

}
