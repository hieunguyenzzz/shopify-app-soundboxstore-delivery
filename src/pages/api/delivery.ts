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
  console.log('items', items);
  if (locale == 'en-GB') {
    res.status(200).json(
      {
        rates: {
          service_name: 'Delivery', 
          description: 'Include Installation', 
          service_code: 'delivery_include_installation', 
          currency: 'GBP', 
          'total_price': 30000
        }
      }
    );
  }
  
}
