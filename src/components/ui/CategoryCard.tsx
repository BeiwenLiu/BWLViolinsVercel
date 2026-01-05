import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description?: string;
  items: { label: string; path: string }[];
  icon?: React.ReactNode;
}

const CategoryCard = ({ title, description, items, icon }: CategoryCardProps) => {
  return (
    <div className="card-elegant group">
      <div className="flex items-start gap-4 mb-4">
        {icon && (
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
        )}
        <div>
          <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
        </div>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors py-1 group/item"
            >
              <ChevronRight className="h-4 w-4 text-secondary group-hover/item:translate-x-1 transition-transform" />
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryCard;
