const currencyUnit = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
  }

  function checkCashRegister(price, cash, cid) {

    let vuelto = (cash - price)*100;
    let vueltoACheck = vuelto;
    let change = [];
    let status = '';
  
    let cidSum = 0;
    let cidFiltrado = cid.filter(elem => elem[1] !== 0).reverse();
  
    cidFiltrado.forEach(elem => {
      let contElem = elem[0];
      let sumaElem = elem[1] * 100;
      cidSum += sumaElem;
      let monto = 0;
      while (vuelto >= currencyUnit[contElem] && sumaElem > 0) {
        monto += currencyUnit[contElem];
        vuelto -= currencyUnit[contElem];
        sumaElem -= currencyUnit[contElem];
      }
      if (monto !== 0) {
        change.push([contElem, monto / 100]);
      }
    });
  
    if (vuelto > 0) {
      status = 'INSUFFICIENT_FUNDS';
      change = [];
    } else if (vuelto == 0 && vueltoACheck == cidSum) {
      status = 'CLOSED';
      change = cid;
    } else {
      status = 'OPEN';
    }
    return { 'status': status, 'change': change };
  }