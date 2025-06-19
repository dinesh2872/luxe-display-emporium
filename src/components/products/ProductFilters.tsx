import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

interface FilterOptions {
  categories: string[];
  subcategories: string[];
  materials: string[];
  priceRange: [number, number];
  colors: string[];
  sizes: string[];
  inStock: boolean;
  featured: boolean;
}

interface ProductFiltersProps {
  filters?: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const defaultFilters: FilterOptions = {
  categories: [],
  subcategories: [],
  materials: [],
  priceRange: [0, 5000],
  colors: [],
  sizes: [],
  inStock: false,
  featured: false,
};

// Category structure
const categoryTree = [
  {
    name: 'Jewelry Display',
    subcategories: [
      {
        name: 'Jewelry Box',
        materials: ['Wooden', 'Paper', 'Leather', 'Velvet', 'Led light'],
      },
      { name: 'Jewelry Cases' },
      {
        name: 'Jewelry Pouch',
        materials: [
          'Jewelry gift packaging',
          'Velvet Pouch',
          'Microfiber Pouch',
          'Satin Pouch',
        ],
      },
      { name: 'Jewelry Display Set' },
      {
        name: 'Jewelry Display Stand',
        types: [
          'Bangle/Bracelet Display',
          'Ring Display',
          'Earring Rack',
          'Necklace Bust',
        ],
      },
    ],
  },
  {
    name: 'Watch Display Series',
    subcategories: [
      { name: 'Watch Display Set' },
      { name: 'Watch Stand' },
      { name: 'Watch Box' },
    ],
  },
  {
    name: 'Trays',
    subcategories: [
      { name: 'Eyewear Tray' },
      { name: 'Jewelry Trays' },
      { name: 'Watch Tray' },
    ],
  },
  { name: 'Eyeglasses cases & bag' },
  { name: 'Jewelry Card' },
  { name: 'Paper Gift Bag' },
];

const colors = [
  'Silver',
  'Gold',
  'Rose Gold',
  'Black',
  'Ebony',
  'Walnut',
  'White Oak',
  'Classic Black',
  'Cognac Brown',
  'Navy Blue',
];

const sizes = [
  'Small',
  'Medium',
  'Large',
  'Desktop',
  'Counter',
  'Floor Stand',
  '6-Watch',
  '12-Watch',
  '24-Watch',
];

const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters = defaultFilters,
  onFiltersChange,
  isOpen,
  onToggle,
}) => {
  // Helper to get selected category object
  const selectedCategoryObj = categoryTree.find(
    (cat) => filters.categories[0] === cat.name
  );
  const subcategories = selectedCategoryObj?.subcategories?.map((sub) =>
    typeof sub === 'string' ? sub : sub.name
  ) || [];

  // Helper to get selected subcategory object
  const selectedSubcategoryObj =
    selectedCategoryObj?.subcategories &&
    filters.subcategories[0]
      ? selectedCategoryObj.subcategories.find(
          (sub) =>
            (typeof sub === 'string' ? sub : sub.name) ===
            filters.subcategories[0]
        )
      : undefined;

  const materials =
    (selectedSubcategoryObj &&
      'materials' in selectedSubcategoryObj &&
      selectedSubcategoryObj.materials) ||
    [];

  const types =
    (selectedSubcategoryObj &&
      'types' in selectedSubcategoryObj &&
      selectedSubcategoryObj.types) ||
    [];

  // Handlers
  const handleCategoryChange = (category: string) => {
    onFiltersChange({
      ...filters,
      categories: [category],
      subcategories: [],
      materials: [],
    });
  };

  const handleSubcategoryChange = (subcategory: string) => {
    onFiltersChange({
      ...filters,
      subcategories: [subcategory],
      materials: [],
    });
  };

  const handleMaterialToggle = (material: string) => {
    const newMaterials = filters.materials.includes(material)
      ? filters.materials.filter((m) => m !== material)
      : [...filters.materials, material];
    onFiltersChange({ ...filters, materials: newMaterials });
  };

  const handleTypeToggle = (type: string) => {
    const newMaterials = filters.materials.includes(type)
      ? filters.materials.filter((m) => m !== type)
      : [...filters.materials, type];
    onFiltersChange({ ...filters, materials: newMaterials });
  };

  const handleColorToggle = (color: string) => {
    const newColors = filters.colors.includes(color)
      ? filters.colors.filter((c) => c !== color)
      : [...filters.colors, color];
    onFiltersChange({ ...filters, colors: newColors });
  };

  const handleSizeToggle = (size: string) => {
    const newSizes = filters.sizes.includes(size)
      ? filters.sizes.filter((s) => s !== size)
      : [...filters.sizes, size];
    onFiltersChange({ ...filters, sizes: newSizes });
  };

  const handlePriceChange = (min: number, max: number) => {
    onFiltersChange({ ...filters, priceRange: [min, max] });
  };

  const clearAllFilters = () => {
    onFiltersChange(defaultFilters);
  };

  const activeFilterCount =
    (filters.categories?.length || 0) +
    (filters.subcategories?.length || 0) +
    (filters.materials?.length || 0) +
    (filters.colors?.length || 0) +
    (filters.sizes?.length || 0) +
    (filters.inStock ? 1 : 0) +
    (filters.featured ? 1 : 0);

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-6">
        <Button
          variant="outline"
          onClick={onToggle}
          className="w-full justify-center"
        >
          <Filter className="w-4 h-4 mr-2" />
          Filters
          {activeFilterCount > 0 && (
            <Badge className="ml-2 bg-luxury-gold">{activeFilterCount}</Badge>
          )}
        </Button>
      </div>

      {/* Filter Panel */}
      <Card className={`p-6 ${isOpen ? 'block' : 'hidden lg:block'}`}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold flex items-center">
            <Filter className="w-5 h-5 mr-2" />
            Filters
            {activeFilterCount > 0 && (
              <Badge className="ml-2 bg-luxury-gold">{activeFilterCount}</Badge>
            )}
          </h3>
          {activeFilterCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-luxury-gold hover:text-luxury-gold-dark"
            >
              Clear All
            </Button>
          )}
        </div>

        <div className="space-y-6">
          {/* Categories */}
          <div>
            <h4 className="font-medium mb-3">Categories</h4>
            <div className="space-y-2">
              {categoryTree.map((cat) => (
                <label key={cat.name} className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    checked={filters.categories[0] === cat.name}
                    onChange={() => handleCategoryChange(cat.name)}
                    className="rounded border-gray-300 text-luxury-gold focus:ring-luxury-gold"
                  />
                  <span className="ml-2 text-sm">{cat.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Subcategories */}
          {subcategories.length > 0 && (
            <div>
              <h4 className="font-medium mb-3">Subcategories</h4>
              <div className="space-y-2">
                {subcategories.map((sub) => (
                  <label key={sub} className="flex items-center">
                    <input
                      type="radio"
                      name="subcategory"
                      checked={filters.subcategories[0] === sub}
                      onChange={() => handleSubcategoryChange(sub)}
                      className="rounded border-gray-300 text-luxury-gold focus:ring-luxury-gold"
                    />
                    <span className="ml-2 text-sm">{sub}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Materials */}
          {materials.length > 0 && (
            <div>
              <h4 className="font-medium mb-3">Materials</h4>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {materials.map((material) => (
                  <label key={material} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.materials.includes(material)}
                      onChange={() => handleMaterialToggle(material)}
                      className="rounded border-gray-300 text-luxury-gold focus:ring-luxury-gold"
                    />
                    <span className="ml-2 text-sm">{material}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Types */}
          {types.length > 0 && (
            <div>
              <h4 className="font-medium mb-3">Types</h4>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {types.map((type) => (
                  <label key={type} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.materials.includes(type)}
                      onChange={() => handleTypeToggle(type)}
                      className="rounded border-gray-300 text-luxury-gold focus:ring-luxury-gold"
                    />
                    <span className="ml-2 text-sm">{type}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Price Range */}
          <div>
            <h4 className="font-medium mb-3">Price Range</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.priceRange?.[0] ?? 0}
                  onChange={(e) =>
                    handlePriceChange(
                      Number(e.target.value),
                      filters.priceRange?.[1] ?? 5000
                    )
                  }
                  className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                />
                <span>-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.priceRange?.[1] ?? 5000}
                  onChange={(e) =>
                    handlePriceChange(
                      filters.priceRange?.[0] ?? 0,
                      Number(e.target.value)
                    )
                  }
                  className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                />
              </div>
              <div className="flex flex-wrap gap-1">
                {[
                  [0, 500],
                  [500, 1000],
                  [1000, 2000],
                  [2000, 5000],
                ].map(([min, max]) => (
                  <Button
                    key={`${min}-${max}`}
                    variant="outline"
                    size="sm"
                    onClick={() => handlePriceChange(min, max)}
                    className="text-xs"
                  >
                    ${min} - ${max}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Colors */}
          <div>
            <h4 className="font-medium mb-3">Colors</h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {colors.map((color) => (
                <label key={color} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.colors.includes(color)}
                    onChange={() => handleColorToggle(color)}
                    className="rounded border-gray-300 text-luxury-gold focus:ring-luxury-gold"
                  />
                  <span className="ml-2 text-sm">{color}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h4 className="font-medium mb-3">Sizes</h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {sizes.map((size) => (
                <label key={size} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.sizes.includes(size)}
                    onChange={() => handleSizeToggle(size)}
                    className="rounded border-gray-300 text-luxury-gold focus:ring-luxury-gold"
                  />
                  <span className="ml-2 text-sm">{size}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Additional Filters */}
          <div>
            <h4 className="font-medium mb-3">Additional Filters</h4>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={!!filters.inStock}
                  onChange={(e) =>
                    onFiltersChange({ ...filters, inStock: e.target.checked })
                  }
                  className="rounded border-gray-300 text-luxury-gold focus:ring-luxury-gold"
                />
                <span className="ml-2 text-sm">In Stock Only</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={!!filters.featured}
                  onChange={(e) =>
                    onFiltersChange({ ...filters, featured: e.target.checked })
                  }
                  className="rounded border-gray-300 text-luxury-gold focus:ring-luxury-gold"
                />
                <span className="ml-2 text-sm">Featured Products</span>
              </label>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ProductFilters;