import { HttpErrorResponse } from '@angular/common/http';
import { TmplAstElement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Coffee, Taste } from './coffee';
import { CoffeeService } from './coffee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  evaluationRange = Array.from({length:10},(v,k)=>k+0.5)
  coffee!: Coffee;
  coffees!: Coffee[];
  coffeeToUpdate: Coffee | undefined;
  coffeeToDelete!: Coffee;

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit() {
    this.coffeeService.getCoffees().subscribe(
      (response: Coffee[]) => {
        this.coffees = response;
        if(this.coffees?.length === undefined || this.coffees?.length === 0) {
          this.addDemoData();
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
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

  public  onSearchCoffees(key: string): void {
    const result: Coffee[] = [];
    for (const coffee of this.coffees) {
      if (coffee.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || coffee.roaster.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || coffee.variety.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || coffee.process.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || coffee.brewMethod.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        result.push(coffee);
      }
    }
    this.coffees = result;

    if (!key) {
      this.getCoffees();
    }
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

  public addDemoData(): void {
    this.coffee = new Coffee;
    this.coffee.name = 'Waltz Blend';
    this.coffee.roaster = 'Waltz Coffee Roastery'
    this.coffee.roastDate = '2021-07-20'
    this.coffee.variety = 'SL28(Kenya), Ethiopian heirloom, Caturra and Typica(Colombia)'
    this.coffee.process = 'Washed'
    this.coffee.brewMethod = 'V60'
    this.coffee.notes = 'Nutty aroma / Smooth and rounded mouthfeel. Long lasting sweetness like milk chocolate with caramel'
    this.coffee.rating = 9.5

    this.coffee.taste = new Taste;
    this.coffee.taste.acidic = 3.5
    this.coffee.taste.floral = 4
    this.coffee.taste.spicy = 1.5
    this.coffee.taste.berryfriut = 4.5
    this.coffee.taste.citrusfruit = 3
    this.coffee.taste.stonefruit = 4
    this.coffee.taste.chocolate = 9
    this.coffee.taste.caramel = 9
    this.coffee.taste.smoky = 5
    this.coffee.taste.bitter = 6
    this.coffee.taste.savory = 2
    this.coffee.taste.body = 8
    this.coffee.taste.clean = 8
    this.coffee.taste.linger = 8

    this.coffeeService.addCoffee(this.coffee).subscribe(
      (response: Coffee) => {},
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

    this.coffee = new Coffee;
    this.coffee.name = 'Tropical Blend';
    this.coffee.roaster = 'Waltz Coffee Roastery'
    this.coffee.roastDate = '2021-07-18'
    this.coffee.variety = 'Bourbon/Catuai(Guatemala), SL28(Kenya)'
    this.coffee.process = 'Washed'
    this.coffee.brewMethod = 'Kalita'
    this.coffee.notes = 'Harbal and fruity aroma. Light and crisp mouthfeel. Really floral almost like hibiscus tea in it!'
    this.coffee.rating = 10

    this.coffee.taste = new Taste;
    this.coffee.taste.acidic = 7
    this.coffee.taste.floral = 10
    this.coffee.taste.spicy = 0
    this.coffee.taste.berryfriut = 7
    this.coffee.taste.citrusfruit = 8.5
    this.coffee.taste.stonefruit = 8
    this.coffee.taste.chocolate = 3.5
    this.coffee.taste.caramel = 4
    this.coffee.taste.smoky = 2
    this.coffee.taste.bitter = 4
    this.coffee.taste.savory = 0
    this.coffee.taste.body = 6
    this.coffee.taste.clean = 9
    this.coffee.taste.linger = 9


    this.coffeeService.addCoffee(this.coffee).subscribe(
      (response: Coffee) => {
        this.getCoffees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
