import { getProductById } from "../../../data/products";

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const product = getProductById(id);

    if (!product) {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        headers: { "Content-Type": "application/json" },
        status: 404,
      });
    }

    return new Response(JSON.stringify(product), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}
