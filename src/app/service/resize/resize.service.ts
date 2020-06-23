import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResizeService {

  // device size
  mobile_mode = null;

  // lg , sm
  imgSize = '';

  scrollOffset = '';

  constructor() { }

  setInitDeviceSize(widthsize) {
    this.mobile_mode = widthsize < 736 ? true : false;
    this.imgSize = this.mobile_mode ? 'sm' : 'lg';
  }

  onResize(e) {
    this.mobile_mode = window.innerWidth < 736 ? true : false;
    this.imgSize = this.mobile_mode ? 'sm' : 'lg';
  }

  setScrollOffset() {
    const getDeviceSize = this.imgSize;
    const isDeviceLargSize = getDeviceSize === 'lg';
    const isDeviceSmallSize = getDeviceSize === 'sm';
    if (isDeviceLargSize) { return this.scrollOffset = '-120'; }
    if (isDeviceSmallSize) { return this.scrollOffset = '0'; }
  }

}
