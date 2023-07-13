export async function GET(request) {
  const users = [
    { id: 1, name: 'chiranjeev' },
    { id: 2, name: 'zero' },
  ];

  return new Response(JSON.stringify(users));
}
