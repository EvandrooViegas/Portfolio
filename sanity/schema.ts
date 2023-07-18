import { type SchemaTypeDefinition } from "sanity";
import { me } from "./schemas/me";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [me],
};
