export const generarId = () => {
  const random = Math.random().toString(36).substring(2);
  const date = Date.now().toString(36);
  return random + date;
};
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export const formatDate = (date) => {
  const fecha = new Date(date);
  const config = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  };
  return fecha.toLocaleDateString('es', config);
};

export const formatToMoney = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
  }).format(number);
};
