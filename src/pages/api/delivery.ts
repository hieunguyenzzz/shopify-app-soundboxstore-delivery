// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  rates: any
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.body);
  res.status(200).json(
    {
      rates: {
        service_name: 'Free Shipping', 
        description: 'Not Include Installation', 
        service_code: 'free_delivery', 
        currency: 'GBP', 
        'total_price': 0 
      }
    }
  );
}
