import Image from "next/image";

type Props = {};
const PortalBanner = (props: Props) => {
  return (
    <div className="w-full bg-muted flex justify-center py-5">
      <Image
        src="/images/logo.png"
        alt="LOGO"
        sizes="100vw"
        style={{
          width: "200px",
          height: "auto",
        }}
        width={0}
        height={0}
      />
    </div>
  );
};
export default PortalBanner;
