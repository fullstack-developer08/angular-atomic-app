import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent  {

  public title: string = 'Atomic Web App';
  public details: string = 'This is a sample based on atomic web design principles built by HCL';
 
}
