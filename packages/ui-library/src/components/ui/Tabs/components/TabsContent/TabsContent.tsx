import { Content, TabsContentProps } from "@radix-ui/react-tabs";
import { twMerge } from "tailwind-merge";

function TabsContent({ children, className, ...props }: TabsContentProps) {
  return (
    <Content className={twMerge("py-6", className)} {...props}>
      {children}
    </Content>
  );
}

export default TabsContent;
