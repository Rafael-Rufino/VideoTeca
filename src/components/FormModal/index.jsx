import React, { useContext } from "react";
import { VideoContext } from "../../contexts/VideoContext";
//import { CloseIcon, CheckIcon } from "react-icons/io5";
import {
  Overlay,
  Header,
  Container,
  FormContainer,
  InputGroup,
  FormMain,
  Footer,
  CloseIcon,
  CheckIcon,
} from "./styles";

export default function FormModal() {
  const { handleClose, title, link, titlehandle, linkhandle, handleSubmit } =
    useContext(VideoContext);
  return (
    <Overlay>
      <Container>
        <Header>
          <strong>Adicionar video</strong>
          <button type="button" onClick={handleClose}>
            <CloseIcon />
          </button>
        </Header>
        <FormContainer onSubmit={handleSubmit}>
          <FormMain>
            <InputGroup>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                placeholder="Digite seu title"
                value={title}
                onChange={titlehandle}
              />
            </InputGroup>

            <InputGroup>
              <label htmlFor="link">Link</label>
              <input
                id="link"
                type="text"
                placeholder="Insira seu linnk"
                value={link}
                onChange={linkhandle}
              />
            </InputGroup>
          </FormMain>
          <Footer>
            <button type="submit">
              <CheckIcon />
              Salvar
            </button>
          </Footer>
        </FormContainer>
      </Container>
    </Overlay>
  );
}
