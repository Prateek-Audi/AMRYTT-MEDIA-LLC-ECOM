export const revenueData = [
  { month: "", revenue: 750, sales: 600 },
  { month: "", revenue: 700, sales: 550 },
  { month: "Jan", revenue: 750, sales: 600 },
  { month: "Jan", revenue: 700, sales: 550 },
  { month: "Feb", revenue: 650, sales: 450 },
  { month: "Feb", revenue: 600, sales: 500 },
  { month: "Mar", revenue: 800, sales: 600 },
  { month: "Mar", revenue: 750, sales: 700 },
  { month: "Apr", revenue: 650, sales: 800 },
  { month: "Apr", revenue: 700, sales: 750 },
  { month: "May", revenue: 750, sales: 600 },
  { month: "May", revenue: 800, sales: 650 },
  { month: "Jun", revenue: 1200, sales: 700 },
  { month: "Jun", revenue: 1100, sales: 650 },
  { month: "Jul", revenue: 850, sales: 650 },
  { month: "Jul", revenue: 800, sales: 600 },
  { month: "Aug", revenue: 900, sales: 600 },
  { month: "Aug", revenue: 950, sales: 650 },
  { month: "Sep", revenue: 1100, sales: 700 },
  { month: "Sep", revenue: 950, sales: 650 },
  { month: "Oct", revenue: 500, sales: 900 },
  { month: "Oct", revenue: 550, sales: 850 },
  { month: "Nov", revenue: 600, sales: 600 },
  { month: "Nov", revenue: 550, sales: 650 },
  { month: "Dec", revenue: 750, sales: 800 },
  { month: "Dec", revenue: 800, sales: 750 }
];

export const recentOrders = [
  {
    id: 1,
    product: "Handmade Pouch",
    otherProducts: 3,
    customer: "John Bushmill",
    email: "johnb@mail.com",
    total: 121.0,
    status: "Processing",
  },
  {
    id: 2,
    product: "Smartwatch E2",
    otherProducts: 1,
    customer: "Ilham Budi Agung",
    email: "ilhambudi@mail.com",
    total: 590.0,
    status: "Processing",
  },
  {
    id: 3,
    product: "Smartwatch E1",
    otherProducts: 0,
    customer: "Mohammad Karim",
    email: "m_karim@mail.com",
    total: 125.0,
    status: "Shipped",
  },
  {
    id: 4,
    product: "Headphone G1 Pro",
    otherProducts: 1,
    customer: "Linda Blair",
    email: "lindablair@mail.com",
    total: 348.0,
    status: "Shipped",
  },
  {
    id: 5,
    product: "iPhone X",
    otherProducts: 0,
    customer: "Josh Adam",
    email: "josh_adam@mail.com",
    total: 607.0,
    status: "Delivered",
  },
];

export const salesData = {
  total: 75550,
  percentage: 10,
  sources: [
    { name: "Official Website", value: 10000 },
    { name: "Offline Store", value: 10000 },
    { name: "Amazon Store", value: 10000 },
    { name: "Reseller", value: 10000 },
  ],
};

export const topProducts = [
  { name: "Logic+ Wireless Mouse", category: "Mouse", price: 1240 },
  { name: "PS Wireless Controller", category: "Smartphone", price: 1189 },
  { name: "Ximi Mechanical Keyboard", category: "Smartphone", price: 1100 },
  { name: "Audia Tech Earphone", category: "Earphone", price: 908 },
  { name: "Sams S14 Pro", category: "Tablet", price: 900 },
  { name: "Sams A13 5G", category: "Smartphone", price: 870 },
  { name: "Jsound P01 TWS", category: "Earphone", price: 870 },
];

export const categories = [
  { name: "Smartphone", value: 1509, change: 12 },
  { name: "Tablet", value: 1460, change: -5 },
  { name: "Earphone", value: 1229, change: 0 },
  { name: "Laptop & PC", value: 982, change: 19 },
  { name: "Mouse", value: 791, change: -25 },
  { name: "Hardisk & USB Drive", value: 679, change: 11 },
  { name: "Camera", value: 679, change: 11 },
];

export const customers = [
  { country: 'USA', customers: 1240, growth: 80, color: '#2DD4BF' },
  { country: 'Japan', customers: 1240, growth: 60, color: '#FB923C' },
  { country: 'France', customers: 1240, growth: 49, color: '#FCD34D' },
  { country: 'Germany', customers: 1240, growth: 100, color: '#3B82F6' },
  { country: 'South Korea', customers: 1240, growth: 50, color: '#EF4444' }
];
