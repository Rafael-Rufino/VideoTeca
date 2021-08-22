import React, { useContext } from "react";
import { VideoContext } from "../../contexts/VideoContext";
import { Container, ButtonArea, Button } from "./styles";
import { IoTrashBinSharp, IoThumbsUp, IoPencil } from "react-icons/io5";
export default function Video({ id, title, link, liked }) {
  const { handleEdit, handleLike, handleDelete } = useContext(VideoContext);
  return (
    <li>
      <Container>
        <h2>{title}</h2>
        <a href={link} target="blank">
          {link}
        </a>

        <ButtonArea>
          <Button liked={liked} onClick={() => handleLike(id)}>
            <IoThumbsUp />
          </Button>
          <Button onClick={() => handleEdit(id, title, link)}>
            <IoPencil />
          </Button>
          <Button onClick={() => handleDelete(id)}>
            <IoTrashBinSharp />
          </Button>
        </ButtonArea>
      </Container>
    </li>
  );
}
