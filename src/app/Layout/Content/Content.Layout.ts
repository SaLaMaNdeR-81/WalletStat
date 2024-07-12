import { Component } from '@angular/core';

@Component({
  selector: 'Layout-Content',
  templateUrl: './Content.Layout.html',
  styleUrls: ['./Content.Layout.scss']
})
export class LayoutContent {

  LocalItem: any = localStorage.getItem('LocalItem')

  PageState:string = "Home"

  constructor(){

    if(!this.LocalItem){
      localStorage.setItem('LocalItem','LocalItem Test Date')
    }

  }

}

