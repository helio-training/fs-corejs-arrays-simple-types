import Test from 'ava';
import * as Assignemnt from '../src';

Test('Cards are exposed', t => t.truthy(Assignemnt.cards));

Test('Legendary Cards are properly filtered', t => t.is(Assignemnt.cards.rarity.legendary.length, 265));

Test('Epic Cards are properly filtered', t => t.is(Assignemnt.cards.rarity.epic.length, 165));

Test('Rare Cards are properly filtered', t => t.is(Assignemnt.cards.rarity.rare.length, 275));

Test('Free Cards are properly filtered', t => t.is(Assignemnt.cards.rarity.free.length, 100));

Test('Common Cards are properly filtered', t => t.is(Assignemnt.cards.rarity.common.length, 594));

Test('Total is calculated correctly', t => t.is(Assignemnt.cards.total, 1399));


