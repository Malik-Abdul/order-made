import { cookies } from "next/headers";
import sampleOrders from "@/data/sampleOrders";
type CompanyData = {
  logo: string;
  orders: { id: number; name: string }[];
};
async function fetchData(subdomain: string): Promise<CompanyData> {
  return {
    logo: `/logo/${subdomain}.png`,
    orders: [
      { id: 1, name: "Order One" },
      { id: 2, name: "Order Two" },
    ],
  };
}

export default async function OrderPage({ params }: { params: string }) {
  const { subdomain } = params;
  const companyData = sampleOrders[subdomain];
  return (
    <div>
      <img src={companyData.logo} alt="" width="200" />
      <h1>Orders: {subdomain}</h1>
      <ul>
        {companyData.orders.map((order) => (
          <li key={order.id}>{order.name}</li>
        ))}
      </ul>
    </div>
  );
}
