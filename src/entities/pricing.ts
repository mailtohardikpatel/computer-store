type RuleType = "payForLess" | "discountedPrice";

interface RuleDefinition {
  quantity?: number;
  discountedQuantity?: number;
  bulkPrice?: number;
}

export class PricingRule {
  constructor(
    public name: string,
    public detail: string,
    public skuId: string,
    public type: RuleType,
    public definition: RuleDefinition
  ) {}

  apply(quantity: number, price: number): number {
    switch (this.type) {
      case "payForLess":
        return this.calculatePayForLessPrice(quantity, price);

      case "discountedPrice":
        return this.calculateDiscountedPrice(quantity, price);

      default:
        return quantity * price;
    }
  }

  private calculatePayForLessPrice(quantity: number, price: number): number {
    const discountSets = Math.floor(quantity / this.definition.quantity!);
    const remainingItems = quantity % this.definition.quantity!;
    return (
      (discountSets * this.definition.discountedQuantity! + remainingItems) *
      price
    );
  }

  private calculateDiscountedPrice(quantity: number, price: number): number {
    if (quantity >= this.definition.quantity!) {
      return quantity * this.definition.bulkPrice!;
    }
    return quantity * price;
  }
}