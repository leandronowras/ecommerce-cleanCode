import Coupon from "./Coupon";
import Cpf from "./Cpf";
import DefaultFreightCalculator from "../../application/useCases/simulate_freight/DefaultFreightCalculator";
import FreightCalculator from "../../application/useCases/simulate_freight/FreightCalculator";
import Item from "./Item";
import OrderItem from "./OrderItem";
import OrderCode from "./OrderCode";

export default class Order {
	cpf: Cpf;
	orderItems: OrderItem[];
	coupon: Coupon | undefined;
	private freight: number;
	private code: OrderCode;

	constructor (cpf: string, readonly date: Date = new Date(), readonly freightCalculator: FreightCalculator = new DefaultFreightCalculator(), readonly sequence: number = 1) {
		this.cpf = new Cpf(cpf);
		this.orderItems = [];
		this.freight = 0
		this.code = new OrderCode(date, sequence)
	}

	addItem (item: Item, quantity: number) {
		this.freight += this.freightCalculator.calculate(item) * quantity
		this.orderItems.push(new OrderItem(item.idItem, item.price, quantity));
	}

	addCoupon (coupon: Coupon) {
		if(coupon.isValid(this.date)) {
			this.coupon = coupon;
		}
	}

	getFreight() {
		return this.freight
	}

	getCode() {
		return this.code.value
	}

	getCpf() {
		return this.cpf.value
	}

	getOrderItems() {
		return this.orderItems
	}

	getTotal () {
		let total = 0;
		for (const orderItem of this.orderItems) {
			total += orderItem.getTotal();
		}
		if (this.coupon) {
			total -= this.coupon.calculateDiscount(total, this.date)
		}
		total += this.getFreight()
		return total;
	}
}
