var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
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
__export(server_exports, {
  broadcastServerEvent: () => broadcastServerEvent
});
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
  { id: 1, name: "Administrador Principal", username: "admin", role: "admin", password: "123", pin: "1234", active: true, createdAt: (/* @__PURE__ */ new Date()).toISOString() },
  { id: 2, name: "Carlos Mendoza", username: "carlos", role: "mesonero", password: "123", pin: "1111", active: true, createdAt: (/* @__PURE__ */ new Date()).toISOString() },
  { id: 3, name: "Mar\xEDa Gonz\xE1lez", username: "maria", role: "mesonero", password: "123", pin: "2222", active: true, createdAt: (/* @__PURE__ */ new Date()).toISOString() },
  { id: 4, name: "Chef Mario (Cocina)", username: "cocina", role: "cocina", password: "123", pin: "3333", active: true, createdAt: (/* @__PURE__ */ new Date()).toISOString() },
  { id: 5, name: "Cajera Ana (Caja)", username: "cajera", role: "cajero", password: "123", pin: "4444", active: true, createdAt: (/* @__PURE__ */ new Date()).toISOString() }
];
var INITIAL_SETTINGS = {
  restaurantName: "Restaurante & Grill El Portal",
  currencySymbol: "$",
  currencyCode: "USD",
  currencyBs: "Bs.",
  bcvRate: 54.2,
  bcvLastUpdated: (/* @__PURE__ */ new Date()).toISOString(),
  taxPercent: 10,
  defaultTipPercent: 10,
  address: "Av. Principal Gastron\xF3mica #120",
  phone: "+1 (555) 342-9876",
  receiptFooter: "\xA1Gracias por su visita! Vuelva pronto.",
  googleSheetsWebhookUrl: "",
  googleSheetsLastSync: void 0,
  autoSyncGoogleSheets: true,
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
        users: (() => {
          const rawUsers = loaded.users && loaded.users.length > 0 ? loaded.users : INITIAL_USERS;
          return rawUsers.map((u, idx) => {
            let uname = u.username;
            if (!uname) {
              if (u.name.toLowerCase().includes("admin")) uname = "admin";
              else if (u.name.toLowerCase().includes("carlos")) uname = "carlos";
              else if (u.name.toLowerCase().includes("mar\xEDa") || u.name.toLowerCase().includes("maria")) uname = "maria";
              else if (u.name.toLowerCase().includes("cocina") || u.name.toLowerCase().includes("mario")) uname = "cocina";
              else uname = u.name.trim().toLowerCase().split(" ")[0] || `user${u.id || idx + 1}`;
            }
            return {
              ...u,
              username: uname.toLowerCase().trim(),
              password: u.password || u.pin || "123"
            };
          });
        })()
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
function syncWaitersFromUsers() {
  const mesoneros = (dbState.users || []).filter((u) => u.role === "mesonero");
  dbState.waiters = mesoneros.map((u) => ({
    id: `w_${u.id}`,
    name: u.name,
    code: String(u.id),
    phone: "",
    active: u.active,
    createdAt: u.createdAt
  }));
}
syncWaitersFromUsers();
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
var sseClients = /* @__PURE__ */ new Set();
app.get("/api/events", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache, no-transform");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("X-Accel-Buffering", "no");
  res.flushHeaders();
  sseClients.add(res);
  res.write(`data: ${JSON.stringify({ type: "connected", clientsCount: sseClients.size, time: Date.now() })}

`);
  req.on("close", () => {
    sseClients.delete(res);
  });
});
setInterval(() => {
  if (sseClients.size > 0) {
    const pingData = `data: ${JSON.stringify({ type: "ping", time: Date.now() })}

`;
    sseClients.forEach((client) => {
      try {
        client.write(pingData);
      } catch {
        sseClients.delete(client);
      }
    });
  }
}, 15e3);
function broadcastServerEvent(eventType, data) {
  if (sseClients.size === 0) return;
  const payload = `data: ${JSON.stringify({ type: eventType, data, time: Date.now() })}

`;
  sseClients.forEach((client) => {
    try {
      client.write(payload);
      if (typeof client.flush === "function") {
        client.flush();
      }
    } catch {
      sseClients.delete(client);
    }
  });
}
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: (/* @__PURE__ */ new Date()).toISOString() });
});
app.get("/api/state", (req, res) => {
  const clientWebhook = req.query.webhookUrl || req.headers["x-sheets-webhook"];
  if (clientWebhook && clientWebhook.startsWith("https://script.google.com") && (!dbState.settings.googleSheetsWebhookUrl || dbState.settings.googleSheetsWebhookUrl.trim() === "")) {
    dbState.settings.googleSheetsWebhookUrl = clientWebhook.trim();
    saveState();
  }
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
  scheduleServerAutoSync("tables");
  scheduleServerAutoSync("orders");
  broadcastServerEvent("order_created", { orderId: newOrder.id, orderNumber: newOrder.orderNumber, tableName: table.name });
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
  scheduleServerAutoSync("tables");
  scheduleServerAutoSync("orders");
  broadcastServerEvent("order_updated", { orderId: order.id, orderNumber: order.orderNumber, round: nextRound, tableName: order.tableName });
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
  scheduleServerAutoSync("orders");
  broadcastServerEvent("batch_updated", { batchId, status, orderId: parentOrder?.id, tableName: parentOrder?.tableName });
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
  scheduleServerAutoSync("tables");
  scheduleServerAutoSync("orders");
  broadcastServerEvent("bill_requested", { orderId: order.id, tableName: order.tableName, orderNumber: order.orderNumber });
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
  scheduleServerAutoSync("tables");
  scheduleServerAutoSync("orders");
  broadcastServerEvent("order_paid", { orderId: order.id, orderNumber: order.orderNumber, tableName: order.tableName });
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
  scheduleServerAutoSync("tables");
  scheduleServerAutoSync("orders");
  broadcastServerEvent("order_cancelled", { orderId: order.id, tableName: order.tableName });
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
    const text = await response.text();
    if (text.includes("ServiceLogin") || text.includes("accounts.google.com")) {
      return res.status(403).json({
        error: 'Google bloque\xF3 el acceso. En Google Sheets ve a Extensiones > Apps Script > Implementar > Administrar implementaciones > Editar (icono l\xE1piz) y cambia "Qui\xE9n tiene acceso" a "Cualquier usuario" (Anyone).'
      });
    }
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
app.post("/api/sheets/diagnose", async (req, res) => {
  const webhookUrl = (req.body.webhookUrl || dbState.settings.googleSheetsWebhookUrl || "").trim();
  if (!webhookUrl) {
    return res.status(400).json({
      success: false,
      issue: "URL_EMPTY",
      error: "No se ha ingresado ninguna URL de Webhook. Pega tu enlace de Google Apps Script."
    });
  }
  if (webhookUrl.endsWith("/dev")) {
    return res.status(400).json({
      success: false,
      issue: "DEV_URL",
      error: 'La URL termina en "/dev". Esta es una URL de prueba privada. Debes crear una Implementaci\xF3n en Apps Script (Implementar > Nueva implementaci\xF3n > Tipo: Aplicaci\xF3n web > Acceso: Cualquier usuario) y copiar la URL que termina en "/exec".'
    });
  }
  try {
    const getRes = await fetch(webhookUrl);
    const getText = await getRes.text();
    if (getText.includes("ServiceLogin") || getText.includes("accounts.google.com")) {
      return res.status(403).json({
        success: false,
        issue: "PERMISSIONS_RESTRICTED",
        error: 'Google Apps Script est\xE1 bloqueando el acceso p\xFAblico. Para solucionarlo:\n1. Ve a tu hoja de Google Sheets > Extensiones > Apps Script.\n2. Haz clic en "Implementar" > "Administrar implementaciones".\n3. Haz clic en el icono de l\xE1piz (Editar).\n4. En "Qui\xE9n tiene acceso", c\xE1mbialo de "Solo yo" a "Cualquier usuario" (Anyone).\n5. En Versi\xF3n, selecciona "Nueva versi\xF3n".\n6. Haz clic en "Implementar".'
      });
    }
    const syncResult = await autoSyncOrdersWithSheets(webhookUrl);
    return res.json({
      success: true,
      message: "\xA1Conexi\xF3n y sincronizaci\xF3n de Pedidos exitosa! Google Sheets respondi\xF3 correctamente.",
      ordersSynced: dbState.orders.length,
      details: syncResult
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      issue: "REQUEST_FAILED",
      error: `Fallo de conexi\xF3n: ${err.message}`
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
app.post("/api/sheets/sync-tables", async (req, res) => {
  const webhookUrl = req.body.webhookUrl || dbState.settings.googleSheetsWebhookUrl;
  if (!webhookUrl) {
    return res.status(400).json({ error: "Debe ingresar o guardar la URL del Webhook de Google Sheets" });
  }
  try {
    const tableData = dbState.tables.map((t) => {
      const activeOrder = dbState.orders.find(
        (o) => o.tableId === t.id && o.status !== "pagada" && o.status !== "cancelada"
      );
      return {
        id: t.id,
        name: t.name,
        capacity: t.capacity,
        zone: t.zone || "Sal\xF3n Principal",
        status: t.status,
        activeOrderNumber: activeOrder ? `#${activeOrder.orderNumber}` : "Ninguno",
        waiterName: activeOrder ? activeOrder.waiterName : "N/A",
        total: activeOrder ? activeOrder.total : 0,
        itemCount: activeOrder ? activeOrder.items.length : 0
      };
    });
    const payload = {
      action: "SYNC_TABLES",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      restaurant: dbState.settings.restaurantName,
      tables: tableData
    };
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    res.json({
      success: true,
      message: `\xA1Se sincronizaron ${dbState.tables.length} mesas a la pesta\xF1a "Mesas" de tu Google Sheet!`,
      httpStatus: response.status
    });
  } catch (err) {
    res.status(500).json({
      error: `Error al sincronizar mesas con Google Sheets: ${err.message}`
    });
  }
});
app.post("/api/sheets/sync-menu", async (req, res) => {
  const webhookUrl = req.body.webhookUrl || dbState.settings.googleSheetsWebhookUrl;
  if (!webhookUrl) {
    return res.status(400).json({ error: "Debe ingresar o guardar la URL del Webhook de Google Sheets" });
  }
  try {
    const payload = {
      action: "SYNC_MENU",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      restaurant: dbState.settings.restaurantName,
      menu: dbState.menu
    };
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    res.json({
      success: true,
      message: `\xA1Se sincronizaron ${dbState.menu.length} platos a la pesta\xF1a "Platos" de tu Google Sheet!`,
      httpStatus: response.status
    });
  } catch (err) {
    res.status(500).json({
      error: `Error al sincronizar platos con Google Sheets: ${err.message}`
    });
  }
});
app.post("/api/sheets/sync-url", async (req, res) => {
  const webhookUrl = req.body.webhookUrl || dbState.settings.googleSheetsWebhookUrl;
  const bcvRate = req.body.bcvRate !== void 0 ? Number(req.body.bcvRate) : dbState.settings.bcvRate;
  if (!webhookUrl) {
    return res.status(400).json({ error: "Debe ingresar o guardar la URL del Webhook de Google Sheets" });
  }
  try {
    const payload = {
      action: "SYNC_URL",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      restaurant: dbState.settings.restaurantName,
      url: webhookUrl,
      bcvRate,
      currencySymbol: dbState.settings.currencySymbol || "$",
      currencyBs: dbState.settings.currencyBs || "Bs.",
      bcvLastUpdated: dbState.settings.bcvLastUpdated || (/* @__PURE__ */ new Date()).toISOString()
    };
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    res.json({
      success: true,
      message: `\xA1URL y Tasa BCV (Bs. ${bcvRate.toFixed(2)}) registradas en la pesta\xF1a "URL" de tu Google Sheet!`,
      httpStatus: response.status
    });
  } catch (err) {
    res.status(500).json({
      error: `Error al registrar en la pesta\xF1a "URL" de Google Sheets: ${err.message}`
    });
  }
});
app.get("/api/sheets/get-bcv", async (req, res) => {
  const webhookUrl = req.query.webhookUrl || dbState.settings.googleSheetsWebhookUrl;
  if (!webhookUrl) {
    return res.status(400).json({ error: "Webhook URL no configurada" });
  }
  try {
    const fetchUrl = new URL(webhookUrl);
    fetchUrl.searchParams.set("action", "GET_BCV");
    const response = await fetch(fetchUrl.toString(), {
      method: "GET"
    });
    const data = await response.json();
    if (data.bcvRate && !isNaN(Number(data.bcvRate))) {
      const parsedRate = Number(data.bcvRate);
      dbState.settings.bcvRate = parsedRate;
      dbState.settings.bcvLastUpdated = (/* @__PURE__ */ new Date()).toISOString();
      saveState();
      return res.json({
        success: true,
        bcvRate: parsedRate,
        message: `Tasa BCV sincronizada con \xE9xito desde la pesta\xF1a "URL" de Google Sheets: Bs. ${parsedRate.toFixed(2)}`
      });
    }
    res.json({
      success: false,
      message: 'No se encontr\xF3 el par\xE1metro TASA_BCV en la pesta\xF1a "URL" de Google Sheets',
      bcvRate: dbState.settings.bcvRate
    });
  } catch (err) {
    res.status(500).json({
      error: `Error al consultar tasa BCV desde Google Sheets: ${err.message}`
    });
  }
});
async function autoSyncMenuWithSheets(targetUrl) {
  const webhookUrl = targetUrl || dbState.settings.googleSheetsWebhookUrl;
  if (!webhookUrl) return;
  if (targetUrl && dbState.settings.googleSheetsWebhookUrl !== targetUrl) {
    dbState.settings.googleSheetsWebhookUrl = targetUrl;
    saveState();
  }
  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "SYNC_MENU",
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        restaurant: dbState.settings.restaurantName,
        menu: dbState.menu
      })
    });
    const text = await response.text();
    if (text.includes("ServiceLogin") || text.includes("accounts.google.com")) {
      console.warn('[Google Sheets] Error de permisos en Google Apps Script: debe estar en "Cualquier usuario" (Anyone)');
    } else {
      console.log('[Google Sheets] Auto-synced menu to sheet "Platos"');
    }
  } catch (err) {
    console.warn("[Google Sheets] autoSyncMenu error:", err.message);
  }
}
async function autoSyncTablesWithSheets(targetUrl) {
  const webhookUrl = targetUrl || dbState.settings.googleSheetsWebhookUrl;
  if (!webhookUrl) return;
  if (targetUrl && dbState.settings.googleSheetsWebhookUrl !== targetUrl) {
    dbState.settings.googleSheetsWebhookUrl = targetUrl;
    saveState();
  }
  try {
    const tableData = dbState.tables.map((t) => {
      const activeOrder = dbState.orders.find(
        (o) => o.tableId === t.id && o.status !== "pagada" && o.status !== "cancelada"
      );
      return {
        id: t.id,
        name: t.name,
        capacity: t.capacity,
        zone: t.zone || "Principal",
        status: t.status,
        activeOrderNumber: activeOrder ? `#${activeOrder.orderNumber}` : "Ninguno",
        waiterName: activeOrder ? activeOrder.waiterName : "N/A",
        total: activeOrder ? activeOrder.total : 0,
        itemCount: activeOrder ? activeOrder.items.length : 0
      };
    });
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "SYNC_TABLES",
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        restaurant: dbState.settings.restaurantName,
        tables: tableData
      })
    });
    const text = await response.text();
    if (text.includes("ServiceLogin") || text.includes("accounts.google.com")) {
      console.warn("[Google Sheets] Error de permisos en Google Apps Script");
    } else {
      console.log('[Google Sheets] Auto-synced tables to sheet "Mesas"');
    }
  } catch (err) {
    console.warn("[Google Sheets] autoSyncTables error:", err.message);
  }
}
async function autoSyncUsersWithSheets(targetUrl) {
  const webhookUrl = targetUrl || dbState.settings.googleSheetsWebhookUrl;
  if (!webhookUrl) return;
  if (targetUrl && dbState.settings.googleSheetsWebhookUrl !== targetUrl) {
    dbState.settings.googleSheetsWebhookUrl = targetUrl;
    saveState();
  }
  try {
    const formattedUsers = dbState.users.map((u) => ({
      id: u.id,
      name: u.name,
      username: u.username || u.name.toLowerCase().split(" ")[0],
      role: u.role,
      password: u.password || u.pin || "123",
      pin: u.pin || "",
      active: u.active,
      createdAt: u.createdAt
    }));
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "SYNC_USERS",
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        restaurant: dbState.settings.restaurantName,
        users: formattedUsers
      })
    });
    const text = await response.text();
    if (text.includes("ServiceLogin") || text.includes("accounts.google.com")) {
      console.warn("[Google Sheets] Error de permisos en Google Apps Script");
    } else {
      console.log('[Google Sheets] Auto-synced users to sheet "Usuario"');
    }
  } catch (err) {
    console.warn("[Google Sheets] autoSyncUsers error:", err.message);
  }
}
async function autoSyncUrlWithSheets(targetUrl) {
  const webhookUrl = targetUrl || dbState.settings.googleSheetsWebhookUrl;
  if (!webhookUrl) return;
  if (targetUrl && dbState.settings.googleSheetsWebhookUrl !== targetUrl) {
    dbState.settings.googleSheetsWebhookUrl = targetUrl;
    saveState();
  }
  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "SYNC_URL",
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        restaurant: dbState.settings.restaurantName,
        url: webhookUrl,
        bcvRate: dbState.settings.bcvRate,
        currencySymbol: dbState.settings.currencySymbol || "$",
        currencyBs: dbState.settings.currencyBs || "Bs.",
        bcvLastUpdated: dbState.settings.bcvLastUpdated || (/* @__PURE__ */ new Date()).toISOString()
      })
    });
    const text = await response.text();
    if (text.includes("ServiceLogin") || text.includes("accounts.google.com")) {
      console.warn("[Google Sheets] Error de permisos en Google Apps Script");
    } else {
      console.log(`[Google Sheets] Auto-synced URL & Tasa BCV (Bs. ${dbState.settings.bcvRate}) to sheet "URL"`);
    }
  } catch (err) {
    console.warn("[Google Sheets] autoSyncUrl error:", err.message);
  }
}
async function autoSyncOrdersWithSheets(targetUrl) {
  const webhookUrl = targetUrl || dbState.settings.googleSheetsWebhookUrl;
  if (!webhookUrl) return { success: false, reason: "No hay URL de Webhook configurada" };
  if (targetUrl && dbState.settings.googleSheetsWebhookUrl !== targetUrl) {
    dbState.settings.googleSheetsWebhookUrl = targetUrl;
    saveState();
  }
  if (!dbState.orders || dbState.orders.length === 0) {
    return { success: true, count: 0, reason: "No hay pedidos en memoria para sincronizar" };
  }
  try {
    const bcvRate = dbState.settings.bcvRate || 1;
    const ordersData = dbState.orders.map((o) => {
      const itemsDetail = o.items.map((i) => `${i.quantity}x ${i.name} ($${i.price})${i.notes ? " [" + i.notes + "]" : ""}`).join(" | ");
      const totalBs = Number((o.total * bcvRate).toFixed(2));
      const kitchenStatus = o.batches && o.batches.length > 0 ? o.batches.map((b, idx) => `Ronda ${b.round || idx + 1}: ${b.status || "pendiente"}`).join("; ") : "N/A";
      return {
        orderNumber: o.orderNumber,
        tableName: o.tableName,
        waiterName: o.waiterName,
        status: o.status,
        customerCount: o.customerCount || 1,
        roundsCount: o.batches ? o.batches.length : 1,
        itemsDetail,
        subtotal: o.subtotal,
        taxAmount: o.taxAmount,
        tipAmount: o.tipAmount,
        total: o.total,
        totalBs,
        kitchenStatus,
        createdAt: o.createdAt,
        updatedAt: o.updatedAt || o.createdAt,
        paidAt: o.paidAt || "",
        paymentMethod: o.paymentMethod || ""
      };
    });
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "SYNC_ORDERS",
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        restaurant: dbState.settings.restaurantName,
        orders: ordersData
      })
    });
    const rawText = await response.text();
    if (rawText.includes("ServiceLogin") || rawText.includes("accounts.google.com")) {
      throw new Error('Google bloque\xF3 la solicitud. En Google Sheets ve a Extensiones > Apps Script > Implementar > Administrar implementaciones > Editar y aseg\xFArate de elegir: "Qui\xE9n tiene acceso: Cualquier usuario" (Anyone).');
    }
    let parsed = null;
    try {
      parsed = JSON.parse(rawText);
    } catch {
    }
    if (parsed && parsed.error) {
      throw new Error(parsed.error);
    }
    console.log(`[Google Sheets] Auto-synced ${ordersData.length} orders to sheet "Pedidos" (Status: ${response.status})`);
    return { success: true, count: ordersData.length, response: parsed || rawText };
  } catch (err) {
    console.warn("[Google Sheets] autoSyncOrders error:", err.message);
    throw err;
  }
}
var serverSyncTimers = {};
function scheduleServerAutoSync(entity) {
  if (!dbState.settings.googleSheetsWebhookUrl || dbState.settings.autoSyncGoogleSheets === false) {
    return;
  }
  if (serverSyncTimers[entity]) {
    clearTimeout(serverSyncTimers[entity]);
  }
  serverSyncTimers[entity] = setTimeout(async () => {
    try {
      if (entity === "orders" || entity === "all") {
        await autoSyncOrdersWithSheets();
      }
      if (entity === "tables" || entity === "all") {
        await autoSyncTablesWithSheets();
      }
      if (entity === "menu" || entity === "all") {
        await autoSyncMenuWithSheets();
      }
      if (entity === "users" || entity === "all") {
        await autoSyncUsersWithSheets();
      }
      if (entity === "url" || entity === "all") {
        await autoSyncUrlWithSheets();
      }
    } catch (err) {
      console.warn(`[Google Sheets Auto-Sync Server] Error en '${entity}':`, err.message);
    }
  }, 150);
}
function parseItemsDetailFromSheet(itemsDetailStr, orderNum, createdAt) {
  if (!itemsDetailStr || typeof itemsDetailStr !== "string") return [];
  const parts = itemsDetailStr.split(" | ");
  const items = [];
  parts.forEach((part, idx) => {
    const trimmed = part.trim();
    if (!trimmed) return;
    const match = trimmed.match(/^(\d+)x\s+([^(\[]+?)(?:\s+\(\$([0-9.]+)\))?(?:\s+\[(.*?)\])?$/);
    if (match) {
      const quantity = parseInt(match[1], 10) || 1;
      const name = match[2].trim();
      const price = match[3] ? parseFloat(match[3]) : 0;
      const notes = match[4] ? match[4].trim() : "";
      items.push({
        id: `item_${orderNum}_${idx + 1}`,
        menuItemId: `m_${idx + 1}`,
        name,
        price,
        quantity,
        notes,
        round: 1,
        addedAt: createdAt || (/* @__PURE__ */ new Date()).toISOString()
      });
    } else {
      items.push({
        id: `item_${orderNum}_${idx + 1}`,
        menuItemId: `m_${idx + 1}`,
        name: trimmed,
        price: 0,
        quantity: 1,
        notes: "",
        round: 1,
        addedAt: createdAt || (/* @__PURE__ */ new Date()).toISOString()
      });
    }
  });
  return items;
}
function parseOrderFromSheetRow(r, idx) {
  const num = Number(String(r.orderNumber || idx + 1).replace(/[^0-9]/g, "")) || idx + 1;
  const rawStatus = String(r.status || "").toLowerCase();
  let status = "abierta";
  if (rawStatus.includes("pagad") || rawStatus.includes("cobrad")) status = "pagada";
  else if (rawStatus.includes("cuenta")) status = "cuenta_solicitada";
  else if (rawStatus.includes("cancel")) status = "cancelada";
  const tableName = String(r.tableName || `Mesa 1`);
  const matchingTable = dbState.tables.find((t) => t.name.toLowerCase() === tableName.toLowerCase());
  const tableId = matchingTable ? matchingTable.id : dbState.tables[0]?.id || "t1";
  const createdAt = r.createdAt || (/* @__PURE__ */ new Date()).toISOString();
  const updatedAt = r.updatedAt || createdAt;
  const items = parseItemsDetailFromSheet(r.itemsDetail, num, createdAt);
  const subtotal = Number(r.subtotal) || 0;
  const taxAmount = Number(r.taxAmount) || 0;
  const tipAmount = Number(r.tipAmount) || 0;
  const total = Number(r.total) || subtotal + taxAmount + tipAmount;
  let kitchenStatus = "pendiente";
  const rawK = String(r.kitchenStatus || "").toLowerCase();
  if (rawK.includes("entregad") || rawK.includes("listo")) kitchenStatus = "listo";
  else if (rawK.includes("prepar") || rawK.includes("cocina")) kitchenStatus = "en_preparacion";
  const batches = items.length > 0 ? [{
    id: `batch_${num}_1`,
    orderId: `ord_${num}`,
    orderNumber: num,
    tableId,
    tableName,
    waiterName: String(r.waiterName || "Mesonero"),
    round: 1,
    isAddition: false,
    items,
    createdAt,
    status: kitchenStatus
  }] : [];
  return {
    id: `ord_${num}`,
    orderNumber: num,
    tableId,
    tableName,
    waiterName: String(r.waiterName || "Mesonero"),
    customerCount: Number(r.customerCount) || 1,
    status,
    createdAt,
    updatedAt,
    items,
    batches,
    subtotal,
    taxPercent: 0,
    taxAmount,
    tipPercent: 0,
    tipAmount,
    discountAmount: 0,
    total,
    paidAt: status === "pagada" ? updatedAt : void 0,
    paymentMethod: r.paymentMethod || void 0,
    syncedToSheets: true
  };
}
function syncTablesOccupancyFromOrders() {
  dbState.tables = dbState.tables.map((t) => {
    const activeOrder = dbState.orders.find(
      (o) => o.tableId === t.id && o.status !== "pagada" && o.status !== "cancelada"
    );
    if (activeOrder) {
      return {
        ...t,
        status: activeOrder.status === "cuenta_solicitada" ? "cuenta_solicitada" : "ocupada",
        activeOrderId: activeOrder.id
      };
    }
    return {
      ...t,
      status: "libre",
      activeOrderId: void 0
    };
  });
}
function mergeOrdersFromSheetList(ordersList) {
  const safeList = Array.isArray(ordersList) ? ordersList : [];
  if (safeList.length === 0) {
    return { hasChanges: false, count: dbState.orders.length, newOrdersCount: 0 };
  }
  let hasChanges = false;
  let newOrdersCount = 0;
  for (const r of safeList) {
    const parsed = parseOrderFromSheetRow(r, dbState.orders.length);
    if (!parsed || !parsed.orderNumber) continue;
    const existingIndex = dbState.orders.findIndex(
      (o) => o.orderNumber === parsed.orderNumber
    );
    if (existingIndex === -1) {
      dbState.orders.unshift(parsed);
      hasChanges = true;
      newOrdersCount++;
    } else {
      const existing = dbState.orders[existingIndex];
      if (parsed.status && parsed.status !== existing.status) {
        existing.status = parsed.status;
        existing.updatedAt = parsed.updatedAt || (/* @__PURE__ */ new Date()).toISOString();
        if (parsed.status === "pagada" && !existing.paidAt) {
          existing.paidAt = parsed.paidAt || existing.updatedAt;
        }
        hasChanges = true;
      }
      const sheetKitchenStatus = parsed.batches?.[0]?.status;
      if (sheetKitchenStatus && existing.batches && existing.batches.length > 0) {
        if (existing.batches[0].status !== sheetKitchenStatus) {
          existing.batches = existing.batches.map((b) => ({ ...b, status: sheetKitchenStatus }));
          hasChanges = true;
        }
      }
      if (parsed.items && parsed.items.length > 0 && (!existing.items || existing.items.length === 0)) {
        existing.items = parsed.items;
        existing.batches = parsed.batches;
        hasChanges = true;
      }
    }
  }
  dbState.orders.sort((a, b) => (b.orderNumber || 0) - (a.orderNumber || 0));
  if (hasChanges) {
    syncTablesOccupancyFromOrders();
    const maxNum = Math.max(100, ...dbState.orders.map((o) => o.orderNumber || 0));
    dbState.orderCounter = maxNum;
    saveState();
    broadcastServerEvent("orders_updated", { orders: dbState.orders, tables: dbState.tables });
    if (newOrdersCount > 0) {
      broadcastServerEvent("new_kitchen_batch", { count: newOrdersCount });
    }
  }
  return { hasChanges, count: dbState.orders.length, newOrdersCount };
}
var isBackgroundPollingOrders = false;
async function backgroundPollOrdersFromSheets() {
  const webhookUrl = dbState.settings.googleSheetsWebhookUrl;
  if (!webhookUrl || dbState.settings.autoSyncGoogleSheets === false) return;
  if (isBackgroundPollingOrders) return;
  isBackgroundPollingOrders = true;
  try {
    const url = new URL(webhookUrl);
    url.searchParams.set("action", "GET_ORDERS");
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4e3);
    const response = await fetch(url.toString(), { method: "GET", signal: controller.signal });
    clearTimeout(timer);
    if (response.ok) {
      const data = await response.json();
      if (data && Array.isArray(data.orders)) {
        mergeOrdersFromSheetList(data.orders);
      }
    }
  } catch {
  } finally {
    isBackgroundPollingOrders = false;
  }
}
setInterval(backgroundPollOrdersFromSheets, 4e3);
app.post("/api/sheets/sync-orders", async (req, res) => {
  const webhookUrl = req.body.webhookUrl || dbState.settings.googleSheetsWebhookUrl;
  if (!webhookUrl) {
    return res.status(400).json({ error: "Debe ingresar o guardar la URL del Webhook de Google Sheets" });
  }
  try {
    const syncRes = await autoSyncOrdersWithSheets(webhookUrl);
    res.json({
      success: true,
      message: `\xA1Se enviaron ${dbState.orders.length} pedidos/comandas a la pesta\xF1a "Pedidos" de tu Google Sheet!`,
      details: syncRes
    });
  } catch (err) {
    res.status(500).json({
      error: `Error al sincronizar pedidos con Google Sheets: ${err.message}`
    });
  }
});
app.post("/api/sheets/pull-orders", async (req, res) => {
  const webhookUrl = req.body.webhookUrl || dbState.settings.googleSheetsWebhookUrl;
  if (!webhookUrl) {
    return res.status(400).json({ error: "Debe ingresar o guardar la URL del Webhook de Google Sheets" });
  }
  try {
    const url = new URL(webhookUrl);
    url.searchParams.set("action", "GET_ORDERS");
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8e3);
    const gRes = await fetch(url.toString(), { method: "GET", signal: controller.signal });
    clearTimeout(timer);
    if (!gRes.ok) {
      throw new Error(`Google Sheets respondi\xF3 con c\xF3digo HTTP ${gRes.status}`);
    }
    const data = await gRes.json();
    if (data && data.error) {
      throw new Error(data.error);
    }
    const ordersList = Array.isArray(data.orders) ? data.orders : [];
    const { newOrdersCount } = mergeOrdersFromSheetList(ordersList);
    const message = ordersList.length === 0 ? "\u2713 Google Sheets no tiene pedidos activos. Se sincroniz\xF3 el sistema y se liberaron las mesas." : `\u2713 Se sincronizaron exitosamente ${ordersList.length} pedidos desde Google Sheets (${newOrdersCount} nuevos recibidos para Cocina/KDS).`;
    res.json({
      success: true,
      count: dbState.orders.length,
      message,
      state: {
        orders: dbState.orders,
        tables: dbState.tables
      }
    });
  } catch (err) {
    res.status(500).json({
      error: `Error al traer pedidos de Google Sheets: ${err.message}`
    });
  }
});
app.post("/api/sheets/clear-orders-test", async (req, res) => {
  const webhookUrl = req.body.webhookUrl || dbState.settings.googleSheetsWebhookUrl;
  dbState.orders = [];
  syncTablesOccupancyFromOrders();
  dbState.orderCounter = 100;
  saveState();
  broadcastServerEvent("orders_updated", { orders: dbState.orders, tables: dbState.tables });
  let sheetsMessage = "";
  if (webhookUrl) {
    try {
      await autoSyncOrdersWithSheets(webhookUrl);
      sheetsMessage = ' y la hoja "Pedidos" en Google Sheets se vaci\xF3 limpiamente';
    } catch (err) {
      sheetsMessage = ` (aviso: no se pudo vaciar la hoja en Google Sheets: ${err.message})`;
    }
  }
  res.json({
    success: true,
    message: `\u2713 Sistema en limpio: se vaciaron todas las comandas locales${sheetsMessage}. Todas las mesas est\xE1n libres para nuevas pruebas.`,
    state: {
      orders: dbState.orders,
      tables: dbState.tables
    }
  });
});
app.get("/api/sheets/export-csv-orders", (req, res) => {
  const headers = [
    "Numero_Pedido",
    "Mesa",
    "Mesonero",
    "Estado_Pedido",
    "Estado_Cocina",
    "Comensales",
    "Rondas",
    "Detalle_Productos",
    "Subtotal_USD",
    "Impuesto_USD",
    "Total_USD",
    "Total_BS",
    "Fecha_Creacion",
    "Ultima_Actualizacion"
  ];
  const bcvRate = dbState.settings.bcvRate || 1;
  const rows = dbState.orders.map((o) => {
    let statusLabel = o.status;
    if (o.status === "abierta") statusLabel = "En Cocina / Abierta";
    else if (o.status === "cuenta_solicitada") statusLabel = "Cuenta Solicitada";
    else if (o.status === "pagada") statusLabel = "Cobrada / Pagada";
    else if (o.status === "cancelada") statusLabel = "Cancelada";
    const kitchenStatus = o.batches && o.batches.length > 0 ? o.batches.map((b, idx) => `Ronda ${b.round || idx + 1}: ${b.status || "pendiente"}`).join("; ") : "N/A";
    const itemsDetail = o.items.map((i) => `${i.quantity}x ${i.name} ($${i.price})${i.notes ? " [" + i.notes + "]" : ""}`).join(" | ").replace(/"/g, '""');
    const totalBs = Number((o.total * bcvRate).toFixed(2));
    return [
      `"#${o.orderNumber}"`,
      `"${o.tableName}"`,
      `"${o.waiterName}"`,
      `"${statusLabel}"`,
      `"${kitchenStatus}"`,
      o.customerCount || 1,
      o.batches ? o.batches.length : 1,
      `"${itemsDetail}"`,
      o.subtotal,
      o.taxAmount,
      o.total,
      totalBs,
      `"${o.createdAt}"`,
      `"${o.updatedAt || o.createdAt}"`
    ].join(",");
  });
  const csv = [headers.join(","), ...rows].join("\n");
  res.setHeader("Content-Type", "text/csv; charset=utf-8");
  res.setHeader("Content-Disposition", `attachment; filename=hoja_pedidos_${Date.now()}.csv`);
  res.send(csv);
});
app.post("/api/sheets/sync-all-complete", async (req, res) => {
  const webhookUrl = req.body.webhookUrl || dbState.settings.googleSheetsWebhookUrl;
  if (!webhookUrl) {
    return res.status(400).json({ error: "Debe ingresar o guardar la URL del Webhook de Google Sheets" });
  }
  const synced = [];
  try {
    await autoSyncUrlWithSheets();
    synced.push("URL/Tasa BCV");
  } catch (e) {
  }
  try {
    await autoSyncMenuWithSheets();
    synced.push("Platos");
  } catch (e) {
  }
  try {
    await autoSyncTablesWithSheets();
    synced.push("Mesas");
  } catch (e) {
  }
  try {
    await autoSyncUsersWithSheets();
    synced.push("Usuario");
  } catch (e) {
  }
  try {
    await autoSyncOrdersWithSheets();
    synced.push("Pedidos");
  } catch (e) {
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
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "SYNC_ALL",
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        restaurant: dbState.settings.restaurantName,
        orders: rows
      })
    });
    synced.push("Ventas");
  } catch (e) {
  }
  dbState.settings.googleSheetsLastSync = (/* @__PURE__ */ new Date()).toISOString();
  saveState();
  res.json({
    success: true,
    message: `\xA1Sincronizaci\xF3n completa de 6 pesta\xF1as (${synced.join(", ")}) enviada a Google Sheets exitosamente!`,
    timestamp: dbState.settings.googleSheetsLastSync
  });
});
app.post("/api/sheets/pull-all", async (req, res) => {
  const { webhookUrl: reqUrl } = req.body;
  const webhookUrl = reqUrl || dbState.settings.googleSheetsWebhookUrl;
  if (!webhookUrl) {
    return res.status(400).json({ error: "No hay URL de Webhook de Google Sheets configurada" });
  }
  dbState.settings.googleSheetsWebhookUrl = webhookUrl;
  const updatedStats = {};
  let gotAll = false;
  try {
    const url = new URL(webhookUrl);
    url.searchParams.set("action", "GET_ALL");
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 6500);
    const gRes = await fetch(url.toString(), { method: "GET", signal: controller.signal });
    clearTimeout(timer);
    if (gRes.ok) {
      const data = await gRes.json();
      if (data && data.status === "success") {
        if (data.users && Array.isArray(data.users) && data.users.length > 0) {
          dbState.users = data.users.map((u, idx) => ({
            id: Number(u.id) || idx + 1,
            name: String(u.name || ""),
            username: String(u.username || (u.name || "").toLowerCase().split(" ")[0] || `user${idx + 1}`),
            role: u.role === "admin" || u.role === "cocina" || u.role === "mesonero" || u.role === "cajero" ? u.role : "mesonero",
            password: String(u.password || u.pin || "123"),
            pin: String(u.pin || "1234"),
            active: u.active !== false && String(u.active).toLowerCase() !== "inactivo",
            createdAt: u.createdAt || (/* @__PURE__ */ new Date()).toISOString()
          }));
          syncWaitersFromUsers();
          updatedStats.users = dbState.users.length;
        }
        if (data.bcvRate !== void 0 && data.bcvRate !== null && !isNaN(Number(data.bcvRate))) {
          dbState.settings.bcvRate = Number(data.bcvRate);
          dbState.settings.bcvLastUpdated = (/* @__PURE__ */ new Date()).toISOString();
          updatedStats.bcvRate = dbState.settings.bcvRate;
        }
        if (data.restaurant) {
          dbState.settings.restaurantName = data.restaurant;
        }
        if (data.menu && Array.isArray(data.menu) && data.menu.length > 0) {
          dbState.menu = data.menu.map((m, idx) => ({
            id: String(m.id || `m_${idx + 1}`),
            name: String(m.name || "Plato"),
            category: String(m.category || "Otros"),
            price: Number(m.price) || 0,
            description: String(m.description || ""),
            quickNotes: Array.isArray(m.quickNotes) ? m.quickNotes : [],
            available: m.available !== false
          }));
          const cats = Array.from(new Set(dbState.menu.map((m) => m.category)));
          if (cats.length > 0) dbState.categories = cats;
          updatedStats.menu = dbState.menu.length;
        }
        if (data.tables && Array.isArray(data.tables) && data.tables.length > 0) {
          dbState.tables = data.tables.map((t, idx) => ({
            id: String(t.id || `t_${idx + 1}`),
            name: String(t.name || `Mesa ${idx + 1}`),
            capacity: Number(t.capacity) || 4,
            status: t.status === "ocupada" || t.status === "cuenta_solicitada" ? t.status : "libre",
            zone: String(t.zone || "Sal\xF3n Principal")
          }));
          updatedStats.tables = dbState.tables.length;
        }
        gotAll = true;
      }
    }
  } catch {
  }
  if (!gotAll) {
    try {
      const uUrl = new URL(webhookUrl);
      uUrl.searchParams.set("action", "GET_USERS");
      const uRes = await fetch(uUrl.toString(), { method: "GET" });
      if (uRes.ok) {
        const uData = await uRes.json();
        if (uData && uData.users && Array.isArray(uData.users) && uData.users.length > 0) {
          dbState.users = uData.users.map((u, idx) => ({
            id: Number(u.id) || idx + 1,
            name: String(u.name || ""),
            username: String(u.username || (u.name || "").toLowerCase().split(" ")[0] || `user${idx + 1}`),
            role: u.role === "admin" || u.role === "cocina" || u.role === "mesonero" || u.role === "cajero" ? u.role : "mesonero",
            password: String(u.password || u.pin || "123"),
            pin: String(u.pin || "1234"),
            active: u.active !== false && String(u.active).toLowerCase() !== "inactivo",
            createdAt: u.createdAt || (/* @__PURE__ */ new Date()).toISOString()
          }));
          syncWaitersFromUsers();
          updatedStats.users = dbState.users.length;
        }
      }
    } catch {
    }
    try {
      const cUrl = new URL(webhookUrl);
      cUrl.searchParams.set("action", "GET_CONFIG");
      const cRes = await fetch(cUrl.toString(), { method: "GET" });
      if (cRes.ok) {
        const cData = await cRes.json();
        if (cData && cData.bcvRate !== void 0 && cData.bcvRate !== null && !isNaN(Number(cData.bcvRate))) {
          dbState.settings.bcvRate = Number(cData.bcvRate);
          dbState.settings.bcvLastUpdated = (/* @__PURE__ */ new Date()).toISOString();
          updatedStats.bcvRate = dbState.settings.bcvRate;
        }
        if (cData.restaurant) {
          dbState.settings.restaurantName = cData.restaurant;
        }
      }
    } catch {
    }
    try {
      const mUrl = new URL(webhookUrl);
      mUrl.searchParams.set("action", "GET_MENU");
      const mRes = await fetch(mUrl.toString(), { method: "GET" });
      if (mRes.ok) {
        const mData = await mRes.json();
        if (mData && mData.menu && Array.isArray(mData.menu) && mData.menu.length > 0) {
          dbState.menu = mData.menu.map((m, idx) => ({
            id: String(m.id || `m_${idx + 1}`),
            name: String(m.name || "Plato"),
            category: String(m.category || "Otros"),
            price: Number(m.price) || 0,
            description: String(m.description || ""),
            quickNotes: Array.isArray(m.quickNotes) ? m.quickNotes : [],
            available: m.available !== false
          }));
          const cats = Array.from(new Set(dbState.menu.map((m) => m.category)));
          if (cats.length > 0) dbState.categories = cats;
          updatedStats.menu = dbState.menu.length;
        }
      }
    } catch {
    }
    try {
      const tUrl = new URL(webhookUrl);
      tUrl.searchParams.set("action", "GET_TABLES");
      const tRes = await fetch(tUrl.toString(), { method: "GET" });
      if (tRes.ok) {
        const tData = await tRes.json();
        if (tData && tData.tables && Array.isArray(tData.tables) && tData.tables.length > 0) {
          dbState.tables = tData.tables.map((t, idx) => ({
            id: String(t.id || `t_${idx + 1}`),
            name: String(t.name || `Mesa ${idx + 1}`),
            capacity: Number(t.capacity) || 4,
            status: t.status === "ocupada" || t.status === "cuenta_solicitada" ? t.status : "libre",
            zone: String(t.zone || "Sal\xF3n Principal")
          }));
          updatedStats.tables = dbState.tables.length;
        }
      }
    } catch {
    }
  }
  dbState.settings.googleSheetsLastSync = (/* @__PURE__ */ new Date()).toISOString();
  saveState();
  broadcastServerEvent("sync_completed", { timestamp: dbState.settings.googleSheetsLastSync, updated: updatedStats });
  broadcastServerEvent("tables_updated", { tables: dbState.tables });
  const parts = [];
  if (updatedStats.users) parts.push(`${updatedStats.users} usuarios`);
  if (updatedStats.bcvRate) parts.push(`Tasa BCV Bs. ${updatedStats.bcvRate.toFixed(2)}`);
  if (updatedStats.menu) parts.push(`${updatedStats.menu} platos`);
  if (updatedStats.tables) parts.push(`${updatedStats.tables} mesas`);
  if (updatedStats.orders !== void 0) {
    if (updatedStats.orders === 0) {
      parts.push("0 pedidos (hoja en blanco, mesas liberadas para pruebas)");
    } else {
      parts.push(`${updatedStats.orders} pedidos`);
    }
  }
  res.json({
    success: true,
    message: parts.length > 0 ? `\u2713 Sincronizaci\xF3n exitosa desde Google Sheets: ${parts.join(", ")} actualizados.` : "\u2713 Datos verificados con Google Sheets.",
    updated: updatedStats,
    state: {
      tables: dbState.tables,
      menu: dbState.menu,
      categories: dbState.categories,
      settings: dbState.settings,
      orders: dbState.orders,
      waiters: dbState.waiters,
      users: dbState.users
    }
  });
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
app.get("/api/download-html", (req, res) => {
  const htmlPath = import_path.default.join(process.cwd(), "dist-html", "index.html");
  if (import_fs.default.existsSync(htmlPath)) {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Content-Disposition", 'attachment; filename="index.html"');
    return res.sendFile(htmlPath);
  }
  res.status(404).send("Archivo HTML compilado no encontrado.");
});
app.get("/api/sheets/export-csv-users", (req, res) => {
  const headers = [
    "Id_Usuario",
    "Nombre_Completo",
    "Usuario_Login",
    "Rol",
    "Contrasena",
    "PIN",
    "Estado",
    "Fecha_Creacion"
  ];
  const rows = dbState.users.map((u) => [
    u.id,
    `"${u.name.replace(/"/g, '""')}"`,
    `"${(u.username || u.name.toLowerCase().split(" ")[0]).replace(/"/g, '""')}"`,
    `"${u.role}"`,
    `"${(u.password || u.pin || "123").replace(/"/g, '""')}"`,
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
  scheduleServerAutoSync(updates.autoSyncGoogleSheets !== void 0 || updates.googleSheetsWebhookUrl ? "all" : "url");
  broadcastServerEvent("settings_updated", { settings: dbState.settings });
  if (updates.googleSheetsWebhookUrl || updates.bcvRate !== void 0) {
    autoSyncUrlWithSheets().catch(() => {
    });
    if (updates.googleSheetsWebhookUrl) {
      autoSyncOrdersWithSheets(updates.googleSheetsWebhookUrl).catch(() => {
      });
    }
  }
  res.json({ message: "Configuraci\xF3n actualizada", settings: dbState.settings });
});
app.post("/api/menu", (req, res) => {
  const { name, category, price, description, quickNotes, available } = req.body;
  if (!name || price === void 0) {
    return res.status(400).json({ error: "Nombre y precio son requeridos" });
  }
  const cleanPrice = typeof price === "string" ? parseFloat(price.replace(",", ".")) : Number(price);
  const newItem = {
    id: `m_${Date.now()}`,
    name: String(name).trim(),
    category: category || "Platos Principales",
    price: isNaN(cleanPrice) ? 0 : cleanPrice,
    description: description || "",
    quickNotes: Array.isArray(quickNotes) ? quickNotes : [],
    available: available !== void 0 ? Boolean(available) : true
  };
  dbState.menu.push(newItem);
  if (!dbState.categories.includes(newItem.category)) {
    dbState.categories.push(newItem.category);
  }
  saveState();
  scheduleServerAutoSync("menu");
  broadcastServerEvent("menu_updated", { action: "create", item: newItem });
  res.status(201).json({ message: "Plato agregado al men\xFA", item: newItem });
});
app.put("/api/menu/:id", (req, res) => {
  const { id } = req.params;
  const item = dbState.menu.find((m) => m.id === id);
  if (!item) return res.status(404).json({ error: "Plato no encontrado" });
  if (req.body.name !== void 0) item.name = String(req.body.name).trim();
  if (req.body.category !== void 0) {
    item.category = req.body.category;
    if (!dbState.categories.includes(item.category)) {
      dbState.categories.push(item.category);
    }
  }
  if (req.body.price !== void 0) {
    const cleanPrice = typeof req.body.price === "string" ? parseFloat(req.body.price.replace(",", ".")) : Number(req.body.price);
    item.price = isNaN(cleanPrice) ? 0 : cleanPrice;
  }
  if (req.body.description !== void 0) item.description = req.body.description;
  if (req.body.quickNotes !== void 0) item.quickNotes = req.body.quickNotes;
  if (req.body.available !== void 0) item.available = Boolean(req.body.available);
  saveState();
  scheduleServerAutoSync("menu");
  broadcastServerEvent("menu_updated", { action: "update", item });
  res.json({ message: "Plato actualizado", item });
});
app.delete("/api/menu/:id", (req, res) => {
  const { id } = req.params;
  const index = dbState.menu.findIndex((m) => m.id === id);
  if (index === -1) return res.status(404).json({ error: "Plato no encontrado" });
  const deleted = dbState.menu.splice(index, 1)[0];
  saveState();
  scheduleServerAutoSync("menu");
  broadcastServerEvent("menu_updated", { action: "delete", id });
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
  scheduleServerAutoSync("tables");
  broadcastServerEvent("tables_updated", { action: "create", table: newTable });
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
  scheduleServerAutoSync("tables");
  broadcastServerEvent("tables_updated", { action: "update", table });
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
  scheduleServerAutoSync("tables");
  broadcastServerEvent("tables_updated", { action: "delete", id });
  res.json({ message: "Mesa eliminada con \xE9xito", id });
});
app.get("/api/waiters", (req, res) => {
  syncWaitersFromUsers();
  res.json({ waiters: dbState.waiters });
});
app.post("/api/waiters", (req, res) => {
  const { name, pin, active } = req.body;
  if (!name || !name.trim()) {
    return res.status(400).json({ error: "El nombre del mesonero es obligatorio" });
  }
  const nextId = dbState.users && dbState.users.length > 0 ? Math.max(...dbState.users.map((u) => Number(u.id) || 0)) + 1 : 1;
  const newUser = {
    id: nextId,
    name: name.trim(),
    role: "mesonero",
    pin: pin ? String(pin).trim() : "1234",
    active: active !== void 0 ? Boolean(active) : true,
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  dbState.users.push(newUser);
  syncWaitersFromUsers();
  saveState();
  scheduleServerAutoSync("users");
  broadcastServerEvent("users_updated", { action: "create", user: newUser });
  res.status(201).json({
    message: "Mesonero registrado en la tabla de usuarios con \xE9xito",
    waiter: {
      id: `w_${newUser.id}`,
      name: newUser.name,
      code: String(newUser.id),
      phone: "",
      active: newUser.active,
      createdAt: newUser.createdAt
    }
  });
});
app.put("/api/waiters/:id", (req, res) => {
  const { id } = req.params;
  const numId = Number(id.replace("w_", ""));
  const user = dbState.users.find((u) => u.id === numId || u.name.toLowerCase() === id.toLowerCase());
  if (!user) return res.status(404).json({ error: "Mesonero no encontrado en la lista de usuarios" });
  if (req.body.name !== void 0) user.name = req.body.name.trim();
  if (req.body.pin !== void 0) user.pin = String(req.body.pin).trim();
  if (req.body.active !== void 0) user.active = Boolean(req.body.active);
  syncWaitersFromUsers();
  saveState();
  scheduleServerAutoSync("users");
  broadcastServerEvent("users_updated", { action: "update", user });
  res.json({
    message: "Mesonero modificado con \xE9xito",
    waiter: {
      id: `w_${user.id}`,
      name: user.name,
      code: String(user.id),
      phone: "",
      active: user.active,
      createdAt: user.createdAt
    }
  });
});
app.delete("/api/waiters/:id", (req, res) => {
  const { id } = req.params;
  const numId = Number(id.replace("w_", ""));
  const index = dbState.users.findIndex((u) => u.id === numId || u.name.toLowerCase() === id.toLowerCase());
  if (index === -1) return res.status(404).json({ error: "Mesonero no encontrado en la lista de usuarios" });
  const deleted = dbState.users.splice(index, 1)[0];
  syncWaitersFromUsers();
  saveState();
  scheduleServerAutoSync("users");
  broadcastServerEvent("users_updated", { action: "delete", id: numId });
  res.json({ message: "Mesonero eliminado de usuarios con \xE9xito", waiter: deleted });
});
app.get("/api/users", (req, res) => {
  res.json({ users: dbState.users });
});
app.post("/api/users", (req, res) => {
  const { name, role, username, password, pin, active } = req.body;
  if (!name || !name.trim()) {
    return res.status(400).json({ error: "El nombre del usuario es obligatorio" });
  }
  const nextId = dbState.users && dbState.users.length > 0 ? Math.max(...dbState.users.map((u) => Number(u.id) || 0)) + 1 : 1;
  const validRole = role === "admin" || role === "cocina" || role === "mesonero" ? role : "mesonero";
  const cleanName = name.trim();
  const cleanUsername = username ? String(username).trim().toLowerCase() : cleanName.toLowerCase().split(" ")[0] || `user${nextId}`;
  const newUser = {
    id: nextId,
    name: cleanName,
    username: cleanUsername,
    role: validRole,
    password: password ? String(password).trim() : pin ? String(pin).trim() : "123",
    pin: pin ? String(pin).trim() : "1234",
    active: active !== void 0 ? Boolean(active) : true,
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  dbState.users.push(newUser);
  syncWaitersFromUsers();
  saveState();
  scheduleServerAutoSync("users");
  broadcastServerEvent("users_updated", { action: "create", user: newUser });
  res.status(201).json({ message: "Usuario creado con \xE9xito", user: newUser });
});
app.put("/api/users/:id", (req, res) => {
  const idNum = Number(req.params.id);
  const user = dbState.users.find((u) => u.id === idNum);
  if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
  if (req.body.name !== void 0) user.name = req.body.name.trim();
  if (req.body.username !== void 0) user.username = String(req.body.username).trim().toLowerCase();
  if (req.body.password !== void 0) user.password = String(req.body.password).trim();
  if (req.body.role !== void 0 && (req.body.role === "admin" || req.body.role === "cocina" || req.body.role === "mesonero")) {
    user.role = req.body.role;
  }
  if (req.body.pin !== void 0) user.pin = String(req.body.pin).trim();
  if (req.body.active !== void 0) user.active = Boolean(req.body.active);
  syncWaitersFromUsers();
  saveState();
  scheduleServerAutoSync("users");
  broadcastServerEvent("users_updated", { action: "update", user });
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
  syncWaitersFromUsers();
  saveState();
  scheduleServerAutoSync("users");
  broadcastServerEvent("users_updated", { action: "delete", id: idNum });
  res.json({ message: "Usuario eliminado con \xE9xito", id: idNum, user: deleted });
});
app.post("/api/auth/login", async (req, res) => {
  const { username, password, userId, pin } = req.body;
  const rawUser = username !== void 0 ? String(username) : userId !== void 0 ? String(userId) : "";
  const lookupUser = rawUser.trim().toLowerCase();
  const lookupPass = password !== void 0 ? String(password).trim() : pin !== void 0 ? String(pin).trim() : "";
  if (!lookupUser) {
    return res.status(400).json({ error: "Por favor ingrese su nombre de usuario" });
  }
  let authenticatedUser = null;
  let verifiedVia = "Servidor Local";
  let sheetSyncMessage = "";
  const webhookUrl = dbState.settings.googleSheetsWebhookUrl;
  if (webhookUrl) {
    try {
      const verifyUrl = new URL(webhookUrl);
      verifyUrl.searchParams.set("action", "VERIFY_USER");
      verifyUrl.searchParams.set("username", lookupUser);
      verifyUrl.searchParams.set("password", lookupPass);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6e3);
      const sheetRes = await fetch(verifyUrl.toString(), {
        method: "GET",
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      if (sheetRes.ok) {
        const sheetData = await sheetRes.json();
        if (sheetData && sheetData.verified && sheetData.user) {
          verifiedVia = 'Google Sheets (Hoja "Usuario")';
          let localUser = dbState.users.find(
            (u) => u.username && u.username.toLowerCase() === lookupUser || u.name.toLowerCase() === sheetData.user.name?.toLowerCase() || String(u.id) === String(sheetData.user.id)
          );
          if (!localUser) {
            localUser = {
              id: Number(sheetData.user.id) || Math.max(...dbState.users.map((u) => u.id), 0) + 1,
              name: sheetData.user.name || lookupUser,
              username: sheetData.user.username || lookupUser,
              role: sheetData.user.role || "mesonero",
              password: lookupPass,
              pin: sheetData.user.pin || "1234",
              active: true,
              createdAt: (/* @__PURE__ */ new Date()).toISOString()
            };
            dbState.users.push(localUser);
          } else {
            if (sheetData.user.role) localUser.role = sheetData.user.role;
            if (sheetData.user.name) localUser.name = sheetData.user.name;
            localUser.username = lookupUser;
            if (lookupPass) localUser.password = lookupPass;
          }
          authenticatedUser = localUser;
          saveState();
        } else if (sheetData && sheetData.verified === false) {
          return res.status(401).json({
            error: sheetData.error || "Credenciales no v\xE1lidas seg\xFAn la hoja Usuario en Google Sheets"
          });
        }
      }
    } catch (sheetErr) {
      console.warn("[Auth] Verificaci\xF3n con Google Sheets no respondi\xF3 a tiempo, recurriendo a verificaci\xF3n local:", sheetErr.message);
    }
  }
  if (!authenticatedUser) {
    const user = dbState.users.find((u) => {
      const matchUsername = u.username && u.username.toLowerCase() === lookupUser;
      const matchName = u.name.toLowerCase() === lookupUser;
      const matchId = String(u.id) === lookupUser;
      return matchUsername || matchName || matchId;
    });
    if (!user) {
      return res.status(404).json({
        error: `El usuario "${rawUser}" no existe en el sistema ni en Google Sheets. Verifique sus datos o reg\xEDstrelo en Administraci\xF3n.`
      });
    }
    if (!user.active) {
      return res.status(403).json({
        error: `El usuario "${user.name}" se encuentra inactivo. Contacte al administrador del sistema.`
      });
    }
    const expectedPass = user.password || user.pin || "";
    if (expectedPass && lookupPass) {
      const matchPassword = user.password && user.password === lookupPass;
      const matchPin = user.pin && user.pin === lookupPass;
      if (!matchPassword && !matchPin) {
        return res.status(401).json({ error: "Contrase\xF1a o PIN incorrecto. Intente de nuevo." });
      }
    } else if (expectedPass && !lookupPass) {
      return res.status(401).json({ error: "Debe ingresar la contrase\xF1a de acceso." });
    }
    authenticatedUser = user;
    verifiedVia = "Servidor Local";
  }
  if (webhookUrl) {
    dbState.settings.autoSyncGoogleSheets = true;
    saveState();
    sheetSyncMessage = "Sincronizaci\xF3n con Google Sheets activa.";
  }
  res.json({
    success: true,
    message: "Inicio de sesi\xF3n exitoso",
    user: authenticatedUser,
    verifiedVia,
    autoSyncStarted: Boolean(webhookUrl),
    sheetSyncMessage
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  broadcastServerEvent
});
//# sourceMappingURL=server.cjs.map
