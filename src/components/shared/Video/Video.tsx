import "./styles.scss";

interface VideoProps {
  link: string;
}

export const Video: React.FC<VideoProps> = ({ link }) => {
  const embedId = link.split("v=")[1];
  const videoId = embedId.split("&")[0];
  return (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};
