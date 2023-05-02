import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
	projectId: "5up5mkb5",
	dataset: "production",
	apiVersion: "2022-02-01",
	useCdn: true,
	token: "skyT0aMCmUJswJFsa0hAoGFrDNJgP3LkmeRZAj0HdiD9YBpMfwFNkfuW7P2HSN7aHDUrWiyJnpEYPQ65oRmS3XqlT60mbTTin0lW5waTptZt1cjH6QzYLmIOrGf7WJMzIseEq7aw0eIGaa4FRMPP6Mh3FB8rks2xO2WxJt68L52ouWD1xZaV",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
