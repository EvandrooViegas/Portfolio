import { type SchemaTypeDefinition } from "sanity";
import { me } from "./schemas/me";
import { videos } from "./schemas/video";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [me, videos],
};
