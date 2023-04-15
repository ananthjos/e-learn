import ReactPlayer from "react-player";

const Video = ({ src }) => {
  return (
    <>
      <ReactPlayer url={`${src}`} />
    </>
  );
};

export default Video;
