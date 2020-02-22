const calculateWithRules = ({ party = '', rules = {} }) => {
  const partySplitted = party.split('');
  const value = partySplitted.reduce((acc, currentLetter) => {
    const newValue = rules[currentLetter] || 0;

    return acc + newValue;
  }, 0);

  return value;
};

export default calculateWithRules;
