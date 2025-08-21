import dbConnect from '@/lib/dbConnect';
import { Star, ExternalLink, MapPin } from "lucide-react";

const Spots = async () => {
  const spots = await dbConnect('spotCollection').find().limit(6).toArray();

  return (
    <section className='py-16'>
      <div className='text-center mb-16'>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative pb-2">
          Spots worth exploring
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover what fellow explorers have found in your area
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto px-5 lg:px-0">
        {spots.map((spot) => (
          <div key={spot._id} className="group">
            <div className="bg-white  rounded-2xl overflow-hidden shadow-sm hover:shadow-purple-200 hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]">
              {/* Image + Rating */}
              <div className="relative overflow-hidden">
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{spot.rating}</span>
                </div>
              </div>
              {/* Card Body */}
              <div className="p-6">
                {/* Category */}
                <div className="mb-3">
                  <span className="inline-block bg-indigo-50 text-primary text-xs font-medium px-3 py-1 rounded-full">
                    {spot.category}
                  </span>
                </div>

                {/* Spot Name */}
                <h3 className="text-xl font-bold mb-2 text-card-foreground">
                  {spot.name}
                </h3>

                <p className='flex text-sm items-center gap-1 mb-2 text-gray-600'>
                  <MapPin className='h-4 w-4' />{spot.location}
                </p>

                {/* short description */}
                <p className='mb-4'>{spot.description}</p>


                {/* View Details Button */}
                <button
                  className="w-full btn rounded-lg group-hover:bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:text-white"
                >
                  View Details
                  <ExternalLink className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Spots;
