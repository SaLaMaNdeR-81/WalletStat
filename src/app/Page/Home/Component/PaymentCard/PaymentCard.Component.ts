import { Component ,Input } from '@angular/core';

@Component({
  selector: 'PaymentCard',
  templateUrl: './PaymentCard.Component.html',
  styleUrls: ['./PaymentCard.Component.scss']
})
export class ComponentPaymentCard {

  @Input() PaymentData: any;

  constructor(){

  }

  // ================

  CutLongtext (Description:string){

    if (Description.length > 32) {
      return Description.slice(0, 32) + '...';
  } else {
      return Description;
  }

  }

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
