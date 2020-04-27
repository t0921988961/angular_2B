import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {
  title = '';
  getPathID = 0;
  type = 0;
  lang = 'zh-TW';

  lang$: Observable<string>;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private TranslateService: TranslateService, private router: Router, private route: ActivatedRoute) {

    this.TranslateService.setDefaultLang('zh-TW');
    // this.lang$ = this.TranslateService.getBrowserCultureLang();

  }

  ngOnInit(): void {
    // this.lang$.subscribe(lang => this.TranslateService.use(lang));

    // this.getPathID = +this.route.snapshot.paramMap.get('type');
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      console.log('params:', params);
      this.getPathID = +params.get('getPathID');
    });

    this.route.paramMap.subscribe(
      p => {
        this.type = +p.get('type');
      }
    );

    this.route.data.subscribe(
      d => {
        this.title = d.title;
      }
    );
  }

  addIDNum() {
    // this.getPathID++;
    // this.router.navigateByUrl('/utilities/colors/' + this.getPathID);
    this.router.navigate(['/utilities/colors/'], {
      queryParams: {
        getPathID: ++this.getPathID
      }
    });
  }

}
