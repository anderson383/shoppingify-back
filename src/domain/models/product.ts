export class Product {
  public name: string;
  public note: string;
  public image: string;
  public category: string;

  constructor(name: string, note: string, image: string, category: string) {
    this.name = name;
    this.note = note;
    this.image = image;
    this.category = category;
  }
}
