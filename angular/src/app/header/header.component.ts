import { Component } from '@angular/core';

@Component({
  selector: 'cnx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public currentUser = {
    email: 'example@carnect.com'
  };
  public isMainMenuCollapsed = true;
  public isUserMenuCollapsed = true;
}
