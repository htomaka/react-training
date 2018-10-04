class Movie {
    constructor(id, title, description, videoUrl){
        this.id = id;
        this.title = title;
        this.description = description;
        this.file = videoUrl;
        this.thumbnail = 'http://placeimg.com/246/138/any/sepia'
    }
}

export {Movie};