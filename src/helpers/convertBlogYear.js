import moment from "moment"
import convertDateTime from "./convertDateTime"
import { calcBlogYear } from "../components/header/timer/useTimer"

/**
 * from ISO8601 to blog year
 * helpers/convertBlogYear
 */
export default iso8701 => {
  const { day, month, year } = convertDateTime(iso8701)

  return calcBlogYear(
    moment(`${day}-${month}-${year}`, "DD-MMM-YYYY").diff(
      moment("01-05-2017", "DD-MM-YYYY"),
      "seconds"
    )
  )
}
