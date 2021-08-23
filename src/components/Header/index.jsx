import React, { useContext } from "react";
import { Container, Button } from "./styles";
import { VideoContext } from "../../contexts/VideoContext";

export default function Header() {
  const { handleAdd } = useContext(VideoContext);
  return (
    <Container>
      <h3>VideoTeca🧡</h3>
      <Button onClick={handleAdd}>Adicionar Video</Button>
    </Container>
  );
}
