export function useFormstackApi(version = "v2") {
  const client = $fetch.create({
    baseURL: `https://www.formstack.com/api/${version}`,
    headers: {
      accept: "application/json",
      authorization: `Bearer ${process.env.FORMSTACK_API_TOKEN}`,
    },
  });

  return { client };
}
