/* eslint-disable array-callback-return */
import React from "react";
import { Container, VideoListWrapper } from "./styles";
import Video from "../Video";
// import AddVideo from "../AddVideo";
import { useAxios } from "../../hooks/useAxios";

export default function VideoList() {
  // const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   api.get("videos").then(({ data }) => {
  //     setVideos(data.videos);
  //   });

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  //swr
  const { data } = useAxios("videos");

  return (
    <Container>
      <VideoListWrapper>
        {data?.videos?.map((video) => (
          <Video
            key={video._id}
            id={video._id}
            title={video.title}
            link={video.link}
            liked={video.liked}
          />
        ))}

        {/* <AddVideo /> */}
      </VideoListWrapper>
    </Container>
  );
}
