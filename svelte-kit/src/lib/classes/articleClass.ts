import type { ArticleType } from '$lib/types/article.type';

export default class Article implements ArticleType {
	public id: number;
	public rating?: number;
	public title: string;
	constructor({ id, rating, title }: ArticleType) {
		(this.id = id), (this.rating = rating), (this.title = title);
	}
}
