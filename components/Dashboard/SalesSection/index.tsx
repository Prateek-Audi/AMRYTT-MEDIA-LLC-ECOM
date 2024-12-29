import { Card, CardBody, CardHeader, CircularProgress } from "@nextui-org/react";
import { categories, salesData, topProducts } from "../data";

const SalesSection: React.FC = ()=> {

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-4 ">
        {/* Sales Source Card */}
        <Card className="w-full p-4 shadow-none hover:shadow-lg">
          <CardHeader className="flex justify-between">
            <p className="text-lg">Sales Source</p>
            <button className="text-gray-400">⋮</button>
          </CardHeader>
          <CardBody>
            <div className="relative flex justify-center items-center">
              <CircularProgress
                classNames={{
                  svg: "w-60 h-60 xl:w-60 xl:h-60 lg:w-48 lg:h-48 md:w-60 md:h-60",
                  indicator: "stroke-blue-500",
                  track: "stroke-blue-100",
                }}
                value={salesData.percentage}
                strokeWidth={2}
                showValueLabel={true}
                valueLabel={
                  <div className="text-center">
                    <div className="text-2xl font-bold">
                      ${(salesData.total / 1000).toFixed(1)}k
                    </div>
                    <div className="text-green-500 text-sm">
                      +{salesData.percentage}%
                    </div>
                  </div>
                }
              />
            </div>
            <div className="mt-4 space-y-2">
              {salesData.sources.map((source, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-gray-600">{source.name}</span>
                  <span className="font-medium">
                    ${source.value.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        {/* Top Product Card */}
        <Card className="w-full p-4 shadow-none hover:shadow-lg">
          <CardHeader className="flex justify-between">
            <div>
              <p className="text-lg">Top Product</p>
              <p className="text-sm text-gray-500">Top Product in This Month</p>
            </div>
            <button className="text-gray-400">⋮</button>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg"></div>
                    <div>
                      <p className="text-sm font-medium">{product.name}</p>
                      <p className="text-xs text-gray-500">
                        {product.category}
                      </p>
                    </div>
                  </div>
                  <span className="font-medium">${product.price}</span>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        {/* Top Category Card */}
        <Card className="w-full p-4 shadow-none hover:shadow-lg">
          <CardHeader className="flex justify-between">
            <div>
              <p className="text-lg">Top Category</p>
              <p className="text-sm text-gray-500">
                Top Category in This Month
              </p>
            </div>
            <button className="text-gray-400">⋮</button>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              {categories.map((category, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg"></div>
                    <span className="text-sm font-medium">{category.name}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{category.value}</p>
                    <p
                      className={`text-xs ${
                        category.change >= 0 ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {category.change >= 0 ? "+" : ""}
                      {category.change}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    )

}

export default SalesSection;