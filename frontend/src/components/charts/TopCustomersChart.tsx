'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface TopCustomersChartProps {
  data: {
    topCustomers?: Array<{
      customer: { firstName: string; lastName: string };
      totalSpent: number;
    }>;
  } | null;
  loading: boolean;
}

export default function TopCustomersChart({ data, loading }: TopCustomersChartProps) {
  if (loading) {
    return (
      <div className="h-64 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!data?.topCustomers?.length) {
    return (
      <div className="h-64 flex items-center justify-center text-gray-500">
        Veri bulunamadı
      </div>
    );
  }

  const chartData = {
    labels: data.topCustomers.map((customer) => 
      `${customer.customer.firstName} ${customer.customer.lastName}`
    ),
    datasets: [
      {
        label: 'Toplam Ödeme ($)',
        data: data.topCustomers.map((customer) => customer.totalSpent),
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value: unknown) {
            return '$' + value;
          }
        }
      },
    },
  };

  return <Bar data={chartData} options={options} />;
}
