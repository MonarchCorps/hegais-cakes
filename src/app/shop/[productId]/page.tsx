import { getProductById } from "@/http";
import TasterBoxProductDetails from "./product-details";

export default async function TasterBoxProduct({
    params }: {
        params: Promise<{ productId: string }>
    }) {
    const { productId } = await params;

    const product = await getProductById(productId)

    return (
        <TasterBoxProductDetails product={product} />
    )
}
