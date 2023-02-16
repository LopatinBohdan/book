export class Recipe{
    constructor(title, ingredients=[], steps=[],img){
        this.title=title;
        this.ingredients=ingredients;
        this.steps=steps;
        this.img=img;
    }
}