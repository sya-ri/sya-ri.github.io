@Test
fun shipsPaidOrders() {
    val order =
        fake<Order> {
            Order::status generates OrderStatus.Paid
        }

    shippingService.ship(order)
    val shipment = shipmentRepository.findByOrderId(order.id)
    assertEquals(ShipmentStatus.Created, shipment.status)
}
