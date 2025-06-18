import TasterBoxProductDetails from "./product-details";

export default async function TasterBoxProduct({
    params }: {
        params: Promise<{ productId: string }>
    }) {
    const { productId } = await params;

    return (
        <TasterBoxProductDetails productId={productId} />
    )
}
