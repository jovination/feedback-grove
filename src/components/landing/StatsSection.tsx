
const StatsSection = () => {
  return (
    <section className="section bg-white">
      <div className="container-slim">
        <div className="grid grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-lg bg-blue-50 border border-blue-100">
            <div className="stat-counter text-blue-700">5k+</div>
            <p className="text-blue-600 mt-1 font-medium">Active users</p>
          </div>
          <div className="p-6 rounded-lg bg-amber-50 border border-amber-100">
            <div className="stat-counter text-amber-700">120k</div>
            <p className="text-amber-600 mt-1 font-medium">Feedback collected</p>
          </div>
          <div className="p-6 rounded-lg bg-green-50 border border-green-100">
            <div className="stat-counter text-green-700">98%</div>
            <p className="text-green-600 mt-1 font-medium">Customer satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
