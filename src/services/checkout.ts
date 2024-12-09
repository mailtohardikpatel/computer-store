import products from "../data/products.json"
import { PricingRules } from "./pricing-rules";

export class Checkout {
  private itemCounts: Map<string, number>;

  constructor(private pricingRules: PricingRules) {
    this.itemCounts = new Map();
  }

  scan(skuId: string): void {
    this.itemCounts.set(skuId, (this.itemCounts.get(skuId) || 0) + 1);
  }

  total(): string {
    let total = 0;
    for (const [skuId, count] of this.itemCounts.entries()) {
        const price = products.find( p => p.id === skuId )?.price!
        const rule = this.pricingRules.getRule(skuId);

        if (rule) {
            total += rule.apply(count, price);
        } else {
            total += count * price;
        }
    }
    return total.toFixed(2);
  }
}