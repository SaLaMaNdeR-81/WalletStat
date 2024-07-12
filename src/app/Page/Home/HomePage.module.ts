import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentPaymentCard } from './Component/PaymentCard/PaymentCard.Component';

@NgModule({
  declarations: [ComponentPaymentCard],
  imports: [CommonModule],
  providers: [],
  exports: [ComponentPaymentCard]
})
export class ModuleHomePage { }