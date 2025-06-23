
import React, { useState } from "react";
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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wheat, Droplets, Thermometer, Calendar, MapPin, TrendingUp, ChevronDown, ChevronRight } from "lucide-react";
import { cropDatabase } from "@/data/cropData";

const CropInfoTable = () => {
  const [selectedCrop, setSelectedCrop] = useState<string | null>(null);

  const getWaterBadgeColor = (water: string) => {
    if (water.includes("High")) return "bg-blue-100 text-blue-800";
    if (water.includes("Medium")) return "bg-yellow-100 text-yellow-800";
    if (water.includes("Low")) return "bg-green-100 text-green-800";
    return "bg-gray-100 text-gray-800";
  };

  const getSeasonBadgeColor = (season: string) => {
    if (season.includes("Kharif")) return "bg-green-100 text-green-800";
    if (season.includes("Rabi")) return "bg-orange-100 text-orange-800";
    if (season.includes("Annual") || season.includes("Perennial")) return "bg-purple-100 text-purple-800";
    return "bg-gray-100 text-gray-800";
  };

  const toggleCropDetails = (cropName: string) => {
    setSelectedCrop(selectedCrop === cropName ? null : cropName);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wheat className="w-5 h-5 text-green-600" />
          Comprehensive Crop Information - All India
        </CardTitle>
        <CardDescription>
          Detailed cultivation guide with regional data, yields, and market prices for major Indian crops
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Crop Name</TableHead>
                <TableHead className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Main Regions
                </TableHead>
                <TableHead className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Season
                </TableHead>
                <TableHead>Plant → Harvest</TableHead>
                <TableHead>Soil Type</TableHead>
                <TableHead className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  Yield/Ha
                </TableHead>
                <TableHead>Avg Price</TableHead>
                <TableHead className="flex items-center gap-1">
                  <Droplets className="w-4 h-4" />
                  Water Needs
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cropDatabase.map((crop, index) => (
                <React.Fragment key={index}>
                  <TableRow className="hover:bg-gray-50">
                    <TableCell className="font-medium">
                      <Button
                        variant="ghost"
                        className="h-auto p-0 font-normal justify-start"
                        onClick={() => toggleCropDetails(crop.name)}
                      >
                        <div className="flex items-center gap-2">
                          {selectedCrop === crop.name ? (
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-gray-500" />
                          )}
                          <div className="text-left">
                            <div className="font-semibold text-blue-600 hover:text-blue-800">
                              {crop.name}
                            </div>
                            <div className="text-sm text-gray-600">({crop.teluguName})</div>
                          </div>
                        </div>
                      </Button>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {crop.mainRegions.slice(0, 2).map((region, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {region}
                          </Badge>
                        ))}
                        {crop.mainRegions.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{crop.mainRegions.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getSeasonBadgeColor(crop.seasons)}>
                        {crop.seasons}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm">{crop.plantToHarvest}</TableCell>
                    <TableCell className="text-sm">{crop.soilType}</TableCell>
                    <TableCell className="font-semibold text-green-600 text-sm">
                      {crop.yieldPerHa}
                    </TableCell>
                    <TableCell className="font-semibold text-blue-600 text-sm">
                      {crop.avgPrice}
                    </TableCell>
                    <TableCell>
                      <Badge className={getWaterBadgeColor(crop.waterNeeds)}>
                        {crop.waterNeeds}
                      </Badge>
                    </TableCell>
                  </TableRow>
                  
                  {selectedCrop === crop.name && (
                    <TableRow>
                      <TableCell colSpan={8} className="bg-green-50 border-t-0">
                        <div className="p-4 space-y-4">
                          <h3 className="text-lg font-semibold text-green-800">
                            {crop.name} ({crop.teluguName}) - Detailed Information
                          </h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div>
                              <h4 className="font-medium text-gray-700">All Main Regions:</h4>
                              <p className="text-sm text-gray-600">{crop.mainRegions.join(", ")}</p>
                            </div>
                            
                            <div>
                              <h4 className="font-medium text-gray-700">Growing Notes:</h4>
                              <p className="text-sm text-gray-600">{crop.notes}</p>
                            </div>
                            
                            {crop.basalFertilizer && (
                              <div>
                                <h4 className="font-medium text-gray-700">Basal Fertilizer:</h4>
                                <p className="text-sm text-gray-600">{crop.basalFertilizer}</p>
                              </div>
                            )}
                            
                            {crop.topDressing && (
                              <div>
                                <h4 className="font-medium text-gray-700">Top Dressing:</h4>
                                <p className="text-sm text-gray-600">{crop.topDressing}</p>
                              </div>
                            )}
                            
                            {crop.fertilizerNotes && (
                              <div>
                                <h4 className="font-medium text-gray-700">Fertilizer Notes:</h4>
                                <p className="text-sm text-gray-600">{crop.fertilizerNotes}</p>
                              </div>
                            )}
                            
                            {crop.commonPests && crop.commonPests.length > 0 && (
                              <div className="md:col-span-2 lg:col-span-3">
                                <h4 className="font-medium text-gray-700 mb-2">Common Pests & Solutions:</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                  {crop.commonPests.map((pest, idx) => (
                                    <div key={idx} className="p-3 bg-white rounded border">
                                      <div className="font-medium text-red-600 text-sm">
                                        {pest.problem} ({pest.telugu})
                                      </div>
                                      <div className="text-sm text-green-600">
                                        Solution: {pest.solution}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="mt-6 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            <p className="text-sm text-blue-800">
              Click on any crop name to view detailed cultivation information including fertilizer recommendations and pest management.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CropInfoTable;
