import { Component } from '@angular/core';

@Component({
  selector: 'Page-Home',
  templateUrl: './Home.Page.html',
  styleUrls: ['./Home.Page.scss']
})
export class PageHome {

  PaymentData: any = [{
    UID : "1719155476258994",
    title: "Shoping",
    Description: "Hipe x2",
    Price: 500000,
    Creation: "1716599917000",
    Status: "Normal",
  }] 

  constructor(){

  }

  // =================================

  GenarateTimeAge(timestamp:any){

    const now = Date.now();
    const diffSeconds = Math.floor((now - timestamp) / 1000);
    
    const year = 31536000;
    const day = 86400;
    const hour = 3600;
    const minute = 60;
    
    if (diffSeconds >= year) {
        return Math.floor(diffSeconds / year) + " ʸᵉᵃʳ";
    } else if (diffSeconds >= day) {
        return Math.floor(diffSeconds / day) + " ᵈᵃʸ";
    } else if (diffSeconds >= hour) {
        return Math.floor(diffSeconds / hour) + " ʰ";
    } else if (diffSeconds >= minute) {
        return Math.floor(diffSeconds / minute) + " ᵐ";
    } else {
        return diffSeconds + " ˢ";
    }
    
}

}
