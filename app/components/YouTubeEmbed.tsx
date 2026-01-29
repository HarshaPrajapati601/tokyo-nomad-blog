import React from 'react';

interface YouTubeProps {
  videoId: string;
}

const YouTubeEmbed = ({ videoId }: YouTubeProps) => {
  return (
    <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full bg-black rounded-sm shadow-lg">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Tokyo Nomad Diaries Vlog"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;