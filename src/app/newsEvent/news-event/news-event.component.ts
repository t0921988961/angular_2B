import { Component, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from 'src/app/service/language/language.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { CallApiService } from 'src/app/service/callAPI/call-api.service';
import { Observable, combineLatest, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NewsListObject } from 'src/app/model-type/newsListArray.model';
import { EventsListObject } from 'src/app/model-type/eventsListArray.model';

@Component({
  selector: 'app-news-event',
  templateUrl: './news-event.component.html',
  styleUrls: ['./news-event.component.scss']
})


export class NewsEventComponent implements OnInit, OnDestroy {

  langCode = this.languageService.nowUrlPathlangCode;
  tab = null;
  nowArrayList = [];
  isNewsListPage = true;
  // News Array
  newsList;
  // Events Array
  eventsList;

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
  apiArticleListPath = 'https://pro.xyzprinting.com/getNewsList/';

  // API Events path
  eventListArr$: Observable<any>;
  apiEventListPath = 'https://pro.xyzprinting.com/getPromotionList/';

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
          this.checkNowPage(this.tab);
        }
      );

    const GetNewsList$ = this.http.get<NewsListObject>(this.apiArticleListPath + this.langCode + '/1/100');
    const GetPromotionList$ = this.http.get<EventsListObject>(this.apiEventListPath + this.langCode + '/1/100');

    // forkJoin 會在所有 observable 都完成(complete)後，才會取得最終的結果，
    // 所以對於 Http Request 的整合，我們可以直接使用 forkJoin
    // 因為 Http Request 只會發生一次，然後就完成了！
    const data$ = forkJoin(GetNewsList$, GetPromotionList$).pipe(
      map(([GetNewsList, GetPromotionList]) => ({
        GetNewsList, GetPromotionList
      }))
    );

    data$.subscribe({
      next: (res) => {
        this.newsList = res.GetNewsList.newsList;
        this.eventsList = res.GetPromotionList.newsList;
      },
      complete: () => {
        console.log('complete done');
        this.articleInit(this.tab);
      }
    });

  }

  ngOnDestroy(): void {
    this.pageTotalArr = null;
  }

  onChangeTab(tabName) {
    this.tab = tabName;
    // console.log('this.tab:', this.tab);
    this.articleInit(tabName);
  }

  articleInit(tabName) {
    this.checkNowPage(tabName);
    const tabNameObject = {
      news: this.newsList,
      events: this.eventsList
    };
    this.nowArrayList = tabNameObject[tabName];
    if (this.isNewsListPage === false) { return; }
    this.pagination(this.nowArrayList, 1);
  }

  checkNowPage(tabName) {
    const isNewsListPage = tabName === 'news';
    const isEventsListPage = tabName === 'events';
    const isNewsContentPage = tabName === null;
    if (isNewsContentPage) { return this.isNewsListPage = false; }
    if (isNewsListPage) { return this.isNewsListPage = true; }
    if (isEventsListPage) { return this.isNewsListPage = true; }
  }


  // News pagination
  pagination(jsonData, nowPage) {
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

