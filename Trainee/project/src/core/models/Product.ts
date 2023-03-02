import Param from "./Param";

export interface Product {
	id: number;
	title: string;
	thumb?: string;
	description: string;
	price: GLfloat;
	currency: string;
	params: Param[];
}

export default Product;
