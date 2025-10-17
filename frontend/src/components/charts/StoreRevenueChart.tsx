'use client';

import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface StoreRevenueChartProps {
  data: {
    storeRevenue?: Array<{
      store: { address: string };
      totalRevenue: number;
    }>;
  } | null;
  loading: boolean;
}

export default function StoreRevenueChart({ data, loading }: StoreRevenueChartProps) {
  if (loading) {
    return (
      <div className="h-64 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!data?.storeRevenue?.length) {
    return (
      <div className="h-64 flex items-center justify-center text-gray-500">
        Veri bulunamadı
      </div>
    );
  }

  const chartData = {
    labels: data.storeRevenue.map((store) => store.store.address),
    datasets: [
      {
        label: 'Gelir ($)',
        data: data.storeRevenue.map((store) => store.totalRevenue),
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 205, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      tooltip: {
        callbacks: {
          label: function(context: { label: string; parsed: number }) {
            return context.label + ': $' + context.parsed;
          }
        }
      }
    },
  };

  return <Pie data={chartData} options={options} />;
}
