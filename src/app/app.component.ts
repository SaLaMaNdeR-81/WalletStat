import { Component } from '@angular/core';

import { TitleService } from 'src/@Core/Service/Title.Service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private TitleService:TitleService){

    TitleService.ResetTitle()

  }

}
