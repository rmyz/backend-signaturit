import { filterTypes, rulesWithoutValidator, rulesWithValidator } from '../cfg/rules';
import { calculateWithRules } from '.';

const _calculateParty = party => {
  if (party.includes(filterTypes.KING)) {
    return calculateWithRules({ party, rules: rulesWithoutValidator });
  }

  return calculateWithRules({ party, rules: rulesWithValidator });
};

const _getWinner = ({ party1Value, party2Value }) => {
  if (party1Value > party2Value) {
    return 'party1';
  }

  if (party2Value > party1Value) {
    return 'party2';
  }

  return 'tie';
};

const blCalculateContracts = ({ party1, party2 }) => {
  const party1Value = _calculateParty(party1);
  const party2Value = _calculateParty(party2);

  const winner = _getWinner({ party1Value, party2Value });

  return { winner };
};

export default blCalculateContracts;
