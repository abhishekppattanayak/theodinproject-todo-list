import { format } from "date-fns";
export default function generateKey(text){
  return text+format(new Date(), "yyyyMMddHHmmssSS");
}