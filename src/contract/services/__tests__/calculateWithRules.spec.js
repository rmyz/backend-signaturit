import calculateWithRules from '../calculateWithRules';
import { rulesWithValidator, rulesWithoutValidator } from '../../cfg/rules';

describe('contract/services/calculateWithRules', () => {
  it('should do nothing if invoke without any params', () => {
    const result = calculateWithRules({});

    expect(result).toBe(0);
  });

  it('should return 3 if there is V and N', () => {
    const result = calculateWithRules({ party: 'NV', rules: rulesWithValidator });

    expect(result).toBe(3);
  });

  it('should return 7 if there is K and N', () => {
    const result = calculateWithRules({ party: 'KN', rules: rulesWithoutValidator });

    expect(result).toBe(7);
  });

  it('should return 7 if there is K, N and V, V is ignored', () => {
    const result = calculateWithRules({ party: 'KNV', rules: rulesWithoutValidator });

    expect(result).toBe(7);
  });
});
