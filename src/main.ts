import { PricingRule } from "./entities/pricing";
import { PricingRules } from "./services/pricing-rules";
import { Checkout } from "./services/checkout";

const pricingRules = new PricingRules([
  new PricingRule("3for2deal","This is for Apple TVs.","atv", "payForLess", { quantity: 3, discountedQuantity: 2 }),
  new PricingRule("bulkDiscount","This is for iPad.","ipd", "discountedPrice", { quantity: 4, bulkPrice: 499.99 }),
]);

const co1 = new Checkout(pricingRules);
co1.scan("atv");
co1.scan("atv");
co1.scan("atv");
co1.scan("vga");
console.log(`Total expected: $${co1.total()}`);

const co2 = new Checkout(pricingRules);
co2.scan("atv");
co2.scan("ipd");
co2.scan("ipd");
co2.scan("atv");
co2.scan("ipd");
co2.scan("ipd");
co2.scan("ipd");
console.log(`Total expected: $${co2.total()}`);