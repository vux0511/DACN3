export const app = {
    max_event_listener: 30,

    image_category_directory: "src/public/images/categories",
    image_product_directory: "src/public/images/products",
    image_user_directory: "src/public/images/users",
    image_shop_directory: "src/public/images/shops",

    image_type: [
        "image/png",
        "image/jpg",
        "image/jpeg",
        "image/HEIC",
        "image/webp",
    ],
    limit_product: 100,
    limit_feedback: 100,
    status_order: [
        "Đang chờ xác nhận",
        "Xác nhận thành công, đang chuẩn bị hàng",
        "Đang vận chuyển",
        "giao hàng thành công",
        "Đơn hàng đã bị hủy",
    ],
};
