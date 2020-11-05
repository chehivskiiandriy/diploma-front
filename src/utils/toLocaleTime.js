const defaultOptions = {
  month: 'short',
  day: '2-digit',
  year: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
};

const toLocaleTime = (date, options = defaultOptions) => (
  new Date(date).toLocaleString('uk-UA', options)
);

export default toLocaleTime;
