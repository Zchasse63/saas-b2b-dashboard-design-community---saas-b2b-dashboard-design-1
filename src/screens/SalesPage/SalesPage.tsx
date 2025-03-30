import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock sales data - replace with actual API call
const mockSalesData = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
  { month: 'Mar', sales: 5000 },
  { month: 'Apr', sales: 4500 },
  { month: 'May', sales: 6000 },
  { month: 'Jun', sales: 5500 },
];

const timeFilters = ['Last 7 Days', 'Last 30 Days', 'Last 3 Months', 'Last 12 Months'];

export const SalesPage: React.FC = () => {
  const [selectedTimeFilter, setSelectedTimeFilter] = useState('Last 30 Days');

  // Mock total metrics - replace with actual calculations based on filtered data
  const totalRevenue = '$28,000';
  const totalSales = '1,234';
  const averageOrderValue = '$22.69';

  return (
    <div className="p-6">
      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-xl font-bold">Sales Overview</CardTitle>
          <div className="flex space-x-2">
            {timeFilters.map((filter) => (
              <Button
                key={filter}
                variant={selectedTimeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTimeFilter(filter)}
                className={selectedTimeFilter === filter ? "bg-purple-600 text-white" : ""}
              >
                {filter}
              </Button>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold">{totalRevenue}</div>
                <div className="text-sm text-gray-500">Total Revenue</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold">{totalSales}</div>
                <div className="text-sm text-gray-500">Total Sales</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold">{averageOrderValue}</div>
                <div className="text-sm text-gray-500">Average Order Value</div>
              </CardContent>
            </Card>
          </div>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockSalesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
