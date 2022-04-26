import nc from "next-connect";

export default function handler() {
  return nc({
    onError(err, req, res, next) {
      res.status(405).json({ error: "something happened" });
    },
    onNoMatch(req, res, next) {
      res.status(405).json({ error: `method ${req.method} not ` });
    },
  })
}
