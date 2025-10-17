'use client';

interface StatsCardsProps {
  data: {
    totalRevenue?: number;
    totalCustomers?: number;
    totalFilms?: number;
  } | null;
  loading: boolean;
}

export default function StatsCards({ data, loading }: StatsCardsProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow p-6">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const stats = [
    {
      title: 'Toplam Gelir',
      value: data?.totalRevenue ? `$${data.totalRevenue.toFixed(2)}` : '$0.00',
      icon: '💰',
      color: 'text-green-600'
    },
    {
      title: 'Toplam Müşteri',
      value: data?.totalCustomers || 0,
      icon: '👥',
      color: 'text-blue-600'
    },
    {
      title: 'Toplam Film',
      value: data?.totalFilms || 0,
      icon: '🎬',
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.title}</p>
              <p className={`text-3xl font-bold ${stat.color} mt-2`}>
                {stat.value}
              </p>
            </div>
            <div className="text-3xl">{stat.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
