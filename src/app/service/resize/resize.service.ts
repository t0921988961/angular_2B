import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResizeService {

  // device size
  mobile_mode = null;

  // lg , sm
  imgSize = '';

  constructor() { }

  setInitDeviceSize(widthsize) {
    this.mobile_mode = widthsize < 736 ? true : false;
    this.imgSize = this.mobile_mode ? 'sm' : 'lg';
  }

  onResize(e) {
    this.mobile_mode = window.innerWidth < 736 ? true : false;
    this.imgSize = this.mobile_mode ? 'sm' : 'lg';
  }

}
