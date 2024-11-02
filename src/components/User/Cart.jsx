import React, { useState } from "react";
import icons from "../../utils/utils";

const CartTable = ({ cartItems }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter cart items based on search query
  const filteredCartItems = cartItems.filter((item) =>
    item.product.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Placeholder function for checkout action
  const handleCheckout = () => {
    // Logic for checkout goes here
    alert("Proceeding to checkout..."); // Example alert
  };

  // Placeholder function for moving to wishlist
  const handleMoveToWishlist = (itemId) => {
    alert(`Item with ID ${itemId} moved to wishlist`); // Example alert
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        margin: "20px",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Cart</h2>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: "8px",
            width: "200px",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        />
      </div>

      {/* Cart Table */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
              <img
                src={icons.Sort}
                alt="Sort Icon"
                className="inline-block w-7 h-7"
              />
            </th>
            <th style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
              Product
            </th>
            <th style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
              Quantity
            </th>
            <th style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
              Price
            </th>
            <th style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
              Total
            </th>
            <th style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredCartItems.map((item) => (
            <tr key={item.id}>
              <td
                style={{
                  padding: "15px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                <img
                  src={item.image}
                  alt={item.product}
                  style={{
                    width: "60px",
                    height: "55px",
                    borderRadius: "50%",
                    marginLeft: "50%", // Center the image
                  }}
                />
              </td>
              <td
                style={{
                  padding: "15px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                {item.product}
              </td>
              <td
                style={{
                  padding: "15px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                {item.quantity}
              </td>
              <td
                style={{
                  padding: "15px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                ${item.price.toFixed(2)}
              </td>
              <td
                style={{
                  padding: "15px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                ${(item.price * item.quantity).toFixed(2)}
              </td>
              <td
                style={{
                  padding: "15px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                <div>
                  <button
                    onMouseEnter={(e) => (e.target.style.color = "blue")}
                    onMouseLeave={(e) => (e.target.style.color = "black")}
                    style={{
                      padding: "5px 10px",
                      cursor: "pointer",
                      color: "black", // Default color
                      border: "none",
                      backgroundColor: "transparent",
                      marginRight: "10px",
                    }}
                    onClick={() => handleMoveToWishlist(item.id)}
                  >
                    Move to Wishlist
                  </button>
                  <button
                    onMouseEnter={(e) => (e.target.style.color = "red")}
                    onMouseLeave={(e) => (e.target.style.color = "black")}
                    style={{
                      padding: "5px 10px",
                      cursor: "pointer",
                      color: "black", // Default color
                      border: "none",
                      backgroundColor: "transparent",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Checkout Button */}
      <div style={{ textAlign: "right", marginTop: "20px" }}>
        <button
          onClick={handleCheckout}
          style={{
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

// Example usage with sample data
const CartTable2 = () => {
  const cartItems = [
    {
      id: 1,
      image: icons.image2,
      product: "Classic Monochrome Tees",
      quantity: 2,
      price: 29.99,
    },
    {
      id: 2,
      image: icons.image,
      product: "Sleek and Cozy Black",
      quantity: 1,
      price: 19.99,
    },
    {
      id: 3,
      image: icons.image6,
      product: "Elegant Ebony Sweatshirts",
      quantity: 1,
      price: 49.99,
    },
    // Add more cart items here
  ];

  return <CartTable cartItems={cartItems} />;
};

export default CartTable2;
