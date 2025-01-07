import sampleOrders from "@/data/sampleOrders";
type CompanyData = {
  logo: string;
  orders: { id: number; name: string }[];
};

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
