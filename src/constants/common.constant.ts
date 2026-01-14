import type { ParamsInterface } from '@/models/common/common.model';

const perpageOptions = [10, 20, 50, 100];

const SORT_KEY = 'sort';
const ORDER_KEY = 'order';
const PAGE_KEY = 'page';
const FILTER_KEY = 'filter';
const PER_PAGE = 'limit';
const TABLE_TYPE_KEY = 'table-type';

const DEFAULT_PAGE = 1;
const DEFAULT_PER_PAGE = perpageOptions[1];

const defaultParamsTable: ParamsInterface = {
  page: DEFAULT_PAGE,
  limit: DEFAULT_PER_PAGE,
  total: 0,
};

export {
  SORT_KEY,
  ORDER_KEY,
  PAGE_KEY,
  FILTER_KEY,
  PER_PAGE,
  TABLE_TYPE_KEY,
  perpageOptions,
  defaultParamsTable,
  DEFAULT_PAGE,
  DEFAULT_PER_PAGE,
};
