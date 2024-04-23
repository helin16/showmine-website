type iPageSection = {
  children: React.ReactNode;
  extraClassName?: string;
};
const PageSection = ({ children, extraClassName = "" }: iPageSection) => {
  return (
    <div className={`mx-auto container px-6 ${extraClassName || ""}`}>
      {children}
    </div>
  );
};

export default PageSection;
