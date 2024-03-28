export interface ListaProductosI {
  id: string;
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
  category: {
    id: number;
    name: string;
    image: string;
  };
}
