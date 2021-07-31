import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Coffee } from './coffee';
import { CoffeeService } from './coffee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  evaluationRange = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10]
  coffee!: Coffee;
  coffees: Coffee[] | undefined;
  coffeeToUpdate: Coffee | undefined;
  coffeeToDelete!: Coffee;

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit() {
    this.getCoffees();
  }

  public getCoffees(): void {
    this.coffeeService.getCoffees().subscribe(
      (response: Coffee[]) => {
        this.coffees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddCoffee(addForm: NgForm): void {
    this.coffee = addForm.value;
    console.log(this.coffee)
    document.getElementById('closeButton')?.click();
    this.coffeeService.addCoffee(this.coffee).subscribe(
      (response: Coffee) => {
        this.getCoffees();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateCoffee(updateForm: NgForm): void {
    document.getElementById('editModalCloseButton')?.click();
    this.coffeeService.updateCoffee(updateForm.value).subscribe(
      (response: Coffee) => {
        this.getCoffees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteCoffee(coffeeId: number): void {
    document.getElementById('deleteModalCloseButton')?.click();
    this.coffeeService.deleteCoffee(coffeeId).subscribe(
      (response: void) => {
        this.getCoffees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  public onOpenModal(coffee: any, mode: string): void {
    if (mode === 'add') {
      console.log("adding")
    }
    if (mode === 'update') {
      this.coffeeToUpdate = coffee;
    }
    if (mode === 'delete') {
      this.coffeeToDelete = coffee;
    }
  }

}
