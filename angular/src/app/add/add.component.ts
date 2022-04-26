import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cnx-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  selected = ['affiliate1'];
  constructor(private router: Router) {}

  onHidden() {
    return this.router.navigate(['..']);
  }
}
