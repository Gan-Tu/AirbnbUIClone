import { getLiveAnywhereData } from "../../utils/fakeData";

export default function handler(req, res) {
  res.status(200).json(getLiveAnywhereData());
}
