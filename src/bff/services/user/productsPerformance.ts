import { getUser } from '@/bff/integrations/user/getUsers';

export async function listUsers() {
  const response = await getUser();
  console.log('response: ', response);

  // const performanceData = {
  //   toSale: 0,
  //   withoutStock: 0,
  //   inactiveProducts: 0,
  // };

  // function dataConstructor(obj: ObjPerformanceType) {
  //   switch (obj.id) {
  //     case 'ACTIVE_SUPPLIER_PRODUCT':
  //       performanceData.toSale = obj.total;
  //       break;
  //     case 'INACTIVE_PRODUCT':
  //       performanceData.inactiveProducts = obj.total;
  //       break;
  //     case 'ACTIVE_SUPPLIER_PRODUCT_OUT_OF_STOCK':
  //       performanceData.withoutStock = obj.total;
  //       break;
  //     default:
  //       break;
  //   }
  // }

  // response.status.forEach((obj) => dataConstructor(obj));

  return response;
}
