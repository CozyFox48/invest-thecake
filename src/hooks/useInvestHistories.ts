import { Contract } from '@ethersproject/contracts';
import { useCall } from '@usedapp/core';
import contractAbi from '../abi/DesupTokenVesting.json';
import { VESTING_CONTRACT_ADDRESS } from '../config/contract';

const useInvestHistories = (address: string | undefined) => {
  if (address === undefined) return [];

  const { value, error } =
    useCall({
      contract: new Contract(VESTING_CONTRACT_ADDRESS, contractAbi.abi),
      method: 'getInvestorHistory',
      args: [address],
    }) || {};

  if (error) {
    console.error('eeeerrrrr', error.message);
    return undefined;
  }
  return value?.[0];
};

export default useInvestHistories;
