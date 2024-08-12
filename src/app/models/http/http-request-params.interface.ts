/**
 * @name HttpRequestParamsInterface
 * @description
 * HttpClient requests parameters for get/post/put etc operations
 */
export interface HttpRequestParamsInterface<> {
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any;
  responseType?: string;
}
