import config from 'config';

class Movie {
    constructor(id, title, description, videoUrl){
        this.id = id;
        this.title = title;
        this.description = description;
        this.file = `${config.videoPath}/${videoUrl}`;
        this.thumbnail = 'http://placeimg.com/246/138/any/sepia'
    }
}

export {Movie};