import PortalBanner from "@/components/portal/banner";

type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col h-screen">
      <PortalBanner />
      <div className="container flex justify-center flex-1 h-0">{children}</div>
    </div>
  );
};
export default Layout;
