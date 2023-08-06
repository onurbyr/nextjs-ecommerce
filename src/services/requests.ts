const API_URL = "https://fakestoreapi.com";

const request = async (
  endpoint: string,
  params = {},
  method: "GET" | "POST"
) => {
  let url = `${API_URL}/${endpoint}`;
  let options: { method: "GET" | "POST"; body?: string } = {
    method,
  };
  if (method === "GET") {
    url += "?" + new URLSearchParams(params).toString();
  } else {
    options.body = JSON.stringify(params);
  }

  try {
    const response = await fetch(url, options).then((response) =>
      response.json()
    );
    return response;
  } catch (error: any) {
    console.warn(error.message);
  }
};

export const get = (endpoint: string, params?: object) =>
  request(endpoint, params, "GET");
export const post = (endpoint: string, params?: object) =>
  request(endpoint, params, "POST");
