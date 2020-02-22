import { genericHandler } from '../../infra/handlers';
import { blCalculateContracts } from '../services';

const calculateContracts = async (req, res, next) => {
  const { party1, party2 } = req.body;

  genericHandler({ blFunction: blCalculateContracts, req, res, next })({ party1, party2 });
};

export default calculateContracts;
