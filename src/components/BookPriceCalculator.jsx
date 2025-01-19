// BookPriceCalculator.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import * as React from "react";

// Card Components
const Card = React.forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded-lg border bg-white shadow-sm ${className}`}
    {...props}
  />
));

Card.displayName = "Card";
Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

const CardHeader = React.forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`flex flex-col space-y-1.5 p-6 ${className}`}
    {...props}
  />
));

CardHeader.displayName = "CardHeader";
CardHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

const CardTitle = React.forwardRef(({ className = "", ...props }, ref) => (
  <h3
    ref={ref}
    className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
    {...props}
  />
));

CardTitle.displayName = "CardTitle";
CardTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

const CardContent = React.forwardRef(({ className = "", ...props }, ref) => (
  <div 
    ref={ref} 
    className={`p-6 pt-0 ${className}`}
    {...props}
  />
));

CardContent.displayName = "CardContent";
CardContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

// Button Component
const Button = React.forwardRef(({ 
  className = "",
  variant = "default",
  ...props
}, ref) => {
  const variants = {
    default: "bg-orange-primary text-white hover:bg-orange-primary/90",
    outline: "border border-gray-200 bg-white hover:bg-gray-100"
  };

  return (
    <button
      ref={ref}
      className={`
        inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium
        transition-colors focus:outline-none focus:ring-2 focus:ring-orange-primary/50
        disabled:pointer-events-none disabled:opacity-50
        ${variants[variant]}
        ${className}
      `}
      {...props}
    />
  );
});

Button.displayName = "Button";
Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "outline"]),
  children: PropTypes.node,
  type: PropTypes.string
};

// Select Component
const Select = ({ label, className = "", ...props }) => (
  <div className="space-y-2">
    {label && <label className="text-sm font-medium">{label}</label>}
    <select
      className={`w-full px-3 py-2 text-sm border rounded-md bg-white ${className}`}
      {...props}
    />
  </div>
);

Select.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  children: PropTypes.node
};

// Input Component
const Input = React.forwardRef(({ className = "", ...props }, ref) => (
  <input
    ref={ref}
    className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm
      bg-white focus:outline-none focus:ring-2 focus:ring-orange-primary/50
      disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
));

Input.displayName = "Input";
Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  placeholder: PropTypes.string
};

// Main Component
const BookPriceCalculator = () => {
  const [formData, setFormData] = useState({
    size: "",
    quality: "",
    frontColor: "",
    backColor: "",
    paperType: "",
    coating: "",
    couponCode: "",
    quantity: "100"
  });

  const [calculatedPrice, setCalculatedPrice] = useState({
    subtotal: 100,
    tax: 0,
    total: 100
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your price calculation logic here
    setCalculatedPrice({
      subtotal: 100,
      tax: 0,
      total: 100
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6 text-orange-primary">
        Book Price Calculator
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Calculate Price Section */}
        <Card className="border-orange-primary/20">
          <CardHeader>
            <CardTitle>Calculate Price</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Select
                label="Size"
                name="size"
                value={formData.size}
                onChange={handleInputChange}
              >
                <option value="">Select Size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </Select>

              <Select
                label="Quality"
                name="quality"
                value={formData.quality}
                onChange={handleInputChange}
              >
                <option value="">Select Quality</option>
                <option value="basic">Basic</option>
                <option value="premium">Premium</option>
                <option value="luxury">Luxury</option>
              </Select>

              <Select
                label="Front Color"
                name="frontColor"
                value={formData.frontColor}
                onChange={handleInputChange}
              >
                <option value="">Front Color</option>
                <option value="black">Black</option>
                <option value="color">Color</option>
              </Select>

              <Select
                label="Back Color"
                name="backColor"
                value={formData.backColor}
                onChange={handleInputChange}
              >
                <option value="">Back Color</option>
                <option value="black">Black</option>
                <option value="color">Color</option>
              </Select>

              <Select
                label="Paper Type"
                name="paperType"
                value={formData.paperType}
                onChange={handleInputChange}
              >
                <option value="">Select Paper Type</option>
                <option value="normal">Normal</option>
                <option value="glossy">Glossy</option>
                <option value="matte">Matte</option>
              </Select>

              <Select
                label="Coating"
                name="coating"
                value={formData.coating}
                onChange={handleInputChange}
              >
                <option value="">Select Coating</option>
                <option value="none">None</option>
                <option value="matte">Matte</option>
                <option value="glossy">Glossy</option>
              </Select>

              <div className="space-y-2">
                <label className="text-sm font-medium">Coupon Code</label>
                <Input
                  type="text"
                  name="couponCode"
                  value={formData.couponCode}
                  onChange={handleInputChange}
                  placeholder="Please enter Coupon Code"
                />
              </div>

              <Button type="submit">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Order Summary Section */}
        <Card className="border-orange-primary/20">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Product:</span>
                <div className="flex gap-4">
                  <span>Book</span>
                  <span className="text-orange-primary">US $100</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-medium">Quantity:</span>
                <Select
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  className="w-32"
                >
                  <option value="100">100</option>
                  <option value="200">200</option>
                  <option value="500">500</option>
                </Select>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-medium">Dimension:</span>
                <span className="text-gray-600">-</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-medium">Paper:</span>
                <span className="text-gray-600">
                  {formData.paperType || "Select Paper Type"}
                </span>
              </div>

              <div className="flex gap-2">
                <Button variant="outline">Edit</Button>
                <Button variant="outline">Delete</Button>
              </div>

              <div className="border-t border-orange-primary/20 pt-4 mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Subtotal</span>
                  <span>₹{calculatedPrice.subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">*Tax</span>
                  <span>₹{calculatedPrice.tax}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Total</span>
                  <span>₹{calculatedPrice.total}</span>
                </div>
              </div>

              <div className="bg-orange-primary/5 p-4 rounded-md">
                <div className="flex justify-between">
                  <span className="font-bold text-orange-primary">
                    Instant Price
                  </span>
                  <span className="font-bold text-orange-primary">
                    US ₹{calculatedPrice.total}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BookPriceCalculator;