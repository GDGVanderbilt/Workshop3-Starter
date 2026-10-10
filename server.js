export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/messages" && request.method === "GET") {
      const { results } = await env.DB
        .prepare("SELECT * FROM messages ORDER BY created_at DESC")
        .all();

      return Response.json(results);
    }

    if (url.pathname === "/api/messages" && request.method === "POST") {
      // TODO
    }


    return env.ASSETS.fetch(request);
  }
};
