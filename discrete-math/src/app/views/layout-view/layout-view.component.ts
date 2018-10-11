import { Component } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

@Component({
  selector: 'app-layout-view',
  templateUrl: './layout-view.component.html',
  styleUrls: [ './layout-view.component.scss' ]
})
export class LayoutViewComponent {

  bars = faBars;

  spin: boolean;

  onBarsClick() {
    this.spin = true;
    setTimeout(() => this.spin = false, 1000);
  }
}
