'use client';

import { useState } from 'react';
import { useQuery } from '@apollo/client/react';
import { 
  GET_TOP_CUSTOMERS, 
  GET_STORE_REVENUE, 
  GET_MOST_RENTED_FILMS, 
  GET_DASHBOARD_STATS 
} from '@/lib/queries';
import TopCustomersChart from './charts/TopCustomersChart';
import StoreRevenueChart from './charts/StoreRevenueChart';
import MostRentedFilmsChart from './charts/MostRentedFilmsChart';
import StatsCards from './StatsCards';

export default function Dashboard() {
  const [dateRange, setDateRange] = useState({
    startDate: '2022-02-01',
    endDate: '2022-08-31'
  });

  const { data: statsData, loading: statsLoading } = useQuery(GET_DASHBOARD_STATS, {
    variables: {
      startDate: dateRange.startDate ? new Date(dateRange.startDate + 'T00:00:00Z').toISOString() : null,
      endDate: dateRange.endDate ? new Date(dateRange.endDate + 'T23:59:59Z').toISOString() : null
    }
  });

  const { data: customersData, loading: customersLoading } = useQuery(GET_TOP_CUSTOMERS, {
    variables: {
      limit: 10,
      startDate: dateRange.startDate ? new Date(dateRange.startDate + 'T00:00:00Z').toISOString() : null,
      endDate: dateRange.endDate ? new Date(dateRange.endDate + 'T23:59:59Z').toISOString() : null
    }
  });

  const { data: storeData, loading: storeLoading } = useQuery(GET_STORE_REVENUE, {
    variables: {
      startDate: dateRange.startDate ? new Date(dateRange.startDate + 'T00:00:00Z').toISOString() : null,
      endDate: dateRange.endDate ? new Date(dateRange.endDate + 'T23:59:59Z').toISOString() : null
    }
  });

  const { data: filmsData, loading: filmsLoading } = useQuery(GET_MOST_RENTED_FILMS, {
    variables: {
      limit: 10
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Rental Analytics Panel
              </h1>
              <p className="text-gray-600 mt-1">
                GraphQL tabanlı kiralama analitik dashboard&apos;u
              </p>
            </div>
            
            {/* Date Range Filter */}
            <div className="flex gap-4 items-center">
              <div className="flex gap-2">
                <input
                  type="date"
                  value={dateRange.startDate}
                  onChange={(e) => setDateRange(prev => ({ ...prev, startDate: e.target.value }))}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                  placeholder="Başlangıç tarihi"
                />
                <input
                  type="date"
                  value={dateRange.endDate}
                  onChange={(e) => setDateRange(prev => ({ ...prev, endDate: e.target.value }))}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                  placeholder="Bitiş tarihi"
                />
              </div>
              <button
                onClick={() => setDateRange({ startDate: '', endDate: '' })}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200"
              >
                Temizle
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <StatsCards data={statsData || null} loading={statsLoading} />

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Top Customers */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              En Çok Ödeme Yapan Müşteriler
            </h2>
            <TopCustomersChart data={customersData || null} loading={customersLoading} />
          </div>

          {/* Store Revenue */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Mağaza Gelirleri
            </h2>
            <StoreRevenueChart data={storeData || null} loading={storeLoading} />
          </div>

          {/* Most Rented Films */}
          <div className="bg-white rounded-lg shadow p-6 lg:col-span-2">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              En Çok Kiralanan Filmler
            </h2>
            <MostRentedFilmsChart data={filmsData || null} loading={filmsLoading} />
          </div>
        </div>
      </main>
    </div>
  );
}
