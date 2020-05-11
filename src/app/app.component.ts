import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {

  title = 'rout';


  ngOnInit() {
    const urlParameters = {
      protocol: window.location.protocol,
      host: window.location.host,
      path: window.location.pathname,
    };

    const newpath = '';
    const pathArr = urlParameters.path.split('/').filter(n => n);
    console.log('pathArr:', pathArr[0]);

    const slicePath = pathArr.slice(2)[0];
    console.log('slicePath:', slicePath);

    console.log('urlParameters.protocol => ', urlParameters.protocol);
    console.log('urlParameters.host => ', urlParameters.host);
    console.log('urlParameters.path => ', urlParameters.path);

    // function(pathArr[0], protocol ,host ,path){}


  }

  ngDoCheck() {

  }


}
