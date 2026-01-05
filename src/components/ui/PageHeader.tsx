interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className="bg-gradient-to-br from-rich-brown to-deep-burgundy text-primary-foreground py-16 md:py-24">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl animate-slide-up">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
