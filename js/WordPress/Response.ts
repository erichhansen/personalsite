module WordPress {
    export class Response {
        public found: number;
        public posts: Post[];
    }

    export class Post {
        public ID: number;
        public author: Author;
        public date: string;
        public modified: string;
        public title: string;
        public URL: string;
        public short_URL: string;
        public content: string;
        public excerpt: string;
        public slug: string;
        public status: string;
        public password: string;
        public parent: boolean;
        public type: string;
        public comments_open: boolean;
        public pings_open: boolean;
        public comment_count: number;
        public like_count: number;
        public i_like: number;
        public is_reblogged: boolean;
        public is_following: number;
        public featured_image: string;
        public format: string;
        public geo : string;
        public publize_urls : string;
        public tags: string[];
        public categories: CategoryCollection;
        public attachments: string[]; //TODO: this is probably a complex type
        public metadata: boolean;
        public meta: Meta;
    }

    export class Author {
        public ID: number;
        public email: boolean;
        public name: string;
        public nice_name: string;
        public URL : string;
        public avatar_url: string;
        public profile_url: string;
    }

    export class CategoryCollection {
        public Uncategorized : Category; // TODO: what is going on here? Need to figure it out

    }

    export class Category {
        public name: string;
        public slug: string;
        public description: string;
        public post_count: number;
        public parent: number;
        public meta: Meta;
    }

    export class Meta {
        public links: Link;
    }

    export class Link {
        public self: string;
        public help: string;
        public site: string;
        public replies: string;
        public likes: string;
    }

}

/*




 "metadata": false,
 "meta": {
 "links": {
 "self": "https:\/\/public-api.wordpress.com\/rest\/v1\/sites\/60301560\/posts\/2",
 "help": "https:\/\/public-api.wordpress.com\/rest\/v1\/sites\/60301560\/posts\/2\/help",
 "site": "https:\/\/public-api.wordpress.com\/rest\/v1\/sites\/60301560",
 "replies": "https:\/\/public-api.wordpress.com\/rest\/v1\/sites\/60301560\/posts\/2\/replies\/",
 "likes": "https:\/\/public-api.wordpress.com\/rest\/v1\/sites\/60301560\/posts\/2\/likes\/"
 }
 }

 */