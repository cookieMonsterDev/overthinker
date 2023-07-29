import { ImagesEnum } from "@/common/constants";
import { BlurOverlay } from "@/components/BlurOverlay";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BlurOverlay backgroundImage={ImagesEnum.newspaper}>{children}</BlurOverlay>
  );
}
