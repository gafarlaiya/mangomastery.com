// Old domain mangomastery.com (and www) now lives at mangofarming.in: 301 with the same path and query.
const OLD = new Set(["mangomastery.com", "www.mangomastery.com", "www.mangofarming.in"]);
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (OLD.has(url.hostname)) {
    return Response.redirect("https://mangofarming.in" + url.pathname + url.search, 301);
  }
  return context.next();
}
