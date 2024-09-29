import Image from "next/image";
import CategoryTabs from "./components/CategoryTabs";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <div className="">
     <CategoryTabs />
     <ProductList />
    </div>
  );
}
