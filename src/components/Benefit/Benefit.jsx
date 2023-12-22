import useBenefits from "../../hooks/useBenefits";

const Benefit = () => {
  const [benefits, refetch] = useBenefits()
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">Who Can Benefit?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {benefits.map((benefit) => (
            <div key={benefit.type} className="bg-gray-200 p-4 rounded-md">
              <h3 className="text-xl font-semibold mb-2">{benefit.type}</h3>
              <ul>
                {benefit.benefits.map((benefit) => (
                  <li key={benefit._id} className="mb-1">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Benefit;