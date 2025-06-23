
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertTriangle, Bug, Shield, Phone } from 'lucide-react';
import TeluguDubbing from '@/components/TeluguDubbing';

interface AnalysisResultsProps {
  analysisResult: any;
  onContactAdvisor: () => void;
}

const AnalysisResults: React.FC<AnalysisResultsProps> = ({
  analysisResult,
  onContactAdvisor
}) => {
  if (!analysisResult) return null;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="flex items-center space-x-2">
          {analysisResult.confidence > 0.7 ? (
            <CheckCircle className="h-5 w-5 text-green-600" />
          ) : (
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
          )}
          <span>Analysis Results</span>
        </CardTitle>
        <TeluguDubbing 
          text={`Analysis results. Disease identified: ${analysisResult.disease.teluguName}. Confidence: ${Math.round(analysisResult.confidence * 100)} percent. ${analysisResult.disease.description}`}
        />
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Disease Detection */}
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h3 className="font-semibold text-blue-800 mb-2">Identified Disease</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-bold">{analysisResult.disease.teluguName}</span>
                <Badge 
                  variant={analysisResult.confidence > 0.7 ? "default" : "secondary"}
                  className={analysisResult.confidence > 0.7 ? "bg-green-100 text-green-800" : ""}
                >
                  {Math.round(analysisResult.confidence * 100)}% Confidence
                </Badge>
              </div>
              <p className="text-sm text-gray-600">{analysisResult.disease.description}</p>
            </div>
            <TeluguDubbing 
              text={`Disease: ${analysisResult.disease.teluguName}. ${analysisResult.disease.description}`}
              size="sm"
              className="ml-2"
            />
          </div>
        </div>

        {/* Symptoms */}
        <div className="p-4 bg-red-50 rounded-lg border border-red-200">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-red-800 mb-2 flex items-center">
              <Bug className="h-4 w-4 mr-2" />
              Symptoms
            </h3>
            <TeluguDubbing 
              text={`Symptoms: ${analysisResult.disease.symptoms.join('. ')}`}
              size="sm"
            />
          </div>
          <ul className="list-disc list-inside space-y-1 text-sm">
            {analysisResult.disease.symptoms.map((symptom: string, index: number) => (
              <li key={index}>{symptom}</li>
            ))}
          </ul>
        </div>

        {/* Treatment */}
        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-semibold text-green-800 mb-3 flex items-center">
              <Shield className="h-4 w-4 mr-2" />
              Treatment
            </h3>
            <TeluguDubbing 
              text={`Treatment options: Chemical treatment and home remedies available. Prevention measures included.`}
              size="sm"
            />
          </div>
          
          {/* Chemical Treatment */}
          <div className="mb-4">
            <h4 className="font-medium mb-2">Chemical Treatment:</h4>
            <div className="space-y-2">
              {analysisResult.treatment.chemical.map((treatment: any, index: number) => (
                <div key={index} className="p-3 bg-white rounded border">
                  <div className="font-medium">{treatment.name}</div>
                  <div className="text-sm text-gray-600">Dosage: {treatment.dosage}</div>
                  <div className="text-sm text-gray-600">Usage: {treatment.usage}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Home Remedies */}
          <div className="mb-4">
            <h4 className="font-medium mb-2">Home Remedies:</h4>
            <div className="space-y-2">
              {analysisResult.treatment.homeRemedies.map((remedy: string, index: number) => (
                <div key={index} className="p-3 bg-white rounded border">
                  <div className="text-sm">{remedy}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Prevention */}
          <div>
            <h4 className="font-medium mb-2">Prevention Measures:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {analysisResult.treatment.prevention.map((tip: string, index: number) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Advisor */}
        {analysisResult.confidence < 0.7 && (
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <h3 className="font-semibold text-yellow-800 mb-2 flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              Expert Consultation
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              AI analysis doesn't have full confidence. For more accurate diagnosis, please consult agricultural experts.
            </p>
            <Button 
              onClick={onContactAdvisor}
              className="bg-yellow-600 hover:bg-yellow-700"
            >
              <Phone className="h-4 w-4 mr-2" />
              Contact Agricultural Advisor
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AnalysisResults;
