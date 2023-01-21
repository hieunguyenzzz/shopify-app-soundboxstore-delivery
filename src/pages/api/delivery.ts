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
  console.log('body.rate', req.body.rate);
  const {items, locale, currency} = req.body.rate;
  let folioDeliveryCostIncludeInstallation = 0;
  let folioDeliveryCostWithoutInstallation = 0;
  
  console.log('items', items);
  if (locale == 'en-GB') {
    for(const item of items) {
      if (item.sku == 'SF-1105') {
        folioDeliveryCostIncludeInstallation += 30000 * item.quantity;
        folioDeliveryCostWithoutInstallation += 6000 * item.quantity;
      }
    }
    res.status(200).json(
      {
        rates: [
          {
            service_name: 'Delivery (Include Installation)', 
            description: '', 
            service_code: 'delivery_include_installation', 
            currency: 'GBP', 
            'total_price': folioDeliveryCostIncludeInstallation
          },
          {
            service_name: 'Delivery (Not Include Installation)', 
            description: '', 
            service_code: 'delivery_not_include_installation', 
            currency: 'GBP', 
            'total_price': folioDeliveryCostWithoutInstallation
          },
        ]
      }
    );
  }
  
}
