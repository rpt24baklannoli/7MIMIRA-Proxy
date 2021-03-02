import http from 'k6/http';

export let options = {
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      rate: 1000,
      timeUnit: '1s',
      duration: '1m',
      preAllocatedVUs: 20,
      maxVUs: 220
    }
  }
};

const url = 'http://localhost:3000/items/11/seller';

export default function () {
  let data = {
    seller_rating: 1,
    total_sales: 100,
    seller_name: 'Grezzzy Reeeeeeeeeed',
    seller_city: 'Dos S antos',
    seller_state: 'Calinunya',
    on_etsy_since: 2020
  };
  http.post(url, data);
}
