import Test from 'ava';
import Db from '../src/db';


Test('Cards are exported', t => t.truthy(Db.Cards));


Test(`Get the authors`, t => {

  const artists = [...new Set(Db.Cards.map(c => c.artist).filter(Boolean))];
  console.log(artists);

  console.log(Db.Cards);

  console.log([...new Set(Db.Cards.map(c => c.playerClass).filter(Boolean))]);
});
