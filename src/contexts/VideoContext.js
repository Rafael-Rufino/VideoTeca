import { createContext, useState } from "react";
import FormModal from "../components/FormModal";
import { useAxios } from "../hooks/useAxios";
import api from "../services/api";
export const VideoContext = createContext();

export function VideoContextProvider({ children }) {
  const { data, mutate } = useAxios("videos");

  const [openFormModal, setOpenFormModal] = useState(false);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [id, setId] = useState(false);

  function handleEdit(videoId, videoTitle, videoLink) {
    setTitle(videoTitle);
    setLink(videoLink);
    setId(videoId);
    setOpenFormModal(true);
  }

  function handleAdd() {
    setOpenFormModal(true);
  }

  function handleClose() {
    if (title) {
      setTitle("");
    }
    if (link) {
      setLink("");
    }
    setOpenFormModal(false);
  }

  function titlehandle(event) {
    setTitle(event.target.value);
  }

  function linkhandle(event) {
    setLink(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const video = {
      title,
      link,
    };
    if (id) {
      api.put(`videos/${id}`, video);
      const updatedVideos = {
        videos: data.videos?.map((video) => {
          if (video._id === id) {
            return { ...video, title, link };
          }
          return video;
        }),
      };
      mutate(updatedVideos, false);
    } else {
      api.post("videos", video);
      const updatedVideos = {
        videos: [...data.videos, video],
      };

      mutate(updatedVideos, false);
    }
    setOpenFormModal(false);
  }
  function handleLike(id) {
    api.patch(`videos/${id}`);

    const updatedVideos = {
      videos: data.videos?.map((video) => {
        if (video._id === id) {
          return {
            ...video,
            title: video.title,
            link: video.link,
            liked: !video.liked,
          };
        }
        return video;
      }),
    };
    mutate(updatedVideos, false);
  }
  function handleDelete(id) {
    api.delete(`videos/${id}`);
    const updatedVideo = {
      videos: data.videos?.filter((video) => video._id !== id),
    };
    mutate(updatedVideo, false);
  }

  return (
    <VideoContext.Provider
      value={{
        handleAdd,
        handleClose,
        handleEdit,
        handleSubmit,
        handleLike,
        handleDelete,
        title,
        setTitle,
        link,
        setLink,
        titlehandle,
        linkhandle,
        setId,
        id,
      }}
    >
      {children}
      {openFormModal && <FormModal />}
    </VideoContext.Provider>
  );
}
