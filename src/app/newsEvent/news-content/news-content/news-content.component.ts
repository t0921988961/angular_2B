import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/service/language/language.service';
import { CallApiService } from 'src/app/service/callAPI/call-api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.scss']
})
export class NewsContentComponent implements OnInit {

  langCode = this.languageService.nowUrlPathlangCode;
  articleData;
  getNewsID;
  getNewsContent$: Observable<any>;



  constructor(
    public languageService: LanguageService,
    public callApiService: CallApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.getNewsContent$ = this.route.data
      .pipe(
        map(
          (res: any) => {
            return res.newsArticles;
          }
        ));
  }

}
