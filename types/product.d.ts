export type ProductVariation = {
  type: string;
  value: string;
};

export type ProductFormData = {
  name: string;
  description: string;
  category: string;
  tags: string[];
  status: string;
  basePrice: number;
  discountType: string;
  discountPercentage: number;
  taxClass: string;
  vatAmount: number;
  sku: string;
  barcode: string;
  quantity: number;
  variations: ProductVariation[];
  weight: number;
  height: number;
  length: number;
  width: number;
  isPhysical: boolean;
};
