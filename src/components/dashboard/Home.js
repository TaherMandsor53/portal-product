import React, { useEffect } from 'react';
import TableComp from '../../common-components/TableComp';
import { getProductDetails } from '../../action/action';
import { useSelector, useDispatch } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails());
  }, []);

  return <div className="home-details"></div>;
}
