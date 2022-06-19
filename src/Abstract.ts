export abstract class Abstract {
  public polygon: { x: number; y: number }[] = [];

  public x: number;
  public y: number;

  public physicalType: "solid";

  draw() {}

  update(elements?: Abstract[]) {}
}
