import React, { useState } from 'react';
import { getCart } from './Product';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const cart = getCart(); 

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        <h3>Resumen del pedido</h3>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
        <p>Total: ${}</p>
      </div>
      <div>
        <h3>Seleccione el método de pago</h3>
        <select value={paymentMethod} onChange={handlePaymentMethodChange}>
          <option value="">Seleccione el método de pago</option>
          <option value="credit-card">Tarjeta de crédito</option>
          <option value="paypal">PayPal</option>
          {/* Agrega más opciones de método de pago según sea necesario */}
        </select>
        <button onClick={handlePlaceOrder}>Realizar pedido</button>
      </div>
      {orderPlaced && (
        <div>
          <p>¡Gracias por tu compra! Se ha realizado el pedido con éxito.</p>
          {/* Aquí puedes mostrar más detalles del pedido, como el número de pedido, etc. */}
        </div>
      )}
    </div>
  );
};

export default Checkout;

