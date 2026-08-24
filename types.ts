import * as t from 'io-ts';

export const BlogFrontMatterValidator = t.type({
	title: t.string,
	description: t.union([t.string, t.undefined]),
	hero: t.union([t.string, t.undefined]),
	publishedAt: t.string,
	draft: t.union([t.boolean, t.undefined]),
	tags: t.union([t.array(t.string), t.undefined]),
	pinned: t.union([t.boolean, t.undefined]),
	isBlogPost: t.union([t.boolean, t.undefined]),
	__resourcePath: t.string,
});
export type BlogFrontMatter = t.TypeOf<typeof BlogFrontMatterValidator>;
