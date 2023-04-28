import { Component, OnInit } from '@angular/core';
import { VendingMachineService } from '../vending-machine.service';

@Component({
  selector: 'app-vending-machine',
  templateUrl: './vending-machine.component.html',
  styleUrls: ['./vending-machine.component.scss'],
})
export class VendingMachineComponent implements OnInit {
  public sodasRemaining = '';
  public message = '';

  constructor(private vendingMachineService: VendingMachineService
  ) {}

  ngOnInit(): void {
    this.getSodasRemaining();
  }

  insertQuarter() {
    this.vendingMachineService.insertQuarter().subscribe((response) => {
      this.message = response.message;
      this.getSodasRemaining();
    });
  }

  ejectQuarter() {
    this.vendingMachineService.ejectQuarter().subscribe((response) => {
      this.message = response.message;
      this.getSodasRemaining();
    });
  }

  pushSodaButton() {
    this.vendingMachineService.pushSodaButton().subscribe((response) => {
      this.message = response.message;
      this.getSodasRemaining();
    });
  }

  dispenseSoda() {
    this.vendingMachineService.dispenseSoda().subscribe((response) => {
      this.message = response.message;
      this.getSodasRemaining();
    });
  }

  getSodasRemaining() {
    this.vendingMachineService.getSodasRemaining().subscribe((data) => {
      this.sodasRemaining = data;
    });
  }
}
