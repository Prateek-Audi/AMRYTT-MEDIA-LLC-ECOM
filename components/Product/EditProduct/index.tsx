"use client";
import React, { useState } from "react";
import {
  Button,
  Input,
  Select,
  SelectItem,
  Textarea,
  Card,
  CardBody,
  CardHeader,
  Chip,
} from "@nextui-org/react";
import { ProductFormData, ProductVariation } from "@/types/product";
import Image from "next/image";
import Breadcrumb from "@/components/BreadCrumb";
import styles from "../style.module.css";

type Props = {
  id: number;
};

const EditProduct: React.FC<Props> = ({ id }) => {
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    description: "",
    category: "",
    tags: [],
    status: "published",
    basePrice: 0,
    discountType: "No Discount",
    discountPercentage: 0,
    taxClass: "Tax Free",
    vatAmount: 0,
    sku: "",
    barcode: "",
    quantity: 0,
    variations: [],
    weight: 0,
    height: 0,
    length: 0,
    width: 0,
    isPhysical: true,
  });

  const [variations, setVariations] = useState<ProductVariation[]>([
    { type: "Color", value: "Black" },
    { type: "Color", value: "Gray" },
  ]);

  return (
    <div className="flex flex-col">
      <div
        className={`px-6 flex items-center justify-between ${styles["breadcrumb-add"]}`}
      >
        <Breadcrumb />
        <div className="flex items-center gap-2">
          <Button
            size="md"
            color="primary"
            variant="light"
            isIconOnly
            className="w-fit flex items-center gap-3 px-4 bg-[#FFFFFF] rounded-lg"
          >
            <Image src="/assets/cross.svg" alt="" width={16} height={16} />
            <span className="ml-2 text-sm font-semibold text-[#858D9D]">
              Cancel
            </span>
          </Button>
          <Button
            size="md"
            color="primary"
            isIconOnly
            className="w-fit flex items-center gap-3 px-4 text-white bg-[#2086BF] rounded-lg"
          >
            <Image src="/assets/save.svg" alt="" width={16} height={16} />
            <span className="ml-2 text-sm font-semibold text-white">
              Save Product
            </span>
          </Button>
        </div>
      </div>
      <div className="w-full mx-auto p-6 space-y-6">
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 gap-6">
          <div className="col-span-1 order-last xl:col-span-3 lg:col-span-2 md:col-span-2 xl:order-first lg:order-first md:order-first flex flex-col gap-6">
            {/* General Information */}
            <Card className="bg-white">
              <CardHeader className="text-lg font-semibold text-[#1D1F2C]">
                General Information
              </CardHeader>
              <CardBody className="space-y-4">
                <Input
                  variant="faded"
                  label="Product Name"
                  placeholder="Enter product name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full text-sm font-medium text-[#777980]"
                  labelPlacement="outside"
                />
                <Textarea
                  variant="faded"
                  label="Description"
                  placeholder="Enter product description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full text-sm font-medium text-[#777980]"
                  labelPlacement="outside"
                />
              </CardBody>
            </Card>

            {/* Media Upload */}
            <Card className="bg-white">
              <CardHeader className="text-lg font-semibold text-[#1D1F2C]">
                Media
              </CardHeader>
              <CardBody>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
                  <div className="flex flex-wrap justify-center gap-4">
                    {[1, 2, 3].map((_, index) => (
                      <div
                        key={index}
                        className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center"
                      >
                        <span className="text-[#777980]">+</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-sm text-[#777980] mt-4">
                    Drag and drop image here, or click add image
                  </p>
                  <div className="text-center mt-4">
                    <Button color="primary" variant="flat">
                      Add Image
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Pricing */}
            <Card className="bg-white">
              <CardHeader className="text-lg font-semibold text-[#1D1F2C]">
                Pricing
              </CardHeader>
              <CardBody className="space-y-4">
                <Input
                  variant="faded"
                  type="number"
                  label="Base Price"
                  placeholder="0.00"
                  labelPlacement="outside"
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-[#777980]">$</span>
                    </div>
                  }
                  value={formData.basePrice.toString()}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      basePrice: parseFloat(e.target.value),
                    })
                  }
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Select
                    labelPlacement="outside"
                    variant="faded"
                    label="Discount Type"
                    value={formData.discountType}
                    onChange={(e) =>
                      setFormData({ ...formData, discountType: e.target.value })
                    }
                  >
                    <SelectItem key="no-discount" value="No Discount">
                      No Discount
                    </SelectItem>
                    <SelectItem key="percentage" value="Percentage">
                      Percentage{id}
                    </SelectItem>
                  </Select>
                  <Input
                    variant="faded"
                    type="number"
                    label="Discount Percentage (%)"
                    labelPlacement="outside"
                    value={formData.discountPercentage.toString()}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        discountPercentage: parseFloat(e.target.value),
                      })
                    }
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Select
                    labelPlacement="outside"
                    variant="faded"
                    label="Tax Class"
                    value={formData.taxClass}
                    onChange={(e) =>
                      setFormData({ ...formData, taxClass: e.target.value })
                    }
                  >
                    <SelectItem key="tax-free" value="Tax Free">
                      Tax Free
                    </SelectItem>
                    <SelectItem key="taxable" value="Taxable">
                      Taxable
                    </SelectItem>
                  </Select>
                  <Input
                    variant="faded"
                    type="number"
                    label="VAT Amount (%)"
                    labelPlacement="outside"
                    value={formData.vatAmount.toString()}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        vatAmount: parseFloat(e.target.value),
                      })
                    }
                  />
                </div>
              </CardBody>
            </Card>

            {/* Inventory */}
            <Card className="bg-white">
              <CardHeader className="text-lg font-semibold text-[#1D1F2C]">
                Inventory
              </CardHeader>
              <CardBody>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input
                    variant="faded"
                    label="SKU"
                    labelPlacement="outside"
                    value={formData.sku}
                    onChange={(e) =>
                      setFormData({ ...formData, sku: e.target.value })
                    }
                  />
                  <Input
                    variant="faded"
                    label="Barcode"
                    value={formData.barcode}
                    labelPlacement="outside"
                    onChange={(e) =>
                      setFormData({ ...formData, barcode: e.target.value })
                    }
                  />
                  <Input
                    variant="faded"
                    type="number"
                    label="Quantity"
                    labelPlacement="outside"
                    value={formData.quantity.toString()}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        quantity: parseInt(e.target.value),
                      })
                    }
                  />
                </div>
              </CardBody>
            </Card>

            {/* Variations */}
            <Card className="bg-white">
              <CardHeader className="text-lg font-semibold text-[#1D1F2C]">
                Variation
              </CardHeader>
              <CardBody className="space-y-4">
                {variations.map((variation, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <Select
                      labelPlacement="outside"
                      variant="faded"
                      label="Variation Type"
                      value={variation.type}
                      onChange={(e) => {
                        const newVariations = [...variations];
                        newVariations[index].type = e.target.value;
                        setVariations(newVariations);
                      }}
                    >
                      <SelectItem key="color" value="Color">
                        Color
                      </SelectItem>
                      <SelectItem key="size" value="Size">
                        Size
                      </SelectItem>
                    </Select>
                    <div className="flex gap-4">
                      <Input
                        variant="faded"
                        className="flex-1"
                        label="Variation"
                        value={variation.value}
                        labelPlacement="outside"
                        onChange={(e) => {
                          const newVariations = [...variations];
                          newVariations[index].value = e.target.value;
                          setVariations(newVariations);
                        }}
                      />
                      <Button
                        isIconOnly
                        color="danger"
                        variant="light"
                        className="mt-6 text-3xl font-normal bg-[#FEECEE]"
                      >
                        +
                      </Button>
                    </div>
                  </div>
                ))}
                <Button color="primary" variant="flat" className="w-fit">
                  <Image
                    src={"/assets/plus.svg"}
                    alt={""}
                    width={16}
                    height={16}
                  />
                  Add Variant
                </Button>
              </CardBody>
            </Card>

            {/* Shipping */}
            <Card className="bg-white">
              <CardHeader className="text-lg font-semibold text-[#1D1F2C]">
                Shipping
              </CardHeader>
              <CardBody className="space-y-4">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.isPhysical}
                    onChange={(e) =>
                      setFormData({ ...formData, isPhysical: e.target.checked })
                    }
                    className="rounded text-primary"
                  />
                  <span className="text-sm font-semibold text-[#2086BF]">
                    This is a physical product
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Input
                    variant="faded"
                    type="number"
                    label="Weight (kg)"
                    labelPlacement="outside"
                    value={formData.weight.toString()}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        weight: parseFloat(e.target.value),
                      })
                    }
                  />
                  <Input
                    variant="faded"
                    type="number"
                    label="Height (cm)"
                    labelPlacement="outside"
                    value={formData.height.toString()}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        height: parseFloat(e.target.value),
                      })
                    }
                  />
                  <Input
                    variant="faded"
                    type="number"
                    label="Length (cm)"
                    labelPlacement="outside"
                    value={formData.length.toString()}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        length: parseFloat(e.target.value),
                      })
                    }
                  />
                  <Input
                    variant="faded"
                    type="number"
                    label="Width (cm)"
                    labelPlacement="outside"
                    value={formData.width.toString()}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        width: parseFloat(e.target.value),
                      })
                    }
                  />
                </div>
              </CardBody>
            </Card>
          </div>
          {/* Category & Status */}
          <div className="col-span-1 flex flex-col gap-6">
            <Card className="bg-white">
              <CardHeader className="text-lg font-semibold text-[#1D1F2C]">
                Category
              </CardHeader>
              <CardBody className="space-y-4">
                <Select
                  labelPlacement="outside"
                  variant="faded"
                  label="Product Category"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                >
                  <SelectItem key="watch" value="watch">
                    Watch
                  </SelectItem>
                  <SelectItem key="gadget" value="gadget">
                    Gadget
                  </SelectItem>
                </Select>
                <div>
                  <p className="text-sm text-[#777980] mb-2">Product Tags</p>
                  <div className="flex gap-2">
                    <Chip color="primary" variant="flat">
                      Watch
                    </Chip>
                    <Chip color="primary" variant="flat">
                      Gadget
                    </Chip>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-white">
              <CardHeader className="text-lg font-semibold text-[#1D1F2C]">
                Status
              </CardHeader>
              <CardBody>
                <Select
                  labelPlacement="outside"
                  variant="faded"
                  label="Product Status"
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value })
                  }
                >
                  <SelectItem key="published" value="published">
                    Published
                  </SelectItem>
                  <SelectItem key="draft" value="draft">
                    Draft
                  </SelectItem>
                </Select>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
