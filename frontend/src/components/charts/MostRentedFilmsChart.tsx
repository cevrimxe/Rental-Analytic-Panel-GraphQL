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

interface MostRentedFilmsChartProps {
  data: {
    mostRentedFilms?: Array<{
      film: { title: string };
      rentalsCount: number;
    }>;
  } | null;
  loading: boolean;
}

export default function MostRentedFilmsChart({ data, loading }: MostRentedFilmsChartProps) {
  if (loading) {
    return (
      <div className="h-64 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!data?.mostRentedFilms?.length) {
    return (
      <div className="h-64 flex items-center justify-center text-gray-500">
        Veri bulunamadı
      </div>
    );
  }

  const chartData = {
    labels: data.mostRentedFilms.map((film) => film.film.title),
    datasets: [
      {
        label: 'Kiralama Sayısı',
        data: data.mostRentedFilms.map((film) => film.rentalsCount),
        backgroundColor: 'rgba(34, 197, 94, 0.8)',
        borderColor: 'rgba(34, 197, 94, 1)',
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
      },
      x: {
        ticks: {
          maxRotation: 45,
          minRotation: 45
        }
      }
    },
  };

  return <Bar data={chartData} options={options} />;
}
