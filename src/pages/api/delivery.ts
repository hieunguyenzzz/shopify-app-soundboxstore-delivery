// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  rates: any
}


let skus= [
  'SF-1105',
  'SUNDAY-045',
  'SF-1101',
  'SF-1103',
  'SF-1108',
  'SF-1105-1+XS-W03H-Black',
  'SUNDAY-045-1+XS-W03H-Black',
  'SF-1101-1+XS-W03H-Black',
  'SF-1103-1+XS-W03H-Black',
  'SF-1108-1+XS-W03H-Black'
];
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
      if (skus.includes(item.sku)) {
        
        folioDeliveryCostIncludeInstallation += 30000 * item.quantity;
        folioDeliveryCostWithoutInstallation += 6000 * item.quantity;
      }
    }
    res.status(200).json(
      {
        rates: [
          {
            service_name: 'Delivery *Kerbside Only', 
            description: '', 
            service_code: 'delivery_include_installation', 
            currency: 'GBP', 
            'total_price': folioDeliveryCostIncludeInstallation
          },
        ]
      }
    );
  }

  if (['AT', 'FR', 'ES', 'NL', 'IE', 'BE', 'PT', 'FI', 'DE', 'GR', 'LU', 'IT'].includes(destination.country)) {
    for(const item of items) {
      if (skus.includes(item.sku)) {
        // folioDeliveryCostWithoutInstallation += 11923 * item.quantity;
        folioDeliveryCostWithoutInstallation += 34200 * item.quantity;
      }
    }
    res.status(200).json(
      {
        rates: [          
          {
            service_name: 'Delivery *Kerbside Only', 
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
      if (skus.includes(item.sku)) {
        // folioDeliveryCostWithoutInstallation += 11923 * item.quantity;
        folioDeliveryCostWithoutInstallation += 386152 * item.quantity;
      }
    }
    res.status(200).json(
      {
        rates: [          
          {
            service_name: 'Delivery *Kerbside Only', 
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
      if (skus.includes(item.sku)) {
        // folioDeliveryCostWithoutInstallation += 11923 * item.quantity;
        folioDeliveryCostWithoutInstallation += 402786 * item.quantity;
      }
    }
    res.status(200).json(
      {
        rates: [          
          {
            service_name: 'Delivery *Kerbside Only', 
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
      if (skus.includes(item.sku)) {
        // folioDeliveryCostWithoutInstallation += 11923 * item.quantity;
        folioDeliveryCostWithoutInstallation += 33422 * item.quantity;
      }
    }
    res.status(200).json(
      {
        rates: [          
          {
            service_name: 'Delivery *Kerbside Only', 
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
      if (skus.includes(item.sku)) {
        // folioDeliveryCostWithoutInstallation += 11923 * item.quantity;
        folioDeliveryCostWithoutInstallation += 157128 * item.quantity;
      }
    }
    res.status(200).json(
      {
        rates: [          
          {
            service_name: 'Delivery *Kerbside Only', 
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
      if (skus.includes(item.sku)) {
        // folioDeliveryCostWithoutInstallation += 11923 * item.quantity;
        folioDeliveryCostWithoutInstallation += 255101 * item.quantity;
      }
    }
    res.status(200).json(
      {
        rates: [          
          {
            service_name: 'Delivery *Kerbside Only', 
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
