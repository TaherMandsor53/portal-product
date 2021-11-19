import React, { useEffect, useState } from 'react';
import TableComp from '../../common-components/TableComp';
import { getProductDetails } from '../../action/action';
import { useSelector, useDispatch } from 'react-redux';
import InputComp from '../../common-components/InputComp';
import ExcelDownload from '../../common-components/ExcelDownload';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails());
  }, []);

  const productData = useSelector(state => state.productDetails?.productDetailsData?.productData);
  const tableCols = [
    {
      label: 'Product Name',
      value: 'name',
    },
    {
      label: 'Price',
      value: 'price',
    },
    {
      label: 'Quantity',
      value: 'quantity',
    },
    {
      label: 'Total Amount',
      value: 'amount',
    },
  ];

  const [productDetails, setProductDetails] = useState({
    productName: '',
    price: '',
    quantity: '',
    totalAmt: '',
  });

  const [productDetailsError, setProductDetailsError] = useState({
    productNameError: '',
    priceError: '',
    quantityError: '',
    totalAmt: '',
  });

  const onProductDetailChange = event => {
    const { name, value } = event.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const onCancelClick = () => {
    setProductDetails({
      productName: '',
      price: '',
      quantity: '',
      totalAmt: '',
    });
    setProductDetailsError({
      productNameError: '',
      priceError: '',
      quantityError: '',
      totalAmt: '',
    });
  };

  const onItemSubmit = () => {
    const isValidProductName = productDetails.productName.length > 0;
    const isValidPrice = productDetails.price > 0;
    const isValidQuantity = productDetails.quantity > 0;

    if (isValidProductName && isValidPrice && isValidQuantity) {
      alert('Product data inserted');
      onCancelClick();
    } else {
      setProductDetailsError(prevState => ({
        ...prevState,
        productNameError: !isValidProductName ? 'Please enter valid product details' : '',
        priceError: !isValidPrice ? 'Please enter valid product price' : '',
        quantityError: !isValidQuantity ? 'Please enter valid product quantity' : '',
      }));
    }
  };

  const totalAmountVal = parseInt(productDetails.price) * parseInt(productDetails.quantity);

  return (
    <>
      <div className="product-details">
        <div className="product-form">
          <InputComp
            placeholderText="Product Name"
            inputType="text"
            inputTxt="productName"
            onInputChange={onProductDetailChange}
            errorMsg={productDetailsError.productNameError}
            inputVal={productDetails.productName}
          />
          <InputComp
            placeholderText="Price"
            inputType="text"
            inputTxt="price"
            onInputChange={onProductDetailChange}
            errorMsg={productDetailsError.priceError}
            inputVal={productDetails.price}
          />
          <InputComp
            placeholderText="Quantity"
            inputType="text"
            inputTxt="quantity"
            onInputChange={onProductDetailChange}
            errorMsg={productDetailsError.quantityError}
            inputVal={productDetails.quantity}
          />
          <InputComp
            placeholderText="Total Amount"
            inputType="text"
            inputTxt="totalAmt"
            onInputChange={onProductDetailChange}
            isReadOnly
            inputVal={isNaN(totalAmountVal) ? '0' : totalAmountVal}
          />
          <div className="product-button">
            <button className="login-btn" onClick={onItemSubmit}>
              Submit
            </button>
            <button className="cancel-btn" onClick={onCancelClick}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      <ExcelDownload data={productData} columnHeaders={tableCols} />
      <div className="table-container">
        {productData && productData.length > 0 && <TableComp tableCols={tableCols} tableData={productData} />}
      </div>
    </>
  );
}
