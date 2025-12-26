import { cn } from '@/lib/utils';

interface Column<T> {
  header: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
  className?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  className?: string;
}

export function DataTable<T extends { id: string }>({ columns, data, className }: DataTableProps<T>) {
  const getCellValue = (row: T, accessor: Column<T>['accessor']) => {
    if (typeof accessor === 'function') {
      return accessor(row);
    }
    const value = row[accessor];
    if (typeof value === 'number') {
      return value.toLocaleString();
    }
    return value as React.ReactNode;
  };

  return (
    <div className={cn("overflow-x-auto rounded-xl border border-border bg-card", className)}>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            {columns.map((col, index) => (
              <th
                key={index}
                className={cn(
                  "px-4 py-3 text-left font-semibold text-foreground whitespace-nowrap",
                  col.className
                )}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={row.id}
              className={cn(
                "border-b border-border/50 hover:bg-muted/30 transition-colors",
                rowIndex % 2 === 0 ? "bg-transparent" : "bg-muted/10"
              )}
            >
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className={cn("px-4 py-3 whitespace-nowrap", col.className)}
                >
                  {getCellValue(row, col.accessor)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
