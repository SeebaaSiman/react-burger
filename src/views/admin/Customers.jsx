import styled from "styled-components";

const Customers = () => {
  const customersData = [
    {
      id: 1,
      email: "juan.perez@email.com",
      address: "Calle Falsa 123, Ciudad",
      deliveryType: "Envío",
      totalValue: 25000,
      productCount: 3,
      saleDate: "2024-06-01",
    },
    {
      id: 2,
      email: "maria.gomez@email.com",
      address: "Takeaway",
      deliveryType: "Takeaway",
      totalValue: 18000,
      productCount: 2,
      saleDate: "2024-06-02",
    },
    {
      id: 3,
      email: "carlos.lopez@email.com",
      address: "Av. Siempre Viva 742, Ciudad",
      deliveryType: "Envío",
      totalValue: 32000,
      productCount: 4,
      saleDate: "2024-06-03",
    },
    {
      id: 4,
      email: "ana.martinez@email.com",
      address: "Takeaway",
      deliveryType: "Takeaway",
      totalValue: 12000,
      productCount: 1,
      saleDate: "2024-06-04",
    },
    {
      id: 5,
      email: "sofia.fernandez@email.com",
      address: "Calle 456, Ciudad",
      deliveryType: "Envío",
      totalValue: 27500,
      productCount: 3,
      saleDate: "2024-06-05",
    },
    {
      id: 6,
      email: "lucas.torres@email.com",
      address: "Takeaway",
      deliveryType: "Takeaway",
      totalValue: 15000,
      productCount: 2,
      saleDate: "2024-06-06",
    },
    {
      id: 7,
      email: "valentina.rojas@email.com",
      address: "Av. Central 999, Ciudad",
      deliveryType: "Envío",
      totalValue: 33000,
      productCount: 5,
      saleDate: "2024-06-07",
    },
    {
      id: 8,
      email: "martin.castillo@email.com",
      address: "Takeaway",
      deliveryType: "Takeaway",
      totalValue: 11000,
      productCount: 1,
      saleDate: "2024-06-08",
    },
    {
      id: 9,
      email: "camila.diaz@email.com",
      address: "Calle Sur 55, Ciudad",
      deliveryType: "Envío",
      totalValue: 29000,
      productCount: 4,
      saleDate: "2024-06-09",
    },
    {
      id: 10,
      email: "julian.mendez@email.com",
      address: "Takeaway",
      deliveryType: "Takeaway",
      totalValue: 16000,
      productCount: 2,
      saleDate: "2024-06-10",
    },
    {
      id: 11,
      email: "natalia.sosa@email.com",
      address: "Calle Norte 12, Ciudad",
      deliveryType: "Envío",
      totalValue: 22000,
      productCount: 3,
      saleDate: "2024-06-11",
    },
    {
      id: 12,
      email: "diego.iglesias@email.com",
      address: "Takeaway",
      deliveryType: "Takeaway",
      totalValue: 14000,
      productCount: 2,
      saleDate: "2024-06-12",
    },
    {
      id: 13,
      email: "romina.luna@email.com",
      address: "Calle Este 88, Ciudad",
      deliveryType: "Envío",
      totalValue: 31000,
      productCount: 4,
      saleDate: "2024-06-13",
    },
    {
      id: 14,
      email: "gaston.acosta@email.com",
      address: "Takeaway",
      deliveryType: "Takeaway",
      totalValue: 17000,
      productCount: 2,
      saleDate: "2024-06-14",
    },
    {
      id: 15,
      email: "luciana.paz@email.com",
      address: "Av. Los Pinos 101, Ciudad",
      deliveryType: "Envío",
      totalValue: 24000,
      productCount: 3,
      saleDate: "2024-06-15",
    },
    {
      id: 16,
      email: "sebastian.farias@email.com",
      address: "Takeaway",
      deliveryType: "Takeaway",
      totalValue: 13500,
      productCount: 1,
      saleDate: "2024-06-16",
    },
    {
      id: 17,
      email: "florencia.morales@email.com",
      address: "Calle Oeste 34, Ciudad",
      deliveryType: "Envío",
      totalValue: 28000,
      productCount: 4,
      saleDate: "2024-06-17",
    },
    {
      id: 18,
      email: "pablo.vera@email.com",
      address: "Takeaway",
      deliveryType: "Takeaway",
      totalValue: 15500,
      productCount: 2,
      saleDate: "2024-06-18",
    },
    {
      id: 19,
      email: "carla.bustamante@email.com",
      address: "Av. Libertad 1234, Ciudad",
      deliveryType: "Envío",
      totalValue: 26500,
      productCount: 3,
      saleDate: "2024-06-19",
    },
    {
      id: 20,
      email: "federico.galvan@email.com",
      address: "Takeaway",
      deliveryType: "Takeaway",
      totalValue: 14500,
      productCount: 1,
      saleDate: "2024-06-20",
    },
    {
      id: 21,
      email: "melina.coria@email.com",
      address: "Calle Sarmiento 678, Ciudad",
      deliveryType: "Envío",
      totalValue: 29000,
      productCount: 4,
      saleDate: "2024-06-21",
    },
    {
      id: 22,
      email: "tomas.rios@email.com",
      address: "Takeaway",
      deliveryType: "Takeaway",
      totalValue: 17500,
      productCount: 2,
      saleDate: "2024-06-22",
    },
    {
      id: 23,
      email: "agustina.varela@email.com",
      address: "Calle Belgrano 321, Ciudad",
      deliveryType: "Envío",
      totalValue: 26000,
      productCount: 3,
      saleDate: "2024-06-23",
    },
    {
      id: 24,
      email: "ezequiel.molina@email.com",
      address: "Takeaway",
      deliveryType: "Takeaway",
      totalValue: 13000,
      productCount: 1,
      saleDate: "2024-06-24",
    },
    {
      id: 25,
      email: "bianca.rey@email.com",
      address: "Av. del Sol 456, Ciudad",
      deliveryType: "Envío",
      totalValue: 31000,
      productCount: 4,
      saleDate: "2024-06-25",
    },
  ];

  return (
    <CustomersPage>
      <h2>Clientes</h2>

      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Dirección</th>
            <th>Tipo de Entrega</th>
            <th>Total ($)</th>
            <th>Cantidad de Productos</th>
            <th>Fecha de Venta</th>
          </tr>
        </thead>
        <tbody>
          {customersData.map((customer) => (
            <tr key={customer.id}>
              <td className={`${customer.id % 2 && "par"}`}>{customer.email}</td>
              <td className={`${customer.id % 2 && "par"}`}>{customer.address}</td>
              <td className={`${customer.id % 2 && "par"}`}>{customer.deliveryType}</td>
              <td className={`${customer.id % 2 && "par"}`}>{customer.totalValue}</td>
              <td className={`${customer.id % 2 && "par"}`}>{customer.productCount}</td>
              <td className={`${customer.id % 2 && "par"}`}>{customer.saleDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </CustomersPage>
  );
};

export default Customers;
const CustomersPage = styled.section`
  padding: 16px;
  overflow-x: auto;
  h2 {
    color: ${(props) => props.theme.primaryText};
    margin-bottom: 24px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    background: ${(props) => props.theme.white};
    border-radius: 8px;
    overflow: hidden;
    box-shadow: ${(props) => props.theme.cardShadow};
    margin: 32px 0;
  }
  th {
    background: ${(props) => props.theme.white};
    font-weight: 600;
    color: ${(props) => props.theme.primaryText};
  }
  td,
  th {
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid ${(props) => props.theme.white};
  }
  td {
    &.par {
      background-color: #cccccc;
    }
  }
  tbody tr {
    opacity: 0.8;
    cursor: pointer;
    transition: background 0.2s ease;
    &:hover {
      opacity: 1;
    }
  }
`;
