/**
 * from ISO8601 to day/month/year
 * helpers/convertDateTime
 */
export default iso8701 => {
  const d = new Date(iso8701)
  const dtf = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  })
  const [
    { value: month },
    ,
    { value: day },
    ,
    { value: year },
  ] = dtf.formatToParts(d)

  return { day, month, year }
}
