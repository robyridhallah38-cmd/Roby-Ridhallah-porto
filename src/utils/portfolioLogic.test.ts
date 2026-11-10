import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateDepth,
  filterPortfolioItems,
  calculateCookstaStats,
  calculateUpgradeProgress,
  PortfolioItem,
} from './portfolioLogic';

test('calculateDepth returns surface defaults when maxScrollY is 0', () => {
  const result = calculateDepth(100, 0);
  assert.equal(result.depthMeters, 0);
  assert.equal(result.warning, false);
  assert.equal(result.oxygenPercent, 100);
});

test('calculateDepth calculates correct depth meters and zones', () => {
  // At 50% scroll
  const mid = calculateDepth(500, 1000);
  assert.equal(mid.depthMeters, 175);
  assert.equal(mid.zoneName, 'Deep Ocean Trench (130-250m)');
  assert.equal(mid.warning, false);

  // At 100% scroll (abyss)
  const deep = calculateDepth(1000, 1000);
  assert.equal(deep.depthMeters, 350);
  assert.equal(deep.zoneName, 'Abyssal Blue Hole (250m+)');
  assert.equal(deep.warning, true);
});

test('filterPortfolioItems filters correctly by category and query', () => {
  const mockItems: PortfolioItem[] = [
    {
      id: '1',
      title: 'Wino 3D Sculpt',
      category: '3d',
      subcategory: 'Character Sculpt',
      image: '/assets/aistudio/Cuplikan_layar_2026-08-19_185710_562f1186.png',
      description: 'Sculpting karakter di Blender',
      tools: ['Blender 5.1.1'],
      date: '2026',
    },
    {
      id: '2',
      title: 'Bancho Sushi Menu Branding',
      category: 'graphic',
      subcategory: 'Logo & Identity',
      image: '/assets/sample.png',
      description: 'Desain logo dan banner restoran',
      tools: ['Adobe Illustrator'],
      date: '2026',
    },
    {
      id: '3',
      title: 'Blue Hole Sunset Photography',
      category: 'photo',
      subcategory: 'Konseptual',
      image: '/assets/sample2.png',
      description: 'Fotografi konseptual pesisir',
      tools: ['Camera'],
      date: '2026',
    },
  ];

  // All category
  assert.equal(filterPortfolioItems(mockItems, 'all').length, 3);

  // 3D category
  const filtered3d = filterPortfolioItems(mockItems, '3d');
  assert.equal(filtered3d.length, 1);
  assert.equal(filtered3d[0].id, '1');

  // Search query 'Blender'
  const searched = filterPortfolioItems(mockItems, 'all', 'blender');
  assert.equal(searched.length, 1);
  assert.equal(searched[0].id, '1');

  // Search query 'Sushi'
  const searchSushi = filterPortfolioItems(mockItems, 'all', 'sushi');
  assert.equal(searchSushi.length, 1);
  assert.equal(searchSushi[0].id, '2');
});

test('calculateCookstaStats computes total likes and rank title properly', () => {
  const posts = [{ likes: 120 }, { likes: 350 }, { likes: 600 }];
  const stats = calculateCookstaStats(posts);
  assert.equal(stats.totalLikes, 1070);
  assert.equal(stats.flameRating, 5);
  assert.equal(stats.rankTitle, 'Diamond Cooksta Celebrity');
});

test('calculateUpgradeProgress calculates bounded percentages', () => {
  assert.equal(calculateUpgradeProgress(3, 5), 60);
  assert.equal(calculateUpgradeProgress(5, 5), 100);
  assert.equal(calculateUpgradeProgress(6, 5), 100);
  assert.equal(calculateUpgradeProgress(0, 5), 0);
});
