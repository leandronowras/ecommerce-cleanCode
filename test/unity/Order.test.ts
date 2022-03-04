import Coupon from "../../src/domain/entity/Coupon";
import FixedFreightCalculator from "../../src/FixedFreightCalculator";
import Item from "../../src/domain/entity/Item";
import Order from "../../src/domain/entity/Order";

test("Deve criar um pedido vazio com CPF válido", function () {
	const cpf = "839.435.452-10";
	const order = new Order(cpf);
	const total = order.getTotal();
	expect(total).toBe(0);
});

test("Deve tentar criar um pedido vazio com CPF inválido", function () {
	const cpf = "111.111.111-11";
	expect(() => new Order(cpf)).toThrow(new Error("Invalid cpf"));
});

test("Deve criar um pedido com 3 itens", function () {
	const cpf = "839.435.452-10";
	const order = new Order(cpf);
	order.addItem(new Item(1, "Música", "CD", 30), 3);
	order.addItem(new Item(2, "Vídeo", "DVD", 50), 1);
	order.addItem(new Item(3, "Vídeo", "VHS", 10), 2);
	const total = order.getTotal();
	expect(total).toBe(160);
});

test("Deve criar um pedido com 3 itens com um cupom de desconto", function () {
	const cpf = "839.435.452-10";
	const order = new Order(cpf);
	order.addItem(new Item(1, "Música", "CD", 30), 3);
	order.addItem(new Item(2, "Vídeo", "DVD", 50), 1);
	order.addItem(new Item(3, "Vídeo", "VHS", 10), 2);
	order.addCoupon(new Coupon("VALE20", 20));
	const total = order.getTotal();
	expect(total).toBe(128);
});

test("Deve criar um pedido com 3 itens com um cupom de desconto expirado ", function () {
	const cpf = "839.435.452-10";
	const order = new Order(cpf);
	order.addItem(new Item(1, "Música", "CD", 30), 3);
	order.addItem(new Item(2, "Vídeo", "DVD", 50), 1);
	order.addItem(new Item(3, "Vídeo", "VHS", 10), 2);
	order.addCoupon(new Coupon("VALE20", 20, new Date("2010-10-10")));
	const total = order.getTotal();
	expect(total).toBe(160);
});

test("Deve criar um pedido com 3 itens com o calculo do frete", function () {
	const cpf = "839.435.452-10";
	const order = new Order(cpf);
	order.addItem(new Item(1, "Música", "CD", 1000, 100, 30, 10, 3), 1);
	order.addItem(new Item(2, "Vídeo", "DVD", 5000, 100, 50, 50, 20), 1);
	order.addItem(new Item(3, "Vídeo", "VHS", 30, 30, 10, 10), 3);
	const freight = order.getFreight()
	expect(freight).toBe(230);
});

test("Deve criar um pedido com 3 itens com o calculo do frete fixo", function () {
	const cpf = "839.435.452-10";
	const order = new Order(cpf, new Date(), new FixedFreightCalculator());
	order.addItem(new Item(1, "Música", "CD", 1000, 100, 30, 10, 3), 1);
	order.addItem(new Item(2, "Vídeo", "DVD", 5000, 100, 50, 50, 20), 1);
	order.addItem(new Item(3, "Vídeo", "VHS", 30, 30, 10, 10), 3);
	const freight = order.getFreight()
	expect(freight).toBe(50);
});

test("Deve criar um pedido com codigo", function () {
	const cpf = "839.435.452-10";
	const order = new Order(cpf, new Date(), new FixedFreightCalculator());
	order.addItem(new Item(1, "Música", "CD", 1000, 100, 30, 10, 3), 1);
	order.addItem(new Item(2, "Vídeo", "DVD", 5000, 100, 50, 50, 20), 1);
	order.addItem(new Item(3, "Vídeo", "VHS", 30, 30, 10, 10), 3);
	const code = order.getCode()
	expect(code).toBe('202200000001');
});