import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
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
