export const getCaptionName = (firstName, lastName) => {
  const firstLatter = firstName?.split(' ').join(' ').charAt(0).toUpperCase();
  const lastLatter = lastName?.split(' ').join(' ').charAt(0).toUpperCase();
  return `${firstLatter}${lastLatter}`
}