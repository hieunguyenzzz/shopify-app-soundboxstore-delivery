// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  rates: any
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('start deliverying logic');
  console.log('body', req.body);
  const {items, locale} = req.body.rate;
  let deliveryCostIncludeInstallation = 0;
  let deliveryCostWithoutInstallation = 0;
  for(const item of items) {
    if (item.sku == 'SF-1105') {
      deliveryCostIncludeInstallation += 30000 * item.quantity;
      deliveryCostWithoutInstallation += 6000 * item.quantity;
    }
  }
  console.log('items', items);
  if (locale == 'en-GB') {
    res.status(200).json(
      {
        rates: [
          {
            service_name: 'Delivery (Include Installation)', 
            description: '', 
            service_code: 'delivery_include_installation', 
            currency: 'GBP', 
            'total_price': deliveryCostIncludeInstallation
          },
          {
            service_name: 'Delivery (Not Include Installation)', 
            description: '', 
            service_code: 'delivery_not_include_installation', 
            currency: 'GBP', 
            'total_price': deliveryCostWithoutInstallation
          },
        ]
      }
    );
  }
  
}
