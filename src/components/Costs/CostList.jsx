import React from 'react';
import CostItem from './CostItem';
import './CostList.css';

const CostList = (props) => {
  let costsContent = <h2 className="cost-list__fallback"> В этом году не расходов</h2>;
  if (props.costs.length > 0) {
    costsContent = props.costs.map((cost) => (
      <CostItem key={cost.id} date={cost.date} description={cost.description} amount={cost.amount}></CostItem>
    ));
  }
  return <ul className="cost-list">{costsContent}</ul>;
};

export default CostList;
