import React from 'react';
import { ShoppingBag, Coffee, Palette, Mic } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      icon: ShoppingBag,
      title: "Local Shops",
      description: "Handmade goods, small stores",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Coffee,
      title: "Cafés & Restaurants",
      description: "Unique dining experiences",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Palette,
      title: "Art & Experiences",
      description: "Creative spaces and galleries",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Mic,
      title: "Events & Services",
      description: "Local events and services",
      color: "from-blue-500 to-blue-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-screen-xl mx-auto px-5 lg:px-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Explore Near You
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find exactly what you're looking for in your neighborhood
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="cursor-pointer">
              <div className="bg-indigo-50 card items-center rounded-2xl p-8  shadow-soft hover:shadow-medium transition-all duration-300 transform hover:scale-[1.05] h-full">
                <div className={`bg-gradient-to-r ${category.color} rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;