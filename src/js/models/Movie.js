class Movie {
    constructor(title, description, videoUrl, thumbnailUrl){
        this.id = String(Math.random() * 10);
        this.title = title;
        this.description = description;
        this.file = videoUrl;
        this.thumbnail = thumbnailUrl
    }
}

export {Movie};