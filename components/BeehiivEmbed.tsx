export function BeehiivEmbed() {
  const embedUrl = process.env.NEXT_PUBLIC_BEEHIIV_EMBED_URL;

  if (!embedUrl) {
    return null;
  }

  return (
    <div className="embed-box">
      <iframe
        src={embedUrl}
        title="Formulario Beehiiv Aloiramfund"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
