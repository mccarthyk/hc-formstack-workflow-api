export default defineEventHandler(async (event) => {
  const { submission_id, field_id } = getQuery(event);

  const { client } = useFormstackApi();

  const { data } = await client<FormstackSubmission>(
    `/submission/${submission_id}.json`
  );

  const url = data.find(({ field }) => field === field_id)?.value;

  if (!url)
    throw createError({
      statusCode: 404,
      statusMessage: "Field value not found",
    });

  return url;
});
