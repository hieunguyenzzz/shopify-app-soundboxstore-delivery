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
  const {items, locale, currency, destination} = req.body.rate;

  let folioDeliveryCostIncludeInstallation = 0;
  let folioDeliveryCostWithoutInstallation = 0;
  
  console.log('items', items);
  if (destination.country == 'GB') {
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

  if (['AT', 'FR', 'ES', 'NL', 'IE', 'BE', 'PT', 'FI', 'DE', 'GR', 'LU'].includes(destination.country)) {
    for(const item of items) {
      if (item.sku == 'SF-1105') {
        // folioDeliveryCostWithoutInstallation += 11923 * item.quantity;
        folioDeliveryCostWithoutInstallation += 14100 * item.quantity;
      }
    }
    res.status(200).json(
      {
        rates: [          
          {
            service_name: 'Delivery (Not Including Installation)', 
            description: '', 
            service_code: 'delivery_not_include_installation', 
            currency: 'EUR', 
            'total_price': folioDeliveryCostWithoutInstallation
          },
        ]
      }
    );
  }

  if (destination.country == 'SE') {
    for(const item of items) {
      if (item.sku == 'SF-1105') {
        // folioDeliveryCostWithoutInstallation += 11923 * item.quantity;
        folioDeliveryCostWithoutInstallation += 154600 * item.quantity;
      }
    }
    res.status(200).json(
      {
        rates: [          
          {
            service_name: 'Delivery (Not Including Installation)', 
            description: '', 
            service_code: 'delivery_not_include_installation', 
            currency: 'SEK', 
            'total_price': folioDeliveryCostWithoutInstallation
          },
        ]
      }
    );
  }

  if (destination.country == 'NO') {
    for(const item of items) {
      if (item.sku == 'SF-1105') {
        // folioDeliveryCostWithoutInstallation += 11923 * item.quantity;
        folioDeliveryCostWithoutInstallation += 147400 * item.quantity;
      }
    }
    res.status(200).json(
      {
        rates: [          
          {
            service_name: 'Delivery (Not Including Installation)', 
            description: '', 
            service_code: 'delivery_not_include_installation', 
            currency: 'NOK', 
            'total_price': folioDeliveryCostWithoutInstallation
          },
        ]
      }
    );
  }
  if (destination.country == 'CH') {
    for(const item of items) {
      if (item.sku == 'SF-1105') {
        // folioDeliveryCostWithoutInstallation += 11923 * item.quantity;
        folioDeliveryCostWithoutInstallation += 13900 * item.quantity;
      }
    }
    res.status(200).json(
      {
        rates: [          
          {
            service_name: 'Delivery (Not Including Installation)', 
            description: '', 
            service_code: 'delivery_not_include_installation', 
            currency: 'CHF', 
            'total_price': folioDeliveryCostWithoutInstallation
          },
        ]
      }
    );
  }

  if (destination.country == 'PL') {
    for(const item of items) {
      if (item.sku == 'SF-1105') {
        // folioDeliveryCostWithoutInstallation += 11923 * item.quantity;
        folioDeliveryCostWithoutInstallation += 64800 * item.quantity;
      }
    }
    res.status(200).json(
      {
        rates: [          
          {
            service_name: 'Delivery (Not Including Installation)', 
            description: '', 
            service_code: 'delivery_not_include_installation', 
            currency: 'ZL', 
            'total_price': folioDeliveryCostWithoutInstallation
          },
        ]
      }
    );
  }

  if (destination.country == 'DK') {
    for(const item of items) {
      if (item.sku == 'SF-1105') {
        // folioDeliveryCostWithoutInstallation += 11923 * item.quantity;
        folioDeliveryCostWithoutInstallation += 104600 * item.quantity;
      }
    }
    res.status(200).json(
      {
        rates: [          
          {
            service_name: 'Delivery (Not Including Installation)', 
            description: '', 
            service_code: 'delivery_not_include_installation', 
            currency: 'DKK', 
            'total_price': folioDeliveryCostWithoutInstallation
          },
        ]
      }
    );
  }
  
}
