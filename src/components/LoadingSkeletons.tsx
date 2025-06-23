
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export const WelcomeSkeleton = () => (
  <div className="text-center space-y-6 relative py-8">
    <div className="relative z-10">
      <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
      <div className="flex justify-center">
        <Skeleton className="w-24 h-1 rounded-full" />
      </div>
    </div>
    <Skeleton className="h-6 w-5/6 mx-auto" />
    <div className="flex justify-center space-x-2">
      <Skeleton className="w-2 h-2 rounded-full" />
      <Skeleton className="w-2 h-2 rounded-full" />
      <Skeleton className="w-2 h-2 rounded-full" />
    </div>
  </div>
);

export const QuickActionsSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[1, 2, 3].map((index) => (
      <Card key={index} className="rounded-3xl">
        <CardContent className="p-8 text-center">
          <Skeleton className="w-20 h-20 rounded-3xl mx-auto mb-6" />
          <Skeleton className="h-6 w-3/4 mx-auto mb-3" />
          <Skeleton className="h-4 w-5/6 mx-auto" />
        </CardContent>
      </Card>
    ))}
  </div>
);

export const WeatherSkeleton = () => (
  <Card className="rounded-2xl">
    <CardHeader>
      <div className="flex items-center gap-3">
        <Skeleton className="w-8 h-8 rounded-xl" />
        <Skeleton className="h-6 w-32" />
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="flex items-center gap-4">
        <Skeleton className="w-16 h-16 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Skeleton className="h-16 rounded-lg" />
        <Skeleton className="h-16 rounded-lg" />
      </div>
    </CardContent>
  </Card>
);

export const TableSkeleton = ({ rows = 5 }: { rows?: number }) => (
  <div className="space-y-3">
    <div className="grid grid-cols-4 gap-4 font-medium">
      {[1, 2, 3, 4].map((col) => (
        <Skeleton key={col} className="h-4" />
      ))}
    </div>
    {Array.from({ length: rows }).map((_, index) => (
      <div key={index} className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((col) => (
          <Skeleton key={col} className="h-4" />
        ))}
      </div>
    ))}
  </div>
);
