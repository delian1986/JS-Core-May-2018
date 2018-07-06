function posts() {
    class Post {
        constructor(title, content) {

            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
        }

        addComment(comment) {
            return this.comments.push(comment)
        }

        toString() {
            let result = super.toString();
            result += `\nRating: ${this.likes - this.dislikes}`;
            if (this.comments.length > 0) {
                result += '\nComments:';
                for (let comment of this.comments) {
                    result += `\n * ${comment}`;
                }
            }

            return result;
        }

    }


    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = Number(views);
        }

        view() {
            this.views++;

            return this;
        }

        toString() {
            return super.toString() + `\nViews: ${this.views}`;
        }
    }

    return {Post, SocialMediaPost, BlogPost}
}


let allPosts = posts();
// let pst=new allPosts.Post('sda','sad');

//SocialMediaPost tests
// let smp=new allPosts.SocialMediaPost('zaglavie','ne6to si',20,12);
// smp.toString();
// console.log();
// smp.addComment('pesh4o');
// smp.addComment('sesh4o');
// smp.addComment('desh4o');
// smp.addComment('oesh4o');
// smp.toString();

//BlogPost tests
let bP = new allPosts.BlogPost('title', 'content', 0);
bP.view();
bP.view();
bP.view();
console.log(bP.toString());



