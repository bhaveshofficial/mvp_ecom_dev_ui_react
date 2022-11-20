export const productDetails = [
  {
    pid: 1,
    pname: "Nike Shoe",
    pdesc: "High strength sole, new design shoes",
    pprice: 2000.0,
    pimage: "/productimg.png",
  },
  {
    pid: 2,
    pname: "Worng Shirt",
    pdesc: "Cotton, comfort, best fit",
    pprice: 1000.0,
    pimage: "/productimg.png",
  },
  {
    pid: 3,
    pname: "Samsung Washing Machine",
    pdesc: "Wobble technology machine",
    pprice: 15999.0,
    pimage: "/productimg.png",
  },
  {
    pid: 4,
    pname: "Lenovo Laptop",
    pdesc: "Best in class, i5 laptop",
    pprice: 45999.0,
    pimage: "/productimg.png",
  },
  {
    pid: 5,
    pname: "Levis Jeans",
    pdesc: "Comfortable, durable",
    pprice: 1900.0,
    pimage: "/productimg.png",
  },
  {
    pid: 6,
    pname: "Apple IPhone14",
    pdesc: "Iphone is class apart",
    pprice: 79000.0,
    pimage: "/productimg.png",
  },
];

export const cartMap = new Map();

export const addToCart_UIOnly = (addToCartObj) => {
    if(cartMap.has(addToCartObj?.userId)){
        cartMap.get(addToCartObj?.userId).push(addToCartObj?.productId);
    }
    else {
        cartMap.set(addToCartObj?.userId, [addToCartObj?.productId]);
    }

}

export const getCart_UIOnly = (sessionUserId) => {
    let productIds = cartMap.get(sessionUserId);

    return productDetails.filter(item => productIds.includes(item?.pid));

}

export const removeFromCart_UIOnly = (sessionUserId, pId) => {
    let productIds = cartMap.get(sessionUserId);
    if(productIds?.length > 1){
        cartMap.set(sessionUserId, productIds.filter(item => item !== pId));
    }
    else {
        cartMap.delete(sessionUserId);
    }
}
