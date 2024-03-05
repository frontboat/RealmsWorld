interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
}

// PageLayout component renders a page layout with a title and children components
export const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <div className="w-full pt-12 sm:pl-32 sm:pt-0">
      <div className="container mx-auto px-4">
        <h1 className="mb-8">{title}</h1>
        <hr className="my-8 border" />
        {children}
      </div>
    </div>
  );
};
