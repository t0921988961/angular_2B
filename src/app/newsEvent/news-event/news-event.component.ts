import { Component, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from 'src/app/service/language/language.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { CallApiService } from 'src/app/service/callAPI/call-api.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news-event',
  templateUrl: './news-event.component.html',
  styleUrls: ['./news-event.component.scss']
})


export class NewsEventComponent implements OnInit, OnDestroy {

  langCode = this.languageService.nowUrlPathlangCode;
  tab = null;
  nowArrayList = [];
  // News Array
  newsList: Array<RootObject>;
  // Events Array
  eventsList: Array<RootObject>;

  // initial pagination
  showContentList = true;
  showArticleArr = null;

  // News article
  pageTotal = null;
  pageTotalArr = null;
  currentPage = null;
  hasPage = null;
  hasNext = null;

  // API News path
  articleListArr$: Observable<any>;
  articleListPath = 'https://pro.xyzprinting.com/getNewsList/en-US/1/100';

  // API Events path
  eventListArr$: Observable<any>;
  eventListPath = 'https://pro.xyzprinting.com/getPromotionList/en-US/1/100';

  constructor(
    public languageService: LanguageService,
    public callApiService: CallApiService,
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {
  }

  ngOnInit(): void {

    this.route.queryParamMap
      .pipe(map(params => params.get('tab')))
      .subscribe(
        (res) => {
          this.tab = res;
        }
      );

    // call News api
    this.http.get('https://pro.xyzprinting.com/getNewsList/en-US/1/100').subscribe({
      next: (res) => {
        console.log('GetNewsList res => ', res);
        this.newsList = res.newsList;
      },
      complete: () => {
        console.log('this.tab:', this.tab);
        this.switchApiArray(this.tab);
      }
    });

    // call Events api
    this.http.get('https://pro.xyzprinting.com/getPromotionList/en-US/1/100').subscribe({
      next: (res) => {
        console.log('GetPromotionList res => ', res);
        this.eventsList = res.newsList;
      },
      complete: () => {
        console.log('this.tab:', this.tab);
        this.switchApiArray(this.tab);
      }
    });
  }

  ngOnDestroy(): void {
    this.pageTotalArr = null;
  }

  onChangeTab(tabName) {
    this.tab = tabName;
    this.switchApiArray(tabName);
  }

  // Switch News or Events Array
  switchApiArray(tabName) {
    console.log('tabName:', tabName);
    console.log('this.nowArrayList:', this.nowArrayList);
    if (tabName === 'news') {
      console.log('news:');
      this.nowArrayList = this.newsList;
      this.pagination(this.nowArrayList, 1);
      return;
    }
    if (tabName === 'events') {
      console.log('events:');
      this.nowArrayList = this.eventsList;
      this.pagination(this.nowArrayList, 1);
      return;
    }
  }

  // News pagination
  pagination(jsonData, nowPage) {
    console.log('jsonData:', jsonData);
    this.showArticleArr = [];
    const dataTotal = jsonData.length;
    const perPage = 6;
    this.pageTotal = Math.ceil(dataTotal / perPage);
    this.pageTotalArr = new Array(this.pageTotal);
    this.currentPage = nowPage;

    const minData = (this.currentPage * perPage) - perPage + 1;
    const maxData = (this.currentPage * perPage);

    jsonData.forEach((item, index) => {
      const num = index + 1;
      if (num >= minData && num <= maxData) {
        this.showArticleArr.push(item);
      }
    });

    this.hasPage = this.currentPage > 1;
    this.hasNext = this.currentPage < this.pageTotal;
    this.displayData(this.showArticleArr);
  }

  // News displayData
  displayData(data) {
    this.showArticleArr = data;
  }

  // News switchPage
  switchPage(idx) {
    if (idx <= 0) { return idx = 1; }
    if (idx >= this.pageTotal) { idx = this.pageTotal; }
    this.showArticleArr = [];
    this.pagination(this.newsList, idx);
  }

}

