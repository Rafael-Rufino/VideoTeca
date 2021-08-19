import React from "react";
import { Container, VideoListWrapper } from "./styles";
import AddVideo from "../AddVideo";
import Video from "../Video";
export default function VideoList() {
  return (
    <Container>
      <VideoListWrapper>
        <Video
          id={1}
          title="O que é Heap"
          link="https://www.youtube.com/results?search_query=Implementar+uma+Fila+de+Prioridade+usando+um+HEAP+java"
          liked={true}
        />
        <AddVideo />
      </VideoListWrapper>
    </Container>
  );
}
