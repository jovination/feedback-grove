
const SocialProofSection = () => {
  return (
    <section className="py-12 border-y border-zinc-100 bg-zinc-50">
      <div className="container-tight">
        <p className="text-center text-sm text-zinc-500 mb-8">Trusted by teams from</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <div className="w-24 h-8 bg-gradient-to-r from-zinc-300 to-zinc-200 rounded-md flex items-center justify-center text-zinc-50 font-bold">COMPANY</div>
          <div className="w-24 h-8 bg-gradient-to-r from-zinc-300 to-zinc-200 rounded-md flex items-center justify-center text-zinc-50 font-bold">STARTUP</div>
          <div className="w-28 h-8 bg-gradient-to-r from-zinc-300 to-zinc-200 rounded-md flex items-center justify-center text-zinc-50 font-bold">ENTERPRISE</div>
          <div className="w-24 h-8 bg-gradient-to-r from-zinc-300 to-zinc-200 rounded-md flex items-center justify-center text-zinc-50 font-bold">BUSINESS</div>
          <div className="w-20 h-8 bg-gradient-to-r from-zinc-300 to-zinc-200 rounded-md flex items-center justify-center text-zinc-50 font-bold">AGENCY</div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
