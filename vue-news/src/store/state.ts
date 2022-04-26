import { NewsItem } from '@/api';

const state = {
  news: [] as NewsItem[]
};

type RootState = typeof state;
export { state, RootState };
