import styled from "styled-components";
import { CardProduct } from "../../components/menu/CardProduct";
import { useAdmin } from "../../store/context/AdminContext";
import { MenuItems } from "../../ui/styles/menu-style";
import { ModalEdit } from "../../components/admin/ModalEdit";
import { LoaderMenu } from "../../components/loader/LoaderMenu";

const AdminProducts = () => {
  const { mockapiProducts, onCloseModal, openModal, loading, error, clickedItem, updateProduct, deleteProduct } =
    useAdmin();
  if (error) return <p>Error al cargar los productos destacados</p>;
  if (loading) return <LoaderMenu />;
  return (
    <>
      {mockapiProducts && (
        <AdminProductsPage>
          <MenuItems>
            {mockapiProducts.map((item) => (
              <CardProduct item={item} key={item.id} />
            ))}
          </MenuItems>

          <ModalEdit {...{ onCloseModal, openModal, clickedItem, updateProduct, deleteProduct }} />
        </AdminProductsPage>
      )}
    </>
  );
};

export default AdminProducts;
const AdminProductsPage = styled.section`
  padding: 16px;
  position: relative;
`;
