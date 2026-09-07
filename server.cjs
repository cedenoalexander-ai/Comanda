var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// server.ts
var server_exports = {};
module.exports = __toCommonJS(server_exports);
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_vite = require("vite");
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json());
var DATA_DIR = import_path.default.join(process.cwd(), "data");
var DATA_FILE = import_path.default.join(DATA_DIR, "restaurant_data.json");
var INITIAL_CATEGORIES = [
  "Entradas",
  "Hamburguesas",
  "Platos Fuertes",
  "Pizzas",
  "Bebidas",
  "C\xF3cteles",
  "Postres"
];
var INITIAL_MENU = [
  {
    id: "m1",
    name: "Teque\xF1os Gourmet (6 uds)",
    category: "Entradas",
    price: 6.5,
    description: "Dedos crocantes rellenos de abundante queso blanco con salsa t\xE1rtara de la casa.",
    quickNotes: ["Salsa aparte", "Doble salsa", "Bien tostados"],
    available: true
  },
  {
    id: "m2",
    name: "Alitas BBQ Crujientes (8 uds)",
    category: "Entradas",
    price: 8,
    description: "Alitas glaseadas en salsa BBQ ahumada servidas con bastones de apio y aderezo ranch.",
    quickNotes: ["Picante medio", "Muy picante", "Salsa aparte"],
    available: true
  },
  {
    id: "m3",
    name: "Empanaditas Mixtas (4 uds)",
    category: "Entradas",
    price: 5.5,
    description: "Carne mechada, pollo, queso y caz\xF3n con guasacaca artesanal.",
    quickNotes: ["Con guasacaca", "Sin picante"],
    available: true
  },
  {
    id: "m4",
    name: "Burger Cl\xE1sica Especial",
    category: "Hamburguesas",
    price: 10.5,
    description: "180g de carne de res premium, queso cheddar fundido, lechuga romana, tomate y salsa especial.",
    quickNotes: ["Sin cebolla", "Sin tomate", "T\xE9rmino medio", "Bien cocido", "Papas extra"],
    available: true
  },
  {
    id: "m5",
    name: "Doble Smash Bacon Burger",
    category: "Hamburguesas",
    price: 13,
    description: "Dos discos smash crujientes, doble tocineta ahumada, queso americano y cebolla caramelizada.",
    quickNotes: ["Sin cebolla", "Extra tocineta", "Sin pepinillos", "Salsa aparte"],
    available: true
  },
  {
    id: "m6",
    name: "Pepito Mixto Especial 30cm",
    category: "Hamburguesas",
    price: 12,
    description: "Carne y pollo salteados sobre pan baguette suave, gratinado con queso parmesano y papas hilo.",
    quickNotes: ["Sin salsas", "Salsas aparte", "Extra queso"],
    available: true
  },
  {
    id: "m7",
    name: "Parrilla Mixta de Solomo & Pollo",
    category: "Platos Fuertes",
    price: 18.5,
    description: "Cortes jugosos al grill acompa\xF1ados de yuca frita, queso a la plancha, ensalada y guasacaca.",
    quickNotes: ["T\xE9rmino medio", "Bien cocido", "Yuca sancochada", "Papas fritas en vez de yuca"],
    available: true
  },
  {
    id: "m8",
    name: "Churrasco de Solomo 350g",
    category: "Platos Fuertes",
    price: 16,
    description: "Corte magro a la brasa con mantequilla de hierbas finas y papas r\xFAsticas.",
    quickNotes: ["T\xE9rmino 1/4", "T\xE9rmino medio", "3/4", "Bien cocido"],
    available: true
  },
  {
    id: "m9",
    name: "Pechuga Cordon Bleu Gourmet",
    category: "Platos Fuertes",
    price: 14,
    description: "Pechuga rellena de jam\xF3n ahumado y queso fundido, ba\xF1ada en salsa de champi\xF1ones con pur\xE9.",
    quickNotes: ["Salsa aparte", "Sin champi\xF1ones"],
    available: true
  },
  {
    id: "m10",
    name: "Pizza Pepperoni Suprema (Grande)",
    category: "Pizzas",
    price: 14.5,
    description: "Masa fermentada a mano, salsa pomodoro italiana, abundante mozzarella y pepperoni crocante.",
    quickNotes: ["Masa delgada", "Extra queso", "Bien tostada"],
    available: true
  },
  {
    id: "m11",
    name: "Pizza Margarita & Albahaca Fresca",
    category: "Pizzas",
    price: 12,
    description: "Cl\xE1sica con pomodoro, queso mozzarella fresco, albahaca genovesa y aceite de oliva virgen extra.",
    quickNotes: ["Extra or\xE9gano", "Sin albahaca"],
    available: true
  },
  {
    id: "m12",
    name: "Cerveza Fr\xEDa Artesanal / Polar",
    category: "Bebidas",
    price: 2.5,
    description: "Servida en copa bien helada (temperatura vestida de novia).",
    quickNotes: ["Bien fr\xEDa", "Con lim\xF3n y sal"],
    available: true
  },
  {
    id: "m13",
    name: "Jugo Natural de Frutas (Maracuy\xE1/Fresa)",
    category: "Bebidas",
    price: 3.5,
    description: "Frutas naturales frescas de temporada en agua o leche.",
    quickNotes: ["En agua", "En leche", "Sin az\xFAcar", "Poca az\xFAcar", "Con hielo"],
    available: true
  },
  {
    id: "m14",
    name: "Refresco L\xEDnea 355ml",
    category: "Bebidas",
    price: 2,
    description: "Coca-Cola, Pepsi, 7Up, Colita o Agua Mineral con gas.",
    quickNotes: ["Con hielo y lim\xF3n", "Sin hielo"],
    available: true
  },
  {
    id: "m15",
    name: "Mojito Cubano de Menta Fresca",
    category: "C\xF3cteles",
    price: 6,
    description: "Ron blanco a\xF1ejo, hierbabuena fresca machacada, jugo de lima, az\xFAcar de ca\xF1a y soda.",
    quickNotes: ["Poco dulce", "Fuerte de ron", "Sin az\xFAcar"],
    available: true
  },
  {
    id: "m16",
    name: "Margarita Cl\xE1sica Coronada",
    category: "C\xF3cteles",
    price: 6.5,
    description: "Tequila reposado, licor triple sec de naranja, jugo de lima y copa escarchada con sal marina.",
    quickNotes: ["Escarchada con sal", "Escarchada con taj\xEDn"],
    available: true
  },
  {
    id: "m17",
    name: "Brownie Tibio con Helado de Vainilla",
    category: "Postres",
    price: 5.5,
    description: "Brownie h\xFAmedo de chocolate oscuro con nueces, bola de helado artesanal y sirope de chocolate.",
    quickNotes: ["Helado aparte", "Sin nueces"],
    available: true
  },
  {
    id: "m18",
    name: "Torta Tres Leches Tradicional",
    category: "Postres",
    price: 4.8,
    description: "Bizcocho esponjoso ba\xF1ado en tres leches con merengue suizo flameado y canela.",
    quickNotes: ["Con canela extra", "Para compartir"],
    available: true
  }
];
var INITIAL_WAITERS = [
  { id: "w1", name: "Carlos Mendoza", code: "101", phone: "+58 412-1234567", active: true, createdAt: (/* @__PURE__ */ new Date()).toISOString() },
  { id: "w2", name: "Mar\xEDa Gonz\xE1lez", code: "102", phone: "+58 414-7654321", active: true, createdAt: (/* @__PURE__ */ new Date()).toISOString() },
  { id: "w3", name: "Alejandro Silva", code: "103", phone: "+58 416-5558899", active: true, createdAt: (/* @__PURE__ */ new Date()).toISOString() },
  { id: "w4", name: "Andrea P\xE9rez", code: "104", phone: "+58 424-9988776", active: true, createdAt: (/* @__PURE__ */ new Date()).toISOString() }
];
var INITIAL_TABLES = [
  { id: "t1", name: "Mesa 1", capacity: 4, status: "libre", zone: "Sal\xF3n Principal" },
  { id: "t2", name: "Mesa 2", capacity: 2, status: "libre", zone: "Sal\xF3n Principal" },
  { id: "t3", name: "Mesa 3", capacity: 4, status: "libre", zone: "Sal\xF3n Principal" },
  { id: "t4", name: "Mesa 4", capacity: 6, status: "libre", zone: "Sal\xF3n Principal" },
  { id: "t5", name: "Mesa 5", capacity: 2, status: "libre", zone: "Sal\xF3n Principal" },
  { id: "t6", name: "Mesa 6", capacity: 4, status: "libre", zone: "Sal\xF3n Principal" },
  { id: "t7", name: "Mesa 7 (VIP)", capacity: 8, status: "libre", zone: "\xC1rea VIP" },
  { id: "t8", name: "Terraza 1", capacity: 4, status: "libre", zone: "Terraza al Aire Libre" },
  { id: "t9", name: "Terraza 2", capacity: 4, status: "libre", zone: "Terraza al Aire Libre" },
  { id: "t10", name: "Barra 1", capacity: 2, status: "libre", zone: "Barra de Tragos" },
  { id: "t11", name: "Barra 2", capacity: 2, status: "libre", zone: "Barra de Tragos" },
  { id: "t12", name: "Mesa Jard\xEDn", capacity: 6, status: "libre", zone: "Jard\xEDn Externo" }
];
var INITIAL_USERS = [
  { id: 1, name: "Administrador Principal", role: "admin", pin: "1234", active: true, createdAt: (/* @__PURE__ */ new Date()).toISOString() },
  { id: 2, name: "Carlos Mendoza", role: "mesonero", pin: "1111", active: true, createdAt: (/* @__PURE__ */ new Date()).toISOString() },
  { id: 3, name: "Mar\xEDa Gonz\xE1lez", role: "mesonero", pin: "2222", active: true, createdAt: (/* @__PURE__ */ new Date()).toISOString() },
  { id: 4, name: "Chef Mario (Cocina)", role: "cocina", pin: "3333", active: true, createdAt: (/* @__PURE__ */ new Date()).toISOString() }
];
var INITIAL_SETTINGS = {
  restaurantName: "Restaurante & Grill El Portal",
  currencySymbol: "$",
  currencyCode: "USD",
  bcvRate: 54.2,
  bcvLastUpdated: (/* @__PURE__ */ new Date()).toISOString(),
  taxPercent: 10,
  defaultTipPercent: 10,
  address: "Av. Principal Gastron\xF3mica #120",
  phone: "+1 (555) 342-9876",
  receiptFooter: "\xA1Gracias por su visita! Vuelva pronto.",
  googleSheetsWebhookUrl: "",
  googleSheetsLastSync: void 0,
  themeColor: "amber",
  headerStyle: "dark"
};
var dbState = {
  orderCounter: 100,
  tables: INITIAL_TABLES,
  menu: INITIAL_MENU,
  categories: INITIAL_CATEGORIES,
  settings: INITIAL_SETTINGS,
  orders: [],
  waiters: INITIAL_WAITERS,
  users: INITIAL_USERS
};
function loadState() {
  try {
    if (!import_fs.default.existsSync(DATA_DIR)) {
      import_fs.default.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (import_fs.default.existsSync(DATA_FILE)) {
      const content = import_fs.default.readFileSync(DATA_FILE, "utf-8");
      const loaded = JSON.parse(content);
      dbState = {
        ...dbState,
        ...loaded,
        // Ensure arrays and defaults exist
        tables: loaded.tables || INITIAL_TABLES,
        menu: loaded.menu || INITIAL_MENU,
        categories: loaded.categories || INITIAL_CATEGORIES,
        settings: { ...INITIAL_SETTINGS, ...loaded.settings || {} },
        orders: loaded.orders || [],
        orderCounter: loaded.orderCounter || 100,
        waiters: loaded.waiters || INITIAL_WAITERS,
        users: loaded.users && loaded.users.length > 0 ? loaded.users : INITIAL_USERS
      };
      console.log(`[Store] Loaded ${dbState.orders.length} orders, ${dbState.tables.length} tables, ${dbState.users.length} users from ${DATA_FILE}`);
    } else {
      saveState();
    }
  } catch (err) {
    console.error("[Store] Error loading state from disk:", err);
  }
}
function saveState() {
  try {
    if (!import_fs.default.existsSync(DATA_DIR)) {
      import_fs.default.mkdirSync(DATA_DIR, { recursive: true });
    }
    import_fs.default.writeFileSync(DATA_FILE, JSON.stringify(dbState, null, 2), "utf-8");
  } catch (err) {
    console.error("[Store] Error saving state to disk:", err);
  }
}
loadState();
function calculateOrderTotals(order, taxPercent) {
  const subtotal = order.items.reduce((acc, it) => acc + it.price * it.quantity, 0);
  const taxAmount = Number((subtotal * taxPercent / 100).toFixed(2));
  const tipAmount = order.tipPercent ? Number((subtotal * order.tipPercent / 100).toFixed(2)) : order.tipAmount || 0;
  const discountAmount = order.discountAmount || 0;
  const total = Number((subtotal + taxAmount + tipAmount - discountAmount).toFixed(2));
  order.subtotal = Number(subtotal.toFixed(2));
  order.taxPercent = taxPercent;
  order.taxAmount = taxAmount;
  order.tipAmount = tipAmount;
  order.total = total;
}
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: (/* @__PURE__ */ new Date()).toISOString() });
});
app.get("/api/state", (req, res) => {
  res.json({
    tables: dbState.tables,
    orders: dbState.orders,
    menu: dbState.menu,
    categories: dbState.categories,
    settings: dbState.settings,
    waiters: dbState.waiters,
    users: dbState.users,
    serverTime: (/* @__PURE__ */ new Date()).toISOString()
  });
});
app.post("/api/orders", (req, res) => {
  const { tableId, waiterName, customerCount, items } = req.body;
  const table = dbState.tables.find((t) => t.id === tableId);
  if (!table) {
    return res.status(404).json({ error: "Mesa no encontrada" });
  }
  const existingOrder = dbState.orders.find((o) => o.tableId === tableId && o.status !== "pagada" && o.status !== "cancelada");
  if (existingOrder) {
    return res.status(400).json({
      error: `La mesa ya tiene un pedido activo (#${existingOrder.orderNumber}). Utilice la opci\xF3n de agregar adicionales.`
    });
  }
  if (!items || !items.length) {
    return res.status(400).json({ error: "El pedido debe incluir al menos un plato o bebida" });
  }
  dbState.orderCounter += 1;
  const orderNumber = dbState.orderCounter;
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const orderId = `ord_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
  const orderItems = items.map((it, index) => ({
    id: `item_${orderId}_1_${index}`,
    menuItemId: it.menuItemId,
    name: it.name,
    price: Number(it.price) || 0,
    quantity: Number(it.quantity) || 1,
    notes: it.notes ? it.notes.trim() : "",
    round: 1,
    addedAt: now
  }));
  const batchId = `batch_${orderId}_1`;
  const initialBatch = {
    id: batchId,
    orderId,
    orderNumber,
    tableId: table.id,
    tableName: table.name,
    waiterName: waiterName || "Mesonero",
    round: 1,
    isAddition: false,
    items: orderItems,
    createdAt: now,
    status: "pendiente"
  };
  const newOrder = {
    id: orderId,
    orderNumber,
    tableId: table.id,
    tableName: table.name,
    waiterName: waiterName || "Mesonero",
    customerCount: Number(customerCount) || 1,
    status: "abierta",
    createdAt: now,
    updatedAt: now,
    items: orderItems,
    batches: [initialBatch],
    subtotal: 0,
    taxPercent: dbState.settings.taxPercent,
    taxAmount: 0,
    tipPercent: 0,
    tipAmount: 0,
    discountAmount: 0,
    total: 0
  };
  calculateOrderTotals(newOrder, dbState.settings.taxPercent);
  table.status = "ocupada";
  table.activeOrderId = orderId;
  dbState.orders.unshift(newOrder);
  saveState();
  res.status(201).json({
    message: "Pedido enviado a cocina exitosamente",
    order: newOrder,
    batch: initialBatch
  });
});
app.post("/api/orders/:id/items", (req, res) => {
  const { id } = req.params;
  const { items, waiterName } = req.body;
  const order = dbState.orders.find((o) => o.id === id);
  if (!order) {
    return res.status(404).json({ error: "Pedido no encontrado" });
  }
  if (order.status === "pagada" || order.status === "cancelada") {
    return res.status(400).json({ error: "No se pueden agregar productos a un pedido cerrado o cancelado" });
  }
  if (!items || !items.length) {
    return res.status(400).json({ error: "Debe especificar al menos un producto para agregar" });
  }
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const nextRound = (order.batches?.length || 0) + 1;
  const batchId = `batch_${order.id}_${nextRound}`;
  const additionalItems = items.map((it, index) => ({
    id: `item_${order.id}_${nextRound}_${index}`,
    menuItemId: it.menuItemId,
    name: it.name,
    price: Number(it.price) || 0,
    quantity: Number(it.quantity) || 1,
    notes: it.notes ? it.notes.trim() : "",
    round: nextRound,
    addedAt: now
  }));
  const newBatch = {
    id: batchId,
    orderId: order.id,
    orderNumber: order.orderNumber,
    tableId: order.tableId,
    tableName: order.tableName,
    waiterName: waiterName || order.waiterName,
    round: nextRound,
    isAddition: true,
    // Clearly marked as an addition!
    items: additionalItems,
    createdAt: now,
    status: "pendiente"
  };
  order.items.push(...additionalItems);
  order.batches.push(newBatch);
  order.updatedAt = now;
  if (waiterName) order.waiterName = waiterName;
  calculateOrderTotals(order, dbState.settings.taxPercent);
  saveState();
  res.json({
    message: `Ronda #${nextRound} (Adicional) enviada a cocina`,
    order,
    batch: newBatch
  });
});
app.patch("/api/batches/:batchId/status", (req, res) => {
  const { batchId } = req.params;
  const { status, markPrinted } = req.body;
  let foundBatch = null;
  let parentOrder = null;
  for (const ord of dbState.orders) {
    const b = ord.batches?.find((batch) => batch.id === batchId);
    if (b) {
      foundBatch = b;
      parentOrder = ord;
      break;
    }
  }
  if (!foundBatch) {
    return res.status(404).json({ error: "Comanda de cocina no encontrada" });
  }
  if (status) {
    foundBatch.status = status;
  }
  if (markPrinted) {
    foundBatch.printedAt = (/* @__PURE__ */ new Date()).toISOString();
  }
  saveState();
  res.json({
    message: "Estado de comanda actualizado",
    batch: foundBatch,
    order: parentOrder
  });
});
app.post("/api/orders/:id/request-bill", (req, res) => {
  const { id } = req.params;
  const order = dbState.orders.find((o) => o.id === id);
  if (!order) return res.status(404).json({ error: "Pedido no encontrado" });
  order.status = "cuenta_solicitada";
  order.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
  const table = dbState.tables.find((t) => t.id === order.tableId);
  if (table) {
    table.status = "cuenta_solicitada";
  }
  saveState();
  res.json({ message: "Cuenta solicitada para la mesa", order });
});
app.post("/api/orders/:id/pay", async (req, res) => {
  const { id } = req.params;
  const { paymentMethod, paymentReference, tipPercent, tipAmount, discountAmount } = req.body;
  const order = dbState.orders.find((o) => o.id === id);
  if (!order) return res.status(404).json({ error: "Pedido no encontrado" });
  if (order.status === "pagada") {
    return res.status(400).json({ error: "Este pedido ya fue cobrado previamente" });
  }
  const now = (/* @__PURE__ */ new Date()).toISOString();
  order.status = "pagada";
  order.paidAt = now;
  order.paymentMethod = paymentMethod || "efectivo";
  order.paymentReference = paymentReference || "";
  if (typeof tipPercent === "number") order.tipPercent = tipPercent;
  if (typeof tipAmount === "number") order.tipAmount = tipAmount;
  if (typeof discountAmount === "number") order.discountAmount = discountAmount;
  calculateOrderTotals(order, dbState.settings.taxPercent);
  const table = dbState.tables.find((t) => t.id === order.tableId);
  if (table) {
    table.status = "libre";
    table.activeOrderId = void 0;
  }
  saveState();
  if (dbState.settings.googleSheetsWebhookUrl) {
    try {
      syncOrderToGoogleSheets(order, dbState.settings.googleSheetsWebhookUrl);
      order.syncedToSheets = true;
    } catch (e) {
      console.warn("[Google Sheets] Webhook trigger warning:", e);
    }
  }
  res.json({
    message: "Pedido pagado exitosamente y mesa liberada",
    order
  });
});
app.post("/api/orders/:id/cancel", (req, res) => {
  const { id } = req.params;
  const order = dbState.orders.find((o) => o.id === id);
  if (!order) return res.status(404).json({ error: "Pedido no encontrado" });
  order.status = "cancelada";
  order.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
  const table = dbState.tables.find((t) => t.id === order.tableId);
  if (table) {
    table.status = "libre";
    table.activeOrderId = void 0;
  }
  saveState();
  res.json({ message: "Pedido cancelado", order });
});
async function syncOrderToGoogleSheets(order, webhookUrl) {
  try {
    const itemsSummary = order.items.map((i) => `${i.quantity}x ${i.name} ($${i.price})`).join("; ");
    const payload = {
      action: "ADD_ORDER",
      orderNumber: order.orderNumber,
      tableName: order.tableName,
      waiterName: order.waiterName,
      customerCount: order.customerCount,
      subtotal: order.subtotal,
      taxAmount: order.taxAmount,
      tipAmount: order.tipAmount,
      total: order.total,
      paymentMethod: order.paymentMethod,
      paymentReference: order.paymentReference || "",
      items: itemsSummary,
      itemCount: order.items.reduce((a, b) => a + b.quantity, 0),
      createdAt: order.createdAt,
      paidAt: order.paidAt || (/* @__PURE__ */ new Date()).toISOString()
    };
    const fetchRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    console.log(`[Google Sheets] Webhook response status: ${fetchRes.status}`);
  } catch (err) {
    console.error("[Google Sheets] Error posting to webhook:", err.message);
  }
}
app.post("/api/sheets/sync", async (req, res) => {
  const webhookUrl = req.body.webhookUrl || dbState.settings.googleSheetsWebhookUrl;
  if (!webhookUrl) {
    return res.status(400).json({
      error: "Debe configurar la URL del Webhook de Google Sheets (Apps Script Web App)."
    });
  }
  try {
    const paidOrders = dbState.orders.filter((o) => o.status === "pagada");
    const rows = paidOrders.map((order) => ({
      orderNumber: order.orderNumber,
      tableName: order.tableName,
      waiterName: order.waiterName,
      subtotal: order.subtotal,
      taxAmount: order.taxAmount,
      tipAmount: order.tipAmount,
      total: order.total,
      paymentMethod: order.paymentMethod,
      items: order.items.map((i) => `${i.quantity}x ${i.name}`).join(" | "),
      paidAt: order.paidAt
    }));
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "SYNC_ALL",
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        restaurant: dbState.settings.restaurantName,
        orders: rows
      })
    });
    dbState.settings.googleSheetsLastSync = (/* @__PURE__ */ new Date()).toISOString();
    saveState();
    res.json({
      success: true,
      message: `Sincronizados ${paidOrders.length} pedidos con Google Sheets`,
      httpStatus: response.status,
      timestamp: dbState.settings.googleSheetsLastSync
    });
  } catch (err) {
    res.status(500).json({
      error: `Error al conectar con Google Sheets Webhook: ${err.message}`
    });
  }
});
app.post("/api/sheets/test", async (req, res) => {
  const webhookUrl = req.body.webhookUrl || dbState.settings.googleSheetsWebhookUrl;
  if (!webhookUrl) {
    return res.status(400).json({ error: "Debe ingresar o guardar la URL del Webhook de Google Sheets" });
  }
  try {
    const testOrder = {
      action: "ADD_ORDER",
      orderNumber: "#TEST-" + Math.floor(100 + Math.random() * 900),
      tableName: "Mesa 1 (Prueba)",
      waiterName: "Mesonero Demo",
      customerCount: 2,
      subtotal: 10,
      taxAmount: 1.6,
      tipAmount: 1,
      total: 12.6,
      paymentMethod: "Pago M\xF3vil (Prueba)",
      paymentReference: "REF-" + Date.now().toString().slice(-4),
      items: "1x Hamburguesa Doble Queso ($8.50); 1x Coca-Cola ($1.50)",
      itemCount: 2,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      paidAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(testOrder)
    });
    res.json({
      success: true,
      message: '\xA1Prueba enviada con \xE9xito! Revisa tu Google Sheet en la hoja "Ventas", deber\xEDas ver la fila de prueba reci\xE9n agregada.',
      httpStatus: response.status
    });
  } catch (err) {
    res.status(500).json({
      error: `Error al conectar con Google Sheets: ${err.message}. Aseg\xFArate de que la implementaci\xF3n en Apps Script est\xE9 configurada con acceso para "Cualquiera" (Anyone).`
    });
  }
});
app.post("/api/sheets/sync-users", async (req, res) => {
  const webhookUrl = req.body.webhookUrl || dbState.settings.googleSheetsWebhookUrl;
  if (!webhookUrl) {
    return res.status(400).json({ error: "Debe ingresar o guardar la URL del Webhook de Google Sheets" });
  }
  try {
    const payload = {
      action: "SYNC_USERS",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      users: dbState.users
    };
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    res.json({
      success: true,
      message: `\xA1Se sincronizaron ${dbState.users.length} usuarios a la pesta\xF1a "Usuario" de tu Google Sheet!`,
      httpStatus: response.status
    });
  } catch (err) {
    res.status(500).json({
      error: `Error al enviar usuarios a Google Sheets: ${err.message}`
    });
  }
});
app.get("/api/sheets/export-csv", (req, res) => {
  const headers = [
    "Numero_Pedido",
    "Mesa",
    "Mesonero",
    "Fecha_Creacion",
    "Fecha_Pago",
    "Estado",
    "Metodo_Pago",
    "Subtotal",
    "Impuesto",
    "Propina",
    "Total",
    "Detalle_Productos"
  ];
  const rows = dbState.orders.map((o) => {
    const itemsText = o.items.map((i) => `${i.quantity}x ${i.name} ($${i.price})`).join(" | ").replace(/"/g, '""');
    return [
      o.orderNumber,
      `"${o.tableName}"`,
      `"${o.waiterName}"`,
      `"${o.createdAt}"`,
      `"${o.paidAt || ""}"`,
      `"${o.status}"`,
      `"${o.paymentMethod || ""}"`,
      o.subtotal,
      o.taxAmount,
      o.tipAmount,
      o.total,
      `"${itemsText}"`
    ].join(",");
  });
  const csv = [headers.join(","), ...rows].join("\n");
  res.setHeader("Content-Type", "text/csv; charset=utf-8");
  res.setHeader("Content-Disposition", `attachment; filename=comandas_restaurante_${Date.now()}.csv`);
  res.send(csv);
});
app.get("/api/sheets/export-csv-users", (req, res) => {
  const headers = [
    "Id_Usuario",
    "Nombre_Usuario",
    "Rol",
    "PIN",
    "Estado",
    "Fecha_Creacion"
  ];
  const rows = dbState.users.map((u) => [
    u.id,
    `"${u.name.replace(/"/g, '""')}"`,
    `"${u.role}"`,
    `"${u.pin || ""}"`,
    `"${u.active ? "Activo" : "Inactivo"}"`,
    `"${u.createdAt}"`
  ].join(","));
  const csv = [headers.join(","), ...rows].join("\n");
  res.setHeader("Content-Type", "text/csv; charset=utf-8");
  res.setHeader("Content-Disposition", `attachment; filename=hoja_usuario_${Date.now()}.csv`);
  res.send(csv);
});
app.put("/api/settings", (req, res) => {
  const updates = req.body;
  if (updates.bcvRate !== void 0) {
    updates.bcvRate = Number(updates.bcvRate) || 1;
    updates.bcvLastUpdated = (/* @__PURE__ */ new Date()).toISOString();
  }
  dbState.settings = {
    ...dbState.settings,
    ...updates
  };
  saveState();
  res.json({ message: "Configuraci\xF3n actualizada", settings: dbState.settings });
});
app.post("/api/menu", (req, res) => {
  const { name, category, price, description, quickNotes } = req.body;
  if (!name || price === void 0) {
    return res.status(400).json({ error: "Nombre y precio son requeridos" });
  }
  const newItem = {
    id: `m_${Date.now()}`,
    name,
    category: category || "Platos Principales",
    price: Number(price) || 0,
    description: description || "",
    quickNotes: Array.isArray(quickNotes) ? quickNotes : [],
    available: true
  };
  dbState.menu.push(newItem);
  if (!dbState.categories.includes(newItem.category)) {
    dbState.categories.push(newItem.category);
  }
  saveState();
  res.status(201).json({ message: "Plato agregado al men\xFA", item: newItem });
});
app.put("/api/menu/:id", (req, res) => {
  const { id } = req.params;
  const item = dbState.menu.find((m) => m.id === id);
  if (!item) return res.status(404).json({ error: "Plato no encontrado" });
  if (req.body.name !== void 0) item.name = req.body.name;
  if (req.body.category !== void 0) {
    item.category = req.body.category;
    if (!dbState.categories.includes(item.category)) {
      dbState.categories.push(item.category);
    }
  }
  if (req.body.price !== void 0) item.price = Number(req.body.price) || 0;
  if (req.body.description !== void 0) item.description = req.body.description;
  if (req.body.quickNotes !== void 0) item.quickNotes = req.body.quickNotes;
  if (req.body.available !== void 0) item.available = Boolean(req.body.available);
  saveState();
  res.json({ message: "Plato actualizado", item });
});
app.delete("/api/menu/:id", (req, res) => {
  const { id } = req.params;
  const index = dbState.menu.findIndex((m) => m.id === id);
  if (index === -1) return res.status(404).json({ error: "Plato no encontrado" });
  const deleted = dbState.menu.splice(index, 1)[0];
  saveState();
  res.json({ message: "Plato eliminado del men\xFA", item: deleted });
});
app.post("/api/tables", (req, res) => {
  const { name, capacity, zone } = req.body;
  if (!name) return res.status(400).json({ error: "Nombre de la mesa es requerido" });
  const newTable = {
    id: `t_${Date.now()}`,
    name,
    capacity: Number(capacity) || 4,
    status: "libre",
    zone: zone || "Sal\xF3n Principal"
  };
  dbState.tables.push(newTable);
  saveState();
  res.status(201).json({ message: "Mesa creada con \xE9xito", table: newTable });
});
app.put("/api/tables/:id", (req, res) => {
  const { id } = req.params;
  const table = dbState.tables.find((t) => t.id === id);
  if (!table) return res.status(404).json({ error: "Mesa no encontrada" });
  if (req.body.name !== void 0) table.name = req.body.name;
  if (req.body.capacity !== void 0) table.capacity = Number(req.body.capacity) || 4;
  if (req.body.zone !== void 0) table.zone = req.body.zone;
  if (req.body.status !== void 0) table.status = req.body.status;
  saveState();
  res.json({ message: "Mesa actualizada", table });
});
app.delete("/api/tables/:id", (req, res) => {
  const { id } = req.params;
  const table = dbState.tables.find((t) => t.id === id);
  if (!table) return res.status(404).json({ error: "Mesa no encontrada" });
  if (table.status !== "libre" || table.activeOrderId) {
    return res.status(400).json({
      error: "No se puede eliminar una mesa ocupada o con pedido activo. Cierre o libere la cuenta primero."
    });
  }
  dbState.tables = dbState.tables.filter((t) => t.id !== id);
  saveState();
  res.json({ message: "Mesa eliminada con \xE9xito", id });
});
app.get("/api/waiters", (req, res) => {
  res.json({ waiters: dbState.waiters });
});
app.post("/api/waiters", (req, res) => {
  const { name, code, phone, active } = req.body;
  if (!name || !name.trim()) {
    return res.status(400).json({ error: "El nombre del mesonero es obligatorio" });
  }
  const newWaiter = {
    id: `w_${Date.now()}`,
    name: name.trim(),
    code: code ? code.trim() : `${100 + dbState.waiters.length + 1}`,
    phone: phone ? phone.trim() : "",
    active: active !== void 0 ? Boolean(active) : true,
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  dbState.waiters.push(newWaiter);
  saveState();
  res.status(201).json({ message: "Mesonero registrado con \xE9xito", waiter: newWaiter });
});
app.put("/api/waiters/:id", (req, res) => {
  const { id } = req.params;
  const waiter = dbState.waiters.find((w) => w.id === id);
  if (!waiter) return res.status(404).json({ error: "Mesonero no encontrado" });
  if (req.body.name !== void 0) waiter.name = req.body.name.trim();
  if (req.body.code !== void 0) waiter.code = req.body.code.trim();
  if (req.body.phone !== void 0) waiter.phone = req.body.phone.trim();
  if (req.body.active !== void 0) waiter.active = Boolean(req.body.active);
  saveState();
  res.json({ message: "Mesonero modificado con \xE9xito", waiter });
});
app.delete("/api/waiters/:id", (req, res) => {
  const { id } = req.params;
  const index = dbState.waiters.findIndex((w) => w.id === id);
  if (index === -1) return res.status(404).json({ error: "Mesonero no encontrado" });
  const deleted = dbState.waiters.splice(index, 1)[0];
  saveState();
  res.json({ message: "Mesonero eliminado con \xE9xito", waiter: deleted });
});
app.get("/api/users", (req, res) => {
  res.json({ users: dbState.users });
});
app.post("/api/users", (req, res) => {
  const { name, role, pin, active } = req.body;
  if (!name || !name.trim()) {
    return res.status(400).json({ error: "El nombre del usuario es obligatorio" });
  }
  const nextId = dbState.users && dbState.users.length > 0 ? Math.max(...dbState.users.map((u) => Number(u.id) || 0)) + 1 : 1;
  const validRole = role === "admin" || role === "cocina" || role === "mesonero" ? role : "mesonero";
  const newUser = {
    id: nextId,
    name: name.trim(),
    role: validRole,
    pin: pin ? String(pin).trim() : "1234",
    active: active !== void 0 ? Boolean(active) : true,
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  dbState.users.push(newUser);
  if (newUser.role === "mesonero") {
    const existingWaiter = dbState.waiters.find((w) => w.name.toLowerCase() === newUser.name.toLowerCase());
    if (!existingWaiter) {
      dbState.waiters.push({
        id: `w_${newUser.id}_${Date.now()}`,
        name: newUser.name,
        code: `${newUser.id}`,
        active: newUser.active,
        createdAt: newUser.createdAt
      });
    }
  }
  saveState();
  res.status(201).json({ message: "Usuario creado con \xE9xito", user: newUser });
});
app.put("/api/users/:id", (req, res) => {
  const idNum = Number(req.params.id);
  const user = dbState.users.find((u) => u.id === idNum);
  if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
  if (req.body.name !== void 0) user.name = req.body.name.trim();
  if (req.body.role !== void 0 && (req.body.role === "admin" || req.body.role === "cocina" || req.body.role === "mesonero")) {
    user.role = req.body.role;
  }
  if (req.body.pin !== void 0) user.pin = String(req.body.pin).trim();
  if (req.body.active !== void 0) user.active = Boolean(req.body.active);
  saveState();
  res.json({ message: "Usuario modificado con \xE9xito", user });
});
app.delete("/api/users/:id", (req, res) => {
  const idNum = Number(req.params.id);
  const index = dbState.users.findIndex((u) => u.id === idNum);
  if (index === -1) return res.status(404).json({ error: "Usuario no encontrado" });
  const userToDelete = dbState.users[index];
  if (userToDelete.role === "admin") {
    const adminCount = dbState.users.filter((u) => u.role === "admin").length;
    if (adminCount <= 1) {
      return res.status(400).json({ error: "No se puede eliminar el \xFAnico administrador del sistema" });
    }
  }
  const deleted = dbState.users.splice(index, 1)[0];
  saveState();
  res.json({ message: "Usuario eliminado con \xE9xito", id: idNum, user: deleted });
});
app.post("/api/auth/login", (req, res) => {
  const { userId, pin } = req.body;
  const user = dbState.users.find((u) => u.id === Number(userId));
  if (!user) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }
  if (!user.active) {
    return res.status(403).json({ error: "Este usuario est\xE1 inactivo. Contacte al administrador." });
  }
  if (user.pin && pin && user.pin !== pin) {
    return res.status(401).json({ error: "PIN de acceso incorrecto" });
  }
  res.json({
    message: "Inicio de sesi\xF3n exitoso",
    user
  });
});
app.post("/api/reset-demo", (req, res) => {
  dbState = {
    orderCounter: 100,
    tables: INITIAL_TABLES.map((t) => ({ ...t, status: "libre", activeOrderId: void 0 })),
    menu: INITIAL_MENU,
    categories: INITIAL_CATEGORIES,
    settings: INITIAL_SETTINGS,
    orders: [],
    waiters: INITIAL_WAITERS,
    users: INITIAL_USERS
  };
  saveState();
  res.json({ message: "Datos reiniciados con \xE9xito", state: dbState });
});
async function start() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[RestoComanda] Server running on http://0.0.0.0:${PORT}`);
  });
}
start().catch((err) => {
  console.error("Failed to start server:", err);
});
//# sourceMappingURL=server.cjs.map
