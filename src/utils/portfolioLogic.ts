/**
 * Logika utilitas untuk Portofolio Dave the Diver
 * Menangani kalkulasi kedalaman (depth), ranking Cooksta, gear stats, dan filter.
 */

export interface PortfolioItem {
  id: string;
  title: string;
  category: '3d' | 'graphic' | 'photo';
  subcategory: string;
  image: string;
  description: string;
  tools: string[];
  date: string;
  featured?: boolean;
  likes?: number;
  comments?: Array<{ author: string; role: string; avatar: string; text: string }>;
  tags?: string[];
  depthLevel?: number; // Kedalaman meter tempat item ditemukan
}

export interface DepthInfo {
  depthMeters: number;
  zoneName: string;
  zoneColor: string;
  oxygenPercent: number;
  warning: boolean;
}

/**
 * Menghitung kedalaman laut (dalam meter) berdasarkan posisi scroll halaman.
 */
export function calculateDepth(scrollY: number, maxScrollY: number): DepthInfo {
  if (maxScrollY <= 0) {
    return {
      depthMeters: 0,
      zoneName: 'Shallow Waters (Surface Reef)',
      zoneColor: '#00e5ff',
      oxygenPercent: 100,
      warning: false,
    };
  }

  const ratio = Math.min(Math.max(scrollY / maxScrollY, 0), 1);
  // Kedalaman maksimum 350 meter (Blue Hole Depths)
  const depthMeters = Math.round(ratio * 350);

  let zoneName = 'Shallow Waters (Surface Reef)';
  let zoneColor = '#00e5ff';
  let warning = false;

  if (depthMeters <= 50) {
    zoneName = 'Shallow Waters (0-50m)';
    zoneColor = '#00e5ff';
  } else if (depthMeters <= 130) {
    zoneName = 'Medium Depth (50-130m)';
    zoneColor = '#38bdf8';
  } else if (depthMeters <= 250) {
    zoneName = 'Deep Ocean Trench (130-250m)';
    zoneColor = '#818cf8';
  } else {
    zoneName = 'Abyssal Blue Hole (250m+)';
    zoneColor = '#c084fc';
    warning = true;
  }

  // Oksigen sedikit berkurang secara realistis saat menyelam dalam
  const oxygenPercent = Math.max(100 - Math.round(ratio * 40), 20);

  return {
    depthMeters,
    zoneName,
    zoneColor,
    oxygenPercent,
    warning,
  };
}

/**
 * Memfilter daftar karya berdasarkan kategori tab dan kata kunci pencarian.
 */
export function filterPortfolioItems(
  items: PortfolioItem[],
  category: 'all' | '3d' | 'graphic' | 'photo',
  searchQuery: string = ''
): PortfolioItem[] {
  const query = searchQuery.trim().toLowerCase();

  return items.filter((item) => {
    const matchesCategory = category === 'all' || item.category === category;
    if (!matchesCategory) return false;

    if (!query) return true;

    const matchesTitle = item.title.toLowerCase().includes(query);
    const matchesDesc = item.description.toLowerCase().includes(query);
    const matchesTools = item.tools.some((t) => t.toLowerCase().includes(query));
    const matchesSub = item.subcategory.toLowerCase().includes(query);

    return matchesTitle || matchesDesc || matchesTools || matchesSub;
  });
}

/**
 * Menghitung rating Cooksta (Flame tier & total likes)
 */
export function calculateCookstaStats(posts: Array<{ likes?: number }>) {
  const totalLikes = posts.reduce((sum, p) => sum + (p.likes || 0), 0);
  let flameRating = 1;
  let rankTitle = 'Bronze Diver';

  if (totalLikes >= 1000) {
    flameRating = 5;
    rankTitle = 'Diamond Cooksta Celebrity';
  } else if (totalLikes >= 500) {
    flameRating = 4;
    rankTitle = 'Platinum Gourmet Diver';
  } else if (totalLikes >= 250) {
    flameRating = 3;
    rankTitle = 'Gold Taste Explorer';
  } else if (totalLikes >= 100) {
    flameRating = 2;
    rankTitle = 'Silver Sous Diver';
  }

  return {
    totalLikes,
    flameRating,
    rankTitle,
  };
}

/**
 * Menghitung persentase upgrade gear
 */
export function calculateUpgradeProgress(level: number, maxLevel: number = 5): number {
  if (maxLevel <= 0) return 0;
  return Math.min(Math.round((level / maxLevel) * 100), 100);
}
