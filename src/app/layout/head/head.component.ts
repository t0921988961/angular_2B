import { Component, OnInit } from '@angular/core';
import { CallApiService } from 'src/app/service/call-api.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  constructor(private callApiService: CallApiService) { }

  ngOnInit() {
    this.callApiService.runs();
  }

}
