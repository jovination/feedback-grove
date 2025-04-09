
const SocialProofSection = () => {
  return (
    <section className="py-12 border-y border-zinc-100 bg-zinc-50">
      <div className="container-tight">
        <p className="text-center text-sm text-zinc-500 mb-8">Trusted by teams from</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <div className="flex items-center justify-center">
            <div className="font-bold text-xl text-zinc-700">acme</div>
          </div>
          <div className="flex items-center justify-center">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">quantum</div>
          </div>
          <div className="flex items-center justify-center">
            <div className="font-bold text-xl text-zinc-700">VERTEX<span className="text-amber-500">corp</span></div>
          </div>
          <div className="flex items-center justify-center">
            <div className="font-bold text-xl text-zinc-700"><span className="bg-black text-white px-1">BOX</span></div>
          </div>
          <div className="flex items-center justify-center">
            <div className="font-bold text-xl text-green-600">eco<span className="text-zinc-700">sphere</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
