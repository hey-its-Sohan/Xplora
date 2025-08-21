import React from "react";
import { Sparkles } from "lucide-react";

const ProblemSolve = () => {
  return (
    <div className=" w-full py-16 bg-white relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#ffffff",
          backgroundImage: `
        radial-gradient(
          circle at top right,
          rgba(173, 109, 244, 0.3),
          transparent 40%
        ),radial-gradient(
          circle at bottom left,
          rgba(59,130,246,0.3),
          transparent 40%
        )
      `,
          filter: "blur(80px)",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Your Content/Components */}
      <div className="z-10 relative">
        <section className="overflow-hidden">
          <div className="max-w-4xl mx-auto text-center px-6">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-100 mb-6">
              <Sparkles className="w-8 h-8 text-indigo-600" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Tired of the same old places?
            </h2>

            {/* Paragraph */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Mainstream maps show you the chains and the crowds.{" "}
              <span className="font-semibold text-indigo-600">Xplore</span> connects
              you with the authentic, the unique, and the overlooked — the places
              that give a city its soul.
            </p>
          </div>
        </section>
      </div>
    </div>

  );
};

export default ProblemSolve;
