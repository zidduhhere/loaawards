const Partners = () => {
  // Actual partner data
  const communityPartners = [
    {
      id: 1,
      name: "Ad Club Bangalore",
      src: "/assets/community/adclubbanglore.jpg",
      scale: "scale-125 md:scale-150",
    },
    {
      id: 2,
      name: "Ad Club Madras",
      src: "/assets/community/adclubmadras.jpg",
      scale: "scale-125 md:scale-150",
    },
    {
      id: 3,
      name: "COC",
      src: "/assets/community/coc.jpg",
      scale: "scale-125 md:scale-150",
    },
  ];

  const mediaPartners = [
    { id: 1, name: "Afaqs", src: "/assets/media/afaqs.jpg" },
    { id: 2, name: "MediaNews4U.com", src: "/assets/media/media-news.jpg" },
    {
      id: 3,
      name: "Social Samosa",
      src: "/assets/media/social-samosa.png",
      scale: "scale-125 md:scale-150",
    },
  ];

  return (
    <section
      id="partners"
      className="w-full bg-loa-purple text-black py-20 px-6 md:px-24 border-b-2 border-black"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        {/* Community Partners Section */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2 border-b-4 border-black pb-4">
            <h2
              className="text-5xl md:text-7xl uppercase leading-none text-loa-yellow"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Community
            </h2>
            <h3
              className="text-4xl md:text-6xl uppercase leading-none text-loa-yellow"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Partners
            </h3>
          </div>

          {/* Logos Grid/Flex */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full">
            {communityPartners.map((partner) => (
              <div
                key={partner.id}
                className="w-full md:w-1/3 aspect-[4/3] bg-white border-4 border-black shadow-[8px_8px_0_0_#000] flex flex-col items-center justify-center p-8 transition-transform hover:-translate-y-2 hover:shadow-[12px_12px_0_0_#000]"
              >
                {/* Partner Logo */}
                <img
                  src={partner.src}
                  alt={partner.name}
                  className={`w-full h-full max-h-32 md:max-h-40 object-contain mb-4 mix-blend-multiply ${partner.scale || ""}`}
                />
                <p
                  className="text-xl font-bold uppercase text-center mt-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Media Partners Section */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2 border-b-4 border-black pb-4">
            <h2
              className="text-5xl md:text-7xl uppercase leading-none text-loa-yellow"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Media
            </h2>
            <h3
              className="text-4xl md:text-6xl uppercase leading-none text-loa-yellow"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Partners
            </h3>
          </div>

          {/* Logos Grid/Flex */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full">
            {mediaPartners.map((partner) => (
              <div
                key={partner.id}
                className="w-full md:w-1/3 aspect-[4/3] bg-white border-4 border-black shadow-[8px_8px_0_0_#000] flex flex-col items-center justify-center p-8 transition-transform hover:-translate-y-2 hover:shadow-[12px_12px_0_0_#000]"
              >
                {/* Partner Logo */}
                <img
                  src={partner.src}
                  alt={partner.name}
                  className={`w-full h-full max-h-32 md:max-h-40 object-contain mb-4 mix-blend-multiply ${partner.scale || ""}`}
                />
                <p
                  className="text-xl font-bold uppercase text-center mt-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
