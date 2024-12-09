import { PricingRule } from "../../entities/pricing";
import { Checkout } from "../../services/checkout";
import { PricingRules } from "../../services/pricing-rules";

// Mock data for products
const mockInventoryData = JSON.stringify([
  { id: "atv", name: "Apple TV", price: 109.5 },
  { id: "ipd", name: "Super iPad", price: 549.99 },
  { id: "mbp", name: "MacBook Pro", price: 1399.99 },
  { id: "vga", name: "VGA adapter", price: 30.0 },
]);

describe("Checkout", () => {
  let checkout: Checkout;
  const pricingRulesList = new PricingRules([
    new PricingRule("3for2deal","This is for Apple TVs.","atv", "payForLess", { quantity: 3, discountedQuantity: 2 }),
    new PricingRule("bulkDiscount","This is for iPad.","ipd", "discountedPrice", { quantity: 4, bulkPrice: 499.99 }),
  ]);

  beforeEach(() => {
    checkout = new Checkout(pricingRulesList);
  });
  test("should calculate total with no items", () => {
    const total = checkout.total();
    expect(total).toBe("0.00");
  });

  test("should calculate total with scanned items", () => {
    checkout.scan("ipd");
    checkout.scan("atv");
    const total = checkout.total();
    expect(total).toMatchSnapshot();
  });

  test("should apply discount correctly for scanned items", () => {
    checkout.scan("atv");
    checkout.scan("atv");
    checkout.scan("atv");
    const total = checkout.total();
    expect(total).toMatchSnapshot();
  });
})