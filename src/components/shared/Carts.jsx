import { Badge } from "@heroui/react";
import MediIcon from "../ui/Typography/MediIcon";

const Carts = () => {
  return (
    <div>
      <Badge color="primary" content="5" shape="circle" showOutline={false}>
        <div className="border border-primary/30 border-solid rounded-full w-10 h-10 flex items-center justify-center">
          <MediIcon name={"shopping-cart"} />
        </div>
      </Badge>
    </div>
  );
};

export default Carts;
