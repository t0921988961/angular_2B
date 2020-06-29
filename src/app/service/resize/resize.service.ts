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

  constructor() {
    console.log('%c resizeService.ts => resizeService work', 'color:#aab524;');
  }

  setInitDeviceSize(widthsize) {
    this.mobile_mode = widthsize < 736 ? true : false;
    this.imgSize = this.mobile_mode ? 'sm' : 'lg';
    this.setScrollOffset(this.imgSize);
  }

  onResize(e) {
    this.mobile_mode = e.target.innerWidth < 736 ? true : false;
    this.imgSize = this.mobile_mode ? 'sm' : 'lg';
    this.setScrollOffset(this.imgSize);
  }

  setScrollOffset(imgSize) {
    const isDeviceLargSize = imgSize === 'lg';
    const isDeviceSmallSize = imgSize === 'sm';
    if (isDeviceLargSize) { return this.scrollOffset = '-120'; }
    if (isDeviceSmallSize) { return this.scrollOffset = '0'; }
  }

}
