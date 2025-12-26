import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';
import { spikeChartData, dropChartData, zeroConsumptionTrend } from '@/data/mockData';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg p-3 shadow-xl">
        <p className="font-mono text-xs text-primary mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: <span className="font-mono font-bold">{entry.value.toLocaleString()}</span> kWh
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function SpikeChart() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="text-lg font-semibold mb-1">Top 10 Consumers – Sudden Spike</h3>
      <p className="text-sm text-muted-foreground mb-6">Consumption increase &gt;200%</p>
      
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={spikeChartData} layout="vertical" margin={{ top: 0, right: 20, bottom: 0, left: 80 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(217 33% 17%)" horizontal={false} />
            <XAxis type="number" stroke="hsl(215 20% 55%)" fontSize={12} tickFormatter={(v) => `${v}`} />
            <YAxis dataKey="name" type="category" stroke="hsl(215 20% 55%)" fontSize={10} width={75} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="average" fill="hsl(217 33% 25%)" name="Avg (3 mo)" radius={[0, 4, 4, 0]} />
            <Bar dataKey="current" fill="hsl(0 84% 60%)" name="Current" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function DropChart() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="text-lg font-semibold mb-1">Top 10 Consumers – Sudden Drop</h3>
      <p className="text-sm text-muted-foreground mb-6">Consumption decrease &gt;50%</p>
      
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dropChartData} layout="vertical" margin={{ top: 0, right: 20, bottom: 0, left: 80 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(217 33% 17%)" horizontal={false} />
            <XAxis type="number" stroke="hsl(215 20% 55%)" fontSize={12} />
            <YAxis dataKey="name" type="category" stroke="hsl(215 20% 55%)" fontSize={10} width={75} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="average" fill="hsl(217 33% 25%)" name="Avg (3 mo)" radius={[0, 4, 4, 0]} />
            <Bar dataKey="current" fill="hsl(38 92% 50%)" name="Current" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function ZeroConsumptionChart() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="text-lg font-semibold mb-1">Zero Consumption Trend</h3>
      <p className="text-sm text-muted-foreground mb-6">Monthly count of zero-unit consumers</p>
      
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={zeroConsumptionTrend} margin={{ top: 10, right: 20, bottom: 0, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(217 33% 17%)" />
            <XAxis dataKey="month" stroke="hsl(215 20% 55%)" fontSize={12} />
            <YAxis stroke="hsl(215 20% 55%)" fontSize={12} />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="count" 
              stroke="hsl(217 91% 60%)" 
              strokeWidth={3}
              dot={{ fill: 'hsl(217 91% 60%)', strokeWidth: 0, r: 5 }}
              activeDot={{ r: 8, stroke: 'hsl(217 91% 60%)', strokeWidth: 2, fill: 'hsl(222 47% 6%)' }}
              name="Cases"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
