'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface CategoryData {
  category: string;
  totalRevenue: number;
  rentalsCount: number;
  filmsCount: number;
}

interface CategoryRevenueChartProps {
  data: { categoryRevenue?: CategoryData[] } | null | undefined;
  loading: boolean;
}

const COLORS = [
  '#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#0088FE', '#00C49F', '#FFBB28', '#FF8042',
  '#AF19FF', '#FF1919', '#19FFD4', '#197BFF', '#FF19B5', '#19FF4F', '#FFD419', '#7B19FF'
];

export default function CategoryRevenueChart({ data, loading }: CategoryRevenueChartProps) {
  if (loading) {
    return <div className="text-center py-8">Yükleniyor...</div>;
  }

  if (!data || !data.categoryRevenue || data.categoryRevenue.length === 0) {
    return <div className="text-center py-8">Veri bulunamadı.</div>;
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data.categoryRevenue}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip
          formatter={(value: number, name: string) => {
            if (name === 'totalRevenue') return [`${value.toFixed(2)} $`, 'Toplam Gelir'];
            if (name === 'rentalsCount') return [value, 'Kiralama Sayısı'];
            if (name === 'filmsCount') return [value, 'Film Sayısı'];
            return [value, name];
          }}
        />
        <Bar dataKey="totalRevenue">
          {data.categoryRevenue.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
