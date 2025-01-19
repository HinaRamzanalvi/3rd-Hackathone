

import { productSchema} from "./product";
import { categorySchema} from "./categories";
import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema,categorySchema],
}
