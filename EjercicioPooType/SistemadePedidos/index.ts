import { OrdenItem } from "./models/orderItem";
import { ProductoRepository } from "./repositories/producto-repository";


const productoRepository = new ProductoRepository();
productoRepository.listarProductos();

const ordenItems = new OrdenItem()
const orden = new Orden(1,)