import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import VideoList from "../VideoList";
import { Container } from "./styles";
export default function Layout() {
  return (
    <Container>
      <Header />
      <VideoList />
      <Footer />
    </Container>
  );
}
