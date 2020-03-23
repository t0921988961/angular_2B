import { Component, OnInit } from '@angular/core';
import { chartAreaDemo } from '../chartAreaDemo';
import { chartPieDemo } from '../chartPieDemo';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {


  constructor(private router: Router, private route: ActivatedRoute) {
    const navigationExtras: NavigationExtras = {
      queryParamsHandling: 'preserve', // 轉向時保留當前查詢字串
      preserveFragment: true, // 轉向時保留當前 Hash 片段
      fragment: 'main'
    };

    const redirect = '/charts/other';

    this.router.navigate(['/charts'], navigationExtras);

  }

  ngOnInit(): void {
    chartAreaDemo();
    chartPieDemo();


  }

}
