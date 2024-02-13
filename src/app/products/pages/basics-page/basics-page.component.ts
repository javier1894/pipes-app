import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  public nameLower: string = 'javier';
  public nameUpper: string = 'JAVIER';
  public fullName: string = 'JaVIer GrAnAdOs';
  public customDate: Date = new Date();
}
