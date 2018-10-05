import VideoList from "./containers/VideoList";
import VideoForm from "./containers/VideoForm";
import Video from "./containers/Video";
import React from "react";

export default [
    {
        path: '/',
        component: VideoList,
        exact: true
    },
    {
        path: '/videos/new',
        component: VideoForm,
        exact: true
    },
    {
        path: '/videos/:id',
        component: Video,
        exact: true
    }
]

