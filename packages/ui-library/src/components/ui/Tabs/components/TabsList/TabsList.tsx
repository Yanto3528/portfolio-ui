import { List, TabsListProps } from "@radix-ui/react-tabs";
import { twMerge } from "tailwind-merge";

function TabsList({ children, className, ...props }: TabsListProps) {
  return (
    <List
      className={twMerge(
        "flex w-fit items-center border-b border-gray-200",
        className
      )}
      {...props}
    >
      {children}
    </List>
  );
}

export default TabsList;
