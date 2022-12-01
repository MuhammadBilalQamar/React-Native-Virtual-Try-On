export const MESSAGES = {
  VIDEO_INSTRUCTION:
    "Use back camera to record video in open T-pose position slowly spinning 360 degrees.Video must be less than 30 seconds.",
  CONTACT_US: "Email: virtualtryonclothing@gmail.com for any inquiries.",
  LOGOUT_CONFIRMATION: "Do you want to logout?",
  CHECKOUT_CONFIRMATION: "Do you want to checkout?",
  ORDER_SUCCESS: "Your order has been successfully placed!",
  VIDEO_LIMIT_ERROR: "Video must be maximum 30sec long",
  VIDEO_UPLOAD_FAIL_ERROR:
    "Video upload failed due to network connectivity issue!",
  PRODUCT_ADDED_TO_CART: "is successfully added to the cart",
  PRODUCT_REMOVED_FROM_CART: "is removed from the cart",
  IMAGE_UPLOAD_FAIL_ERROR:
    "Image upload failed due to network connectivity issue!",
  SOMETHING_WRONG: "something went wrong!",
  USER_UPADETED_SUCCESSFULLY: "user updated successfully",
  USER_REGISTER_SUCCESSFULLY:
    "Congratulations your acccout has been created successfully! Do login and continue",
};

export const ROUTER = {
  LOGIN: "Login",
  SIGNUP: "SignUp",
  HOME: "Home",
};

export const PRODUCTS = [
  {
    id: 1,
    title: "Teal Short Sleeve Cotton",
    decription:
      "Slim fit shirt in lightweight cotton fabric. Buttoned up, short sleeve, and dropped shoulders.",
    price: "$ 19.99 USD",
    image:
      "https://firebasestorage.googleapis.com/v0/b/employee-app-87a6d.appspot.com/o/productImages%2Fpro1.png?alt=media&token=cdaedfc1-e2b1-41c1-bd38-116169064a0d",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    availableQty: 1,
  },
  {
    id: 2,
    title: "Black Dri-FIT Pants",
    decription:
      "Lightweight knit fabric giving you a slim feel through the leg. Tapered about the ankles giving an athletic look",
    price: "$ 24.99 USD",
    image:
      "https://firebasestorage.googleapis.com/v0/b/employee-app-87a6d.appspot.com/o/productImages%2Fpro2.png?alt=media&token=b6eda9d7-0868-4ea6-ab66-8f33163bbb1f",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    availableQty: 1,
  },
  {
    id: 3,
    title: "Dark Blue T-Shirt Cotton",
    price: "$ 16.99 USD",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    availableQty: 1,
    decription:
      "Lightweight crew neck T-shirt. Perfect for comfort with a simple style.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/employee-app-87a6d.appspot.com/o/productImages%2Fpro3.png?alt=media&token=c837b062-8663-4fb3-a6f0-cfb89423fc85",
  },
  {
    id: 4,
    title: "Light Blue Denim Skinny Jeans",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    availableQty: 1,
    decription:
      "Slim fit designed with high stretch that keeps its shape. Light wash with authentic denim look.",
    price: "$ 32.99 USD",
    image:
      "https://firebasestorage.googleapis.com/v0/b/employee-app-87a6d.appspot.com/o/productImages%2Fpro4.png?alt=media&token=a6c99a44-04d5-4c4b-aaf1-a9d379756766",
  },
  {
    id: 5,
    title: "Beige Fundamental T-Shirt Graphic",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    availableQty: 1,
    decription:
      "Classic Short Sleeve T-shirt. Designed with room in the chest and waist",
    price: "$ 16.99 USD",
    image:
      "https://firebasestorage.googleapis.com/v0/b/employee-app-87a6d.appspot.com/o/productImages%2Fpro5.png?alt=media&token=3d7496ed-0ee9-4d75-90db-20a40db7cd15",
  },
  {
    id: 6,
    title: "Raw Blue Denim Jeans",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    availableQty: 1,
    decription:
      "High waisted straight leg jeans for good movement, zip fly with button, and raw denim for vintage look",
    price: "$ 32.99 USD",
    image:
      "https://firebasestorage.googleapis.com/v0/b/employee-app-87a6d.appspot.com/o/productImages%2Fpro6.png?alt=media&token=4d5bf4e0-4737-4e36-a150-3288e3a96843",
  },
  {
    id: 7,
    title: "Beige Silk Blouse",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    availableQty: 1,
    decription:
      "V-neck blouse in woven fabric with a sheen. Collar, buttons at front, and long sleeves with a sleeve placket and button at cuffs",
    price: "$ 24.99 USD",
    image:
      "https://firebasestorage.googleapis.com/v0/b/employee-app-87a6d.appspot.com/o/productImages%2Fpro7.png?alt=media&token=6affacd3-cd3e-45c2-afab-2906b1ea57d5",
  },
  {
    id: 8,
    title: "Blue Curvy Ultra High Jeggings",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    availableQty: 1,
    decription:
      "Ankle-length jeggings in stretch denim to embrace and showcase your figure. Extra-high waist, zip fly, mock front pockets, and regular back pockets.",
    price: "$ 24.99 USD",
    image:
      "https://firebasestorage.googleapis.com/v0/b/employee-app-87a6d.appspot.com/o/productImages%2Fpro8.png?alt=media&token=1503223c-1832-401e-a5d4-ecc2da5bda7b",
  },
  {
    id: 9,
    title: "Black Cotton Turtleneck Top",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    availableQty: 1,
    decription:
      "Fitted turtleneck top in soft, pima cotton jersey. Extra-long sleeves.",
    price: "$ 29.99 USD",
    image:
      "https://firebasestorage.googleapis.com/v0/b/employee-app-87a6d.appspot.com/o/productImages%2Fpro9.png?alt=media&token=e23eedc5-daaf-4ec1-a421-288dce2f0424",
  },
  {
    id: 10,
    title: "Black 90s Baggy High Jeans",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    availableQty: 1,
    decription:
      "Loose-fit, 5-pocket jeans in thick, washed denim. High waist, zip fly with button, and straight legs.",
    price: "$ 34.99 USD",
    image:
      "https://firebasestorage.googleapis.com/v0/b/employee-app-87a6d.appspot.com/o/productImages%2Fpro10.png?alt=media&token=f2b4cf5d-4568-45c6-946b-0a61a9c73dda",
  },
];

export const HOME_ITEMS = [
  {
    id: 1,
    name: "Store Products",
    image:
      "https://cdn.shopify.com/s/files/1/0070/7032/files/image6_47d9edac-208b-47c9-8bd8-a1c02d247b0e_600x600.jpg?v=1620670412",
    count: 124.711,
  },
  {
    id: 2,
    name: "Upload Video",
    image:
      "https://buffer.com/resources/content/images/resources/wp-content/uploads/2017/02/video-stats@2x.png",
    count: 234.722,
  },
  {
    id: 3,
    name: "Shopping Cart",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqEA-_Gy-SyuFJ16eOZcfGVdEj0AQrKIxrJg&usqp=CAU",
    count: 324.723,
  },
];
