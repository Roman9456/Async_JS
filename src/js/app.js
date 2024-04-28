// TODO: write your code here
import sum from './basic';
import GameSavingLoader from './GameSavingLoader';

console.log('worked');

console.log(sum([1, 2])); 



(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log(saving); 
  } catch (error) {
    console.error(error); 
  }
})();