import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentPaymentCard } from './Component/PaymentCard/PaymentCard.Component';

@NgModule({
  declarations: [ComponentPaymentCard],
  imports: [CommonModule,FormsModule],
  providers: [],
  exports: [ComponentPaymentCard]
})
export class ModuleHomePage { }