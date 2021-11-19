import React, { useEffect, useState } from 'react';
import TableComp from '../../common-components/TableComp';
import { getProductDetails } from '../../action/action';
import { useSelector, useDispatch } from 'react-redux';
import InputComp from '../../common-components/InputComp';
import ExcelDownload from '../../common-components/ExcelDownload';
import searchIcon from '../../assets/search-icon.svg';
import clearIcon from '../../assets/closeIcon.svg';

export default function Home() {
  const dispatch = useDispatch();
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
  const [searchVal, setSearchVal] = useState('');

  useEffect(() => {
    dispatch(getProductDetails());
  }, []);

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
  const productData = useSelector(state => state.productDetails?.productDetailsData?.productData);
  const [tableData, setTableData] = useState('');

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

  const filterColumns = ['name', 'price'];

  const onSearchChange = val => {
    const lowercasedValue = val.toLowerCase().trim();
    setSearchVal(lowercasedValue);
    if (lowercasedValue === '') {
      setTableData(productData);
    } else {
      const filteredData =
        productData &&
        productData.filter(item => {
          return Object.keys(item).some(key =>
            filterColumns.includes(key) ? item[key].toString().toLowerCase().includes(lowercasedValue) : false,
          );
        });
      setTableData(filteredData);
    }
  };

  const onSearchTextClear = () => {
    setSearchVal('');
    setTableData(productData);
  };
  const totalAmountVal = parseInt(productDetails.price) * parseInt(productDetails.quantity);

  return (
    <>
      <div className="product-details">
        <div className="login-header">Product Details</div>
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
      <div className="search-download">
        <div className="order-search-input">
          <img src={searchIcon} alt="search-icon" className="order-search-icon" />
          <input
            className="order-search"
            placeholder="Product name and price"
            onChange={event => onSearchChange(event.target.value)}
            value={searchVal}
          />
          {searchVal && (
            <img src={clearIcon} alt="clear-icon" onClick={onSearchTextClear} className="order-search-clear" />
          )}
        </div>
        {productData && productData.length > 0 && (
          <ExcelDownload data={tableData || productData} columnHeaders={tableCols} />
        )}
      </div>

      <div className="table-container">
        {productData && productData.length > 0 && (
          <TableComp tableCols={tableCols} tableData={tableData || productData} />
        )}
      </div>
    </>
  );
}
