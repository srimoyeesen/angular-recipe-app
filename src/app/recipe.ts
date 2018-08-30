


export class Recipe {
  constructor(
    public title?: string,
    public description?: string,
    public author?: string,
    public video_url?: string,
    public image_url?: string,
    public ingredient_list?: string[]
  ) {}
}
