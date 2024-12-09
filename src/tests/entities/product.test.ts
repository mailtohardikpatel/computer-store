
import { Product } from "../../entities/product";

describe("Product", () => {
  test("should create a Product with correct properties", () => {
    const product = new Product("ipd", "Super iPad", 549.99);
    expect(product.sku).toBe("ipd");
    expect(product.name).toBe("Super iPad");
    expect(product.price).toBe(549.99);
  });
});