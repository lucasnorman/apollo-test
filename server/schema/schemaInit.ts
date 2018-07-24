import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";

import { dbResolvers } from "../api/resolvers/resolvers";

const dbSchema = importSchema(__dirname + "/dbSchema.graphql");

// GraphQL Schema in string form
const typeDefs = [dbSchema];

const resolvers = { ...dbResolvers };

// Combine into schema
const schema = makeExecutableSchema({
	resolvers,
	typeDefs,
});

export { schema };
