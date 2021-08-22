export class Coffee {
    id!: number;
    name!: string;
    roaster!: string;
    roastDate!: string;
    variety!: string;
    process!: string;
    brewMethod!: string;
    notes!: string;
    rating!: number;
    taste!: Taste;
}

export class Taste {
    acidic!: number;
    floral!: number;
    berryfriut!: number;
    citrusfruit!: number;
    stonefruit!: number;
    chocolate!: number;
    caramel!: number;
    bitter!: number;
    smoky!: number;
    savory!: number;
    spicy!: number;
    body!: number;
    linger!: number;
    clean!: number;
}