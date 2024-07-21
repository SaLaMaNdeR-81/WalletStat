import { Component ,OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { NewPaymentForm } from 'src/@Core/Interface/NewPayment.Interface';
@Component({
  selector: 'Page-Home',
  templateUrl: './Home.Page.html',
  styleUrls: ['./Home.Page.scss','./PaymentForm.Home.scss'],
  animations: [
    trigger('scaleInOut', [
      state('in', style({ transform: 'scale(1)' })),
      transition('void => *', [
        style({ transform: 'scale(0)' }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({ transform: 'scale(0)' }))
      ])
    ])
  ]
})
export class PageHome {

  PaymentData: Array<any> = []
  
  NewPaymentMenu:boolean = true
  NewPaymentForm: NewPaymentForm = {
    Title: '',
    Description: "",
    StateID: "",
    Price: 0,
    Creation: "",
  }


  ngOnInit() {
    const paymentListString = localStorage.getItem('PaymentList');
    if (paymentListString) {
        this.PaymentData = JSON.parse(paymentListString);
    }
  }

  constructor(){

    this.GetListData(500)

  }

  GetListData(RefreshTime:number){

    setInterval(() => {
      let Data:any = localStorage.getItem("PaymentList");
      Data = JSON.parse(Data)
      this.PaymentData = Data
    },RefreshTime)
    
  }

  // =================================

  SaveNewPaymentHandle(){
    console.log(this.NewPaymentForm);
  }

  

}
