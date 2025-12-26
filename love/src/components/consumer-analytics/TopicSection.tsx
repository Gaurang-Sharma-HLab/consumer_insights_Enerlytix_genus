import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TopicSectionProps {
  title: string;
  topicNumber: number;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function TopicSection({ title, topicNumber, children, defaultOpen = false }: TopicSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section className="mb-6 animate-fade-in">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground font-bold text-sm">
            {topicNumber}
          </span>
          <h2 className="text-lg font-semibold text-foreground">{title}</h2>
        </div>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        )}
      </button>
      
      <div className={cn(
        "overflow-hidden transition-all duration-300",
        isOpen ? "mt-4 max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="space-y-6">
          {children}
        </div>
      </div>
    </section>
  );
}
