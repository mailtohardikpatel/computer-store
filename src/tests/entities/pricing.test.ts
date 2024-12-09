import { PricingRule } from "../../entities/pricing";

describe("PricingRule", () => {

  test("should apply discount rule correctly", () => {
    const rule = new PricingRule("3for2deal","This is for Apple TVs.","atv", "payForLess", {
      quantity: 3,
      discountedQuantity: 2,
    });

    expect(rule.apply(3, 109.5)).toBe(219);
    expect(rule.apply(4, 109.5)).toBe(328.5);
    expect(rule.apply(5, 109.5)).toBe(438);
  });

  test("should apply reduced price rule correctly", () => {
    const rule = new PricingRule("bulkDiscount","This is for iPad.","ipd", "discountedPrice", {
      quantity: 4,
      bulkPrice: 499.99,
    });

    expect(rule.apply(4, 549.99)).toBe(1999.96);
    expect(rule.apply(3, 549.99)).toBe(1649.97);
  });
});