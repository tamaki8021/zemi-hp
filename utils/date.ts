export const formatDate = (createdAt: string) => {
  const d = new Date(createdAt);
  const year = d.getFullYear().toString();
  const month = (d.getMonth()+1).toString();
  const date = d.getDate().toString();

  // return `${year}-${month}-${date}`;
  return `${year}-${month}`;
};
