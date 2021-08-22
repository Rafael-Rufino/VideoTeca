/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Container, VideoListWrapper } from "./styles";
import Video from "../Video";
import AddVideo from "../AddVideo";
import api from "../../services/api";

export default function VideoList() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    api.get("videos").then(({ data }) => {
      setVideos(data.videos);
    });
    console.log(videos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <VideoListWrapper>
        {videos?.map((video) => (
          <Video
            key={video._id}
            id={video._id}
            title={video.title}
            link={video.link}
            liked={video.liked}
          />
        ))}

        <AddVideo />
      </VideoListWrapper>
    </Container>
  );
}
