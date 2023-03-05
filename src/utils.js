import moment from "moment";
import { decode } from "html-entities";
export const getDate = (date) => moment(date).format("DD MMM YYYY");
export const getDecodedStr = (str) => decode(str).replace(/(<([^>]+)>)/gi, ""); // to remove <p> that is a part of the excerpt data
