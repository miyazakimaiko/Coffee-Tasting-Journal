import { TestBed, inject } from "@angular/core/testing";
import { environment } from 'src/environments/environment';
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
 
import { CoffeeService } from "./coffee.service";
import { Coffee } from "./coffee";
 
describe("DataAccessService", () => {
  let httpTestingController: HttpTestingController;
  let apiServerUrl = environment.apiBaseUrl;
  let coffeeService : CoffeeService;
  let coffee: Coffee;
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
 
    httpTestingController = TestBed.get(HttpTestingController);
    coffee = {
        id: 3,
        name: "Waltz Blend",
        roaster: "Waltz Coffee Roastery",
        roastDate: "2021-07-20",
        variety: "SL28(Kenya), Ethiopian heirloom, Caturra and Typica(Colombia)",
        process: "Washed",
        brewMethod: "V60",
        notes: "Nutty aroma / Smooth and rounded mouthfeel. Long lasting sweetness like milk chocolate with caramel",
        rating: 9.5,
        taste: {
            acidic: 3.5,
            floral: 4.0,
            berryfriut: 4.5,
            citrusfruit: 3.0,
            stonefruit: 4.0,
            chocolate: 9.0,
            caramel: 9.0,
            bitter: 6.0,
            smoky: 5.0,
            savory: 2.0,
            spicy: 1.5,
            body: 8.0,
            linger: 8.0,
            clean: 8.0
        }
    };
  });
 
  beforeEach(inject(
    [CoffeeService],
    (service: CoffeeService) => {
      coffeeService = service;
    }
  ));

  it("should return data", () => {
    let result: Coffee[] = [];
    coffeeService.getCoffees().subscribe(c => {
      result = c;
    });
    const req = httpTestingController.expectOne({
      method: "GET",
      url: `${apiServerUrl}/coffee/all`
    });
   
    req.flush([coffee]);
   
    expect(result[0]).toEqual(coffee);
  });
});