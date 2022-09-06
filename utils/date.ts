export const formatDate = (createdAt: string) => {
  const d = new Date(createdAt);
  const year = d.getFullYear().toString();
  const month = d.getMonth().toString();
  const date = d.getDate().toString();

  return `${year}-${month}-${date}`;
};
