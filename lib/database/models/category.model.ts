import { Schema, model, models } from "mongoose";

export interface ICategory extends Document{
      _id: string,
      name: string
}

const CategorySchema = new Schema({
      name: {
            type: String,
      }
})

const Category = models.Category || model('Category', CategorySchema)

export default Category;