import { ApolloServer } from "apollo-server";

import { schema } from "./schema/schemaInit";

const server = new ApolloServer({ schema });

const getUrl = (): string => {
	if (process.env.SITE_ENV === "development") {
		return "http://localhost";
	} else if (process.env.SITE_ENV === "staging") {
		return "http://localhost";
	} else if (process.env.SITE_ENV === "production") {
		return "https://localhost";
	}
};

const getPort = (): number => {
	if (process.env.SITE_ENV === "development") {
		return 4000;
	} else if (process.env.SITE_ENV === "staging") {
		return 4000;
	} else if (process.env.SITE_ENV === "production") {
		return 4000;
	}
};

const serverUrl: string = `${getUrl()}:${getPort()}/`;

server.listen(serverUrl).then(({ url }) => {
	console.log(`Server ready at ${url}`);
});
