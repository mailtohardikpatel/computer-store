import { PricingRule } from "../../entities/pricing";
import { PricingRules } from "../../services/pricing-rules";

describe("PricingRules", () => {
  let rulesList: PricingRules;
  const initialRules = [
    new PricingRule("3for2deal","This is for Apple TVs.","atv", "payForLess", { quantity: 3, discountedQuantity: 2 }),
    new PricingRule("bulkDiscount","This is for iPad.","ipd", "discountedPrice", { quantity: 4, bulkPrice: 499.99 })
  ];

  beforeEach(() => {
    rulesList = new PricingRules(initialRules);
  });

  test("should initialize with initial rules", () => {
    expect(rulesList.getAllRules()).toHaveLength(2);
    expect(rulesList.getRule("atv")).toBeInstanceOf(PricingRule);
    expect(rulesList.getRule("ipd")).toBeInstanceOf(PricingRule);
  });
});