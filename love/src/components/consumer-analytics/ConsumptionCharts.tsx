import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';

interface ChartTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: ChartTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg p-3 shadow-xl">
        <p className="font-semibold text-foreground mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: <span className="font-mono font-bold">{entry.value}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

interface SpikeDropChartProps {
  data: { name: string; spike?: number; drop?: number }[];
  type: 'spike' | 'drop';
  title: string;
}

export function SpikeDropChart({ data, type, title }: SpikeDropChartProps) {
  const dataKey = type === 'spike' ? 'spike' : 'drop';
  const color = type === 'spike' ? 'hsl(0 84% 60%)' : 'hsl(38 92% 50%)';
  const label = type === 'spike' ? '% Spike' : '% Drop';

  return (
    <div className="bg-card border border-border rounded-xl p-4">
      <h4 className="text-sm font-semibold text-foreground mb-4">{title}</h4>
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, bottom: 0, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={11} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey={dataKey} fill={color} name={label} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

interface TrendChartProps {
  data: { month: string; count: number }[];
  title: string;
}

export function TrendChart({ data, title }: TrendChartProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-4">
      <h4 className="text-sm font-semibold text-foreground mb-4">{title}</h4>
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, bottom: 0, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={11} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="count"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2 }}
              name="Count"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

interface CategoryPieChartProps {
  data: { category: string; count: number; percentage: number }[];
  title: string;
}

const COLORS = [
  'hsl(var(--primary))',
  'hsl(0 84% 60%)',
  'hsl(38 92% 50%)',
  'hsl(142 76% 36%)',
  'hsl(280 84% 60%)',
  'hsl(200 84% 60%)',
];

export function CategoryPieChart({ data, title }: CategoryPieChartProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-4">
      <h4 className="text-sm font-semibold text-foreground mb-4">{title}</h4>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="count"
              nameKey="category"
              label={({ category, percentage }) => `${percentage.toFixed(1)}%`}
              labelLine={false}
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              layout="horizontal" 
              verticalAlign="bottom" 
              align="center"
              formatter={(value) => <span className="text-xs text-muted-foreground">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

interface CircleBarChartProps {
  data: { name: string; count: number }[];
  title: string;
}

export function CircleBarChart({ data, title }: CircleBarChartProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-4">
      <h4 className="text-sm font-semibold text-foreground mb-4">{title}</h4>
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, bottom: 0, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={11} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="count" fill="hsl(var(--primary))" name="Count" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
