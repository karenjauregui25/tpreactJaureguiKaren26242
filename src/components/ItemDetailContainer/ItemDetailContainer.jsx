
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [itemDetail, setItemDetail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setItemDetail(null);
    setLoading(true);
    setError(null);

    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
       
const item = data.find(
        (product) => String(product.id) === String(id)
      );

        if (item) {
          setItemDetail(item);
        } else {
          throw new Error("Elemento no encontrado");
        }
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (!itemDetail) return <p>Producto no encontrado</p>;

  return (
    <section>
      <h2 className="title-list">Detalle de Producto</h2>
        <div className="products-container">
        <ItemDetail item={itemDetail} />
      </div>
    </section>
  );
};