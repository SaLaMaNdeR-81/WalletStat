import { Component } from '@angular/core';

@Component({
  selector: 'Layout-Header',
  templateUrl: './Header.Layout.html',
  styleUrls: ['./Header.Layout.scss']
})
export class LayoutHeader {

  PaymentData: any = [
    {
      UID : "1719155476258994",
      title: "Title 1",
      Description: "Hipe x2",
      Price: 500000,
      Creation: "1716599917000",
      Status: ["Normal","green"],
    },
    {
      UID : "1719155476258994",
      title: "Title 2",
      Description: "Hipe x2",
      Price: 500000,
      Creation: "1716599917000",
      Status: ["Normal","green"],
    },
    {
      UID : "1719155476258994",
      title: "Title 3",
      Description: "Hipe x2",
      Price: 500000,
      Creation: "1716599917000",
      Status: ["Normal","green"],
    },
    {
      UID : "1719155476258994",
      title: "Title 4",
      Description: "Hipe x2",
      Price: 500000,
      Creation: "1716599917000",
      Status: ["Normal","green"],
    },
    {
      UID : "1719155476258994",
      title: "Title 5",
      Description: "Hipe x2",
      Price: 500000,
      Creation: "1716599917000",
      Status: ["Normal","green"],
    },
    {
      UID : "1719155476258994",
      title: "Title 6",
      Description: "Hipe x2",
      Price: 500000,
      Creation: "1716599917000",
      Status: ["Normal","green"],
    },
    {
      UID : "1719155476258994",
      title: "Title 7",
      Description: "Hipe x2",
      Price: 500000,
      Creation: "1716599917000",
      Status: ["Normal","green"],
    },
    {
      UID : "1719155476258994",
      title: "Title 8",
      Description: "Hipe x2",
      Price: 500000,
      Creation: "1716599917000",
      Status: ["Normal","green"],
    },
    {
      UID : "1719155476258994",
      title: "Title 9",
      Description: "Hipe x2",
      Price: 500000,
      Creation: "1716599917000",
      Status: ["Normal","green"],
    },
    {
      UID : "1719155476258994",
      title: "Title 10",
      Description: "Hipe x2",
      Price: 500000,
      Creation: "1716599917000",
      Status: ["Normal","green"],
    },
    {
      UID : "1719155476258994",
      title: "Title 11",
      Description: "Hipe x2",
      Price: 500000,
      Creation: "1716599917000",
      Status: ["Normal","green"],
    },
    {
      UID : "1719155476258994",
      title: "Title 12",
      Description: "Hipe x2",
      Price: 500000,
      Creation: "1716599917000",
      Status: ["Normal","green"],
    },
    {
      UID : "1719155476258994",
      title: "Title 13",
      Description: "Hipe x2",
      Price: 500000,
      Creation: "1716599917000",
      Status: ["Normal","green"],
    },
    {
      UID : "1719155476258994",
      title: "Title 14",
      Description: "Hipe x2",
      Price: 500000,
      Creation: "1716599917000",
      Status: ["Normal","green"],
    },
    {
      UID : "1719155476258994",
      title: "Title 15",
      Description: "Hipe x2",
      Price: 500000,
      Creation: "1716599917000",
      Status: ["Normal","green"],
    },
    {
      UID : "1719155476258994",
      title: "Title 16",
      Description: "Hipe x2",
      Price: 500000,
      Creation: "1716599917000",
      Status: ["Normal","green"],
    },
    {
      UID : "1719155476258994",
      title: "Title 17",
      Description: "Hipe x2",
      Price: 500000,
      Creation: "1716599917000",
      Status: ["Normal","green"],
    },
    {
      UID : "1719155476258994",
      title: "Title 18",
      Description: "Hipe x2",
      Price: 500000,
      Creation: "1716599917000",
      Status: ["Normal","green"],
    },
    {
      UID : "1719155476258994",
      title: "Title 19",
      Description: "Hipe x2",
      Price: 500000,
      Creation: "1716599917000",
      Status: ["Normal","green"],
    },
    {
      UID : "1719155476258994",
      title: "Title 20",
      Description: "Hipe x2",
      Price: 500000,
      Creation: "1716599917000",
      Status: ["Normal","green"],
    },
  ]

  constructor(){

  }

  ClearList(){
    localStorage.removeItem('PaymentList')
  }

  SetDefaultData(){
    const Data =  JSON.stringify(this.PaymentData)
    localStorage.setItem('PaymentList',Data)
  }
  SetSingleData(){
    localStorage.removeItem('PaymentList')
    const Data =  JSON.stringify([this.PaymentData[0]])
    localStorage.setItem('PaymentList',Data)
  }

}
