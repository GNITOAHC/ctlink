type ShortenedUrlProps = {
  params: { shortenedUrl: string };
};

const Username = ({ params }: ShortenedUrlProps) => {
  const { shortenedUrl } = params;

  return <div>shortened url: {shortenedUrl}</div>;
};

export default Username;
