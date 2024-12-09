import { PricingRule } from "../entities/pricing";

export class PricingRules {
  private rules: Map<string, PricingRule>;

  constructor(rules: PricingRule[] = []) {
    this.rules = new Map();
    rules.forEach((rule) => this.rules.set(rule.skuId, rule));
  }

  getRule(skuId: string): PricingRule | undefined {
    return this.rules.get(skuId);
  }

  getAllRules(): PricingRule[] {
    return Array.from(this.rules.values());
  }
}