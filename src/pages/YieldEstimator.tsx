
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, TrendingUp, ArrowLeft, IndianRupee, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cropDatabase } from '@/data/cropData';
import { costAnalysis } from '@/data/cultivationData';

interface YieldEstimate {
  crop: string;
  teluguName: string;
  expectedYield: string;
  marketPrice: string;
  totalRevenue: number;
  netProfit: number;
  profitMargin: number;
  roi: number;
}

const YieldEstimator = () => {
  const [selectedCrop, setSelectedCrop] = useState('');
  const [landArea, setLandArea] = useState('');
  const [investment, setInvestment] = useState('');
  const [results, setResults] = useState<YieldEstimate | null>(null);
  const [alternatives, setAlternatives] = useState<YieldEstimate[]>([]);

  const calculateYield = () => {
    if (!selectedCrop || !landArea || !investment) return;

    const cropInfo = cropDatabase.find(crop => crop.name === selectedCrop);
    const costInfo = costAnalysis.find(cost => cost.crop === selectedCrop);
    
    if (!cropInfo || !costInfo) return;

    const area = parseFloat(landArea);
    const investmentAmount = parseFloat(investment);

    // Extract yield range (e.g., "18–20 quintals" -> average 19)
    const yieldMatch = costInfo.avgYield.match(/(\d+)(?:–(\d+))?/);
    const minYield = parseInt(yieldMatch?.[1] || '0');
    const maxYield = parseInt(yieldMatch?.[2] || minYield.toString());
    const avgYieldPerAcre = (minYield + maxYield) / 2;
    const totalYield = avgYieldPerAcre * area;

    // Extract market price (e.g., "₹1800–₹2000" -> average 1900)
    const priceMatch = costInfo.marketPrice.match(/₹(\d+)(?:–₹(\d+))?/);
    const minPrice = parseInt(priceMatch?.[1] || '0');
    const maxPrice = parseInt(priceMatch?.[2] || minPrice.toString());
    const avgPrice = (minPrice + maxPrice) / 2;

    const totalRevenue = totalYield * avgPrice;
    const netProfit = totalRevenue - investmentAmount;
    const profitMargin = ((netProfit / totalRevenue) * 100);
    const roi = ((netProfit / investmentAmount) * 100);

    const estimate: YieldEstimate = {
      crop: cropInfo.name,
      teluguName: cropInfo.teluguName,
      expectedYield: `${totalYield.toFixed(1)} quintals`,
      marketPrice: `₹${avgPrice}/quintal`,
      totalRevenue,
      netProfit,
      profitMargin,
      roi
    };

    setResults(estimate);

    // Calculate alternatives
    const alternativeEstimates = costAnalysis
      .filter(cost => cost.crop !== selectedCrop)
      .map(cost => {
        const altCropInfo = cropDatabase.find(crop => crop.name === cost.crop);
        if (!altCropInfo) return null;

        const altYieldMatch = cost.avgYield.match(/(\d+)(?:–(\d+))?/);
        const altMinYield = parseInt(altYieldMatch?.[1] || '0');
        const altMaxYield = parseInt(altYieldMatch?.[2] || altMinYield.toString());
        const altAvgYieldPerAcre = (altMinYield + altMaxYield) / 2;
        const altTotalYield = altAvgYieldPerAcre * area;

        const altPriceMatch = cost.marketPrice.match(/₹(\d+)(?:–₹(\d+))?/);
        const altMinPrice = parseInt(altPriceMatch?.[1] || '0');
        const altMaxPrice = parseInt(altPriceMatch?.[2] || altMinPrice.toString());
        const altAvgPrice = (altMinPrice + altMaxPrice) / 2;

        const altTotalRevenue = altTotalYield * altAvgPrice;
        const altNetProfit = altTotalRevenue - investmentAmount;
        const altProfitMargin = ((altNetProfit / altTotalRevenue) * 100);
        const altRoi = ((altNetProfit / investmentAmount) * 100);

        return {
          crop: altCropInfo.name,
          teluguName: altCropInfo.teluguName,
          expectedYield: `${altTotalYield.toFixed(1)} quintals`,
          marketPrice: `₹${altAvgPrice}/quintal`,
          totalRevenue: altTotalRevenue,
          netProfit: altNetProfit,
          profitMargin: altProfitMargin,
          roi: altRoi
        };
      })
      .filter(Boolean)
      .sort((a, b) => (b?.roi || 0) - (a?.roi || 0))
      .slice(0, 3) as YieldEstimate[];

    setAlternatives(alternativeEstimates);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link to="/" className="p-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <Calculator className="w-8 h-8 text-green-600" />
              Yield & Profit Estimator
            </h1>
            <p className="text-gray-600 mt-1">రాబడి మరియు లాభ అంచనా</p>
          </div>
        </div>

        {/* Input Form */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-600" />
              Enter Crop Details
            </CardTitle>
            <CardDescription>
              Provide your crop information to get detailed yield and profit estimates
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="crop">Crop Type</Label>
                <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                  <SelectTrigger id="crop">
                    <SelectValue placeholder="Select crop" />
                  </SelectTrigger>
                  <SelectContent>
                    {cropDatabase.map((crop) => (
                      <SelectItem key={crop.name} value={crop.name}>
                        {crop.name} ({crop.teluguName})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="area">Land Area (Acres)</Label>
                <Input
                  id="area"
                  type="number"
                  placeholder="Enter area in acres"
                  value={landArea}
                  onChange={(e) => setLandArea(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="investment">Total Investment (₹)</Label>
                <Input
                  id="investment"
                  type="number"
                  placeholder="Enter total investment"
                  value={investment}
                  onChange={(e) => setInvestment(e.target.value)}
                />
              </div>
            </div>

            <Button 
              onClick={calculateYield} 
              className="w-full md:w-auto"
              disabled={!selectedCrop || !landArea || !investment}
            >
              <Calculator className="w-4 h-4 mr-2" />
              Calculate Yield & Profit
            </Button>
          </CardContent>
        </Card>

        {/* Results */}
        {results && (
          <div className="space-y-6">
            {/* Main Results */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  Yield & Profit Estimate for {results.crop}
                </CardTitle>
                <CardDescription>{results.teluguName}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Expected Yield</h3>
                    <p className="text-2xl font-bold text-blue-900">{results.expectedYield}</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">Market Price</h3>
                    <p className="text-2xl font-bold text-green-900">{results.marketPrice}</p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">Total Revenue</h3>
                    <p className="text-2xl font-bold text-purple-900">₹{results.totalRevenue.toLocaleString()}</p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-orange-800 mb-2">Net Profit</h3>
                    <p className="text-2xl font-bold text-orange-900">₹{results.netProfit.toLocaleString()}</p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Profit Margin</h3>
                    <p className="text-xl font-bold text-gray-900">{results.profitMargin.toFixed(1)}%</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Return on Investment (ROI)</h3>
                    <p className="text-xl font-bold text-gray-900">{results.roi.toFixed(1)}%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alternative Crops */}
            {alternatives.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <IndianRupee className="w-5 h-5 text-green-600" />
                    Higher Profit Alternatives
                  </CardTitle>
                  <CardDescription>
                    Consider these crops for potentially higher returns
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {alternatives.map((alt, index) => (
                      <div key={alt.crop} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-lg">{alt.crop}</h3>
                            <p className="text-sm text-gray-600">{alt.teluguName}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-600">ROI</p>
                            <p className="text-xl font-bold text-green-600">{alt.roi.toFixed(1)}%</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                          <div>
                            <span className="text-gray-600">Yield: </span>
                            <span className="font-medium">{alt.expectedYield}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Price: </span>
                            <span className="font-medium">{alt.marketPrice}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Revenue: </span>
                            <span className="font-medium">₹{alt.totalRevenue.toLocaleString()}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Profit: </span>
                            <span className="font-medium">₹{alt.netProfit.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default YieldEstimator;
