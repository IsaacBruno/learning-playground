export abstract class Discount {
  protected readonly discount: number = 0;

  calculate(price: number): number {
    return price - price * (this.discount / 100.0);
  }
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount: number = 50;
}

export class TenPercentDiscount extends Discount {
  protected readonly discount: number = 10;
}
