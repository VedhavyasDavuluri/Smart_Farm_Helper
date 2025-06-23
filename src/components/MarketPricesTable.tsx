
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TrendingUp, TrendingDown, RefreshCw, MapPin, ChevronDown, ChevronRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { currentMarketPrices } from "@/data/marketData";

const MarketPricesTable = () => {
  const [lastUpdated, setLastUpdated] = React.useState(new Date());
  const [expandedCrop, setExpandedCrop] = React.useState<string | null>(null);

  const handleRefresh = () => {
    setLastUpdated(new Date());
    console.log("Market prices refreshed at:", new Date().toLocaleString());
  };

  const toggleCropDetails = (cropKey: string) => {
    setExpandedCrop(expandedCrop === cropKey ? null : cropKey);
  };

  // Group prices by state
  const pricesByState = currentMarketPrices.reduce((acc, item) => {
    if (!acc[item.state]) {
      acc[item.state] = [];
    }
    acc[item.state].push(item);
    return acc;
  }, {} as Record<string, typeof currentMarketPrices>);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            State-wise Market Prices - India
          </div>
          <Button variant="outline" size="sm" onClick={handleRefresh}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </CardTitle>
        <CardDescription>
          Live commodity rates organized by state from major Indian markets (₹/quintal) - Last updated: {lastUpdated.toLocaleTimeString()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {Object.entries(pricesByState).map(([state, crops]) => (
            <div key={state} className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-blue-600" />
                <h3 className="text-lg font-semibold text-blue-800">{state}</h3>
                <span className="text-sm text-gray-500">({crops.length} crops)</span>
              </div>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Crop</TableHead>
                      <TableHead>Market</TableHead>
                      <TableHead>Price Range</TableHead>
                      <TableHead>Change</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {crops.map((item, index) => {
                      const cropKey = `${state}-${item.crop}-${index}`;
                      return (
                        <React.Fragment key={cropKey}>
                          <TableRow className="hover:bg-gray-50">
                            <TableCell className="font-medium">
                              <Button
                                variant="ghost"
                                className="h-auto p-0 font-normal justify-start"
                                onClick={() => toggleCropDetails(cropKey)}
                              >
                                <div className="flex items-center gap-2">
                                  {expandedCrop === cropKey ? (
                                    <ChevronDown className="w-4 h-4 text-gray-500" />
                                  ) : (
                                    <ChevronRight className="w-4 h-4 text-gray-500" />
                                  )}
                                  <div className="text-left">
                                    <div className="font-semibold text-blue-600 hover:text-blue-800">
                                      {item.crop}
                                    </div>
                                    <div className="text-sm text-gray-600">({item.teluguName})</div>
                                  </div>
                                </div>
                              </Button>
                            </TableCell>
                            <TableCell>{item.market}</TableCell>
                            <TableCell className="font-semibold">{item.price}</TableCell>
                            <TableCell>
                              <div className={`flex items-center gap-1 ${
                                item.trend === "up" ? "text-green-600" : item.trend === "down" ? "text-red-600" : "text-gray-600"
                              }`}>
                                {item.trend === "up" ? (
                                  <TrendingUp className="w-4 h-4" />
                                ) : item.trend === "down" ? (
                                  <TrendingDown className="w-4 h-4" />
                                ) : (
                                  <div className="w-4 h-4 bg-gray-400 rounded-full" />
                                )}
                                {item.change}
                              </div>
                            </TableCell>
                          </TableRow>
                          
                          {expandedCrop === cropKey && (
                            <TableRow>
                              <TableCell colSpan={4} className="bg-blue-50 border-t-0">
                                <div className="p-4 space-y-4">
                                  <h3 className="text-lg font-semibold text-blue-800 flex items-center gap-2">
                                    <Info className="w-5 h-5" />
                                    {item.crop} ({item.teluguName}) - Market Details
                                  </h3>
                                  
                                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div className="bg-white p-3 rounded border">
                                      <h4 className="font-medium text-gray-700 mb-1">Location</h4>
                                      <p className="text-sm text-gray-600">{state} - {item.market}</p>
                                    </div>
                                    
                                    <div className="bg-white p-3 rounded border">
                                      <h4 className="font-medium text-gray-700 mb-1">Current Price</h4>
                                      <p className="text-sm font-semibold text-green-600">{item.price}</p>
                                    </div>
                                    
                                    <div className="bg-white p-3 rounded border">
                                      <h4 className="font-medium text-gray-700 mb-1">Price Movement</h4>
                                      <div className={`text-sm font-medium ${
                                        item.trend === "up" ? "text-green-600" : item.trend === "down" ? "text-red-600" : "text-gray-600"
                                      }`}>
                                        {item.change} ({item.trend === "up" ? "Rising" : item.trend === "down" ? "Falling" : "Stable"})
                                      </div>
                                    </div>
                                    
                                    <div className="bg-white p-3 rounded border">
                                      <h4 className="font-medium text-gray-700 mb-1">Market Advice</h4>
                                      <p className="text-sm text-gray-600">
                                        {item.trend === "up" 
                                          ? "Good time to sell if you have stock" 
                                          : item.trend === "down" 
                                          ? "Consider holding or wait for better prices"
                                          : "Stable market, normal trading conditions"}
                                      </p>
                                    </div>
                                    
                                    <div className="bg-white p-3 rounded border">
                                      <h4 className="font-medium text-gray-700 mb-1">Unit</h4>
                                      <p className="text-sm text-gray-600">
                                        {item.price.includes("/kg") ? "Per Kilogram" : 
                                         item.price.includes("/nut") ? "Per Nut" : 
                                         "Per Quintal (100 kg)"}
                                      </p>
                                    </div>
                                    
                                    <div className="bg-white p-3 rounded border">
                                      <h4 className="font-medium text-gray-700 mb-1">Quality</h4>
                                      <p className="text-sm text-gray-600">FAQ (Fair Average Quality)</p>
                                    </div>
                                  </div>
                                  
                                  <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                                    <h4 className="font-medium text-yellow-800 mb-1">Trading Tip</h4>
                                    <p className="text-sm text-yellow-700">
                                      Prices shown are indicative. Always verify current rates directly with the market before trading. 
                                      Consider transportation costs and market timing for optimal returns.
                                    </p>
                                  </div>
                                </div>
                              </TableCell>
                            </TableRow>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-3 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <p className="text-sm text-green-800">
              Market data organized by state for easy regional comparison. Click on any crop name to view detailed market information and trading advice.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketPricesTable;
