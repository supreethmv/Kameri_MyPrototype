import { NbMenuService } from '@nebular/theme';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-not-found',
  styleUrls: ['./not-found.component.scss'],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {

  constructor(private menuService: NbMenuService,
              private _router: Router) {
  }

  goToHome() {
    this._router.navigate(['/pages/starter'])
    // this.menuService.navigateHome();
  }
}
