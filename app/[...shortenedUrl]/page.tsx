import { notFound } from "next/navigation";

type ShortenedUrlProps = {
  params: { shortenedUrl: string[] };
};

const Username = ({ params }: ShortenedUrlProps) => {
  const { shortenedUrl } = params;

  const [username, url] = shortenedUrl;

  if (shortenedUrl.length !== 2 || !username || !url) {
    notFound();
  }

  return (
    <div>
      <h1>Username: {username}</h1>
      <h2>url: {url}</h2>
    </div>
  );
};

export default Username;
