import { type SchemaTypeDefinition } from "sanity";
import { me } from "./schemas/me";
import { gallery } from "./schemas/gallery";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [me, gallery],
};
