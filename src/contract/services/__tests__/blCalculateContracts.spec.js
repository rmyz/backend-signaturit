import blCalculateContracts from '../blCalculateContracts';

describe('contract/services/blCalculateContracts', () => {
  it('should win party1', () => {
    const party1 = 'KNN';
    const party2 = 'KNV';

    const result = blCalculateContracts({ party1, party2 });

    expect(result).toEqual({ winner: 'party1' });
  });

  it('should win party2', () => {
    const party1 = 'NV';
    const party2 = 'KNNV';

    const result = blCalculateContracts({ party1, party2 });

    expect(result).toEqual({ winner: 'party2' });
  });

  it('should tie', () => {
    const party1 = 'K';
    const party2 = 'K';

    const result = blCalculateContracts({ party1, party2 });

    expect(result).toEqual({ winner: 'tie' });
  });
});
