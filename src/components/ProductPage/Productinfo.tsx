import React from "react";

export default function Productinfo() {
  return (
    <div>
      {/* Product Grid */}
      <div className="mt-16 grid grid-cols-8 gap-4">
        {products.map((product, idx) => {
          const isSelected = selectedProduct === idx;
          return (
            <div key={idx} className="flex flex-col items-center">
              <button
                onClick={() => toggleProduct(idx)}
                className={`w-40 h-36 ${
                  isSelected
                    ? "bg-red-600 border-red-600"
                    : "bg-gray-200 border-gray-300"
                } border rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-md hover:border-red-500`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-32= w-32 object-contain"
                />
              </button>
              <span className="text-sm mt-2 text-center text-black ">
                {product.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Selected Product Description (Always Visible) */}
      {selectedProduct !== null && (
        <motion.div
          layout
          className="mt-10 border rounded-lg shadow-sm overflow-hidden"
        >
          {/* Header Row */}
          <div className="flex items-center justify-between px-6 py-4 bg-gray-300 cursor-pointer">
            <div className="flex items-center gap-4">
              <img
                src={
                  products[selectedProduct].titleImage ||
                  products[selectedProduct].image
                }
                alt={products[selectedProduct].name}
                className="w-auto h-20 object-contain"
              />
              <div>
                <h3 className="text-3xl font-semibold text-black">
                  {products[selectedProduct].name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {products[selectedProduct].description2}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-2xl text-red-600 font-bold"
            >
              {isExpanded ? "−" : "+"}
            </button>
          </div>

          {/* Expanded Section */}
          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                key="types"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white px-6 py-4 border-t"
              >
                <p className="text-gray-700 mb-2">
                  {products[selectedProduct].description}
                </p>

                <div className="grid grid-cols-3 gap-4 mt-4">
                  {products[selectedProduct].types.map((img, i) => (
                    <div
                      key={i}
                      className="p-4 border rounded-lg flex flex-col items-center hover:shadow-md transition"
                    >
                      <img
                        src={img || products[selectedProduct].image}
                        alt={`Type ${i + 1}`}
                        className="w-16 h-16 object-contain mb-2"
                      />
                      <p className="text-sm text-center text-black font-medium">
                        {products[selectedProduct].name} Type {i + 1}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
