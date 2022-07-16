import { getPrice } from "@/helpers/getPrice";

export const Price = ({ amount }: { amount: number }) => (
    <p className="text-lg">
        <span className="text-gray-600">price: </span>
        {getPrice(amount)}
    </p>
);
