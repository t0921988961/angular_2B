export interface NewsListObject {
  page: number;
  totalPage: number;
  newsList: NewsList[];
}

export interface NewsList {
  title: string;
  author_name: string;
  online_date: string;
  offline_date: string;
  category: number;
  region: number;
  saved_date: string;
  content: string;
  transmit_url: string;
  second_title: string;
  views: number;
  source: string;
  source_address: string;
  news_category: string;
  pcbanner_image: string;
  mobilebanner_image: string;
  id: number;
}

